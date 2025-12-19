import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/Home/Error/ErrorPage";

import TuitionCard from "../cards/TuitionCard";
import TutorCard from "../cards/TutorCard";
import About from "../pages/Home/About/About";
import Register from "../pages/Home/Auth/Register";
import Login from "../pages/Home/Auth/Login";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import PostTuition from "../dashboard/student/PostTuition";
import MyTuitions from "../dashboard/student/MyTuitions";
import Payments from "../dashboard/student/Payments";
import AppliedTutors from "../dashboard/student/AppliedTutors";
import MyApplications from "../dashboard/tutor/MyApplications";
import UsersManagement from "../dashboard/admin/UserManagement";
import AdminRoute from "./AdminRoute";
import AllPaymentHistory from "../dashboard/admin/AllPaymentHistory";
import RevenueHistory from "../dashboard/tutor/RevenueHistory";

import VewUserProfile from "../dashboard/admin/VewUserProfile";
import TuitionManagement from "../dashboard/admin/TuitionManagement";
import AppliedTuition from "../dashboard/tutor/AppliedTuition";
import OngoingTuitions from "../dashboard/tutor/OngoingTuitions";
import PaymentSuccess from "../dashboard/Payment/PaymentSuccess";
import PaymentCancel from "../dashboard/Payment/PaymentCancel";
import AdminTotalEarnings from "../dashboard/admin/AdminTotalEarnings";
import ProfileSetting from "../dashboard/ProfileSetting";
import Home from "../pages/Home/Home";
import Contact from "../pages/Home/Contact/Contact";
import TutorRoute from "./TutorRoute";
import AdminHome from "../dashboard/admin/AdminHome";
import TuitionDetails from "../cards/TuitionDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/tuition-card",
        element: <TuitionCard></TuitionCard>,
      },
      {
        path: "/tutors",
        element: <TutorCard></TutorCard>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "tuition-details/:id",
        element: <TuitionDetails></TuitionDetails>,
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
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "new-tuitions",
        element: <PostTuition></PostTuition>,
      },
      {
        path: "my-tuitions",
        element: <MyTuitions></MyTuitions>,
      },
      {
        path: "payment",
        element: <Payments></Payments>,
      },
      {
        path: "applied-tutor",
        element: <AppliedTutors></AppliedTutors>,
      },
      {
        path: "my-application",
        element: <MyApplications></MyApplications>,
      },
      {
        path: "user-management",
        element: (
          <AdminRoute>
            <UsersManagement></UsersManagement>
          </AdminRoute>
        ),
      },

      {
        path: "all-payment-history",
        element: (
          <AdminRoute>
            <AllPaymentHistory></AllPaymentHistory>
          </AdminRoute>
        ),
      },
      {
        path: "vew-total-earning",
        element: (
          <AdminRoute>
            <AdminTotalEarnings></AdminTotalEarnings>
          </AdminRoute>
        ),
      },

      {
        path: "vew-user/:id",
        element: (
          <AdminRoute>
            {" "}
            <VewUserProfile></VewUserProfile>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/users/${params.id}`),
      },
      {
        path: "tuitions-management",
        element: (
          <AdminRoute>
            {" "}
            <TuitionManagement></TuitionManagement>
          </AdminRoute>
        ),
      },
      {
        path: "apply-tuitions",
        element: (
          <TutorRoute>
            <AppliedTuition></AppliedTuition>
          </TutorRoute>
        ),
      },
      {
        path: "ongoing",
        element: (
          <TutorRoute>
            <OngoingTuitions></OngoingTuitions>
          </TutorRoute>
        ),
      },
      {
        path: "revenue-history",
        element: (
          <TutorRoute>
            <RevenueHistory></RevenueHistory>
          </TutorRoute>
        ),
      },
      {
        path: "payment-success",
        element: <PaymentSuccess />,
      },
      {
        path: "payment-cancelled",
        element: <PaymentCancel />,
      },

      {
        path: "profile-setting",
        element: <ProfileSetting></ProfileSetting>,
      },
    ],
  },
]);

export default router;
