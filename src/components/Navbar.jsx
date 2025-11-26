import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks, subjectLinks } from '../constants';
import { styles } from '../styles';
import { Profile } from '../assets';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaItchIo, FaFacebook, FaWhatsapp } from "react-icons/fa";

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

      <li className={`text-${isSecondary ? 'secondary' : 'white'} hover:text-white text-[15px] font-medium cursor-pointer`}>
        <motion.button
          onClick={toggleResume}
          className="flex items-center gap-1 transition-all duration-100 px-3 py-2 rounded-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.85 }}
        >
          Resume
        </motion.button>
      </li>
    </ul>
  );

  return (
    <>

      <nav
        className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-tertiary border-b border-border`}
      >
        <div className="w-full flex justify-between items-center">

          {/* LEFT: Profile */}
          <motion.a
            href="/sagiv-reuben/"
            className="flex items-center gap-2"
            onClick={() => setActive('')}
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

          {/* RIGHT: Socials + Nav */}
          <div className="flex flex-col items-end gap-2">

            {/* SOCIAL ICONS */}
            <div className="flex flex-row gap-3">
              <a href="https://github.com/Sagiv440" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-white hover:text-secondary text-xl transition" />
              </a>
              <a href="https://www.linkedin.com/in/sagiv-reuben-1264341b9/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white hover:text-secondary text-xl transition" />
              </a>
              <a href="https://sagiv440.itch.io/" target="_blank" rel="noopener noreferrer">
                <FaItchIo className="text-white hover:text-secondary text-xl transition" />
              </a>
              <a href="https://www.facebook.com/sagiv.reuben" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-white hover:text-secondary text-xl transition" />
              </a>
            </div>

            {/* NAV BUTTONS */}
            {renderNavLinks(false)}

          </div>
        </div>
      </nav>


    </>
  );
};

export default Navbar;