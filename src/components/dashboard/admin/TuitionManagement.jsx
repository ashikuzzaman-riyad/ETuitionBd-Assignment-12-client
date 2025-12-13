import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const TuitionManagement = () => {
  const axiosSecure = useAxiosSecure();

  const { data: pending = [], refetch } = useQuery({
    queryKey: ["new-tuition", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/new-tuitions?status=pending");
      return res.data;
    },
  });

  // Update user status approve
  const updateStatus = (id) => {
    console.log(id);
    const updateStatus = {
      status: "approve",
    };
    axiosSecure
      .patch(`/new-tuitions/status/${id}`, updateStatus)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            title: "Tutor",
            text: `has been a approve`,
            icon: "success",
            timer: 2000,
          });
        }
      });
  };

  // update user status reject
  const rejectStatus = (id) => {
    console.log(id);
    const updateStatus = {
      status: "reject",
    };
    axiosSecure
      .patch(`/new-tuitions/status/${id}`, updateStatus)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            title: "Tutor",
            text: `has been a reject`,
            icon: "success",
            timer: 2000,
          });
        }
      });
  };


  
  console.log(pending);

  return (
    <div className="p-6 container mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-green-600">
        Admin – User Management {pending.length}
      </h1>

      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="table w-full text-left">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Subject</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {pending.map((user, index) => (
              <tr key={user.id} className="border-b hover:bg-green-50">
                <td className="p-3">{index + 1}</td>

                <td className="p-3 font-semibold">{user.studentName}</td>

                <td className="p-3 text-gray-600">{user.studentEmail}</td>

                <td className="p-3">
                  <span className="px-2 py-1 bg-green-100 rounded-lg text-green-700 text-sm">
                    {user.studentSubjects}
                  </span>
                </td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-lg text-sm font-semibold ${
                      user.status === "pending"
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
                    onClick={() => updateStatus(user._id)}
                    className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Approve
                  </button>

                  {/* Suspend */}

                  {/* Delete */}
                  <button
                    onClick={() => rejectStatus(user._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}

            {pending.length === 0 && (
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

export default TuitionManagement;
