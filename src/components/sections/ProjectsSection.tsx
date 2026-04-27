"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import projects from "@/data/projects.json";

const categories = ["All", "Full Stack", "UI/UX", "Web Dev", "Game Dev"];

export default function ProjectsSection() {
  const [active, setActive] = useState("All");

  const filtered = projects.filter(
    (p) => active === "All" || p.category.includes(active)
  );

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display text-4xl md:text-5xl text-text mb-10"
      >
        Projects &{" "}
        <span className="text-accent">Work.</span>
      </motion.h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-xs tracking-widest uppercase transition-colors duration-200 ${
              active === cat
                ? "bg-accent text-surface"
                : "border border-white/10 text-muted hover:border-accent/40 hover:text-text"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group bg-surface-mid border border-white/5 rounded-2xl overflow-hidden hover:border-accent/20 transition-colors duration-300"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-surface-light flex items-center justify-center overflow-hidden">
                <span className="text-muted text-xs tracking-widest uppercase">
                  {project.title}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-text font-medium mb-2">{project.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full border border-white/10 text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}