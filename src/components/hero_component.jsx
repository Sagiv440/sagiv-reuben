import { motion } from "framer-motion";

// Sci-Fi Gradient Nebula Hero
export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Animated Gradient Nebula Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-border to-primary  opacity-30" />

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
        className="relative z-10 max-w-3xl text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 whitespace-nowrap">
          Hi, I'm Sagiv
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
          Hello. This website is a little archive of my work and the path I’ve taken. Feel free to look around.
        </p>

      </motion.div>

      {/* Soft Glow Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-primary to-transparent" />
    </section>
  );
}