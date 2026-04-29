"use client";

import { motion } from "framer-motion";

const skills = {
  Frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
  Backend: ["Node.js", "Express", "Supabase", "PostgreSQL", "REST API"],
  Tools: ["Git", "Figma", "Vercel", "Render", "VS Code"],
  Design: ["UI/UX Design", "Wireframing", "Prototyping", "Design Systems"],
};

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full px-6 py-24 bg-gradient-to-b from-[#0D3B6E] via-[#071F3D] to-[#0A1F3D]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl md:text-5xl text-white mb-4"
        >
          Skills & <span className="text-[#7ECECA]">Tools.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/60 text-lg mb-16"
        >
          A blend of technical expertise and creative problem-solving.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map((category, idx) => (
            <motion.div
              key={category[0]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
              className="bg-[#0A1F3D] border border-white/10 rounded-2xl p-6 hover:border-[#7ECECA]/30 transition-colors duration-200"
            >
              <h3 className="text-[#7ECECA] font-semibold text-lg mb-4">{category[0]}</h3>
              <ul className="space-y-2">
                {category[1].map((skill) => (
                  <li key={skill} className="text-white/70 text-sm flex items-center">
                    <span className="inline-block w-1.5 h-1.5 bg-[#7ECECA] rounded-full mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}