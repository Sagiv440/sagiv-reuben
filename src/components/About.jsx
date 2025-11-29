import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

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
    <section className="relative w-full h-screen">
      <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
      My name is Sagiv Reuben. From a young age, I was drawn to understanding how things work, taking apart mechanisms, studying their inner structures, and putting them back together. That curiosity naturally grew into a strong passion for computers, which I consider one of the most complex and fascinating machines ever created. On this website, you’ll find work from many disciplines within the world of computing from web and application development to systems, hardware, and more.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
      </div>
      </div>
    </section>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
