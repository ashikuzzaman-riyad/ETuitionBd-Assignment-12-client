import React, { useState } from "react";
// import { useLoaderData, useNavigate } from "react-router";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../hooks/useAuth";
import Loading from "../../shared/Loading";

const ProfileSettings = () => {
  //  const data = useLoaderData()
  const [openProfile, setOpenProfile] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const {user, loading} = useAuth()
  console.log(user)
  if(loading) return <Loading></Loading>

 

  return (
    <div className="min-h-3/3 flex items-center justify-center  p-4">
      <div className="max-w-md w-full p-6 bg-white shadow-xl rounded-2xl">
        {/* Profile Card */}
        <div className="text-center space-y-4">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full border-4 border-green-500"
          />
          <h2 className="text-2xl font-bold text-green-600">{user?.displayName}</h2>
          <p className="text-gray-600 text-sm">{user?.email}</p>
          <p className="text-gray-600 text-sm">{user?.phone}</p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-4">
            <button
              onClick={() => setOpenProfile(true)}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
            >
              Edit Profile
            </button>
            <button
              onClick={() => setOpenPassword(true)}
              className="px-4 py-2 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors"
            >
              Change Password
            </button>
          </div>
        </div>

        {/* PROFILE UPDATE DIALOG */}
        {openProfile && (
          <dialog open className="modal">
            <div className="modal-box space-y-4 p-6 sm:p-8 rounded-xl bg-green-50">
              <h3 className="text-xl font-bold text-green-700">Update Profile</h3>

              <div>
                <label className="block text-sm font-medium mb-1 text-green-800">
                  {user?.name}
                </label>
                <input
                  className="w-full border border-green-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-green-800">
                  {user?.email}
                </label>
                <input
                  type="email"
                  className="w-full border border-green-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-green-800">
                  {user?.phone}
                </label>
                <input
                  className="w-full border border-green-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="01XXXXXXXXX"
                />
              </div>

              <div className="modal-action flex justify-end gap-2">
                <button
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                  onClick={() => setOpenProfile(false)}
                >
                  Close
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Save
                </button>
              </div>
            </div>
          </dialog>
        )}

        {/* CHANGE PASSWORD DIALOG */}
        {openPassword && (
          <dialog open className="modal">
            <div className="modal-box space-y-4 p-6 sm:p-8 rounded-xl bg-green-50">
              <h3 className="text-xl font-bold text-green-700">Change Password</h3>

              <div>
                <label className="block text-sm font-medium mb-1 text-green-800">
                  Old Password
                </label>
                <input
                  type="password"
                  className="w-full border border-green-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-green-800">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full border border-green-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-green-800">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="w-full border border-green-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div className="modal-action flex justify-end gap-2">
                <button
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                  onClick={() => setOpenPassword(false)}
                >
                  Close
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Update Password
                </button>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </div>
  );
};

export default ProfileSettings;
