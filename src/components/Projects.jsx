import React, { useState } from "react";

// Pass your "projects" array as props
// Example: <Projects projects={projectsData} />

const Projects = ({ projects = [] }) => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-6 p-6 max-w-5xl mx-auto w-full">
      {projects.map((project, index) => (
        <div
          className="bg-tertiary rounded-xl"
        >
          <div
            key={project.name}
            className="flex flex-col sm:flex-row gap-4 shadow-lg p-4 cursor-pointer transition-all duration-300 hover:bg-white/10 hover:text-white hover:opacity-80"
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
          {expanded === index && (
            <div className="mt-4 p-3 rounded-lg">
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
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
