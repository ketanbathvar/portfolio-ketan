import React, { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, useMotionValueEvent, useScroll, motion } from 'framer-motion'
import img1 from '../assets/img1.png'
import photo1 from '../assets/photo1.png'

const useIsMobile = (query = "(max-width:639px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  )

  useEffect(() => {
    if (typeof window === "undefined") return
    const mql = window.matchMedia(query)
    const handler = (e) => setIsMobile(e.matches)

    mql.addEventListener("change", handler)
    setIsMobile(mql.matches)

    return () => mql.removeEventListener("change", handler)
  }, [query])

  return isMobile
}

const Project = () => {
  const isMobile = useIsMobile()
  const scenRef = useRef(null)

  const projects = useMemo(
    () => [
      {
        title: "Book Appointment",
        link: "https://health-hub-project-seven.vercel.app/",
        img: isMobile ? photo1 : img1,
      }
      
    ],
    [isMobile]
  )

  const { scrollYProgress } = useScroll({
    target: scenRef,
    offset: ["start start", "end end"]
  })

  const thresholds = projects.map((_, i) => (i + 1) / projects.length)
  const [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = thresholds.findIndex((t) => v < t)
    setActiveIndex(idx === -1 ? thresholds.length - 1 : idx)
  })

  const activeProject = projects[activeIndex]

  return (
    <section
      ref={scenRef}
      id="projects"
      className="relative text-white bg-black"
      style={{
        height: `${100 * projects.length}vh`
      }}
    >
      <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse' />
          <div className='absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse delay-500' />
        </div>

      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-4">

        {/* HEADER */}
        <div className="text-center mb-6 sm:mb-10">
          <motion.h2 className='text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]'
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My Projects
          </motion.h2>
        </div>

        {/* PROJECT AREA */}
        <div className="relative w-full flex-1 flex items-center justify-center">

          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${activeIndex === idx
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
                }`}
            >

              {/* TITLE (FIXED SIZE + SPACING) */}
              <AnimatePresence mode="wait">
                {activeIndex === idx && (
                  <motion.h3
                    key={project.title}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4 }}
                    className="text-center mb-6 text-xl sm:text-3xl md:text-4xl font-semibold text-white/90"
                  >
                    {project.title}
                  </motion.h3>
                )}
              </AnimatePresence>

              {/* CARD */}
              <motion.div
                className="w-full max-w-5xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 sm:p-6"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >

                {/* IMAGE */}
                <div className="flex justify-center">
                  
                  <div className="rounded-xl overflow-hidden border border-white/10">
                    <motion.img
                      key={project.title}
                      src={project.img}
                      alt={project.title}
                      className="w-full max-h-[60vh] object-contain"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>

                {/* BUTTON (FIXED VISIBILITY) */}
                <div className="flex justify-center mt-5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-white text-black rounded-lg font-medium hover:scale-105 transition"
                  >
                    View Project
                  </a>
                </div>

              </motion.div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Project