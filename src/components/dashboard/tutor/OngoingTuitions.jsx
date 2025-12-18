import React, { useRef, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import EmptyOngoingState from "./EmptyOngoingState";
import EmptyState from "../../shared/EmptyState";
import { GrStatusUnknownSmall } from "react-icons/gr";

const OngoingTuitions = () => {
  const [selectedApp, setSelectedApp] = useState(null);
  const modalRef = useRef();

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: tuition = [], refetch } = useQuery({
    queryKey: ["myApplication", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/tutor-apply/email?tutorEmail=${user.email}&status=pending`
      );
      return res.data;
    },
  });

  const openModal = (app) => {
    setSelectedApp(app);
    modalRef.current.showModal(); // HTML <dialog> or your modal library
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const updatedData = {
      qualification: form.qualification.value,
      experience: form.experience.value,
      expectedSalary: form.expectedSalary.value,
    };

    await axiosSecure.patch(`/tutor-apply/${selectedApp._id}`, updatedData);

    modalRef.current.close();
    refetch();
     Swal.fire({
      icon: "success",
      title: "Application Updated!",
      text: "Your tutor application has been successfully updated.",
      timer: 2000,
      showConfirmButton: false,
    });
  };


   const handleDelete = (id) => {
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
          axiosSecure.delete(`/tutor-apply/${id}`).then((res) => {
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
    
    if(tuition.length === 0) {
      return <>
      <EmptyState
  icon={GrStatusUnknownSmall}
  title="No Ongoing Tuitions"
  description="It looks like you don't have any active sessions right now. Check your applied list or start a new application!"
  primaryAction={{
    label: "Find Tuitions",
    to: "/dashboard/apply-tuitions",
  }}
  secondaryAction={{
    label: "View History",
    to: "/dashboard/my-application",
  }}
/>;
      </>
    }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-extrabold mb-10 text-gray-900">
        My Tuition Applications
      </h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tuition.map((app) => (
          <div
            key={app._id}
            className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg p-6 border border-gray-200 hover:scale-105 transform transition-all duration-300"
          >
            {/* Ribbon / Status Badge */}
            <div className="absolute top-4 right-4">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
                  app.status === "ongoing"
                    ? "bg-green-100 text-green-800"
                    : app.status === "rejected"
                    ? "bg-red-100 text-red-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {app.status}
              </span>
            </div>

            {/* Subject & Class */}
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-indigo-600 mb-1">
                {app.studentSubjects}
              </h2>
              <p className="text-sm text-gray-500 font-medium">
                Class {app.studentClass}
              </p>
            </div>

            {/* Student Info */}
            <div className="space-y-1 mb-4">
              <p className="text-gray-700">
                <span className="font-semibold">Student:</span>{" "}
                {app.studentName}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Location:</span>{" "}
                {app.studentLocation}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Mode:</span> {app.studentMode}
              </p>
            </div>

            <hr className="border-gray-200 mb-4" />

            {/* Tutor Info */}
            <div className="space-y-1 mb-4">
              <p className="text-gray-700">
                <span className="font-semibold">Qualification:</span>{" "}
                {app.qualification}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Experience:</span>{" "}
                {app.experience} year(s)
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Expected Salary:</span>{" "}
                {app.expectedSalary} Tk
              </p>
            </div>

            {/* Footer / Applied Date */}
            <p className="text-xs text-gray-400 mt-4">
              Applied on {new Date(app.createdAt).toLocaleDateString()}
            </p>

            {/* Optional Action Buttons (if Pending) */}
            {app.status.toLowerCase() === "pending" && (
              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => {
                    openModal(app)
                  }}
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-xl"
                >
                  Edit
                </button>

                <button
                onClick={() => handleDelete (app._id)}
                 className="flex-1 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition">
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <dialog ref={modalRef} className="modal">
        <form onSubmit={handleSubmit} method="dialog" className="modal-box">
          <h3 className="font-bold text-lg mb-4">Edit Application</h3>
            <label htmlFor="">Qualification</label>
          <input
            name="qualification"
            defaultValue={selectedApp?.qualification}
            className="input input-bordered w-full mb-3"
            placeholder="Qualification"
          />
       <label htmlFor="">Experience</label>
          <input
            name="experience"
            defaultValue={selectedApp?.experience}
            className="input input-bordered w-full mb-3"
            placeholder="Experience (years)"
            type="number"
          />
        <label htmlFor="">ExpectedSalary</label>
          <input
            name="expectedSalary"
            defaultValue={selectedApp?.expectedSalary}
            className="input input-bordered w-full mb-3"
            placeholder="Expected Salary"
            type="number"
          />

          <div className="modal-action">
            <button className="btn btn-primary">Update</button>
            <button
              type="button"
              onClick={() => modalRef.current.close()}
              className="btn"
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default OngoingTuitions;
