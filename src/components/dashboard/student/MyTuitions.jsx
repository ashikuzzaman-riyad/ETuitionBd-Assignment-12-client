import React, { useRef, useState } from "react";
import { GrStatusInfo } from "react-icons/gr";

import { useAuth } from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline, MdOutlineHourglassEmpty } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import EmptyState from "../../shared/EmptyState";

const MyTuitions = () => {
   const { register, handleSubmit, reset } = useForm();
  const [studentUpdate, setStudentUpdate] = useState(null)
  const tuitionRef = useRef();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const subjects = [
    "Bangla",
    "English",
    "Math",
    "Physics",
    "Chemistry",
    "Biology",
    "Higher Math",
    "ICT",
    "Bangladesh Studies",
    "Accounting",
    "Economics",
  ];
  const classOptions = Array.from({ length: 10 }, (_, i) => i + 1);
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

  const openModal = (student) => {
  setStudentUpdate(student);
  tuitionRef.current.showModal();
  reset();
};

  
    // UPDATE Tuition
  const onSubmit = async (data) => {
    if (!studentUpdate?._id)
      return Swal.fire({ icon: "error", title: "No student selected" });

    try {
      const Updates = {
        studentBudget: Number(data.studentBudget),
        studentLocation: data.studentLocation,
        studentClass: Number(data.studentClass),
        studentSubjects: data.studentSubjects,
      };

      const res = await axiosSecure.patch(
        `/new-tuitions/${studentUpdate._id}`,
        Updates
      );

      if (res.data.modifiedCount > 0) {
        tuitionRef.current?.close();
        Swal.fire({
          icon: "success",
          title: "Updated Successfully!",
          timer: 1500,
          showConfirmButton: false,
        });
        refetch();
      } else {
        Swal.fire({
          icon: "info",
          title: "No changes detected",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
      });
    }
  };
  if(tuition.length === 0) {
    return <>
    <EmptyState
  icon={GrStatusInfo }
  title="No Application"
  description="Create a new application!"
  primaryAction={{
    label: "New Application",
    to: "/dashboard/new-tuitions",
  }}
  
/>;
    </>
  }

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
                    {student.status}
                  </span>
                </td>

                {/* Actions (Edit and Delete) */}
                <td className="px-6 py-4 whitespace-nowrap flex text-center text-sm font-medium">
                  {/* Edit Button */}
                  <Link>
                    <button
                      onClick={() => openModal(student)}
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
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog ref={tuitionRef} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
           <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-5">Update Tuition</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          {/* Class (Required) */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Subjects (Choose one)
            </label>
            <select
              // Validation remains active here
              {...register("studentSubjects")}
              className="w-full border rounded p-2"
              
            >
              <option value="">Select one subject</option>
              {subjects.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* class */}
        <div>
          <label className="block text-sm font-medium mb-1">Class</label>
          <select
            // Validation remains active here
            {...register("studentClass")}
            className="w-full border rounded p-2"
          >
            <option value="">Select class (1-10)</option>
            {classOptions.map((c) => (
              <option key={c} value={c}>{`Class ${c}`}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-semibold">Budget</label>
          <input
            type="number"
            {...register("studentBudget")}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Location</label>
          <input
            {...register("studentLocation")}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded w-full mt-4"
        >
          Update Tuition
        </button>
      </form>
    </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyTuitions;
