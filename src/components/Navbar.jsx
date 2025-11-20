import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks, subjectLinks } from '../constants';
import { styles } from '../styles';
import { Profile } from '../assets';
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState('');
  const [subject, SetSubject] = useState('');
  const [toggle, setToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleResume = () => {
    const resumeUrl = '/sagiv-reuben/Resume.pdf';
    window.open(resumeUrl);
  };

  useEffect(() => {
    if (toggle) {
      setActive('');
    }
  }, [toggle]);

  const renderNavLinks = (isSecondary) => (
    <ul className={`list-none ${isSecondary ? 'flex sm:hidden' : 'hidden sm:flex'} flex-row gap-6`}>
      {/* Dropdown Button */}
      {/*<li className="relative text-white text-[15px] font-medium cursor-pointer">
        <motion.button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-1 transition-all duration-100 px-3 py-2 rounded-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.85 }}
        >
          Subject
          <span
            className={`inline-block transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "rotate-0"
              }`}
          >
            ▼
          </span>
        </motion.button>


        {dropdownOpen && (
          <ul className="absolute mt-2 right-0 bg-tertiary p-3 rounded-xl shadow-lg flex flex-col gap-2 z-50 border border-white/15">

            {subjectLinks.map((sub) => (
              <li
                key={sub.id}
                onClick={() => SetSubject(sub.title)}
                className={`${subject === sub.title ? "text-secondary" : "text-wight"} hover:text-secondary cursor-pointer whitespace-nowrap`}
              >
                <motion.a
                onClick={() => SetSubject(sub.title)}
                  className="flex gap-0 duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.85 }}
                >
                {sub.title}
                </motion.a>
              </li>
            ))}
          </ul>
        )}
      </li>*/}


      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${active === link.title ? 'text-white' : isSecondary ? 'text-secondary' : 'text-white'
            } hover:text-white text-[15px] font-medium cursor-pointer`}
          onClick={() => {
            setActive(link.title);
            if (isSecondary) {
              setToggle(false);
            }
          }}
        >
          <motion.a href={`#${link.id}`}
            className="flex items-center gap-1 transition-all duration-100 px-3 py-2 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
          >
            {link.title}
          </motion.a>
        </li>
      ))}

      <li
        className={`text-${isSecondary ? 'secondary' : 'white'
          } hover:text-white text-[15px] font-medium cursor-pointer`}
      >
        <motion.button
          onClick={toggleResume}
          className="flex items-center gap-1 transition-all duration-100 px-3 py-2 rounded-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.85 }}
        >Resume
        </motion.button>
      </li>
    </ul>
  );

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-tertiary border-b border-border`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <motion.Link
            to="/"
            className="flex items-center gap-2"

            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={Profile}
              alt="Sagiv Reuben LinkedIn"
              className="w-12 h-12 rounded-full object-cover border border-border"
            />
            {/*<img src={logo} alt="logo" className="w-9 h-9 object-contain" />*/}
            <p className="text-white text-[20px] font-bold cursor-pointer flex">
              SAGIV&nbsp;
              <span className="sm:block hidden">REUBEN</span>
            </p>
          </motion.Link>
          {renderNavLinks(false)}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[18px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`p-4 black-gradient absolute top-14 right-0 mx-2 my-2 min-w-[120px] z-10 rounded-xl foggy-glass ${toggle ? 'flex' : 'hidden'
                }`}
            >
              {renderNavLinks(true)}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
