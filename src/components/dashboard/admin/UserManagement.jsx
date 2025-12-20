import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

import { FiShield, FiShieldOff, FiUserPlus, FiUserX } from "react-icons/fi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";
import { Eye } from "lucide-react";
import { FaUserAltSlash, FaUserCog } from "react-icons/fa";
import EmptyState from "../../shared/EmptyState";
import Loading from "../../shared/Loading";

const UsersManagement = () => {
  const [textSearch, setTextSearch] = useState("");
  const axiosSecure = useAxiosSecure();
  const { data: user = [], refetch, isLoading } = useQuery({
    queryKey: ["all-users", textSearch],
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-users?searchText=${textSearch}`);
      return res.data;
    },
  });
  const handleMakeAdmin = (data) => {
    const updateRole = {
      role: "admin",
    };
    Swal.fire({
      title: "Are you sure?",
      text: "create a new admin",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirmed It",
    }).then((res) => {
      if (res.isConfirmed) {
        axiosSecure.patch(`/users/${data._id}/role`, updateRole).then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              position: "top-end",
              title: "Admin",
              text: `${data.displayName} has been a Admin`,
              icon: "success",
              timer: 2000,
            });
          }
        });
      }
    });
  };
  const handleRemoveAdmin = (data) => {
    const updateRole = {
      role: "student",
    };
    Swal.fire({
      title: "Are you sure?",
      text: "Remove the admin",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((res) => {
      if (res.isConfirmed) {
        axiosSecure.patch(`/users/${data._id}/role`, updateRole).then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              position: "top-end",
              title: "user!",
              text: `${data.displayName} has been a user`,
              icon: "success",
              timer: 2000,
            });
          }
        });
      }
    });
  };
  const handleAddTutor = (data) => {
    const updateRole = {
      role: "tutor",
    };
    Swal.fire({
      title: "Are you sure?",
      text: "create a new tutor",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirmed It",
    }).then((res) => {
      if (res.isConfirmed) {
        axiosSecure.patch(`/users/${data._id}/role`, updateRole).then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              position: "top-end",
              title: "Tutor",
              text: `${data.displayName} has been a Tutor`,
              icon: "success",
              timer: 2000,
            });
          }
        });
      }
    });
  };

  const handleRemoveTutor = (data) => {
    const updateRole = {
      role: "student",
    };
    Swal.fire({
      title: "Are you sure?",
      text: "Remove the tutor",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((res) => {
      if (res.isConfirmed) {
        axiosSecure.patch(`/users/${data._id}/role`, updateRole).then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              position: "top-end",
              title: "user!",
              text: `${data.displayName} has been a user`,
              icon: "success",
              timer: 2000,
            });
          }
        });
      }
    });
  };

  
  if(isLoading) return <Loading></Loading>

    
  
  return (
    <div className="px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-3xl font-bold text-green-600">
          Users Management{" "}
          <span className="text-gray-500">({user.length})</span>
        </h2>

        {/* Search */}
        <label className="relative block w-full md:w-64">
          <svg
            className="absolute top-1/2 left-3 -translate-y-1/2 h-5 w-5 text-green-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <input
            type="search"
            onChange={(e) => setTextSearch(e.target.value)}
            placeholder="Search users..."
            className="w-full pl-10 pr-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
          />
        </label>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-lg rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          {/* Table Head */}
          <thead className="bg-green-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-green-700">
                No
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-green-700">
                User
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-green-700">
                Email
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-green-700">
                Role
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-green-700">
                Admin Action
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-green-700">
                Other Action
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {user.map((data, index) => (
              <tr key={data.email} className="hover:bg-green-50 transition-all">
                <td className="px-4 py-3 text-sm text-gray-700">{index + 1}</td>

                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <img
                        src={data.photoURL}
                        alt={data.displayName}
                        className="h-12 w-12 rounded-full object-cover border-2 border-green-400"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">
                        {data.displayName}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-3">
                  <span className="inline-block px-3 py-1 text-sm text-gray-800 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors break-all">
                    {data.email}
                  </span>
                </td>

                <td className="px-4 py-3">
                  <span
                    className={`inline-block items-center px-3 py-1 text-sm font-semibold rounded-full capitalize
      ${
        data.role === "admin"
          ? "bg-red-100 text-red-800"
          : data.role === "tutor"
          ? "bg-green-100 text-green-800"
          : "bg-blue-100 text-blue-800"
      }`}
                  >
                    {data.role}
                  </span>
                </td>

                <td className="px-4 py-3 flex flex-wrap gap-2">
                  {/* Admin actions */}
                  {data.role === "admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(data)}
                      title="Remove Admin"
                      className="group flex items-center gap-1 rounded-lg bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 border border-red-200
                 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-200"
                    >
                      <FiShieldOff
                        size={16}
                        className="transition-transform group-hover:scale-110"
                      />
                      Remove Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(data)}
                      title="Make Admin"
                      className="group flex items-center gap-1 rounded-lg bg-green-50 px-3 py-1.5 text-sm font-medium text-green-600 border border-green-200
                 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-200"
                    >
                      <FiShield
                        size={16}
                        className="transition-transform group-hover:scale-110"
                      />
                      Make Admin
                    </button>
                  )}

                  {/* Tutor actions */}
                  {data.role === "tutor" ? (
                    <button
                      onClick={() => handleRemoveTutor(data)}
                      title="Remove Tutor"
                      className="group flex items-center gap-2 rounded-lg bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 border border-red-200
                 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-200"
                    >
                      <FiUserX
                        size={16}
                        className="transition-transform group-hover:scale-110"
                      />
                      Remove Tutor
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAddTutor(data)}
                      title="Add Tutor"
                      disabled={data.role === "admin"} // optional: prevent adding tutor if admin
                      className={`group flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium border transition-all duration-200
                  ${
                    data.role === "admin"
                      ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
                      : "bg-green-50 text-green-600 border-green-200 hover:bg-green-600 hover:text-white hover:border-green-600"
                  }`}
                    >
                      <FiUserPlus
                        size={16}
                        className="transition-transform group-hover:scale-110"
                      />
                      Add Tutor
                    </button>
                  )}
                </td>

                <td className="px-4 py-3">
                  <Link
                    to={`/dashboard/vew-user/${data._id}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-600 hover:bg-indigo-100 transition"
                  >
                    <Eye size={16} />
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
      {(!user || user.length === 0) && (
  <div className="my-12">
    <EmptyState
      icon={FaUserAltSlash}
      title="No Tuition Found"
      description="No tuition posts available with selected filters."
    />
  </div>
)}
    </div>
  );
};

export default UsersManagement;
