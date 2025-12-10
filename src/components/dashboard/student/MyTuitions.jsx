import React from "react";
import { useAuth } from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyTuitions = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: tuition = [], refetch } = useQuery({
    queryKey: ["myTuitions", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/new-tuitions?email=${user.email}`);
      return res.data;
    },
  });

  const handleParcelDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/new-tuitions/${id}`).then((res) => {
          console.log(res.data);

          if (res.data.deletedCount) {
            // refresh the data in the ui
            refetch();

            Swal.fire({
              title: "Deleted!",
              text: "Your Tuitions post  request has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto shadow-xl rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          {/* Table Header */}
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Student Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden sm:table-cell"
              >
                Subject & Class
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden lg:table-cell"
              >
                Location
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Budget
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center text-xs font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {tuition.map((student, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150"
              >
                {/* Student Name and Contact */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {student.studentName}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {student.studentEmail}
                  </div>
                </td>

                {/* Subject & Class (Hidden on small screens) */}
                <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                  <div className="text-sm text-gray-900 dark:text-gray-300">
                    {student.studentSubjects}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Class: {student.studentClass}
                  </div>
                </td>

                {/* Location (Hidden on medium/small screens) */}
                <td className="px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                  <div className="text-sm text-gray-900 dark:text-gray-300">
                    {student.studentLocation}
                  </div>
                </td>

                {/* Budget */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                    ${student.studentBudget}
                  </div>
                </td>

                {/* Status Badge */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`
      px-3 py-1.5 inline-flex text-xs leading-5 font-bold rounded-full 
      ${
        student.status === "pending"
          ? "bg-yellow-500 text-yellow-900"
          : student.status === "approved"
          ? "bg-green-600 text-white"
          : student.status === "rejected"
          ? "bg-red-500 text-white"
          : "bg-gray-300 text-gray-800"
      }
    `}
                  >
                    {student.status.toUpperCase()}
                  </span>
                </td>

                {/* Actions (Edit and Delete) */}
                <td className="px-6 py-4 whitespace-nowrap flex text-center text-sm font-medium">
                  {/* Edit Button */}
                  <Link to={`/dashboard/upadet-tuitions/${student._id}`}>
                  <button
                    // onClick={() => handleEdit(student)}
                    className="text-indigo-600 flex  justify-center items-center gap-1 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 mr-4 transition duration-150"
                    title="Edit Record"
                  >
                    <span>
                      <FaEdit size={25} />
                    </span>
                    <span className="sr-only sm:not-sr-only"> Edit</span>
                  </button>
                  </Link>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleParcelDelete(student._id)}
                    className="text-red-600 hover:text-red-900 dark:text-red-400 flex gap-1 justify-center items-center dark:hover:text-red-300 transition duration-150"
                    title="Delete Record"
                  >
                    <span>
                      <MdDeleteOutline size={25} />
                    </span>
                    <span className="sr-only sm:not-sr-only"> Delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTuitions;
