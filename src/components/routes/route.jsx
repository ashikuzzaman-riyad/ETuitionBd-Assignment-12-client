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
import UserManagement from "../dashboard/admin/UserManagement";
import AllPaymentHistory from "../dashboard/admin/AllPaymentHistory";
import RevenueHistory from "../dashboard/admin/RevenueHistory";
import PrivateRoute from "./PrivateRoute";

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
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
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
        path: "user-management",
        element: <UserManagement></UserManagement>

      },
      {
        path: "all-payment-history",
        element: <AllPaymentHistory></AllPaymentHistory>

      },
      {
        path: "revenue-history",
        element: <RevenueHistory></RevenueHistory>

      },
      {
        path: "profile-setting",
        element: <ProfileSettings></ProfileSettings>

      },
    ],
  },
]);

export default router;
