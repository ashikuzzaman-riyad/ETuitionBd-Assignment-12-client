import React, { useState } from 'react';

const MyApplications = () => {
   const [applications, setApplications] = useState([
    {
      id: 1,
      tutor: "Abdul Karim",
      subject: "Math",
      class: "8",
      expectedSalary: "3500",
      experience: "2 years",
      status: "Pending",
    },
    {
      id: 2,
      tutor: "Sadia Rahman",
      subject: "English",
      class: "6",
      expectedSalary: "3000",
      experience: "1.5 years",
      status: "Pending",
    },
    {
      id: 3,
      tutor: "Rakib Hossain",
      subject: "Physics",
      class: "10",
      expectedSalary: "5000",
      experience: "3 years",
      status: "Confirmed",
    },
  ]);

  // Update status
  const updateStatus = (id, newStatus) => {
    setApplications(
      applications.map((app) =>
        app.id === id ? { ...app, status: newStatus } : app
      )
    );
  };

  return (
    <div className="p-6 container mx-auto">
      <h1 className="text-2xl font-bold mb-5">Tutor Applications</h1>

      <div className="space-y-5">
        {applications.map((app) => (
          <div
            key={app.id}
            className="border p-5 rounded-xl shadow hover:shadow-lg transition bg-white"
          >
            <h2 className="text-xl font-semibold text-green-600">
              {app.subject} (Class {app.class})
            </h2>

            <p className="mt-1">
              <span className="font-semibold">Tutor:</span> {app.tutor}
            </p>
            <p>
              <span className="font-semibold">Experience:</span>{" "}
              {app.experience}
            </p>
            <p>
              <span className="font-semibold">Salary:</span>{" "}
              {app.expectedSalary} Tk
            </p>

            {/* STATUS */}
            <p className="mt-3">
              <span className="font-semibold">Status:</span>{" "}
              <span
                className={`font-bold ${
                  app.status === "Confirmed"
                    ? "text-green-600"
                    : app.status === "Rejected"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {app.status}
              </span>
            </p>

            {/* Action Buttons */}
            {app.status === "Pending" && (
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => updateStatus(app.id, "Confirmed")}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Confirm
                </button>

                <button
                  onClick={() => updateStatus(app.id, "Rejected")}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Reject
                </button>
              </div>
            )}

            {/* If already acted */}
            {app.status !== "Pending" && (
              <p className="mt-2 text-sm italic text-gray-500">
                You have already {app.status.toLowerCase()} this application.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyApplications;