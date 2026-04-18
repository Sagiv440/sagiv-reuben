import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import LImage from './canvas/Image';
import { MyImage } from '../assets';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    {/*<motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >*/}
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
      {/*</motion.div>*/}
    </div>
  </Tilt>
);
const About = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10 px-6">

        {/* LEFT SIDE - IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <LImage
            src={MyImage} // <-- replace with your image
            alt="about"
            className="max-w-[400px] w-full object-contain rounded-full object-cover border border-border"
          />
        </div>

        {/* RIGHT SIDE - TEXT */}
        <div className="w-full md:w-1/2">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>About Me</h2>
          </motion.div>

          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className="mt-4 text-secondary text-[17px] leading-[30px]"
          >
I’m Sagiv Reuben, a Practical Electronics Engineer with a broad, multidisciplinary skill set developed through hands-on experience, curiosity, and a strong passion for building and understanding systems.
          </motion.p>
          <br/>
          <motion.a
            href="/sagiv-reuben/#/about"
            className="px-4 py-2 rounded-md text-white/80 hover:text-white 
             border border-white/20 hover:border-white/40
             transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            More
          </motion.a>
        </div>

      </div>
    </section>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
