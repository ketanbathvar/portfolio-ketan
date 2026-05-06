import React from 'react'
import { motion } from 'framer-motion'





const Skills = () => {
  const skillsData = [
    {
      title: "Front-End",
      skills: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap 5",
        "JavaScript",
        "React.js",
        "Responsive UI",
        "Antd",
        "Mui Material",
        "GitHub"
      ],
    },
    {
      title: "Back-End",
      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "Authentication",
        "REST API",
        "API Endpoints",
      ],
    },
  ];


  return (

    <>

      <section
        id='skills'
        className='h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white'
      >
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse' />
          <div className='absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse delay-500' />
        </div>

        <motion.h2 className='text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63]'
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          My Skills
        </motion.h2>
        <motion.p className='mt-2 mb-8 text-white/90 text-base sm:text-lg z-10 text-center'
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Morden Application | Morden Technologies
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}

          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-4">

          {skillsData.map((category, index) => (
            <div
              key={index}
              className=" mt-10 border border-[#00bf8f] rounded-2xl p-12 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <h2 className="text-center mb-5 text-2xl font-semibold">
                {category.title}
              </h2>

              <div className="mt-5 flex flex-wrap gap-4 justify-center">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full border border-[#00bf8f] text-sm transition duration-300 hover:bg-[#00bf8f] hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </motion.div>

      </section>
    </>
  )
}

export default Skills
