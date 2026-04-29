"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  async function handleSubmit() {
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("done");
  }

  return (
    <section id="contact" className="w-full px-6 pt-24 pb-24 bg-gradient-to-b from-[#0A1F3D] via-[#050D1A] to-[#050D1A]">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl md:text-6xl text-white mb-4"
        >
          Reach the <span className="text-[#00C9A7]">Ocean Floor.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/60 text-lg mb-12"
        >
          Have a project in mind, or just want to say hi? I'd love to hear from you.
        </motion.p>

        {status === "done" ? (
          <div className="bg-[#0A1F3D] border border-[#00C9A7]/20 rounded-2xl p-8 text-center">
            <p className="text-[#00C9A7] text-lg font-medium mb-2">Message sent!</p>
            <p className="text-white/50 text-sm">I'll get back to you as soon as I can.</p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#0A1F3D] border border-white/5 rounded-2xl p-8 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#7ECECA]">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="bg-[#050D1A] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00C9A7]/50 transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#7ECECA]">Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="bg-[#050D1A] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00C9A7]/50 transition-colors duration-200"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-[#7ECECA]">Message</label>
              <textarea
                rows={5}
                placeholder="Your message..."
                className="bg-[#050D1A] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00C9A7]/50 transition-colors duration-200 resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              className="w-full py-3 bg-[#00C9A7] text-[#050D1A] text-sm font-medium rounded-xl hover:bg-[#00C9A7]/80 transition-colors duration-200 disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}