import React from 'react';
import turion from '../../../../assets/tuitor.png'

const About = () => {
  const data = [
          {
            title: "Verified Tutors",
            desc: "Every tutor goes through a verification process for quality assurance.",
          },
          {
            title: "Flexible Learning",
            desc: "Choose online or offline, morning or evening — full flexibility for students.",
          },
          {
            title: "Secure & Smooth",
            desc: "Safe communication & trusted tutor-student matching.",
          },
          {
            title: "Fast Matching",
            desc: "Get your ideal tutor within minutes based on your needs.",
          },
        ]
    return (
        <section className="py-16 px-6  transition-colors duration-300">
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

    {/* Left Content */}
    <div >
      <div className='bg-white p-5 rounded-3xl'>
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        About E-Tuition
      </h2>

      <p className="text-base-content/70 leading-relaxed mb-5">
        E-Tuition is a modern online platform that connects students with expert tutors.
        Our mission is to make education accessible, flexible, and personalized for every learner.
      </p>

      <p className="text-base-content/70 leading-relaxed mb-5">
        Whether you're looking for academic support, skill development, or subject-wise tutoring,
        E-Tuition ensures verified tutors, seamless communication, and a smooth learning experience.
      </p>
     
     </div>
      {/* Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

        {data.map((item, i) => (
          <div
            key={i}
            className="group bg-base-100 border border-base-200 rounded-2xl p-5 transition-all duration-300
                       hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
          >
            <div className="border-l-4 border-primary pl-3">
              <h3 className="font-bold text-lg text-base-content group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-base-content/60 text-sm mt-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>

    {/* Right Image */}
    <div className="flex justify-center">
      <div className="overflow-hidden rounded-3xl group">
        <img
          src={turion}
          alt="E-Tuition"
          className="w-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>

  </div>
</section>

    );
};

export default About;