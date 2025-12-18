import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

import { FiShield, FiShieldOff, FiUserPlus, FiUserX } from "react-icons/fi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";

const UsersManagement = () => {
  const [textSearch, setTextSearch] = useState();
  const axiosSecure = useAxiosSecure();
  const { data: user = [], refetch } = useQuery({
    queryKey: ["users", textSearch],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?searchText=${textSearch}`);
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

                <td className="px-4 py-3 text-sm text-gray-700">
                  {data.email}
                </td>

                <td className="px-4 py-3 text-sm font-medium text-gray-800 capitalize">
                  {data.role}
                </td>

                <td className="px-4 py-3 flex gap-2.5">
                  {data.role === "admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(data)}
                      className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    >
                      <FiShieldOff size={18} />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(data)}
                      className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    >
                      <FiShield size={18} />
                    </button>
                  )}

                  {/* tutor add or remove  */}
                  {data.role === "tutor" ? (
                    // Remove Tutor button
                    <button
                      onClick={() => handleRemoveTutor(data)}
                      className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition flex items-center gap-2"
                    >
                      <FiUserX size={18} />{" "}
                      {/* Use FiUserX or another icon for remove */}
                      Remove Tutor
                    </button>
                  ) : (
                    // Add Tutor button
                    <button
                      onClick={() => handleAddTutor(data)}
                      className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition flex items-center gap-2"
                      disabled={data.role === "admin"} // Optional: disable if admin
                    >
                      <FiUserPlus size={18} /> {/* Icon for adding */}
                      Add Tutor
                    </button>
                  )}
                </td>

                <td className="px-4 py-3">
                  <Link to={`/dashboard/vew-user/${data._id}`}>
                    View Profile
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
