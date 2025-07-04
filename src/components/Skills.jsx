import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaGitlab, FaAws, FaDocker, FaTools
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiBootstrap, SiExpress, SiNextdotjs,
  SiFirebase, SiRedux, SiVercel, SiHeroku, SiPostman, SiGraphql,
  SiWebpack, SiBabel,
  SiMysql,
  SiPostgresql,
  SiVscodium
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "ReactJS", icon: FaReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "GraphQL", icon: SiGraphql },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "Version Control",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
    ],
  },
  {
    title: "State Management",
    skills: [
      { name: "Redux", icon: SiRedux },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Vercel", icon: SiVercel },
      { name: "Heroku", icon: SiHeroku },
      { name: "Docker", icon: FaDocker },
    ],
  },
  {
    title: "Tools & Utilities",
    skills: [
      { name: "Postman", icon: SiPostman },
      { name: "Webpack", icon: SiWebpack },
      { name: "Babel", icon: SiBabel },
      { name: "Dev Tools", icon: FaTools },
    ],
  },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              {cat.title}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-6">
              {cat.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center text-sm"
                >
                  <skill.icon className="text-3xl mb-2 hover:text-cyan-400 transition duration-300" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
