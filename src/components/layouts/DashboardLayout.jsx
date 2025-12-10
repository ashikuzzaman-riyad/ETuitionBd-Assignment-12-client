import React from "react";
import { FaChalkboardTeacher, FaHandHoldingUsd, FaUserCog } from "react-icons/fa";
import { GrStatusUnknownSmall, GrUserManager } from "react-icons/gr";
import { BsBookHalf } from "react-icons/bs";
import { VscGitStashApply } from "react-icons/vsc";
import { Link, NavLink, Outlet } from "react-router";
import { PiStudentThin } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import { FaGear, FaPersonDotsFromLine } from "react-icons/fa6";
import { SiScikitlearn } from "react-icons/si";
import { TbCreditCardPay } from "react-icons/tb";
import Logo from "../shared/Logo";


const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="px-4">Navbar Title</div>
        </nav>
        {/* outlet */}
        <Outlet></Outlet>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* List item */}
            
             <li>
                <Link to='/'><img src='https://i.ibb.co/RTk6zL5F/text-books-library-isolated-icon-24877-83372.jpg'  className="w-10 md:12" alt="" /></Link>
              </li>
            {/* student layout */}

            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                {/* Home icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span className="is-drawer-close:hidden">Homepage</span>
              </button>
            </li>
            {/* My Tuitions */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip=" My Tuitions"
              >
                {/* Home icon */}
                <NavLink
                  className="hover:text-green-600"
                  to="/dashboard/my-tuitions"
                >
                  <PiStudentThin className="my-1.5 inline-block size-4" />
                  <span className="is-drawer-close:hidden">My Tuitions</span>
                </NavLink>
              </button>
            </li>
            {/* New Tuitions */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="New Tuitions "
              >
                {/* Home icon */}
                <NavLink
                  className="hover:text-green-600"
                  to="/dashboard/new-tuitions"
                >
                  <VscGitStashApply className="my-1.5 inline-block size-4" />
                  <span className="is-drawer-close:hidden">My-Parcel</span>
                </NavLink>
              </button>
            </li>
            {/* Applied Tutor */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Applied Tutor"
              >
                {/* Home icon */}
                <NavLink
                  className="hover:text-green-600"
                  to="/dashboard/applied-tutor"
                >
                  <FaChalkboardTeacher className="my-1.5 inline-block size-4" />
                  <span className="is-drawer-close:hidden">Applied Tutor</span>
                </NavLink>
              </button>
            </li>
            {/* Payment */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Payment"
              >
                {/* Home icon */}
                <NavLink
                  className="hover:text-green-600"
                  to="/dashboard/payment"
                >
                  <MdPayment className="my-1.5 inline-block size-4" />
                  <span className="is-drawer-close:hidden">Payment</span>
                </NavLink>
              </button>
            </li>
            {/* tutor navLink */}

            {/* My Application */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Application"
              >
                <NavLink
                  className="hover:text-green-600"
                  to="/dashboard/my-application"
                >
                  <FaPersonDotsFromLine className="my-1.5 inline-block size-4" />
                  <span className="is-drawer-close:hidden">My Application</span>
                </NavLink>
              </button>
            </li>
            {/* status ongoing */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip=" ongoing"
              >
                <NavLink
                  className="hover:text-green-600"
                  to="/dashboard/ongoing"
                >
                  <GrStatusUnknownSmall className="my-1.5 inline-block size-4" />
                  <span className="is-drawer-close:hidden">Ongoing</span>
                </NavLink>
              </button>
            </li>

            {/* Apply Tuitions */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Applied Tuitions"
              >
                <NavLink
                  className="hover:text-green-600"
                  to="/dashboard/apply-tuitions"
                >
                  <BsBookHalf className="my-1.5 inline-block size-4" />
                  <span className="is-drawer-close:hidden">Apply Tuitions</span>
                </NavLink>
              </button>
            </li>
            {/* Revenue History */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Revenue History "
              >
                <NavLink
                  className="hover:text-green-600"
                  to="/dashboard/revenue-history"
                >
                  <FaHandHoldingUsd className="my-1.5 inline-block size-4" />
                  <span className="is-drawer-close:hidden">
                    Revenue History
                  </span>
                </NavLink>
              </button>
            </li>
            {/* Admin route */}
                 

                 {/* User */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="User Management"
              >
                <NavLink
                  className="hover:text-green-600"
                  to="/dashboard/user-management"
                >
                  <FaUserCog className="my-1.5 inline-block size-4" />
                  <span className="is-drawer-close:hidden">User Management</span>
                </NavLink>
              </button>
            </li>
            {/* Tuitions Management */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip=" Tuitions Management"
              >
                <NavLink
                  className="hover:text-green-600"
                  to="/dashboard/tuitions-management"
                >
                  <GrUserManager className="my-1.5 inline-block size-4" />
                  <span className="is-drawer-close:hidden">Tuitions Management</span>
                </NavLink>
              </button>
            </li>

            {/* Vew Total Earning */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Vew Total Earning"
              >
                <NavLink
                  className="hover:text-green-600"
                  to="/dashboard/vew-total-earning "
                >
                  <SiScikitlearn className="my-1.5 inline-block size-4" />
                  <span className="is-drawer-close:hidden">Vew Total Earning </span>
                </NavLink>
              </button>
            </li>
            {/* all payment History */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="All Payment History "
              >
                <NavLink
                  className="hover:text-green-600"
                  to="/dashboard/all-payment-history"
                >
                  <TbCreditCardPay className="my-1.5 inline-block size-4" />
                  <span className="is-drawer-close:hidden">
                    All Payment History
                  </span>
                </NavLink>
              </button>
            </li>
            {/* List item */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Profile Settings"
              >
                {/* Settings icon */}
               <NavLink
                  className="hover:text-green-600"
                  to="/dashboard/Profile-setting"
                >
                  <FaGear  className="my-1.5 inline-block size-4" />
                  <span className="is-drawer-close:hidden">
                    Profile Setting
                  </span>
                </NavLink>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
