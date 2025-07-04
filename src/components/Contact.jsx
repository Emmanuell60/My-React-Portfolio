import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const audioRef = useRef(null); // for sound

  useEffect(() => {
    if (showSuccess) {
      // Play sound
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }

      // Auto-hide after 4 seconds
      const timer = setTimeout(() => {
        setShowSuccess(false);
        setStatus("");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");
    setShowSuccess(false);

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/movwzakw", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setShowSuccess(true);
        form.reset();
      } else {
        setStatus("Oops! Something went wrong.");
      }
    } catch (err) {
      setStatus("An error occurred. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <motion.section
      id="contact"
      className="py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white text-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10">
        Contact Me
      </h2>

      <form
        className="max-w-2xl mx-auto space-y-6"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-600 autofill:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-600 autofill:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-600 autofill:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`relative flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-3 px-8 rounded-xl transition ease-in-out duration-500 hover:ring-4 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting && (
            <svg
              className="animate-spin h-5 w-5 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
              ></path>
            </svg>
          )}
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {/* ✅ Animated Checkmark */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mt-6"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-green-400 mb-2 drop-shadow-[0_0_10px_rgba(34,197,94,0.6)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8 }}
              />
            </motion.svg>

            <p className="text-green-400 font-semibold text-lg">
              Message sent successfully!
            </p>
          </motion.div>
        )}

        {/* ❌ Error Message */}
        {!showSuccess && status && !isSubmitting && (
          <p className="text-red-400 font-semibold mt-4">{status}</p>
        )}
      </form>

      {/* 🔊 Hidden audio for success */}
      <audio ref={audioRef} preload="auto">
        <source
          src="https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3"
          type="audio/mpeg"
        />
      </audio>
    </motion.section>
  );
};

export default Contact;
