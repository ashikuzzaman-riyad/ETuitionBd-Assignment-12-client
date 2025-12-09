import React, { useState } from 'react';

const UserManagement = () => {
     const [users, setUsers] = useState([
    {
      id: 1,
      name: "Riyad Hossen",
      email: "riyad@example.com",
      role: "Student",
      status: "Active",
    },
    {
      id: 2,
      name: "Abdul Karim",
      email: "karim@example.com",
      role: "Tutor",
      status: "Suspended",
    },
    {
      id: 3,
      name: "Sadia Rahman",
      email: "sadia@example.com",
      role: "Tutor",
      status: "Active",
    },
    {
      id: 4,
      name: "Mahmudul Hasan",
      email: "mahmud@example.com",
      role: "Student",
      status: "Active",
    },
  ]);

  // Update user status
  const updateStatus = (id, newStatus) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, status: newStatus } : user
      )
    );
  };

  // Delete user
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="p-6 container mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-green-600">
        Admin – User Management
      </h1>

      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="table w-full text-left">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="border-b hover:bg-green-50">
                <td className="p-3">{index + 1}</td>

                <td className="p-3 font-semibold">{user.name}</td>

                <td className="p-3 text-gray-600">{user.email}</td>

                <td className="p-3">
                  <span className="px-2 py-1 bg-green-100 rounded-lg text-green-700 text-sm">
                    {user.role}
                  </span>
                </td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-lg text-sm font-semibold ${
                      user.status === "Active"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                {/* ACTIONS */}
                <td className="p-3 space-x-2 flex justify-center">
                  {/* Activate */}
                  <button
                    onClick={() => updateStatus(user.id, "Active")}
                    className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Active
                  </button>

                  {/* Suspend */}
                  <button
                    onClick={() => updateStatus(user.id, "Suspended")}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                  >
                    Suspend
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-5 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default UserManagement;