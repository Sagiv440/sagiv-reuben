import { useEffect, useMemo, useState } from "react";
import { PROJECTS_FILE_URL } from "../constants";
import Loading from "./canvas/loading";
import Projvolt from "../constants/Projects.json";
import LImage from "./canvas/Image";
import { AnimatePresence, motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { useSearch } from "../utils/SearchContext";
import SearchBar from "./canvas/SearchBar";



const HightLights = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);
    const { search, setSearch } = useSearch();

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

    const filteredProjects = useMemo(() => {
        return highlights.filter((proj) => {
            // Filter by name
            const matchesName =
                proj.name?.toLowerCase().includes(search.name.toLowerCase());

            // Filter by tag
            const matchesTag =
                search.tag.trim() === "" ||
                proj.tags?.some(tag =>
                    tag.name.toLowerCase().includes(search.tag.toLowerCase())
                );

            // Filter by category
            const matchesCategory =
                search.category.trim() === "" ||
                proj.category?.toLowerCase().includes(search.category.toLowerCase());

            return matchesName && matchesTag && matchesCategory;
        });
    }, [highlights, search.name, search.tag, search.category]);


    return (
        <>
            <motion.div
  variants={textVariant()}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
>
                <p className={`${styles.sectionSubText} text-center`}>
                    Personal Faivorits
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>HighLights</h2>
            </motion.div>
            <SearchBar search={search} setSearch={setSearch} projects={projects} />
            <div className="w-full max-w-none">
                <div className="grid gap-8 p-6 md:grid-cols-4 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
                    {loading && <Loading />}
                    {!loading &&
                        filteredProjects.map((project, index) => (
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
                                        className="relative w-full h-64 overflow-hidden"
                                    >
                                        {/* Image */}
                                        <LImage
                                            src={project.image}
                                            alt={project.name}
                                            className="w-full h-full object-cover transition-transform duration-300"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <p className="text-white text-lg font-bold text-center px-2 [text-shadow:0_2px_3px_rgba(0,0,0,1)]">
                                                {project.name}
                                            </p>
                                        </div>
                                    </motion.div>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default HightLights;