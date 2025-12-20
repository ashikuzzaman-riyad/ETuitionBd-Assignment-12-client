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
import Loading from "../../shared/Loading";

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
  const { data: tuition = [], refetch, isLoading } = useQuery({
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
   if(isLoading) return <Loading></Loading>
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
   <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4">

  {/* ================= TABLE VIEW (Tablet & Desktop) ================= */}
  <div className="hidden md:block overflow-x-auto shadow-xl rounded-lg">
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      {/* Table Header */}
      <thead className="bg-gray-50 dark:bg-gray-700">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-bold uppercase">
            Student Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-bold uppercase hidden sm:table-cell">
            Subject & Class
          </th>
          <th className="px-6 py-3 text-left text-xs font-bold uppercase hidden lg:table-cell">
            Location
          </th>
          <th className="px-6 py-3 text-left text-xs font-bold uppercase">
            Budget
          </th>
          <th className="px-6 py-3 text-left text-xs font-bold uppercase">
            Status
          </th>
          <th className="px-6 py-3 text-center text-xs font-bold uppercase">
            Actions
          </th>
        </tr>
      </thead>

      {/* Table Body */}
      <tbody className="bg-white dark:bg-gray-800 divide-y">
        {tuition.map((student) => (
          <tr
            key={student._id}
            className="hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            {/* Student */}
            <td className="px-6 py-4">
              <div className="font-medium">{student.studentName}</div>
              <div className="text-xs text-gray-500">
                {student.studentEmail}
              </div>
            </td>

            {/* Subject */}
            <td className="px-6 py-4 hidden sm:table-cell">
              <div>{student.studentSubjects}</div>
              <div className="text-xs text-gray-500">
                Class: {student.studentClass}
              </div>
            </td>

            {/* Location */}
            <td className="px-6 py-4 hidden lg:table-cell">
              {student.studentLocation}
            </td>

            {/* Budget */}
            <td className="px-6 py-4 font-semibold text-green-600">
              ${student.studentBudget}
            </td>

            {/* Status */}
            <td className="px-6 py-4">
              <span
                className={`px-3 py-1 text-xs font-bold rounded-full
                  ${
                    student.status === "pending"
                      ? "bg-yellow-400 text-black"
                      : student.status === "approved"
                      ? "bg-green-600 text-white"
                      : "bg-red-600 text-white"
                  }`}
              >
                {student.status}
              </span>
            </td>

            {/* Actions */}
            <td className="px-6 py-4">
              <div className="flex flex-col sm:flex-row justify-center gap-2">
                <button
                  onClick={() => openModal(student)}
                  className="text-indigo-600 flex items-center gap-1"
                >
                  <FaEdit /> Edit
                </button>
                <button
                  onClick={() => handleParcelDelete(student._id)}
                  className="text-red-600 flex items-center gap-1"
                >
                  <MdDeleteOutline /> Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* ================= MOBILE CARD VIEW ================= */}
  <div className="md:hidden space-y-4">
    {tuition.map((student) => (
      <div
        key={student._id}
        className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow"
      >
        <div className="font-bold text-lg">{student.studentName}</div>
        <p className="text-xs text-gray-500">{student.studentEmail}</p>

        <div className="mt-2 text-sm space-y-1">
          <p><b>Subject:</b> {student.studentSubjects}</p>
          <p><b>Class:</b> {student.studentClass}</p>
          <p><b>Location:</b> {student.studentLocation}</p>
          <p className="text-green-600 font-semibold">
            Budget: ${student.studentBudget}
          </p>
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={() => openModal(student)}
            className="text-indigo-600 flex items-center gap-1"
          >
            <FaEdit /> Edit
          </button>
          <button
            onClick={() => handleParcelDelete(student._id)}
            className="text-red-600 flex items-center gap-1"
          >
            <MdDeleteOutline /> Delete
          </button>
        </div>
      </div>
    ))}
  </div>

  {/* ================= MODAL ================= */}
  <dialog ref={tuitionRef} className="modal modal-bottom sm:modal-middle">
    <div className="modal-box w-11/12 sm:w-full max-w-xl">
      <form method="dialog">
        <button className="btn btn-sm btn-circle absolute right-2 top-2">
          ✕
        </button>
      </form>

      <h2 className="text-xl font-bold mb-4">Update Tuition</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <label className="text-sm font-medium">Subject</label>
          <select {...register("studentSubjects")} className="w-full border p-2 rounded">
            <option value="">Select subject</option>
            {subjects.map((sub) => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">Class</label>
          <select {...register("studentClass")} className="w-full border p-2 rounded">
            <option value="">Select class</option>
            {classOptions.map((c) => (
              <option key={c} value={c}>{`Class ${c}`}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">Budget</label>
          <input
            type="number"
            {...register("studentBudget")}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Location</label>
          <input
            {...register("studentLocation")}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white w-full py-2 rounded mt-3"
        >
          Update Tuition
        </button>
      </form>
    </div>
  </dialog>
</div>

  );
};

export default MyTuitions;
