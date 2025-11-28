import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SearchBarTimeline = ({ search, setSearch, timeline }) => {
    const [professions, setProfessions] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (!timeline) return;

        const foundProfessions = new Set();
        const foundCategories = new Set();

        timeline.forEach(event => {
            // Collect categories
            if (event.category) {
                foundCategories.add(event.category);
            }

            if (event.profession) {
                foundProfessions.add(event.profession);
            }
        });

        setProfessions([...foundProfessions]);
        setCategories([...foundCategories]);
    }, [timeline]);

    return (
        <motion.div
            className="w-full bg-tertiary p-4 rounded-xl shadow-md mt-6 mb-6 flex flex-wrap space-x-2 items-center max-w-4xl mx-auto border border-border"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <label className="text-white text-sm">Category:</label>
            {/* CATEGORY DROPDOWN */}
            <div className="flex flex-col min-w-[150px]">
                <select
                    value={search.category}
                    onChange={(e) => setSearch(prev => ({ ...prev, category: e.target.value }))}
                    className="mt-1 p-2 rounded-lg bg-primary text-white border border-border max-w-[150px]"
                >
                    <option value="">All</option>
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>
            <label className="text-white text-sm">Profession:</label>
            {/* PROFEESION DROPDOWN */}
            <div className="flex flex-col min-w-[150px]">

                <select
                    value={search.tag}
                    onChange={(e) => setSearch(prev => ({ ...prev, profession: e.target.value }))}
                    className="mt-1 p-2 rounded-lg bg-primary text-white border border-border max-w-[150px]"
                >
                    <option value="">All</option>
                    {professions.map(tag => (
                        <option key={tag} value={tag}>{tag}</option>
                    ))}
                </select>
            </div>
            <label className="text-white text-sm">Title:</label>
            {/* TEXT SEARCH */}
            <div className="flex flex-col flex-1 min-w-[150px]">

                <input
                    type="text"
                    value={search.title}
                    onChange={(e) => setSearch(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Search Title..."
                    className="mt-1 p-2 rounded-lg bg-primary text-white border border-border focus:outline-none"
                />
            </div>

        </motion.div>
    );
};

export default SearchBarTimeline;
