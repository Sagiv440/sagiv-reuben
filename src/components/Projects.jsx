import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from '../constants/index';

// Pass your "projects" array as props
// Example: <Projects projects={projectsData} />

const Projects = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <>
      <motion.div variants={textVariant}>
        <p className={`${styles.sectionSubText} text-center`}>
          Archive Of My  ( Personal / Collaborative ) Work
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </motion.div>
      <div className="flex flex-col gap-6 p-6 max-w-5xl mx-auto w-full">
        {projects.map((project, index) => (
          <div
            className="bg-tertiary rounded-xl border-border border-1px border-solid"
            style={{
              border: "1px solid #414141ff",      // border
            }}
          >
            <div
              key={project.name}
              className="flex flex-col sm:flex-row gap-4 shadow-lg p-4 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:text-white hover:opacity-80 rounded-lg"
              onClick={() => toggleExpand(index)}
            >

              <div className="justify-end">
                {/* Title */}
                <h3 className="text-white text-xl font-bold mt-3">{project.name}</h3>

                {/* Description */}
                <p className="text-white-100 text-sm mt-2 line-clamp-3">
                  {expanded === index ? project.description : project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span key={tag.name} className={`${tag.color} text-xs font-medium`}>
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
              {/* Image */}
              <div className="max-w-80 mx-auto w-full">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-40 object-cover rounded-lg "
                />
              </div>

            </div>
            {/* Expanded section */}
            <AnimatePresence>
              {expanded === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="mt-4 p-3 rounded-lg overflow-hidden"
                >
                  {/* Delayed text animation */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.35, duration: 0.2 }}
                    className="text-white text-sm mb-3"
                  >
                    <p className="text-white text-sm mb-3">{project.description}</p>
                    {project.source_code_link && (
                      <a
                        href={project.source_code_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary underline text-sm font-medium"
                      >
                        View Project ↗
                      </a>
                    )}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </>
  );
};


export default SectionWrapper(Projects, "projects");
