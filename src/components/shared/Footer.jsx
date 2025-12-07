

import { FaFacebook, FaLinkedin, FaX } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "Tuitions", to: "/tuitions" },
    { name: "Tutors", to: "/tutors" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
   <footer className="bg-green-400 text-white pt-12">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 px-5">
        {/* About */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">About eTuitionBd</h3>
          <p className="text-green-100">
            eTuitionBd is a platform that connects students with the best tutors for online and
            offline learning. Our mission is to make learning accessible, affordable, and
            effective for everyone.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className="hover:text-green-200 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-green-100">
            <li>Email: support@etuitionbd.com</li>
            <li>Phone: +880 1234 567890</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-white">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-200 transition-colors"
            >
              <FaX size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-200 transition-colors"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-200 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            {/* Add more social links here */}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-green-600 py-6 text-center text-green-100 text-sm">
        &copy; {new Date().getFullYear()} eTuitionBd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
