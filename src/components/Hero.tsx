import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero: React.FC<{ id?: string }> = ({ id = "home" }) => {
  const [text, setText] = useState<string>("");
  const [typingDone, setTypingDone] = useState<boolean>(false);

  const fullName = "Okediji Emmanuel";

  const [typedText] = useTypewriter({
    words: [fullName],
    typeSpeed: 100,
    loop: 1,
    onLoopDone: () => setTypingDone(true),
  });

  useEffect(() => {
    setText(typedText);
    if (typedText === fullName) {
      setTypingDone(true);
    }
  }, [typedText]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <motion.section
      id={id}
      className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          fullScreen: false,
          background: { color: "transparent" },
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: "#00ffff" },
            links: {
              enable: true,
              distance: 150,
              color: "#00ffff",
              opacity: 0.2,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            size: { value: 2 },
            opacity: { value: 0.3 },
          },
        }}
      />

      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg min-h-[80px]">
          {typedText}
          {!typingDone && <Cursor />}
        </h1>

        {typingDone && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl mb-6 text-cyan-400 font-medium">
              Software Developer
            </p>
            <p className="text-gray-300 text-lg">
              I help teams build fast, reliable, and scalable web applications, using modern full-stack technologies and clean, maintainable code.
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Hero;
