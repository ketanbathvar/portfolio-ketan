import React, { useMemo, useEffect, useState } from "react";
import ParticalBackground from "../components/ParticalsBackground";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import avatar from "../assets/avator.png";
import resume from "../assets/ketan_resume.pdf";


const socials = [
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ketan-bathvar",
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/ketanbathvar",
  },
];

const glowVariants = {
  initial: {
    scale: 1,
    y: 0,
    filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
  },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: {
    scale: 0.95,
    y: 0,
    transition: { duration: 0.1 },
  },
};

const Home = () => {
  const roles = useMemo(
    () => ["Full Stack Developer", "Web Developer"],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex((v) => v + 1);
      } else if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && subIndex > 0) {
        setSubIndex((v) => v - 1);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, deleting ? 40 : 70);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section
      id="home"
      className="w-full min-h-screen relative bg-black overflow-hidden pt-20 sm:pt-24"
    >
      <ParticalBackground />


      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[60vw] h-[60vw] max-w-[400px] max-h-[400px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] max-w-[400px] max-h-[400px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-screen">


        <div className="text-center lg:text-left">


          <motion.div
            className="mb-4 text-xl sm:text-2xl md:text-3xl font-semibold text-white min-h-[1.5em]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {roles[index].substring(0, subIndex)}
            <span className="ml-1 inline-block w-[2px] bg-white animate-pulse h-[1em]" />
          </motion.div>


          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] bg-clip-text text-transparent">
              Hello I'm
            </span>
            <br />
            <span className="text-white break-words">
              Ketan Bathvar
            </span>
          </motion.h1>


          <motion.p
            className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            I’m a passionate Full Stack Developer fresher, focused on building
            responsive and user-friendly web applications.
          </motion.p>


          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] hover:scale-105 transition"
            >
              View My Work
            </a>

            <a
              href={resume}
              download
              className="px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 hover:scale-105 transition"
            >
              My Resume
            </a>
          </motion.div>


          <div className="mt-8 flex gap-5 justify-center lg:justify-start text-2xl">
            {socials.map(({ Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variants={glowVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="text-gray-300"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>


        <div className="relative hidden lg:flex justify-center items-center">
          <div
            className="absolute rounded-full blur-[40px] opacity-30"
            style={{
              width: "300px",
              height: "300px",
              background:
                "conic-gradient(from 0deg,#1cd8d2,#00bf8f,#302b63,#1cd8d2)",
            }}
          />

          <motion.img
            src={avatar}
            alt="Ketan"
            className="relative object-contain max-h-[80vh]"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;