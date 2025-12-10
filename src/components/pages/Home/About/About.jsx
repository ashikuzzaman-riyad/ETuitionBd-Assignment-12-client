import React from 'react';
import turion from '../../../../assets/tuitor.png'

const About = () => {
    return (
         <section className=" py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
            About E-Tuition
          </h2>

          <p className="text-gray-700 leading-relaxed mb-5">
            E-Tuition is a modern online platform that connects students with expert tutors. 
            Our mission is to make education accessible, flexible, and personalized for every learner.
          </p>

          <p className="text-gray-700 leading-relaxed mb-5">
            Whether you're looking for academic support, skill development, or subject-wise tutoring,
            E-Tuition ensures verified tutors, seamless communication, and a smooth learning experience.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-white shadow-md rounded-xl p-5 border-l-4 border-green-500">
              <h3 className="font-bold text-lg text-gray-800">Verified Tutors</h3>
              <p className="text-gray-600 text-sm mt-2">
                Every tutor goes through a verification process for quality assurance.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-5 border-l-4 border-green-500">
              <h3 className="font-bold text-lg text-gray-800">Flexible Learning</h3>
              <p className="text-gray-600 text-sm mt-2">
                Choose online or offline, morning or evening — full flexibility for students.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-5 border-l-4 border-green-500">
              <h3 className="font-bold text-lg text-gray-800">Secure & Smooth</h3>
              <p className="text-gray-600 text-sm mt-2">
                Safe communication & trusted tutor-student matching.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-5 border-l-4 border-green-500">
              <h3 className="font-bold text-lg text-gray-800">Fast Matching</h3>
              <p className="text-gray-600 text-sm mt-2">
                Get your ideal tutor within minutes based on your needs.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={turion}
            alt="E-Tuition"
            className="w-full rounded-3xl drop-shadow-xl"
          />
        </div>
      </div>
    </section>
    );
};

export default About;