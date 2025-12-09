import { useState } from "react";
import { TbXboxX } from "react-icons/tb";
import { CiMenuBurger } from "react-icons/ci";

import { Link, NavLink } from "react-router";
import { useAuth } from "../hooks/useAuth";
import Logo from "./Logo";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, logOut } = useAuth();

  

  const links = [
    { name: "Home", to: "/" },
    { name: "Tuitions", to: "/tuitions" },
    { name: "Tutors", to: "/tutors" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];
 const handleLogOut = () => {
  logOut()
  .then(res => {
    console.log(res.user)
  }).catch(error => {
    console.log(error.message)
  })
 }
  return (
   <>
      {/* Fixed Navbar - Always stays on top */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="container mx-auto flex items-center justify-between py-3 px-5 ">

          {/* Logo */}
          <div  className="hidden md:block">
            <Link>
            <Logo></Logo>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 font-medium">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-green-500 text-white font-bold shadow-md'
                      : 'text-gray-700 hover:bg-green-500 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700 z-50"
            aria-label="Toggle menu"
          >
            {open ? <TbXboxX size={28} /> : <CiMenuBurger size={28} />}
          </button>

          {/* Auth / Profile */}
          <div className="hidden md:flex items-center gap-4 relative">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="focus:outline-none"
                >
                  <img
                    src={user.photoURL || 'https://via.placeholder.com/40'}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-3 border-green-500 shadow-lg"
                  />
                </button>

                {/* Dropdown */}
                <ul
                  className={`absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-xl border overflow-hidden transition-all duration-300 origin-top-right ${
                    profileOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
                  }`}
                >
                 
                  <li>
                    <Link
                      to="/dashboard"
                      className="block px-5 py-3 hover:bg-green-500 hover:text-white transition"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="w-full text-left px-5 py-3 hover:bg-red-500 hover:text-white transition"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex gap-3">
                <Link
                  to="/login"
                  className="px-5 py-2 border-2 border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu - Slides Down Smoothly */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t-2 border-green-500 transition-all duration-500 ease-in-out overflow-hidden ${
            open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="py-4 px-6 space-y-3">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 px-4 rounded-lg text-lg font-medium transition ${
                      isActive
                        ? 'bg-green-500 text-white'
                        : 'text-gray-700 hover:bg-green-100'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            {/* Mobile Auth Buttons */}
            {!user && (
              <div className="pt-4 border-t border-gray-200 mt-4 space-y-3">
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="block text-center py-3 border-2 border-green-500 text-green-500 rounded-lg font-medium hover:bg-green-500 hover:text-white transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="block text-center py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </ul>
        </div>
      </nav>

     
    </>
  );
};

export default Navbar;
