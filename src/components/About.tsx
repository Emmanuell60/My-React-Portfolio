import { motion } from "framer-motion";

type SectionProps = {
  id: string;
};

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

const About = ({ id }: SectionProps) => {
  return (
    <section
      id={id}
      className="py-24 md:py-48 px-6 bg-gray-950 text-gray-300 text-center"
    >
      <motion.div
        className="max-w-3xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6"
          variants={item}
        >
          About Me
        </motion.h2>

        <div className="text-lg leading-relaxed text-left">
          <motion.p className="mb-6" variants={item}>
            I'm a passionate Full-Stack Software Developer specializing in building dynamic, user-focused web applications. My core tech stack includes TypeScript, React, Node.js (Express), and PostgreSQL — tools I use to create fast, scalable, and maintainable solutions.
          </motion.p>

          <motion.p className="mb-6" variants={item}>
            I love writing clean, efficient code and crafting intuitive, responsive interfaces that solve real-world problems. Whether it's designing backend APIs, managing data with relational databases, or developing sleek frontend experiences, I enjoy every part of the development journey.
          </motion.p>

          <motion.p variants={item}>
            I'm constantly learning, experimenting with new technologies, and pushing the limits of what's possible on the web.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
