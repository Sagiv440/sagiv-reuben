import { useEffect, useMemo, useState } from "react";
import { PROJECTS_FILE_URL } from "../constants";
import Loading from "./canvas/loading";
import Projvolt from "../constants/Projects.json";
import LImage from "./canvas/Image";
import { AnimatePresence, motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";



const HightLights = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            const res = await fetch(
                PROJECTS_FILE_URL
            );
            const data = await res.json();
            setProjects(Projvolt);
            setLoading(false);
        };
        getProjects();
    }, []);

    const highlights = useMemo(() => {
        return projects.filter((proj) => proj.highlight === true);
    }, [projects]);

    return (
        <>
            <motion.div variants={textVariant}>
                <p className={`${styles.sectionSubText} text-center`}>
                    Personal Faivorits
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>HighLights</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto w-full">
                {loading && <Loading />}
                {!loading &&
                    highlights.map((project, index) => (
                        <div
                            key={project.id}
                            className="bg-tertiary rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
                        >

                            <a
                                className="cursor-pointer"
                                href={`#/projects/${project.id}`}
                            >
                                <LImage
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-40 object-cover"
                                />
                            </a>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default HightLights;