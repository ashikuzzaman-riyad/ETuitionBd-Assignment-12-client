import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import Loading from "../shared/Loading";
import { useForm } from "react-hook-form";

import { FaCamera, FaEnvelope, FaKey, FaPhone } from "react-icons/fa6";
import { FaEdit, FaSignOutAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ProfileSetting = () => {
  //  const data = useLoaderData()
  const [openProfile, setOpenProfile] = useState(false);
   const [openPassword, setOpenPassword] = useState(false);
  const { user, loading, updateUser, setLoading, logOut } = useAuth();
  const { register, handleSubmit } = useForm();

  if (loading) return <Loading></Loading>;

  const onSubmit = (data) => {
    console.log(data);
    // update user profile to firebase

    const userProfile = {
      displayName: data.name,
      photoURL: data.photoURL,
    };

    updateUser(userProfile)
      .then(() => {
        console.log("User profile updated successfully");
        // Navigate after success
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error updating profile:", error.message);
      });
  };
 

const handleLogoutClick = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You will need to log in again to access your account.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#ef4444", // red
    cancelButtonColor: "#6b7280",  // gray
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



  return (
     <div className="min-h-[80vh] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative Background Blobs */}
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
                src={user?.photoURL || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-32 h-32 rounded-3xl object-cover border-4 border-base-100 shadow-xl group-hover:brightness-90 transition-all"
              />
              <button 
                onClick={() => setOpenProfile(true)}
                className="absolute bottom-2 right-2 p-2 bg-white text-green-600 rounded-xl shadow-lg hover:scale-110 transition-transform"
              >
                <FaCamera size={14} />
              </button>
            </div>

            <div className="mt-4 sm:mt-16 text-center sm:text-left flex-1">
              <h2 className="text-3xl font-black text-base-content tracking-tight">
                {user?.displayName}
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
                <p className="text-xs text-base-content/50 font-bold uppercase tracking-wider">Email Address</p>
                <p className="text-sm font-medium">{user?.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-base-200/50 rounded-2xl border border-base-300/50">
              <div className="p-3 bg-white text-green-600 rounded-xl shadow-sm">
                <FaPhone />
              </div>
              <div>
                <p className="text-xs text-base-content/50 font-bold uppercase tracking-wider">Phone Number</p>
                <p className="text-sm font-medium">{user?.phone || "Not Provided"}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <button
              onClick={() => setOpenProfile(true)}
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
                <label className="label font-bold text-xs uppercase tracking-widest opacity-60">Full Name</label>
                <input
                  {...register("name")}
                  className="input input-bordered bg-base-200 border-none rounded-xl focus:ring-2 focus:ring-green-500"
                  placeholder="Your name"
                />
              </div>

              <div className="form-control">
                <label className="label font-bold text-xs uppercase tracking-widest opacity-60">Photo URL</label>
                <input
                  {...register("photoURL")}
                  className="input input-bordered bg-base-200 border-none rounded-xl focus:ring-2 focus:ring-green-500"
                  placeholder="Image link"
                />
              </div>

              <div className="modal-action gap-3">
                <button type="button" className="btn btn-ghost rounded-xl" onClick={() => setOpenProfile(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary rounded-xl px-8 shadow-lg shadow-green-500/20">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSetting;
