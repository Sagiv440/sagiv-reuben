import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import Loading from "./canvas/loading";
import LImage from "./canvas/Image";
import { Link } from "react-router-dom";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

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
      {/* Title Section */}
      <motion.div variants={textVariant}>
        <p className={`${styles.sectionSubText} text-center`}>
          Archive Of My (Personal / Collaborative) Work
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </motion.div>

      {/* Grid */}
      <div className="p-6 max-w-6xl mx-auto w-full">
        {loading && <Loading />}

        {!loading && (
          <div className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-6
          ">
            {projects.map((project) => (
              <Link
                to={`/sagiv-reuben/projects/${project.id}`}
                key={project.id}
                className="
                  bg-tertiary 
                  border border-border 
                  rounded-xl 
                  overflow-hidden 
                  p-4 
                  flex flex-col
                  transition-all 
                  duration-300 
                  hover:opacity-80 
                  hover:bg-white/10
                "
              >
                {/* Image */}
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <LImage
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="text-white text-lg font-bold">{project.name}</h3>

                {/* Description */}
                <p className="text-secondary text-sm mt-2 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
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

                {/* View More Button */}
                <button className="mt-auto text-secondary underline pt-4 text-left">
                  View More →
                </button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
