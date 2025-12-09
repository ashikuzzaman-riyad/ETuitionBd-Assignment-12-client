import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import Provide from './HeroSection/Provide';

const Home = () => {
    return (
        <div>
           <section>
            <HeroSection></HeroSection> 
           </section>
           <section>
            <Provide></Provide>
           </section>
        </div>
    );
};

export default Home;