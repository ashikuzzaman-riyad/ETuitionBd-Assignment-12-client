import React from 'react';
import { MdOndemandVideo } from 'react-icons/md';

const Provide = () => {
    const data = [
            "Academic Tutor",
            "Admission Test Tutor",
            "Drawing Tutor",
            "Dance Tutor",
            "Music Tutor",
            "Arabic Tutor",
            "Job Preparation",
            "Cadet Admission",
            "IELTS Tutor",
          ]
    return (
        <div>
            <section className="py-12 md:py-20 bg-background-light dark:bg-background-dark font-display">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-8 md:mb-12">
          We Provide
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {data.map((item, i) => (
            <div
              key={i}
              className="bg-card-light dark:bg-card-dark rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center transition-transform transform hover:-translate-y-1"
            >
              <span className="material-icons text-4xl text-icon-light dark:text-icon-dark mb-4">
                <MdOndemandVideo />
              </span>
              <h3 className="font-medium text-text-light dark:text-text-dark">
                {item}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section> 
        </div>
    );
};

export default Provide;