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
                if (search.profession === "") {
                    foundCategories.add(event.category);
                } else {
                    if (search.profession === event.profession) {
                        foundCategories.add(event.category)
                    }
                }
            }

            if (event.profession) {
                if (search.category === "") {
                    foundProfessions.add(event.category);
                } else {
                    if (search.category === event.category) {
                        foundProfessions.add(event.profession)
                    }
                }
            }
        });

        setProfessions([...foundProfessions]);
        setCategories([...foundCategories]);
    }, [timeline, search.category, search.profession]);

    return (
        <motion.div
            className="w-full bg-tertiary p-4 rounded-xl shadow-md mt-6 mb-6 
               max-w-4xl mx-auto border border-border 
               flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
        >

            {/* CATEGORY */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <label className="text-white text-sm whitespace-nowrap">Category:</label>
                <select
                    value={search.category}
                    onChange={(e) => setSearch(prev => ({ ...prev, category: e.target.value }))}
                    className="p-2 rounded-lg bg-primary text-white border border-border min-w-[150px]"
                >
                    <option value="">All</option>
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            {/* PROFESSION */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <label className="text-white text-sm whitespace-nowrap">Profession:</label>
                <select
                    value={search.profession}
                    onChange={(e) => setSearch(prev => ({ ...prev, profession: e.target.value }))}
                    className="p-2 rounded-lg bg-primary text-white border border-border min-w-[150px]"
                >
                    <option value="">All</option>
                    {professions.map(tag => (
                        <option key={tag} value={tag}>{tag}</option>
                    ))}
                </select>
            </div>

            {/* TITLE SEARCH */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-1">
                <label className="text-white text-sm whitespace-nowrap">Title:</label>
                <input
                    type="text"
                    value={search.title}
                    onChange={(e) => setSearch(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Search Title..."
                    className="p-2 rounded-lg bg-primary text-white border border-border focus:outline-none w-full"
                />
            </div>

        </motion.div>

    );
};

export default SearchBarTimeline;
