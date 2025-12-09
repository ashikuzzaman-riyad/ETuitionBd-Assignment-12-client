import React from 'react';

const MyTuitions = () => {
   const demoTuitions = [
    {
      id: 1,
      name: "Riyad Hossen",
      subject: "Mathematics",
      class: "8",
      location: "Mirpur-10",
      budget: "3000",
      mode: "Offline",
      details: "Evening time preferred. Experienced tutor needed.",
      contact: "01712345678",
      time: "After 6pm",
    },
    {
      id: 2,
      name: "Samiul Islam",
      subject: "English",
      class: "6",
      location: "Dhanmondi",
      budget: "3500",
      mode: "Online",
      details: "Female tutor preferred. 5 days/week.",
      contact: "samiul@gmail.com",
      time: "Anytime",
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      subject: "Physics",
      class: "10",
      location: "Uttara",
      budget: "4500",
      mode: "Offline",
      details: "Weekend classes preferred.",
      contact: "01812345678",
      time: "After 4pm",
    },
  ];

  return (
    <div className="container mx-auto p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {demoTuitions.map((item) => (
        <div
          key={item.id}
          className="border rounded-xl p-5 shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-green-600 mb-2">
            {item.subject} ({item.class})
          </h2>

          <p><span className="font-semibold">Name:</span> {item.name}</p>
          <p><span className="font-semibold">Location:</span> {item.location}</p>
          <p><span className="font-semibold">Budget:</span> {item.budget} Tk</p>
          <p><span className="font-semibold">Mode:</span> {item.mode}</p>

          <p className="mt-2">
            <span className="font-semibold">Details:</span> {item.details}
          </p>

          <p className="mt-2">
            <span className="font-semibold">Contact:</span> {item.contact}
          </p>

          <p>
            <span className="font-semibold">When to contact:</span> {item.time}
          </p>

         
        </div>
      ))}
    </div>
  );
};

export default MyTuitions;