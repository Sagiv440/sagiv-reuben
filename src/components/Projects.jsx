import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import Loading from "./canvas/loading";
import LImage from "./canvas/Image";
import { Link } from "react-router-dom";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(null);
  const [projects, setProjects] = useState([]);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto w-full">
        {loading && <Loading />}
        {!loading &&
          projects.map((project, index) => (
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
                  <p className="text-white-100 text-sm mt-2 line-clamp-3">
                    {expanded === index
                      ? project.description
                      : project.description.slice(0, 100) + "..."}
                  </p>
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
