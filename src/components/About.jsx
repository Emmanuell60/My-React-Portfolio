import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-24 px-6 bg-gray-950 text-gray-300 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6">
        About Me
      </h2>
      <div className="max-w-3xl mx-auto text-lg leading-relaxed">
        I'm a passionate software developer who enjoys building dynamic, user-focused web applications using the MERN stack. I believe in clean code, thoughtful design, and pushing the boundaries of what's possible on the web.
      </div>
    </motion.section>
  );
};

export default About;
