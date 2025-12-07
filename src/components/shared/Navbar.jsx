import React, { useState } from "react";
import { Link } from "react-router";
// Use react-router-dom for modern routing



const Navbar = ({ user, onLogout }) => {
  // State to handle mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function for the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // 1. Primary Navigation Links
  const NavLinks = (
    <>
      <li><Link to="/" onClick={closeMenu} className="hover:text-green-600 transition duration-150">Home</Link></li>
      <li><Link to="/tuitions" onClick={closeMenu} className="hover:text-green-600 transition duration-150">Tuitions</Link></li>
      <li><Link to="/tutors" onClick={closeMenu} className="hover:text-green-600 transition duration-150">Tutors</Link></li>
      <li><Link to="/about" onClick={closeMenu} className="hover:text-green-600 transition duration-150">About</Link></li>
      <li><Link to="/contact" onClick={closeMenu} className="hover:text-green-600 transition duration-150">Contact</Link></li>
    </>
  );

  return (
    <header
      // Simple sticky header without Framer Motion
      className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-gray-900/80 shadow-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Left: Logo and Brand Name */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              {/* Logo Icon */}
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-600 text-white shadow-lg flex-shrink-0">
                <span className="font-bold text-xl">E</span>
              </div>

              {/* Brand Text - Visible from sm screens up */}
              <div className="hidden sm:block">
                <span className="flex flex-col leading-tight">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">eTuitionBD</span>
                  <span className="text-xs opacity-70 text-gray-700 dark:text-gray-300">Online Tuition Platform</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Navigation links (Desktop) - Hidden on mobile */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4 font-medium text-gray-700 dark:text-gray-300">
              {NavLinks}
            </ul>
          </nav>

          {/* Right: Auth / User Menu (Desktop) - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-2">
            {!user ? (
              // Not logged in
              <>
                <Link 
                  to="/login" 
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition shadow-md"
                >
                  Register
                </Link>
              </>
            ) : (
              // Logged in
              <div className="flex items-center gap-4">
                <Link to="/dashboard" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 transition">
                  Dashboard
                </Link>

                {/* Simple Profile Dropdown */}
                <div className="relative group">
                  <button className="flex items-center space-x-2 focus:outline-none">
                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-green-500">
                      <img
                        src={user.avatarUrl || `https://ui-avatars.com/api/?name=${user.name}&background=60a5fa&color=fff`}
                        alt="User avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </button>
                  
                  {/* Dropdown Content */}
                  <ul className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-150 transform scale-95 group-hover:scale-100 z-50">
                    <li><Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-t-lg">Profile</Link></li>
                    <li><Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Settings</Link></li>
                    <li><button onClick={onLogout} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-gray-600 rounded-b-lg">Logout</button></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button - Visible on mobile, hidden on desktop */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {/* Toggle Icon: Show X if open, Hamburger if closed */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content (Transition effect for better UX) */}
      <nav 
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg">
          {/* Primary Links */}
          <ul className="space-y-1 font-medium text-gray-700 dark:text-gray-300">
            {NavLinks}
          </ul>
          
          <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>

          {/* Auth/User Links */}
          {!user ? (
            <div className="flex flex-col space-y-2">
              <Link 
                to="/login" 
                onClick={closeMenu}
                className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                onClick={closeMenu}
                className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-white bg-green-600 hover:bg-green-700 transition"
              >
                Register
              </Link>
            </div>
          ) : (
            <ul className="space-y-1 font-medium text-gray-700 dark:text-gray-300">
              <li><Link to="/dashboard" onClick={closeMenu} className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">Dashboard</Link></li>
              <li><Link to="/profile" onClick={closeMenu} className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">Profile</Link></li>
              <li><Link to="/settings" onClick={closeMenu} className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">Settings</Link></li>
              <li><button onClick={() => {onLogout(); closeMenu();}} className="block w-full text-left px-3 py-2 rounded-md text-red-600 hover:bg-red-50 dark:hover:bg-gray-800 transition">Logout</button></li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;