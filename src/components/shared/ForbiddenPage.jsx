import React from "react";
import { motion } from "framer-motion";

// Forbidden (403) page for EtuitionBD
// Tailwind CSS + Framer Motion
// Default export React component. Replace links or icons as needed.

export default function ForbiddenPage({ onGoHome } = {}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 16 }}
        className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden ring-1 ring-black/5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Illustration */}
          <div className="p-8 flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
            <div className="text-center">
              <svg
                width="220"
                height="220"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto mb-4"
                aria-hidden
              >
                <rect
                  x="2"
                  y="6"
                  width="20"
                  height="14"
                  rx="2"
                  stroke="#6366F1"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 10h10M7 14h6"
                  stroke="#6366F1"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 3v3"
                  stroke="#EF4444"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M15 3v3"
                  stroke="#EF4444"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

              <h3 className="text-3xl font-semibold text-gray-800">
                403 — Forbidden
              </h3>
              <p className="mt-2 text-sm text-gray-500 max-w-[20ch] mx-auto">
                You don’t have permission to access this resource.
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="p-8 flex flex-col justify-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Access Denied
              </h2>
              <p className="mt-3 text-gray-600">
                It looks like your account doesn't have the required role or
                privileges to view this page on
                <span className="font-medium"> EtuitionBD</span>.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-gray-700">
                    i
                  </span>
                  Check that you’re signed in with the correct account.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-gray-700">
                    🔒
                  </span>
                  If you believe this is an error, contact support or request
                  access from an administrator.
                </li>
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch gap-3">
                <button
                  onClick={() =>
                    onGoHome ? onGoHome() : (window.location.href = "/")
                  }
                  className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-white text-sm font-semibold shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Go to Homepage
                </button>

                <a
                  href="mailto:support@etuitionbd.com?subject=Access%20Request%20-%20403%20Forbidden"
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Contact Support
                </a>

                <button
                  onClick={() => window.location.reload()}
                  className="ml-auto sm:ml-0 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 border border-transparent"
                >
                  Try Again
                </button>
              </div>

              <div className="mt-6 text-xs text-gray-400">
                <p>
                  Need to change role? Admins can update roles in the Users
                  panel. For developer debugging, check the network request that
                  triggered this page and ensure the JWT token and role checks
                  are configured correctly.
                </p>
              </div>
            </div>

            <div className="mt-8 text-right text-xs text-gray-300">
              EtuitionBD • © {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
