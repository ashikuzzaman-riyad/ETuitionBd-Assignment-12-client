import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Register from "../pages/Home/Auth/Register";
import Login from "../pages/Home/Auth/Login";
import Home from "../pages/Home/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import PostTuition from "../dashboard/student/PostTuition";
import ProfileSettings from "../dashboard/student/ProfileSettings";
import MyTuitions from "../dashboard/student/MyTuitions";
import Payments from "../dashboard/student/Payments";
import AppliedTutors from "../dashboard/student/AppliedTutors";
import MyApplications from "../dashboard/tutor/MyApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },

  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "new-tuitions",
        element: <PostTuition></PostTuition>

      },
      {
        path: "my-tuitions",
        element: <MyTuitions></MyTuitions>

      },
      {
        path: "payment",
        element: <Payments></Payments>

      },
      {
        path: "applied-tutor",
        element: <AppliedTutors></AppliedTutors>

      },
      {
        path: "my-application",
        element: <MyApplications></MyApplications>

      },
      {
        path: "profile-setting",
        element: <ProfileSettings></ProfileSettings>

      },
    ],
  },
]);

export default router;
