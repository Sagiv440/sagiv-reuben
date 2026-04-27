import { useEffect } from "react";
import Hero from "./hero_component";
import Experience from "./Experience";
import About from './About';
import HightLights from "./HighLights.jsx";
import Contact from "./Contact.jsx";


const HomePage = ({ id , tick}) => {
    useEffect(() => {
        if (id === "Home") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            return;
        }
        const scrollTo = (id) => {
            document.getElementById(id)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        };
        scrollTo(id)
    }, [id, tick]);

    return (
        <>
            <div id="Home">
                <Hero />
            </div>
            <div id="About">
                <About />
            </div>
            <div id="Highlights" className="w-full min-h-screen">
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