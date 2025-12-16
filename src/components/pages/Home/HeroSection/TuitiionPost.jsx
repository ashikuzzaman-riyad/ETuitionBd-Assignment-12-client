import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const TuitionPost = () => {



const axiosSecure = useAxiosSecure();
  const { data: tuition = [], } = useQuery({
    queryKey: ["myTuitions", ],
    queryFn: async () => {
      const res = await axiosSecure.get(`/new-tuitions`);
      return res.data.slice(0, 4);
    },
  });

    return (
       <div className="grid grid-cols-1 container mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {tuition.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 shadow-md rounded-xl p-5 bg-white hover:shadow-xl transition-all duration-300"
        >
          <h2 className="text-xl font-semibold mb-2">
            {item.studentName}
          </h2>

          <p><span className="font-semibold">Subject:</span> {item.studentSubjects}</p>
          <p><span className="font-semibold">Class:</span> {item.studentClass}</p>
          <p><span className="font-semibold">Location:</span> {item.studentLocation}</p>
          <p><span className="font-semibold">Budget:</span> {item.studentBudget} ৳</p>
          <p><span className="font-semibold">Mode:</span> {item.studentMode}</p>

          <p className="text-sm mt-2">
            <span className="font-semibold">Details:</span> {item.studentDetails}
          </p>

          <div className="mt-3 text-sm">
            <p><span className="font-semibold">Email:</span> {item.studentEmail}</p>
            <p><span className="font-semibold">Contact Time:</span> {item.contact_time}</p>
          </div>

          {/* Status Badge */}
          <p
            className={`mt-3 px-3 py-1 w-fit rounded-lg text-sm capitalize ${
              item.status === "pending"
                ? "bg-yellow-100 text-yellow-700"
                : item.status === "approved"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {item.status}
          </p>

          <p className="text-xs text-gray-500 mt-2">
            Created: {new Date(item.createdAt).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
    );
};

export default TuitionPost;