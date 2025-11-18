import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';
import {Profile} from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
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
      <li className="relative text-white text-[15px] font-medium cursor-pointer">
        <button onClick={() => setDropdownOpen(!dropdownOpen)}>
          Projects ▼
        </button>


        {dropdownOpen && (
          <ul className="absolute mt-2 right-0 bg-tertiary p-3 rounded-xl shadow-lg flex flex-col gap-2 z-50 border border-white/15">
            <li className="text-white hover:text-secondary cursor-pointer whitespace-nowrap">Games</li>
            <li className="text-white hover:text-secondary cursor-pointer whitespace-nowrap">Web</li>
            <li className="text-white hover:text-secondary cursor-pointer whitespace-nowrap">Electronics</li>
            <li className="text-white hover:text-secondary cursor-pointer whitespace-nowrap">Linux</li>
            <li className="text-white hover:text-secondary cursor-pointer whitespace-nowrap">Odd</li>
            <li className="text-white hover:text-secondary cursor-pointer whitespace-nowrap">Everythin</li>
          </ul>
        )}
      </li>
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
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
      
      <li
        className={`text-${isSecondary ? 'secondary' : 'white'
          } hover:text-white text-[15px] font-medium cursor-pointer`}
      >
        <button onClick={toggleResume}>Resume</button>
      </li>
    </ul>
  );

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-tertiary border-b border-border`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
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
          </Link>
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
