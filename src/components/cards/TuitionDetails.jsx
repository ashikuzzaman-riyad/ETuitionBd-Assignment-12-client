import { FaBook, FaMapMarkerAlt, FaMoneyBillWave, FaClock, FaUser } from "react-icons/fa";
import {  Link, useParams } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../shared/Loading";

const TuitionDetails = () => {
   const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: tuition, isLoading, isError } = useQuery({
    queryKey: ["tuition-details", id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axiosSecure.get(`/new-tuitions/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  if (isError || !tuition) {
    return (
      <p className="text-center text-red-500 mt-10">
        Failed to load tuition details.
      </p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-6">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Tuition Details
          </h2>
          <span className="px-4 py-1 rounded-full text-sm font-medium bg-green-100 text-green-600">
            {tuition.status}
          </span>
        </div>

        {/* Student Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <Info label="Student Name" value={tuition.studentName} icon={<FaUser />} />
          <Info label="Class" value={`Class ${tuition.studentClass}`} icon={<FaBook />} />
          <Info label="Subject" value={tuition.studentSubjects} icon={<FaBook />} />
          <Info label="Mode" value={tuition.studentMode} />
          <Info label="Location" value={tuition.studentLocation} icon={<FaMapMarkerAlt />} />
          <Info label="Budget" value={`৳ ${tuition.studentBudget}`} icon={<FaMoneyBillWave />} />
        </div>

        {/* Extra Details */}
        <div className="bg-gray-50 p-4 rounded-xl space-y-2">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Details:</span> {tuition.studentDetails}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Contact Time:</span> {tuition.contact_time}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Email:</span> {tuition.studentEmail}
          </p>
          <p className="text-xs text-gray-400 flex items-center gap-1">
            <FaClock /> Posted on {tuition.createdAt}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button   className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl transition">
            <Link to='/dashboard/apply-tuitions'>
            Apply Now
            </Link>
          </button>
          <button className="flex-1 border border-gray-300 hover:bg-gray-100 py-2 rounded-xl transition">
            Save
          </button>
        </div>

      </div>
    </div>
  );
};

const Info = ({ label, value, icon }) => (
  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
    {icon && <span className="text-green-600">{icon}</span>}
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-medium text-gray-800">{value}</p>
    </div>
  </div>
);

export default TuitionDetails;
