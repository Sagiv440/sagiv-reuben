import { motion } from "framer-motion";
import LImage from "./canvas/Image";

const AboutMe = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT - IMAGE */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <LImage
            src="./src/assets/MyImage.jpeg" // replace this
            alt="Sagiv"
            className="w-[280px] md:w-[340px] object-contain rounded-xl"
          />
        </motion.div>

        {/* RIGHT - TEXT */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-sm text-white/50 mb-2">About</p>

          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Hi, I'm Sagiv
          </h1>

          <p className="text-secondary leading-relaxed mb-4 text-secondary">
 My name is Sagiv Reuben. From a young age, I was drawn to understanding how things work, taking apart mechanisms, studying their inner structures, and putting them back together. That curiosity naturally grew into a strong passion for computers, which I consider one of the most complex and fascinating machines ever created. On this website, you’ll find work from many disciplines within the world of computing from web and application development to systems, hardware, and more.
          </p>

          <p className="text-secondary leading-relaxed mb-6 ">
            Today, that curiosity translates into building across multiple areas
            of computing — including web development, applications, systems, and
            more.
          </p>

          {/* OPTIONAL BUTTON */}
          <motion.a
            href="/sagiv-reuben/#/projects"
            className="inline-block px-4 py-2 text-white/80 border border-white/20 rounded-md hover:text-white hover:border-white/40 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;