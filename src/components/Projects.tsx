import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";
import { ReactElement } from "react";

type SectionProps = {
  id: string;
};

interface Project {
  title: string;
  description: string;
  tech: ReactElement[];
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "My personal developer portfolio built with React and Tailwind CSS.",
    tech: [<FaReact key="react" />, <SiTailwindcss key="tailwind" />],
  },
  {
    title: "Blog App",
    description:
      "A full-stack blog platform built with React, Node.js, Express, and MySQL, featuring rich text editing.",
    tech: [
      <FaReact key="react" />,
      <SiExpress key="express" />,
      <FaNodeJs key="node" />,
      <SiMysql key="mysql" />,
    ],
  },
  {
    title: "Task Manager",
    description:
      "An intuitive task tracker with authentication, powered by a MySQL backend.",
    tech: [
      <FaReact key="react" />,
      <SiExpress key="express" />,
      <FaNodeJs key="node" />,
      <SiMysql key="mysql" />,
    ],
  },
];

const Projects = ({ id }: SectionProps) => {
  return (
    <motion.section
      id="projects"
      className="bg-gray-950 text-white py-24 md:py-48 px-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl shadow-md p-6 text-left transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex items-center gap-4 text-cyan-400 text-xl">
              {project.tech.map((icon, i) => (
                <span key={i}>{icon}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
