import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-8 text-center text-sm border-t border-gray-800">
      <div className="mb-3">
        <p className="tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-400 font-medium">Okediji Emmanuel</span>. All rights reserved.
        </p>
      </div>

      <div className="flex justify-center space-x-6 text-lg">
        <a
          href="https://github.com/Emmanuell60"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 hover:scale-125 transition-transform duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/emmanuelokediji9"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 hover:scale-125 transition-transform duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:emmanuelokediji9@gmail.com"
          className="hover:text-cyan-400 hover:scale-125 transition-transform duration-300"
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
