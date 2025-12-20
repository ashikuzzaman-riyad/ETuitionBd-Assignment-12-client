
import { useAuth } from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

import EmptyState from "../../shared/EmptyState";
import { FaPersonDotsFromLine } from "react-icons/fa6";
import Loading from "../../shared/Loading";

const MyApplications = () => {
 

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: tuition = [], isLoading } = useQuery({
    queryKey: ["myApplication", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/tutor-apply/email?tutorEmail=${user.email}&status=pending`
      );
      return res.data;
    },
  });
  if(isLoading) return <Loading></Loading>
 
   if(tuition.length === 0) {
    return <>
    <EmptyState
  icon={FaPersonDotsFromLine}
  title="No Applications Yet"
  description="You haven't applied to any tuition jobs yet. There are hundreds of students waiting for a tutor like you!"
  primaryAction={{
    label: "Find Tuitions Jobs",
    to: "/dashboard/apply-tuitions",
  }}
  secondaryAction={{
    label: "Ongoing",
    to: "/dashboard/ongoing",
  }}
/>;
    </>
   }
  return (
   <div className="container mx-auto p-6">
  <h1 className="text-3xl font-bold mb-8 text-gray-800">
    My Tuition Applications {tuition.length}
  </h1>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {tuition.map((app) => (
      <div
        key={app._id}
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border"
      >
        {/* SUBJECT & CLASS */}
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-xl font-semibold text-indigo-600">
            {app.studentSubjects}
          </h2>
          <span className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
            Class {app.studentClass}
          </span>
        </div>

        {/* STUDENT INFO */}
        <p className="text-gray-700 mb-1">
          <span className="font-medium">Student:</span>{" "}
          {app.studentName}
        </p>

        <p className="text-gray-700 mb-1">
          <span className="font-medium">Location:</span>{" "}
          {app.studentLocation}
        </p>

        <p className="text-gray-700 mb-1">
          <span className="font-medium">Mode:</span>{" "}
          {app.studentMode}
        </p>

        <hr className="my-4" />

        {/* TUTOR INFO */}
        <p className="text-gray-700 mb-1">
          <span className="font-medium">Your Qualification:</span>{" "}
          {app.qualification}
        </p>

        <p className="text-gray-700 mb-1">
          <span className="font-medium">Experience:</span>{" "}
          {app.experience} year(s)
        </p>

        <p className="text-gray-700 mb-1">
          <span className="font-medium">Expected Salary:</span>{" "}
          {app.expectedSalary} Tk
        </p>

        {/* STATUS */}
        <div className="mt-4">
          <span className="font-medium text-gray-700">Status:</span>{" "}
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
              app.status === "ongoing"
                ? "bg-green-100 text-green-700"
                : app.status === "rejected"
                ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {app.status}
          </span>
        </div>

        {/* FOOTER */}
        <p className="mt-4 text-xs text-gray-400">
          Applied on{" "}
          {new Date(app.createdAt).toLocaleDateString()}
        </p>
      </div>
    ))}
  </div>
</div>

  );
};

export default MyApplications;
