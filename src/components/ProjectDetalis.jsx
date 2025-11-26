import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "../constants/Projects.json"; // adjust path if needed
import Loading from "./canvas/loading";
import LImage from "./canvas/Image";

const ProjectDetails = () => {
    const { projectId } = useParams();
    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState({});

    useEffect(() => {
        const getProjects = async () => {
            const res = await fetch(
                "https://raw.githubusercontent.com/Sagiv440/sagiv-reuben/refs/heads/master/src/constants/Projects.json"
            );
            const data = await res.json();
            const d = data.find(p => p.id === projectId);
            setProject(d);
            setLoading(false);
            window.scrollTo(0, 0);
        };

        getProjects();
    }, []);




    if (!project) {
        return (
            <div className="text-center text-white p-10">
                <h2 className="text-2xl font-bold">Project Not Found</h2>
                <Link to="/sagiv-reuben/#projects" className="underline text-secondary">
                    ← Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <>
            {loading && <Loading />}
            {!loading && <div className="max-w-5xl mx-auto p-10 text-white">

                {/* BACK BUTTON */}
                <Link
                    to="/sagiv-reuben/projects"
                    className="inline-block mb-8 text-secondary hover:text-white underline text-lg transition-colors"
                >
                    ← Back to Projects
                </Link>

                {/* CONTENT WRAPPER */}
                <div className="flex flex-col md:flex-row gap-10">

                    {/* IMAGE LEFT */}
                    <div className="md:w-1/2">
                        <LImage
                            src={project.image}
                            alt={project.name}
                            className={"rounded-xl w-full object-cover border border-border shadow-lg"}
                        />
                    </div>

                    {/* TEXT RIGHT */}
                    <div className="md:w-1/2 flex flex-col">

                        <h1 className="text-4xl font-bold mb-4">{project.name}</h1>

                        <p className="text-secondary text-lg mb-6 leading-relaxed">
                            {project.description}
                        </p>

                        {/* TAGS */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag.name}
                                    className={`${tag.color} text-sm font-medium bg-tertiary px-3 py-1 rounded-lg border border-border`}
                                >
                                    #{tag.name}
                                </span>
                            ))}
                        </div>

                        {/* LINK */}
                        {project.source_code_link && (
                            <a
                                href={project.source_code_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary underline text-lg hover:text-white transition-colors"
                            >
                                View Source Code ↗
                            </a>
                        )}
                    </div>

                </div>
            </div>}
        </>
    );
};

export default ProjectDetails;
