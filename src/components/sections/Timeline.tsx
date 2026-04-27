"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    type: "Education",
    title: "BS Computer Science",
    place: "Pamantasan ng Lungsod ng Maynila",
    date: "2022 — Present",
    description: "CISTM department. Focusing on software engineering, UI/UX, and full stack development.",
  },
  {
    type: "Experience",
    title: "Robotics Intern",
    place: "Hytec Power Inc.",
    date: "2024",
    description: "Worked on ADOBOT — a VEX IQ robotics project during internship.",
  },
  {
    type: "Experience",
    title: "Full Stack Developer",
    place: "Gracewell NEXUS (Client Project)",
    date: "2024 — Present",
    description: "Built and deployed a full stack HR web application for a real client. Handled frontend, backend, and deployment independently.",
  },
  {
    type: "Achievement",
    title: "IT Skills Olympics 2024",
    place: "Chef Lakbay",
    date: "2024",
    description: "Developed an Android cooking game using Unity and GIMP for the IT Skills Olympics.",
  },
];

export default function Timeline() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display text-4xl md:text-5xl text-text mb-16"
      >
        Experience &{" "}
        <span className="text-accent">Education.</span>
      </motion.h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10" />

        <div className="flex flex-col gap-12">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="pl-8 relative"
            >
              {/* Dot */}
              <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-accent -translate-x-1/2" />

              <span className="text-xs text-accent tracking-widest uppercase mb-1 block">
                {item.type} · {item.date}
              </span>
              <h3 className="text-text font-medium text-lg mb-1">{item.title}</h3>
              <p className="text-muted text-sm mb-2">{item.place}</p>
              <p className="text-muted text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}