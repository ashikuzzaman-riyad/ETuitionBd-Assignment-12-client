import React, { useState } from 'react';

const AppliedTutors = () => {
     const [applications, setApplications] = useState([
    {
      id: 1,
      tutorName: "Abdullah Hasan",
      subject: "Math",
      class: "8",
      location: "Mirpur 10",
      expectedSalary: "3500",
      experience: "2 years",
      message: "I can teach 5 days a week. Evening time preferred.",
      status: "Pending", // Pending | Confirmed | Rejected
    },
    {
      id: 2,
      tutorName: "Sadia Rahman",
      subject: "English",
      class: "6",
      location: "Dhanmondi",
      expectedSalary: "3000",
      experience: "1.5 years",
      message: "I prefer weekend classes. Female tutor requested.",
      status: "Pending",
    },
    {
      id: 3,
      tutorName: "Rakib Hossain",
      subject: "Physics",
      class: "10",
      location: "Uttara",
      expectedSalary: "5000",
      experience: "3 years",
      message: "I explain topics with board work and notes.",
      status: "Confirmed",
    },
  ]);

  // Confirm Action
  const handleConfirm = (id) => {
    setApplications(
      applications.map((item) =>
        item.id === id ? { ...item, status: "Confirmed" } : item
      )
    );
  };

  // Reject Action
  

  return (
    <div className="p-6 container mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Tutor Applied for Your Tuitions</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {applications.map((app) => (
          <div
            key={app.id}
            className="border p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-green-600 mb-1">
              {app.subject} (Class {app.class})
            </h2>
            <p><span className="font-semibold">Tutor:</span> {app.tutorName}</p>
            <p><span className="font-semibold">Location:</span> {app.location}</p>
            <p><span className="font-semibold">Expected Salary:</span> {app.expectedSalary} Tk</p>
            <p><span className="font-semibold">Experience:</span> {app.experience}</p>

            <p className="mt-2">
              <span className="font-semibold">Message:</span> {app.message}
            </p>

            {/* Status */}
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
          
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => handleConfirm(app.id)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                  Confirm
                </button>
                <button
                
                  className="bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Reject
                </button>
              </div>
         

            
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedTutors;