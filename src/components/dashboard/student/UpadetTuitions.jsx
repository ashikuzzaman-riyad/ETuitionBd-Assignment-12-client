import React from "react";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData, useNavigate } from "react-router";

const UpdateTuitions = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const data = useLoaderData();
  const subjects = [
    "Bangla",
    "English",
    "Math",
    "Physics",
    "Chemistry",
    "Biology",
    "Higher Math",
    "ICT",
    "Bangladesh Studies",
    "Accounting",
    "Economics",
  ];
  const classOptions = Array.from({ length: 10 }, (_, i) => i + 1);
  // load default values in form
  const { register, handleSubmit, reset } = useForm();

  // PATCH Function
  const onSubmit = async (formData) => {
    console.log(formData);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-5">Update Tuition</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          {/* Class (Required) */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Subjects (Choose one)
            </label>
            <select
              // Validation remains active here
              {...register("studentSubjects")}
              className="w-full border rounded p-2"
            >
              <option value="">Select one subject</option>
              {subjects.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* class */}
        <div>
          <label className="block text-sm font-medium mb-1">Class</label>
          <select
            // Validation remains active here
            {...register("studentClass")}
            className="w-full border rounded p-2"
          >
            <option value="">Select class (1-10)</option>
            {classOptions.map((c) => (
              <option key={c} value={c}>{`Class ${c}`}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-semibold">Budget</label>
          <input
            type="number"
            {...register("studentBudget")}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Location</label>
          <input
            {...register("studentLocation")}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded w-full mt-4"
        >
          Update Tuition
        </button>
      </form>
    </div>
  );
};

export default UpdateTuitions;
