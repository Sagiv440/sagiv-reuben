import { useEffect } from "react";
import Hero from "./hero_component";
import Experience from "./Experience";
import About from './About';


const HomePage = ({id}) => {
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
                <Hero />
            </div>
            <div id="About">
                <About />
            </div>
            <div id="Timeline">
                <Experience />
            </div>
        </>
    );
}

export default HomePage;