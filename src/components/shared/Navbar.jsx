import { useState } from "react";

import { TbXboxX } from "react-icons/tb";
import { CiMenuBurger } from "react-icons/ci";
import { useAuth } from "../hooks/useAuth";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, LogOut } = useAuth();

  const handleLogOut = async () => {
    try {
      await LogOut();
    } catch (error) {
      console.error(error);
    }
  };

  const links = [
    { name: "Home", to: "/" },
    { name: "Tuitions", to: "/tuitions" },
    { name: "Tutors", to: "/tutors" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-5 lg:px-20">
        {/* Logo */}
        <div className="flex gap-5 items-center text-green-500 text-2xl font-bold hidden md:block">
          <Link to="/" className="flex items-center gap-2">
            <img
              className="w-[50px]"
              src="https://i.ibb.co/RTk6zL5F/text-books-library-isolated-icon-24877-83372.jpg"
              alt="Logo"
            />
            <h1>E-TuitionBd</h1>
          </Link>
        </div>

        {/* Menu Links */}
        <ul className="hidden md:flex gap-6 font-medium">
          {links.map((link) => (
            <NavLink
        to={link.to}
        className={({ isActive }) =>
          `px-3 py-1 rounded-md transition-all duration-300 ${
            isActive
              ? "bg-green-500 text-white font-semibold shadow-md"
              : "text-gray-800 hover:bg-green-500 hover:text-white"
          }`
        }
      >
        {link.name}
      </NavLink>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Menu Toggle">
            {open ? <TbXboxX size={24} /> : <CiMenuBurger size={24} />}
          </button>
        </div>

        {/* Auth/Profile */}
        <div className="flex items-center gap-4 relative">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="focus:outline-none"
              >
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-green-500"
                />
              </button>

              {/* Profile Dropdown */}
              <ul
                className={`absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                  profileOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <li>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-green-500 hover:text-white transition-colors"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/my-activates"
                    className="block px-4 py-2 hover:bg-green-500 hover:text-white transition-colors"
                  >
                    My Activates
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="w-full text-left px-4 py-2 hover:bg-green-500 hover:text-white transition-colors"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link
                to="/login"
                className="px-4 py-2 text-green-500 border border-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden bg-white border-t border-gray-200 shadow-lg flex flex-col gap-3 px-5 py-4 transition-all duration-300 ${
          open
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {links.map((link) => (
          <li key={link.name} className="py-2">
            <Link
              to={link.to}
              className="block text-gray-800 hover:text-green-500"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
