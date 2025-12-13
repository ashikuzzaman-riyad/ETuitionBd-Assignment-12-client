import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';



const TutorCard = () => {
//     const tutors = [
//   {
//     role: "tutor",
//     email: "tutor@gmail.com",
//     displayName: "Riyad Hossen",
//     photoURL: "https://i.ibb.co/gFLYDwHV/615-6158403-github-logo-png-clipart-github-c.png",
//     phone: "01305634672",
//     createdAt: "2025-12-10T11:00:55.280Z"
//   },
//   {
//     role: "tutor",
//     email: "siam@gmail.com",
//     displayName: "Siam Khan",
//     photoURL: "https://i.ibb.co/gFLYDwHV/615-6158403-github-logo-png-clipart-github-c.png",
//     phone: "01711000000",
//     createdAt: "2025-12-09T09:20:55.280Z"
//   },
//   {
//     role: "tutor",
//     email: "mim@gmail.com",
//     displayName: "Afsana Mim",
//     photoURL: "https://i.ibb.co/gFLYDwHV/615-6158403-github-logo-png-clipart-github-c.png",
//     phone: "01489000000",
//     createdAt: "2025-12-08T13:40:55.280Z"
//   },
//   {
//     role: "tutor",
//     email: "tanvir@gmail.com",
//     displayName: "Tanvir Hasan",
//     photoURL: "https://i.ibb.co/gFLYDwHV/615-6158403-github-logo-png-clipart-github-c.png",
//     phone: "01570000000",
//     createdAt: "2025-12-07T10:20:55.280Z"
//   }
// ];

const [tutors, setTutors] = useState([]);
const axiosSecure = useAxiosSecure()

  useEffect(() => {
   axiosSecure.get("http://localhost:5000/users/tutors")
      .then(res => setTutors(res.data));
  }, [axiosSecure]);
  console.log(tutors)

    return (
         <div className="grid grid-cols-1 container mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {tutors.map((tutor, index) => (
        <div
          key={index}
          className="bg-white border shadow-md rounded-xl p-5 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
        >
          {/* Profile Image */}
          <img
            src={tutor.photoURL}
            alt={tutor.displayName}
            className="w-24 h-24 rounded-full object-cover border-4 border-green-500 shadow-md"
          />

          {/* Name */}
          <h2 className="text-xl font-semibold mt-3">{tutor.displayName}</h2>

          {/* Role Badge */}
          <p className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm mt-1 capitalize">
            {tutor.role}
          </p>

          {/* Email */}
          <p className="mt-2 text-gray-700">
            <span className="font-semibold">Email:</span> {tutor.email}
          </p>

          {/* Phone */}
          <p className="text-gray-700">
            <span className="font-semibold">Phone:</span> {tutor.phone}
          </p>

          {/* Created Date */}
          <p className="text-xs text-gray-500 mt-3">
            Joined: {new Date(tutor.createdAt).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
    );
};

export default TutorCard;