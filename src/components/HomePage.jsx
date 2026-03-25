import { useEffect } from "react";
import Hero from "./hero_component";
import Experience from "./Experience";
import About from './About';
import HightLights from "./HighLights.jsx";


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
            <div id="Highlights" className=" h-relative w-full h-screen">
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
        </>
    );
}

export default HomePage;