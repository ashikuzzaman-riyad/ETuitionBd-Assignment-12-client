import React from "react";
import { useAuth } from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const OngoingTuitions = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: tuition = [], refetch } = useQuery({
    queryKey: ["myApplication", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/new-tuitions/status?tutorEmail=${user.email}&status=ongoing`
      );
      return res.data;
    },
  });
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
                <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
                  Confirm
                </button>
                <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition">
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OngoingTuitions;
