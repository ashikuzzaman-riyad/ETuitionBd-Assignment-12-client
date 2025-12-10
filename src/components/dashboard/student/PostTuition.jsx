import { data } from "autoprefixer";
import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Navigate, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useAuth } from "../../hooks/useAuth";

const PostTuition = () => {
  // Removed formState: { errors } to simplify and remove error messages from UI
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
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
  const {user} = useAuth()

  const classOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  function onSubmit(data) {
     const newTuition = {
    ...data,
    status: "pending",
    createdAt: new Date(),
  };
    axiosSecure
      .post("/new-tuitions", newTuition)
      .then((res) => {
        console.log("after post data in parcels", res.data);
        if (res.data.insertedId) {
          navigate("/dashboard/my-tuitions");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Tuition has been added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Create Tuition Post</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name  */}
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            {...register("studentName")}
            placeholder="Your name "
            className="w-full border rounded p-2"
            defaultValue={user?.displayName}d
          />
        </div>

        {/* Subjects (Required) */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Subjects (**Choose one**)<span className="text-red-500">*</span>
          </label>
          <select
            // Validation remains active here
            {...register("studentSubjects", { required: "Please select a subject." })}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Class (Required) */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Class<span className="text-red-500">*</span>
            </label>
            <select
              // Validation remains active here
              {...register("studentClass", { required: "Class is required." })}
              className="w-full border rounded p-2"
            >
              <option value="">Select class (1-10)</option>
              {classOptions.map((c) => (
                <option key={c} value={c}>{`Class ${c}`}</option>
              ))}
            </select>
          </div>

          {/* Location (Required) */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Location<span className="text-red-500">*</span>
            </label>
            <input
              // Validation remains active here
              {...register("studentLocation", { required: "Location is required." })}
              placeholder="City / Area"
              className="w-full border rounded p-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Budget (Required, Number validation) */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Budget (per month)<span className="text-red-500">*</span>
            </label>
            <input
              {...register("studentBudget", {
                required: "Budget is required.",
                min: { value: 1, message: "Must be a positive number." },
                valueAsNumber: true,
              })}
              placeholder="e.g. 3000"
              type="number"
              className="w-full border rounded p-2"
            />
          </div>

          {/* Preferred Mode (Required) */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Preferred Mode<span className="text-red-500">*</span>
            </label>
            <select
              // Validation remains active here
              {...register("studentMode", { required: "Mode is required." })}
              className="w-full border rounded p-2"
            >
              <option value="">Select mode</option>
              <option value="in-person">In-person</option>
              <option value="online">Online</option>
              <option value="either">Either</option>
            </select>
          </div>
        </div>

        {/* Details / Requirements (Required) */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Details / Requirements<span className="text-red-500">*</span>
          </label>
          <textarea
            // Validation remains active here
            {...register("studentDetails", {
              required: "Please describe your requirements.",
            })}
            rows={4}
            placeholder="Write any additional info (timing, experience preference, etc.)"
            className="w-full border rounded p-2"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Contact (Required, Basic Pattern Validation) */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Student Email <span className="text-red-500">*</span>
            </label>
            <input
              {...register("studentEmail", {
                required: "Contact info is required.",
                pattern: {
                  value: /^\S+@\S+\.\S+$|^\+?\d{10,15}$/,
                  message: "Must be a valid email or phone number.",
                },
              })}
              placeholder="Phone or email"
              className="w-full border rounded p-2"
              defaultValue={user?.email}
            />
          </div>

          {/* When to contact (Required) */}
          <div>
            <label className="block text-sm font-medium mb-1">
              When to contact<span className="text-red-500">*</span>
            </label>
            <input
              // Validation remains active here
              {...register("contact_time", {
                required: "Contact time preference is required.",
              })}
              placeholder="e.g. After 6pm"
              className="w-full border rounded p-2"
              
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition"
          >
            Post Tuition
          </button>
          <button
            type="button"
            
            className="px-4 py-2 rounded-xl border hover:bg-gray-100 transition"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostTuition;
