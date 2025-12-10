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
import UpadetTuitions from "../dashboard/student/UpadetTuitions";
import TuitionCard from "../cards/TuitionCard";
import About from "../pages/Home/About/About";
import Contact from "../pages/Home/Contact/Contact";
import ErrorPage from "../pages/Home/Error/ErrorPage";
import VewUserProfile from "../dashboard/admin/VewUserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path:'/tuition-card',
        element:<TuitionCard></TuitionCard>
      },
      {
        path:'/tutors',
        element: <TuitionCard></TuitionCard>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
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
        path: "upadet-tuitions/:id",
        element: <UpadetTuitions></UpadetTuitions>,
        loader: ({ params }) => 
  fetch(`http://localhost:5000/new-tuitions/${params.id}`)
    


      },
      {
        path:'vew-user/:id',
        element: <VewUserProfile></VewUserProfile>,
         loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
      },
     
      {
        path: "profile-setting",
        element: <ProfileSettings></ProfileSettings>,
        

      },
      
    ],
  },
]);

export default router;
