import React, { useRef, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const AppliedTuition = () => {
  const tutorModalRef = useRef()
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [tuition, setTuition] = useState(null)
  // Fetch available tuition posts
  const { data: tuitions = [], refetch } = useQuery({
    queryKey: ["availableTuitions"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/new-tuitions?status=approve`);
      return res.data;
    },
  });

  // Apply to a tuition
  const handleApply = async (tuition) => {
    tutorModalRef.current.showModal()
   
    setTuition(tuition)
   
   
  };
 
  const onSubmit =async (data) => {
    
    
     try {
      const application = {
        tutorEmail: user.email,
        tutorName: user.displayName ,
        status: "ongoing",
        qualification:data.qualification ,
        experience: data.experience,
        expectedSalary: data.expectedSalary
      };

      const res = await axiosSecure.patch(`/new-tuitions/status/${tuition._id}`, application);

      if (res.data.modifiedCount) {
        tutorModalRef.current.close()
        Swal.fire({
          icon: "success",
          title: "Applied Successfully!",
          timer: 1500,
          showConfirmButton: false,
        });
        refetch();
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Application Failed",
      });
    }
    
  }

  return (
    <div className="container mx-auto p-4">
  <h1 className="text-2xl font-bold mb-6">Available Tuitions {tuitions.length}</h1>

  <div className="overflow-x-auto shadow-xl rounded-lg">
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead className="bg-gray-50 dark:bg-gray-700">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
            Student Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
            Subject & Class
          </th>
          <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
            Location
          </th>
          <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
            Budget
          </th>
          <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>

      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200">
        {tuitions.length === 0 && (
          <tr>
            <td colSpan="6" className="text-center text-gray-500 py-4">
              No tuition posts available.
            </td>
          </tr>
        )}

        {tuitions.map((tuition) => (
          <tr
            key={tuition._id}
            className="hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150"
          >
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                {tuition.studentName}
              </div>
              <div className="text-xs text-gray-500">{tuition.studentEmail}</div>
            </td>

            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900 dark:text-gray-300">
                {tuition.studentSubjects}
              </div>
              <div className="text-xs text-gray-500">Class: {tuition.studentClass}</div>
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
              {tuition.studentLocation}
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
              ${tuition.studentBudget}
            </td>

            <td className="px-6 py-4 whitespace-nowrap">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  tuition.status === "pending"
                    ? "bg-yellow-500 text-black"
                    : tuition.status === "applied"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-400 text-black"
                }`}
              >
                {tuition.status.toUpperCase()}
              </span>
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-center flex justify-center gap-2">
              
              <button
                  onClick={() =>  handleApply(tuition)}
                  className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition text-sm"
                >
                  Apply
                </button>
            </td>
          </tr>
          
        ))}
      </tbody>
    </table>
    {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog ref={tutorModalRef} className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div className=" flex items-center justify-center  p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Tutor Details
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit( onSubmit)}>
          {/* Tutor Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Tutor Name
            </label>
            <input
              type="text"
              readOnly
              defaultValue={user.displayName}
              placeholder="Enter tutor name"
              {...register("tutorName", { required: "Tutor Name is required" })}
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 ${
                errors.tutorName ? "border-red-500" : ""
              }`}
            />
            {errors.tutorName && (
              <p className="text-red-500 text-sm mt-1">{errors.tutorName.message}</p>
            )}
          </div>

          {/* Tutor Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Tutor Email
            </label>
            <input
              type="text"
              readOnly
              placeholder="Enter tutor email"
              {...register("tutorEmail", { required: "Tutor Name is required" })}
              defaultValue={user.email}
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 `}
            />
           
          </div>

          {/* Qualification */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Qualification
            </label>
            <input
              type="text"
              placeholder="Enter qualification"
              {...register("qualification", { required: "Qualification is required" })}
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 ${
                errors.qualification ? "border-red-500" : ""
              }`}
            />
            {errors.qualification && (
              <p className="text-red-500 text-sm mt-1">{errors.qualification.message}</p>
            )}
          </div>

          {/* Experience */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Experience (years)
            </label>
            <input
              type="number"
              placeholder="Enter experience"
              {...register("experience", {
                required: "Experience is required",
                min: { value: 0, message: "Experience cannot be negative" },
              })}
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 ${
                errors.experience ? "border-red-500" : ""
              }`}
            />
            {errors.experience && (
              <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>
            )}
          </div>

          {/* Expected Salary */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Expected Salary
            </label>
            <input
              type="number"
              placeholder="Enter expected salary"
              {...register("expectedSalary", {
                required: "Expected salary is required",
                min: { value: 0, message: "Salary cannot be negative" },
              })}
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 ${
                errors.expectedSalary ? "border-red-500" : ""
              }`}
            />
            {errors.expectedSalary && (
              <p className="text-red-500 text-sm mt-1">{errors.expectedSalary.message}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="w-1/2 mr-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => reset()}
              className="w-1/2 ml-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300"
            >
              Reject
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</dialog>
  </div>
</div>

  );
};

export default AppliedTuition;
