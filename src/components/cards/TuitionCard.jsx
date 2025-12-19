import React, { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import EmptyState from "../shared/EmptyState";
import { MdLocalPostOffice } from "react-icons/md";
import { Link } from "react-router";

// Filter bar component
const TuitionFilterBar = ({ filters, setFilters }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col md:flex-row gap-4 mb-6">

      <input
        type="text"
        placeholder="Search by subject"
        value={filters.subject}
        onChange={(e) => setFilters({ ...filters, subject: e.target.value })}
        className="input input-bordered w-full"
      />

      <input
        type="text"
        placeholder="Search by location"
        value={filters.location}
        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        className="input input-bordered w-full"
      />

      <select
        value={filters.sort}
        onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
        className="select select-bordered w-full md:w-60"
      >
        <option value="">Sort By</option>
        <option value="budget_asc">Budget: Low → High</option>
        <option value="budget_desc">Budget: High → Low</option>
        <option value="date_desc">Newest First</option>
        <option value="date_asc">Oldest First</option>
      </select>

      <select
        value={filters.status}
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        className="select select-bordered w-full md:w-40"
      >
        <option value="">All Status</option>
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
        <option value="ongoing">Ongoing</option>
      </select>
    </div>
  );
};

const TuitionCard = ({ email }) => {
  const axiosSecure = useAxiosSecure();

  const [filters, setFilters] = useState({
    email: email || "",   // Optional: pass logged in student email
    status: "",
    subject: "",
    location: "",
    sort: "",
  });

  // Dynamic query string
  const queryString = new URLSearchParams(
    Object.fromEntries(Object.entries(filters).filter(([_, v]) => v))
  ).toString();

  const { data: tuition = [] } = useQuery({
    queryKey: ["tuitions", filters],
    queryFn: async () => {
      const res = await axiosSecure.get(`/new-tuitions?${queryString}`);
      return res.data.slice(0, 8);
    },
  });

  
  

  return (
    <div className="container mx-auto p-6">
      {/* Filter Bar */}
      <TuitionFilterBar filters={filters} setFilters={setFilters} />

      {/* Tuition Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tuition.map((item) => (
          <div
            key={item._id}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 flex flex-col"
          >
            {/* Header */}
            <div className="p-5 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.studentName}
                </h2>
                <span
                  className={`px-3 py-1 text-xs rounded-full capitalize ${
                    item.status === "pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : item.status === "approved"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <p className="text-sm text-gray-500 mt-1">
                Class {item.studentClass} • {item.studentSubjects}
              </p>
            </div>

            {/* Body */}
            <div className="p-5 space-y-2 flex-1 text-sm text-gray-700">
              <p>
                <span className="font-medium">Location:</span>{" "}
                {item.studentLocation}
              </p>
              <p>
                <span className="font-medium">Mode:</span> {item.studentMode}
              </p>
              <p>
                <span className="font-medium">Budget:</span> ৳ {item.studentBudget}
              </p>

              <p className="text-gray-600 line-clamp-2">{item.studentDetails}</p>
            </div>

            {/* Footer */}
            <div className="p-5 border-t flex items-center justify-between">
              <p className="text-xs text-gray-400">
                {new Date(item.createdAt).toLocaleDateString()}
              </p>

              <Link
                to={`/tuition-details/${item._id}`}
                className="text-sm font-medium text-green-600 hover:text-green-700"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}

     

  
  
    
      </div>
       {(!tuition || tuition.length === 0) && (
  <div className="my-12">
    <EmptyState
      icon={MdLocalPostOffice}
      title="No Tuition Found"
      description="No tuition posts available with selected filters."
    />
  </div>
)}
    </div>
  );
};

export default TuitionCard;
