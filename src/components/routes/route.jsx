import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Register from "../pages/Home/Auth/Register";
import Login from "../pages/Home/Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },

  {
path: '/register',
element: <Register></Register>
},
{
  path: '/login',
  element: <Login></Login>
}
]

);

export default router;
