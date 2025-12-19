import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

import EmptyState from "../shared/EmptyState";

import { GiTeacher } from "react-icons/gi";

const TutorCard = () => {
  

  const [tutors, setTutors] = useState([]);
  const axiosSecure = useAxiosSecure();
  const tutor = tutors.slice(0, 8);
  useEffect(() => {
    axiosSecure.get("/users/tutors").then((res) => setTutors(res.data));
  }, [axiosSecure]);
  if (tutor.length === 0) {
    return (
      <div className="my-8">
        <EmptyState
          icon={GiTeacher}
          title="No Tutor Available "
          description="No Tutor available at the moment.
Please check back later or try adjusting your filters!"
        />
        ;
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 container mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {tutor.map((tutor, index) => (
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
