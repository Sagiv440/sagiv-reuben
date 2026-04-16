import { useEffect, useState } from "react"
import { PROJECTS_FILE_URL } from "../../constants";
import { useSearch } from "../../utils/SearchContext";
import Projvolt from "../../constants/Projects.json";


const SelectCategory = () => {
    const [categories, setCategories] = useState([]);
    const [projects, setProjects] = useState([]);
    const { search, setSearch } = useSearch();
    useEffect(() => {
        const getProjects = async () => {
            const res = await fetch(
                PROJECTS_FILE_URL
            );
            const data = await res.json();
            setProjects(data);
            setLoading(false);
        };
        getProjects();
    }, []);

    useEffect(() => {
        if (!projects) return;
        const foundCategories = new Set();

        projects.forEach(proj => {
            // Collect categories
            if (proj.category) {
                if (search.tag === "") {
                    foundCategories.add(proj.category);
                } else {
                    proj.tags?.forEach(tg => {
                        if (tg.name === search.tag) {
                            foundCategories.add(proj.category);
                        }
                    });
                }
            }

            setCategories([...foundCategories]);

        }
        )
    }, [projects, search.category])

    return (
        <>
            {/* CATEGORY */}

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
        </>
    )
}
export default SelectCategory;