import { motion } from "framer-motion";
import { web_logo } from "../assets";
import SelectCategory from "./canvas/SelectCategory";

// Sci-Fi Gradient Nebula Hero
export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Animated Gradient Nebula Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary via-border to-primary opacity-30"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />


      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-40"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -200 - Math.random() * 300],
            }}
            transition={{ duration: 6 + Math.random() * 4, repeat: Infinity }}
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* Hero Content */}

      <motion.div
        className="relative z-10 max-w-3xl text-center px-6 flex flex-col items-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: -80 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl  flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">

          {/* TEXT */}
          <h1 className="text-5xl md:text-7xl font-bold text-center md:text-left">
            Hi, I'm Sagiv
          </h1>

          {/* LOGO */}
          <motion.img
            src={web_logo}
            alt="Website logo"
            className="w-18 md:w-20 select-none hidden md:block"
            initial={{ filter: "drop-shadow(0 0 10px rgba(0,200,255,0.3))" }}
          />

        </div>

        <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Electronics Engineer & Developer
        </h2>
        <br />
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
          Practical Electronics Engineer with a broad, multidisciplinary skill set across hardware, software, and systems.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <label className="text-white md:text-xl whitespace-nowrap">Select Skill Category:</label>
          <SelectCategory />
        </div>

        {/* HERO IMAGE */}
        {/*
        <motion.a
          href="/sagiv-reuben/#/projects"
          whileHover={{ scale: 1.07 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut"
          }}
        >
          <motion.img
            src={web_logo}
            alt="Website logo"
            className="
            mt-6
            w-40 md:w-56
            select-none
          "
            initial={{ scale: 1, filter: "drop-shadow(0 0 10px rgba(0,200,255,0.3))" }}
            animate={{
              filter: [
                "drop-shadow(0 0 10px rgba(0,200,255,0.3))",
                "drop-shadow(0 0 22px rgba(0,200,255,0.5))",
                "drop-shadow(0 0 10px rgba(0,200,255,0.3))",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.a>
              */}
      </motion.div>
      {/* Soft Glow Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-primary to-transparent" />
    </section>
  );
}