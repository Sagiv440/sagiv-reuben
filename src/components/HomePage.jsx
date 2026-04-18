import { useEffect } from "react";
import Hero from "./hero_component";
import Experience from "./Experience";
import About from './About';
import HightLights from "./HighLights.jsx";
import Contact from "./Contact.jsx";


const HomePage = ({ id }) => {
    useEffect(() => {
        const scrollTo = (id) => {
            document.getElementById(id)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        };
        scrollTo(id)
    }, [id]);

    return (
        <>
            <div id="Home">
                <br />
                <Hero />
            </div>
            <div id="About">
                <br />
                <About />
            </div>
            <div id="Highlights" className="w-full h-auto lg:h-screen">
                <br />
                <br />
                <br />
                <br />
                <br />
                <HightLights />
            </div>
            <div id="Timeline">
                <br />
                <Experience />
            </div>
            <div id="Contact">
                <br />
                <Contact />
            </div>
        </>
    );
}

export default HomePage;