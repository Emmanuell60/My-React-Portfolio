import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-cyan-400"><a href="#home">Emmanuel</a></h1>
        <ul className="flex space-x-1 md:space-x-8 text-sm md:text-base text-white">
          <li><a href="#home" className="hover:bg-cyan-400 hover:text-black transition-colors duration-500 p-3 rounded-2xl">Home</a></li>
          <li><a href="#about" className="hover:bg-cyan-400 hover:text-black transition-colors duration-500 p-3 rounded-2xl">About</a></li>
          <li><a href="#skills" className="hover:bg-cyan-400 hover:text-black transition-colors duration-500 p-3 rounded-2xl">Skills</a></li>
          <li><a href="#projects" className="hover:bg-cyan-400 hover:text-black transition-colors duration-500 p-3 rounded-2xl">Projects</a></li>
          <li><a href="#contact" className="hover:bg-cyan-400 hover:text-black transition-colors duration-500 p-3 rounded-2xl">Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;