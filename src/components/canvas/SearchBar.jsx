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
            <option value="">All Categories</option>
            {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
            ))}
        </select>
    </div>

    {/* TAGS */}
    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <label className="text-white text-sm whitespace-nowrap">Tags:</label>
        <select
            value={search.tag}
            onChange={(e) => setSearch(prev => ({ ...prev, tag: e.target.value }))}
            className="p-2 rounded-lg bg-primary text-white border border-border min-w-[150px]"
        >
            <option value="">All Tags</option>
            {tags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
            ))}
        </select>
    </div>

    {/* NAME SEARCH */}
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-1">
        <label className="text-white text-sm whitespace-nowrap">Name:</label>
        <input
            type="text"
            value={search.name}
            onChange={(e) => setSearch(prev => ({ ...prev, name: e.target.value }))}
            placeholder="Type project name..."
            className="p-2 rounded-lg bg-primary text-white border border-border focus:outline-none w-full"
        />
    </div>

</motion.div>


    );
};

export default SearchBar;
