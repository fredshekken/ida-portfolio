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
    <section className="max-w-6xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display text-4xl md:text-5xl text-text mb-16"
      >
        Skills &{" "}
        <span className="text-accent">Tools.</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-surface-mid border border-white/5 rounded-2xl p-6 hover:border-accent/20 transition-colors duration-300"
          >
            <h3 className="text-accent text-xs tracking-widest uppercase mb-4">
              {category}
            </h3>
            <ul className="flex flex-col gap-2">
              {items.map((skill) => (
                <li key={skill} className="text-muted text-sm hover:text-text transition-colors duration-200">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}