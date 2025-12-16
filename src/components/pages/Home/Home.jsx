import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import Provide from './HeroSection/Provide';
import TuitionPost from './HeroSection/TuitiionPost';
import LatestTutor from './HeroSection/LatestTutor';

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
        </div>
    );
};

export default Home;