import { useEffect, useState } from 'react';
import { close, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';
import { Profile } from '../assets';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaItchIo, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { useSearch } from '../utils/SearchContext';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [subject, SetSubject] = useState('');
  const [toggle, setToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const { search, setSearch } = useSearch();

  const toggleResume = () => {
    const resumeUrl = '/sagiv-reuben/Resume.pdf';
    window.open(resumeUrl);
  };

  useEffect(() => {
    const getProjects = async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/Sagiv440/sagiv-reuben/refs/heads/master/src/constants/Projects.json"
      );
      const data = await res.json();
      getCategories(data);
    };

    const getCategories = (projects) => {
      if (!projects) return;

      const foundCategories = new Set();

      projects.forEach(proj => {
        // Collect categories
        if (proj.category) {
          foundCategories.add(proj.category);
        }
      });

      setCategories([...foundCategories]);
    }
    getProjects();
  }, []);


  useEffect(() => {
    if (toggle) {
      setActive('');
    }
  }, [toggle]);

  // SOCIAL LINKS TOP-LEFT
  const SocialLinks = () => (
    <div className="hidden sm:flex gap-4 absolute top-1 right-20 z-50">
      <a href="https://github.com/Sagiv-Reuben" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-white hover:text-secondary text-xl transition" />
      </a>
      <a href="https://www.linkedin.com/in/sagiv-reuben-1264341b9/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-white hover:text-secondary text-xl transition" />
      </a>
      <a href="https://sagivreuben.itch.io/" target="_blank" rel="noopener noreferrer">
        <FaItchIo className="text-white hover:text-secondary text-xl transition" />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-white hover:text-secondary text-xl transition" />
      </a>
    </div>
  );

  const renderNavLinks = (isSecondary) => (
    <ul className={`list-none ${isSecondary ? 'flex flex-col justify-center sm:hidden' : 'hidden sm:flex'} flex-row gap-6`}>

      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${active === link.title ? 'text-white' : isSecondary ? 'text-secondary' : 'text-white'} hover:text-white text-[15px] font-medium cursor-pointer`}
          onClick={() => {
            setActive(link.title);
            if (isSecondary) setToggle(false);
          }}
        >
          <motion.a
            href={`${link.id}`}
            className="flex items-center gap-1 transition-all duration-100 px-3 py-2 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
          >
            {link.title}
          </motion.a>
        </li>
      ))}
      {/* Dropdown Button */}
      <li className="relative text-white text-[15px] font-medium cursor-pointer">
        <motion.button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-1 transition-all duration-100 px-3 py-2 rounded-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.85 }}
        >
          Projects
          <span
            className={`inline-block transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "rotate-0"
              }`}
          >
            ▼
          </span>
        </motion.button>


        {dropdownOpen && (
          <ul className="absolute mt-2 right-0 bg-tertiary p-3 rounded-xl shadow-lg flex flex-col gap-2 z-50 border border-white/15">
            <li
              className={`${subject === "" ? "text-secondary" : "text-wight"} hover:text-secondary cursor-pointer whitespace-nowrap`}
            >
              <motion.a
                href="/sagiv-reuben/#/projects"
                onClick={() => {
                  SetSubject("")
                  setDropdownOpen(false)
                  setSearch({ ...search, category: "" })
                }}
                className="flex gap-0 duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.85 }}
              >
                All
              </motion.a>
            </li>
            {categories.map((sub) => (
              <li
                className={`${subject === sub ? "text-secondary" : "text-wight"} hover:text-secondary cursor-pointer whitespace-nowrap`}
              >
                <motion.a
                  href="/sagiv-reuben/#/projects"
                  onClick={() => {
                    SetSubject(sub)
                    setDropdownOpen(false)
                    setSearch({ ...search, category: sub })
                  }}
                  className="flex gap-0 duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.85 }}
                >
                  {sub}
                </motion.a>
              </li>
            ))}
          </ul>
        )}
      </li>
      <li
        className={`text-white hover:text-white text-[15px] font-medium cursor-pointer`}
        onClick={() => {
          setActive('Contact');
          if (isSecondary) setToggle(false);
        }}
      >
        <motion.a
          href={`#contect`}
          className="flex items-center gap-1 transition-all duration-100 px-3 py-2 rounded-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.85 }}
        >
          Contact
        </motion.a>
      </li>
    </ul>
  );

  return (
    <>

      <nav
        className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-50 bg-tertiary border-b border-border`}
      >
        <div className="w-full flex justify-between items-center">

          {/* LEFT — LOGO */}
          <motion.a
            href="/sagiv-reuben/"
            className="flex items-center gap-2"
            onClick={() => setActive("")}
          >
            <img
              src={Profile}
              alt="Sagiv Reuben"
              className="w-12 h-12 rounded-full object-cover border border-border"
            />
            <p className="text-white text-[20px] font-bold cursor-pointer flex">
              SAGIV&nbsp;<span className="sm:block hidden">REUBEN</span>
            </p>
          </motion.a>

          {/* RIGHT — Desktop Nav + Socials */}
          <div className="hidden sm:flex flex-col items-end gap-2">

            {/* SOCIAL ICONS */}
            <div className="flex flex-row gap-3">
              <a href="https://github.com/Sagiv440" target="_blank"><FaGithub className="text-white hover:text-secondary text-xl" /></a>
              <a href="https://www.linkedin.com/in/sagiv-reuben-1264341b9/" target="_blank"><FaLinkedin className="text-white hover:text-secondary text-xl" /></a>
              <a href="https://sagiv440.itch.io/" target="_blank"><FaItchIo className="text-white hover:text-secondary text-xl" /></a>
              <a href="https://www.facebook.com/sagiv.reuben" target="_blank"><FaFacebook className="text-white hover:text-secondary text-xl" /></a>
            </div>

            {/* DESKTOP NAV */}
            {renderNavLinks(false)}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="sm:hidden flex justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-7 h-7 object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        <div
          className={`${toggle ? "flex" : "hidden"
            } sm:hidden absolute top-[68px] right-0 mx-4 my-2 min-w-[200px] bg-tertiary rounded-xl p-4 shadow-xl border border-border`}
        >
          {renderNavLinks(true)}
        </div>
      </nav>



    </>
  );
};

export default Navbar;