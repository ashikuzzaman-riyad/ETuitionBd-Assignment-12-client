import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Link } from "react-router";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const [role, setRole] = useState("student");

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const finalData = { ...data, role };
    console.log(finalData);
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center py-12 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg border border-green-100">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Create an Account
        </h2>

        {/* Role Select */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setRole("student")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              role === "student"
                ? "bg-green-500 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-green-100"
            }`}
          >
            Student
          </button>

          <button
            onClick={() => setRole("tutor")}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              role === "tutor"
                ? "bg-green-500 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-green-100"
            }`}
          >
            Tutor
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div>
            <label className="text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
            {errors.name && (
              <p className="text-rose-600 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-700 font-semibold">Email Address</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: /^\S+@\S+\.\S+$/,
              })}
              placeholder="example@gmail.com"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
            {errors.email && (
              <p className="text-rose-600 text-sm mt-1">
                Valid email is required
              </p>
            )}
          </div>
          {/* photo */}
          <div>
            <label className="text-gray-700 font-semibold">Email Address</label>
            <input
               type="file"
              {...register("email", {
                required: "Email is required",
                pattern: /^\S+@\S+\.\S+$/,
              })}
              placeholder="example@gmail.com"
              className="w-full file-input  rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
            {errors.email && (
              <p className="text-rose-600 text-sm mt-1">
                Valid email is required
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{6,}$/,
              })}
              placeholder="********"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
            {errors.password && (
              <p className="text-rose-600 text-sm mt-1">
                At least 1 uppercase 1 lowercase least 1 special character
                Minimum 6 characters
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="text-gray-700 font-semibold">Phone Number</label>
            <input
              type="text"
              {...register("phone", {
                required: "Phone is required",
                minLength: 11,
              })}
              placeholder="+880 1234 567890"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
            {errors.phone && (
              <p className="text-rose-600 text-sm mt-1">
                Valid phone number is required
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-all shadow-md"
          >
            Register
          </button>
        </form>

        <p className="text-center my-3">or</p>
        <SocialLogin></SocialLogin>
        <p className="text-center text-gray-600 mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
