import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "../constants/Projects.json"; // adjust path if needed
import Loading from "./canvas/loading";
import LImage from "./canvas/Image";
import HtmlRenderer from "./canvas/htmlReader";

const useWindowSize = () => {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return size;
};

const ProjectDetails = () => {
    const { projectId } = useParams();
    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState({});

    const { width, height } = useWindowSize();

    useEffect(() => {
        const getProjects = async () => {
            const res = await fetch(
                "https://raw.githubusercontent.com/Sagiv440/sagiv-reuben/refs/heads/master/src/constants/Projects.json"
            );
            const data = await res.json();
            const d = projectsData.find(p => p.id === projectId);
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
                <Link to="/#/projects" className="underline text-secondary">
                    ← Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <>
            {loading && <Loading />}
            {!loading &&
                <div className="max-w-8xl mx-auto px-6 py-10 text-white">
                    {/* BACK BUTTON */}
                    <a
                        href="#/projects"
                        className="inline-block mb-8 text-secondary hover:text-white underline text-lg transition-colors"
                    >
                        ← Back to Projects
                    </a>
                    <div className="max-w-8xl mx-auto p-10 text-white bg-tertiary rounded-xl border border-border overflow-hidden">



                        {/* CONTENT WRAPPER */}
                        <div className="flex flex-col md:flex-row gap-10">


                            {/* LEFT COLUMN – TEXT + TAGS + LINKS */}
                            <div className="md:w-1/2 flex flex-col justify-between">

                                <div>
                                    {/* Title */}
                                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                                    {/* Description */}
                                    <p className="text-lg leading-relaxed mb-10">
                                        <HtmlRenderer body={project.details?.body} />
                                    </p>
                                </div>

                                {/* BOTTOM SECTION (Tags + Links) */}
                                <div className="mt-auto">

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag.name}
                                                className={`${tag.color} text-sm font-medium bg-white/5 px-3 py-1 rounded-lg`}
                                            >
                                                #{tag.name}
                                            </span>
                                        ))}
                                    </div>

                                    {/* External Links */}
                                    {project.details?.likes?.length > 0 && (
                                        <div className="mb-4">
                                            <h2 className="text-xl font-semibold mb-2">Useful Links</h2>
                                            <ul className="list-disc ml-6 space-y-2">
                                                {project.details.likes.map((link, i) => (
                                                    <li key={i}>
                                                        <a
                                                            href={link.url}
                                                            className="text-secondary underline"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            {link.name} →
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                </div>
                            </div>
                            {/* IMAGE LEFT */}
                            <div className="md:w-1/2">

                                {/* Main image */}
                                <LImage
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full rounded-xl mb-10 shadow-lg"
                                />
                                <div className="max-w-6xl mx-auto p-10 text-white">
                                    {/* Videos */}
                                    {project.details?.videos && project.details.videos.length > 0 && (
                                        <div className="mb-12">
                                            <h2 className="text-2xl font-semibold mb-4">Videos</h2>

                                            <div className="flex flex-col gap-6">
                                                {project.details.videos.map((url, i) => (
                                                    <div key={i} className="rounded-xl overflow-hidden">
                                                        <iframe
                                                            className="w-full h-72 rounded-xl"
                                                            src={url.replace("watch?v=", "embed/")}
                                                            title={`video-${i}`}
                                                            allowFullScreen
                                                        ></iframe>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Images Gallery */}
                                    {project.details?.images && project.details.images.length > 0 && (
                                        <div className="mb-16">
                                            <h2 className="text-2xl font-semibold mb-4">Gallery</h2>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                {project.details.images.map((img, i) => (
                                                    <a

                                                        href={img}>
                                                        <LImage
                                                            key={i}
                                                            src={img}
                                                            alt={`${project.name}-image-${i}`}
                                                            className="w-full h-60 object-cover rounded-xl shadow-md"
                                                        />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    );
};

export default ProjectDetails;
