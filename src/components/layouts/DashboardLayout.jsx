import React, { useState } from "react";

import { GrStatusUnknownSmall, GrUserManager } from "react-icons/gr";
import { BsBookHalf } from "react-icons/bs";
import { VscGitStashApply } from "react-icons/vsc";
import { Link, NavLink, Outlet } from "react-router";
import { PiStudentThin } from "react-icons/pi";
import { MdPayment, MdOutlineHome } from "react-icons/md";
import { SiScikitlearn } from "react-icons/si";
import { TbCreditCardPay } from "react-icons/tb";
import useRole from "../hooks/useRole";
import { FaChalkboardTeacher, FaHandHoldingUsd, FaUserCog } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight, FaGear, FaPersonDotsFromLine } from "react-icons/fa6";
import { useAuth } from "../hooks/useAuth";

// Refined Sidebar Item for Collapsible Mode
const SidebarItem = ({ to, icon: Icon, label, isCollapsed }) => (
  <li className={isCollapsed ? "tooltip tooltip-right" : ""} data-tip={label}>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center px-4 py-3 rounded-xl transition-all duration-300 group ${
          isActive 
            ? "bg-primary text-primary-content shadow-lg shadow-primary/20" 
            : "text-base-content/70 hover:text-primary"
        }`
      }
    >
      {/* Fixed width icon so it never moves */}
      <Icon className="size-5 min-w-[20px] shrink-0" />
      
      {/* The Text Label */}
      <span 
        className={`font-medium transition-all duration-300 whitespace-nowrap overflow-hidden ${
          isCollapsed 
            ? "w-0 opacity-0 ml-0" 
            : "w-48 opacity-100 ml-4"
        }`}
      >
        {label}
      </span>
    </NavLink>
  </li>
);

const DashboardLayout = () => {
  const {user} = useAuth()
  const { role } = useRole();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="drawer lg:drawer-open  min-h-screen">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      
      {/* Main Content */}
      <div className="drawer-content flex flex-col  transition-all duration-300">
        {/* Navbar */}
        <div className="navbar w-full bg-base-100/80 border-b border-base-200 px-6 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex-1">
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
            <h1 className="text-xl font-bold tracking-tight px-2">Dashboard</h1>
          </div>
          
          <div className="flex-none gap-2">
             <div className="avatar placeholder border-2 border-primary/20 rounded-full p-0.5">
                <div className="bg-neutral text-neutral-content rounded-full w-9">
                  <span ><img src={user.photoURL} alt="" /></span>
                </div>
             </div>
          </div>
        </div>

        <main className="p-4 md:p-8">
          <Outlet />
        </main>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-30">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div 
          className={`flex flex-col h-full  border-r border-base-300 transition-all duration-300 ease-in-out p-4 ${
            isCollapsed ? "w-24" : "w-72"
          }`}
        >
          {/* Logo & Toggle Section */}
          <div className="flex items-center justify-between mb-8 px-2">
            {!isCollapsed && (
              <Link to='/' className="flex items-center gap-3 animate-in fade-in duration-500">
                <div className="bg-primary p-2 rounded-lg">
                    <BsBookHalf className="text-primary-content size-5" />
                </div>
                <span className="text-xl font-black text-primary tracking-tighter">EDUCORE</span>
              </Link>
            )}
            <button 
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="btn btn-sm btn-circle btn-ghost text-primary hidden lg:flex"
            >
              {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
            </button>
          </div>

          {/* Navigation Links */}
          <ul  className="menu  menu-md p-0 gap-2 grow">
            <SidebarItem to='dashboard' icon={MdOutlineHome} label="Home" isCollapsed={isCollapsed} />
            
            <div className={`divider opacity-50 px-4 text-[10px] uppercase font-bold tracking-widest ${isCollapsed ? 'hidden' : ''}`}>
               Management
            </div>

            {role === "student" && (
              <>
                <SidebarItem to="/dashboard/my-tuitions" icon={PiStudentThin} label="My Tuitions" isCollapsed={isCollapsed} />
                <SidebarItem to="/dashboard/new-tuitions" icon={VscGitStashApply} label="New Tuitions" isCollapsed={isCollapsed} />
                <SidebarItem to="/dashboard/applied-tutor" icon={FaChalkboardTeacher} label="Applied Tutor" isCollapsed={isCollapsed} />
                <SidebarItem to="/dashboard/payment" icon={MdPayment} label="Payment" isCollapsed={isCollapsed} />
              </>
            )}

            {role === "tutor" && (
              <>
                <SidebarItem to="/dashboard/my-application" icon={FaPersonDotsFromLine} label="My Application" isCollapsed={isCollapsed} />
                <SidebarItem to="/dashboard/ongoing" icon={GrStatusUnknownSmall} label="Ongoing" isCollapsed={isCollapsed} />
                <SidebarItem to="/dashboard/apply-tuitions" icon={BsBookHalf} label="Apply Tuitions" isCollapsed={isCollapsed} />
                <SidebarItem to="/dashboard/revenue-history" icon={FaHandHoldingUsd} label="Revenue History" isCollapsed={isCollapsed} />
              </>
            )}

            {role === "admin" && (
              <>
                <SidebarItem to="/dashboard/user-management" icon={FaUserCog} label="User Management" isCollapsed={isCollapsed} />
                <SidebarItem to="/dashboard/tuitions-management" icon={GrUserManager} label="Tuition Management" isCollapsed={isCollapsed} />
                <SidebarItem to="/dashboard/vew-total-earning" icon={SiScikitlearn} label="Total Earning" isCollapsed={isCollapsed} />
                <SidebarItem to="/dashboard/all-payment-history" icon={TbCreditCardPay} label="Payment History" isCollapsed={isCollapsed} />
              </>
            )}
          </ul>

          {/* Footer Section */}
          <div className="mt-auto pt-4 border-t border-base-300">
            <SidebarItem to="/dashboard/Profile-setting" icon={FaGear} label="Settings" isCollapsed={isCollapsed} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;