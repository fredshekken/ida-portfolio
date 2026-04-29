"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import projects from "@/data/projects.json";

const categories = ["All", "Full Stack", "UI/UX", "Web Dev", "Game Dev"];

export default function ProjectsSection() {
  const [active, setActive] = useState("All");

  const filtered = projects.filter(
    (p) => active === "All" || p.category.includes(active)
  );

  return (
    <section id="projects" className="w-full px-6 py-24 bg-gradient-to-b from-[#1A8FA0] via-[#0D5F7A] to-[#0D3B6E]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl md:text-5xl text-white mb-10"
        >
          Projects & <span className="text-[#B8E4F9]">Work.</span>
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                active === cat
                  ? "bg-white text-[#1A8FA0]"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 border border-white/20 rounded-2xl overflow-hidden hover:border-white/40 transition-colors duration-200"
              >
                <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5" />
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-white/60 text-sm mb-4">{project.description}</p>
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tech?.map((tech: string) => (
                      <span key={tech} className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-block text-[#B8E4F9] text-sm font-medium hover:underline"
                  >
                    View Project →
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}