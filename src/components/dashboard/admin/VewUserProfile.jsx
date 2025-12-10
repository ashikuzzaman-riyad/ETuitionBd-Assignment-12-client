
import { useLoaderData, useNavigate } from "react-router";
import { FiTrash2 } from "react-icons/fi";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const VewUserProfile = () => {
  const user = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate(); // redirect after deletion

  if (!user?._id) {
    return (
      <div className="text-center mt-20 text-red-600 font-semibold">
        User not found
      </div>
    );
  }

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to delete this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((res) => {
      if (res.isConfirmed) {
        axiosSecure
          .delete(`/users/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire("Deleted!", "The user has been deleted.", "success");
              navigate("/dashboard/user-management"); // redirect back to users list
            }
          })
          .catch(() => {
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
  };

  return (
    <div className="max-w-md mx-auto md:mt-10 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <div className="h-24 bg-green-500"></div>
      <div className="flex flex-col items-center -mt-12 p-6">
        <img
          className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md"
          src={user.photoURL}
          alt={user.name}
        />
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">{user.name}</h2>
        <p className="text-gray-500 capitalize">{user.role}</p>
        <p className="mt-2 text-sm text-gray-600 text-center">{user.status}</p>

        <div className="mt-4 flex flex-col gap-2 w-full text-gray-700">
          <div className="flex justify-between border-b py-1">
            <span>Email:</span>
            <span className="font-medium">{user.email}</span>
          </div>
          <div className="flex justify-between border-b py-1">
            <span>Account Created:</span>
            <span className="font-medium">{new Date(user.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={() => handleDeleteUser(user._id)}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          >
            <FiTrash2 size={18} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default VewUserProfile;
