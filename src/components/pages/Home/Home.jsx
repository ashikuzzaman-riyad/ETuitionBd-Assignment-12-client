import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import Provide from './HeroSection/Provide';
import TuitionPost from './HeroSection/TuitiionPost';

const Home = () => {
    return (
        <div>
           <section>
            <HeroSection></HeroSection> 
           </section>
           <section>
            <Provide></Provide>
           </section>
           <section>
            <TuitionPost></TuitionPost>
           </section>
        </div>
    );
};

export default Home;