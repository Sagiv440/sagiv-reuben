import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import Loading from "./canvas/loading";
import LImage from "./canvas/Image";
import  Projvolt  from "../constants/Projects.json";
import { SEARCH_TEMP } from "../constants";
import SearchBar from "./canvas/SearchBar";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState({ ...SEARCH_TEMP,name:"",category:"", tag:"" });


const filteredProjects = useMemo(() => {
  return projects.filter((proj) => {

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
}, [projects, search.name, search.tag, search.category]);


  useEffect(() => {
    const getProjects = async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/Sagiv440/sagiv-reuben/refs/heads/master/src/constants/Projects.json"
      );
      const data = await res.json();
      setProjects(data);
      setLoading(false);
    };
    getProjects();
  }, []);

  return (
    <>
      <motion.div variants={textVariant}>
        <p className={`${styles.sectionSubText} text-center`}>
          Archive Of My ( Personal / Collaborative ) Work
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </motion.div>
      <SearchBar search={search} setSearch={setSearch} projects={projects}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto w-full">
        {loading && <Loading />}
        {!loading &&
          filteredProjects.map((project, index) => (
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
                <div className="p-4">
                  <h3 className="text-white text-xl font-bold">{project.name}</h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag.name}
                        className={`${tag.color} text-xs font-medium`}
                      >
                        #{tag.name}
                      </span>
                    ))}
                  </div>
                  <button className="text-secondary underline mt-2">
                    View More →
                  </button>
                </div>
              </a>
            </div>
          ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
