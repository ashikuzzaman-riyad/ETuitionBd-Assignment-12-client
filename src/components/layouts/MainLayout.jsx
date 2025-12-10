import React, { useContext } from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../shared/Footer';
import { ThemeContext } from '../context/ThemeProvider';

const MainLayout = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white  text-gray-900"
      }`}>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;