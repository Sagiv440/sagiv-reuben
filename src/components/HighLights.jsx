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
            setProjects(data);
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 max-w-6xl mx-auto w-full">
                {loading && <Loading />}
                {!loading &&
                    highlights.map((project, index) => (
                        <div
                            key={project.id}
                            className="relative overflow-hidden rounded-xl border border-border"
                        >
                            <a
                                className="cursor-pointer block"
                                href={`#/projects/${project.id}`}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="relative w-full h-40 overflow-hidden"
                                >
                                    {/* Image */}
                                    <LImage
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover transition-transform duration-300"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <p className="text-white text-lg font-bold text-center px-2">
                                            {project.name}
                                        </p>
                                    </div>
                                </motion.div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default HightLights;