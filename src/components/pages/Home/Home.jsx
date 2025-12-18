import HeroSection from "./HeroSection/HeroSection";
import HowItWorks from "./HeroSection/HowItWorks";
import LatestTutor from "./HeroSection/LatestTutor";
import Provide from "./HeroSection/Provide";
import TuitionPost from "./HeroSection/TuitiionPost";
import WhyChooseUs from "./HeroSection/WhyChooseUs";

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
           <section>
            <WhyChooseUs></WhyChooseUs>
           </section>
        </div>
    );
};

export default Home;