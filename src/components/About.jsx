/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-48 px-6 bg-gray-950 text-gray-300 text-center"
    >
      <motion.div
        className="max-w-3xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // 0.3 = 30% in view triggers
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6"
          variants={item}
        >
          About Me
        </motion.h2>

        <div className="text-lg leading-relaxed text-left">
          <motion.p className="mb-6" variants={item}>
            I'm a passionate software developer with a strong focus on building dynamic, user-centered web applications. My primary stack includes MySQL, Express.js, React, and Node.js, a powerful combination that allows me to create fast, scalable, and maintainable full-stack applications.
          </motion.p>

          <motion.p className="mb-6" variants={item}>
            I take pride in writing clean, efficient code and designing intuitive user interfaces that solve real-world problems. Whether it's developing backend APIs, managing databases, or building responsive frontend components, I enjoy every step of the development process.
          </motion.p>

          <motion.p variants={item}>
            Driven by curiosity and a desire to grow, I'm always exploring new technologies, refining my skills, and seeking out opportunities to push the boundaries of what’s possible on the web.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
