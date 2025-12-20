import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import Loading from "../shared/Loading";
import { useForm } from "react-hook-form";

import { FaCamera, FaEnvelope, FaKey, FaPhone } from "react-icons/fa6";
import { FaEdit, FaSignOutAlt } from "react-icons/fa";
import Swal from "sweetalert2";

import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ProfileSetting = () => {
  const [userId, setUserId] = useState(null);
  const [profileImg, setProfileImg] = useState(null); // store file
  const [openProfile, setOpenProfile] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);

  const { user, loading, updateUser, setLoading, logOut } = useAuth();
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();

  // Fetch user data
  const { data: userssss = [], isLoading, refetch } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?email=${user.email}`);
      return res.data;
    },
  });
  const users = userssss;

  // Open modal and set user
  const handleOpen = (users) => {
    setOpenProfile(true);
    setUserId(users);
  };

  // Form submit handler
  const onSubmit = async (data) => {
    if (!userId?._id) {
      Swal.fire("Error", "User ID not found", "error");
      return;
    }

    setLoading(true);

    try {
      let photoURL = users?.photoURL; // default to existing URL

      // Upload image if selected
      if (profileImg) {
        const formData = new FormData();
        formData.append("image", profileImg);

        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_img_host}`;
        const uploadRes = await axios.post(image_API_URL, formData);
        photoURL = uploadRes.data.data.url;
      }

      const statusInfo = {
        displayName: data.name,
        photoURL,
      };

      const res = await axiosSecure.patch(`/users/${userId._id}`, statusInfo);

      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Updated Successfully!",
          timer: 1500,
          showConfirmButton: false,
        });
        refetch();
        setOpenProfile(false);
      }

      await updateUser(statusInfo);
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Something went wrong", "error");
    } finally {
      setLoading(false);
    }
  };

  // Logout handler
  const handleLogoutClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will need to log in again to access your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Logout",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        logOut();
        Swal.fire({
          title: "Logged out!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  if (loading || isLoading) return <Loading />;

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      {/* Profile Card */}
      <div className="max-w-2xl w-full bg-base-100 border border-base-200 shadow-2xl rounded-[2rem] overflow-hidden relative z-10">
        {/* Banner */}
        <div className="h-32 bg-gradient-to-r from-green-500 to-emerald-600 w-full" />

        <div className="px-8 pb-10">
          {/* Avatar Section */}
          <div className="relative -mt-16 mb-6 flex flex-col items-center sm:items-start sm:flex-row sm:gap-6">
            <div className="relative group">
              <img
                src={users?.photoURL || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-32 h-32 rounded-3xl object-cover border-4 border-base-100 shadow-xl group-hover:brightness-90 transition-all"
              />
              <button
                onClick={() => handleOpen(users)}
                className="absolute bottom-2 right-2 p-2 bg-white text-green-600 rounded-xl shadow-lg hover:scale-110 transition-transform"
              >
                <FaCamera size={14} />
              </button>
            </div>

            <div className="mt-4 sm:mt-16 text-center sm:text-left flex-1">
              <h2 className="text-3xl font-black text-base-content tracking-tight">
                {users?.displayName}
              </h2>
              <div className="badge badge-success badge-outline mt-1 px-4 py-3 font-semibold">
                Verified Account
              </div>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="flex items-center gap-4 p-4 bg-base-200/50 rounded-2xl border border-base-300/50">
              <div className="p-3 bg-white text-green-600 rounded-xl shadow-sm">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-xs text-base-content/50 font-bold uppercase tracking-wider">
                  Email Address
                </p>
                <p className="text-sm font-medium">{users?.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-base-200/50 rounded-2xl border border-base-300/50">
              <div className="p-3 bg-white text-green-600 rounded-xl shadow-sm">
                <FaPhone />
              </div>
              <div>
                <p className="text-xs text-base-content/50 font-bold uppercase tracking-wider">
                  Phone Number
                </p>
                <p className="text-sm font-medium">
                  {users?.phone || "Not Provided"}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <button
              onClick={() => handleOpen(users)}
              className="btn btn-primary btn-md rounded-2xl normal-case gap-2 px-8"
            >
              <FaEdit /> Edit Profile
            </button>

            <button
              onClick={() => setOpenPassword(true)}
              className="btn btn-ghost border-base-300 bg-base-200/50 btn-md rounded-2xl normal-case gap-2 px-8"
            >
              <FaKey /> Security Settings
            </button>

            <button
              onClick={handleLogoutClick}
              className="btn btn-error btn-md rounded-2xl normal-case gap-2 px-8 hover:scale-105 transition-transform shadow-md shadow-red-500/20"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* MODAL: UPDATE PROFILE */}
      {openProfile && (
        <div className="modal modal-open backdrop-blur-sm">
          <div className="modal-box rounded-[2rem] p-8 max-w-md border border-base-200 shadow-2xl">
            <h3 className="text-2xl font-black mb-6">Update Profile</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="form-control">
                <label className="label font-bold text-xs uppercase tracking-widest opacity-60">
                  Full Name
                </label>
                <input
                  {...register("name")}
                  className="input input-bordered bg-base-200 border-none rounded-xl focus:ring-2 focus:ring-green-500"
                  placeholder="Your name"
                />
              </div>

              <div className="form-control">
                <label className="label font-bold text-xs uppercase tracking-widest opacity-60">
                  Upload Photo
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setProfileImg(e.target.files[0])}
                  className="file-input file-input-bordered file-input-primary rounded-xl w-full"
                />
              </div>

              <div className="modal-action gap-3">
                <button
                  type="button"
                  className="btn btn-ghost rounded-xl"
                  onClick={() => setOpenProfile(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary rounded-xl px-8 shadow-lg shadow-green-500/20"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSetting;
