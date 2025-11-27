import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SearchBar = ({ search, setSearch, projects }) => {
    const [tags, setTags] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (!projects) return;

        const foundTags = new Set();
        const foundCategories = new Set();

        projects.forEach(proj => {
            // Collect categories
            if (proj.category) {
                foundCategories.add(proj.category);
            }

            // Collect tags
            proj.tags?.forEach(tag => {
                foundTags.add(tag.name);
            });
        });

        setTags([...foundTags]);
        setCategories([...foundCategories]);
    }, [projects]);

    return (
        <motion.div
            className="w-full bg-tertiary p-4 rounded-xl shadow-md mt-6 mb-6 flex flex-wrap space-x-2 items-end max-w-4xl mx-auto border border-border"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
        >
            {/* CATEGORY DROPDOWN */}
            <div className="flex flex-col min-w-[150px]">
                <label className="text-white text-sm">Category</label>
                <select
                    value={search.category}
                    onChange={(e) => setSearch(prev => ({ ...prev, category: e.target.value }))}
                    className="mt-1 p-2 rounded-lg bg-primary text-white border border-border max-w-[150px]"
                >
                    <option value="">All Categories</option>
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            {/* TAG DROPDOWN */}
            <div className="flex flex-col min-w-[150px]">
                <label className="text-white text-sm">Tag</label>
                <select
                    value={search.tag}
                    onChange={(e) => setSearch(prev => ({ ...prev, tag: e.target.value }))}
                    className="mt-1 p-2 rounded-lg bg-primary text-white border border-border max-w-[150px]"
                >
                    <option value="">All Tags</option>
                    {tags.map(tag => (
                        <option key={tag} value={tag}>{tag}</option>
                    ))}
                </select>
            </div>
            {/* TEXT SEARCH */}
            <div className="flex flex-col flex-1 min-w-[150px]">
                <label className="text-white text-sm">Search by Name</label>
                <input
                    type="text"
                    value={search.name}
                    onChange={(e) => setSearch(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Type project name..."
                    className="mt-1 p-2 rounded-lg bg-primary text-white border border-border focus:outline-none"
                />
            </div>

        </motion.div>
    );
};

export default SearchBar;
