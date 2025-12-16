import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import Provide from './HeroSection/Provide';
import TuitionPost from './HeroSection/TuitiionPost';
import LatestTutor from './HeroSection/LatestTutor';
import HowItWorks from './HeroSection/HowItWorks';

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
           <section>
            <LatestTutor></LatestTutor>
           </section>
           <section>
            <HowItWorks></HowItWorks>
           </section>
        </div>
    );
};

export default Home;