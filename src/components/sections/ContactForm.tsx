"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MessageSquare } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { useTheme } from "@/context/ThemeContext";

export default function ContactForm() {
  const { isDark } = useTheme();
  const [state, handleSubmit] = useForm("maqvwegb");

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 px-6 overflow-hidden flex items-center justify-center"
      style={{
        background: isDark
          ? "linear-gradient(180deg, #050D1A 0%, #0A1F3D 50%, #0D3B6E 100%)"
          : "linear-gradient(180deg, #0D3B6E 0%, #0A5B7A 50%, #B8E4F9 100%)",
      }}
    >
      {/* Bubble particles rising */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              background: isDark
                ? "rgba(0, 201, 167, 0.3)"
                : "rgba(255, 255, 255, 0.3)",
              left: `${Math.random() * 100}%`,
              bottom: "-20px",
            }}
            animate={{
              y: [-20, -600, -600],
              opacity: [0.2, 1, 0],
              scale: [1, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Ocean floor ambient glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(ellipse at center bottom, rgba(0, 201, 167, 0.15) 0%, transparent 70%)"
            : "radial-gradient(ellipse at center bottom, rgba(126, 206, 202, 0.2) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 w-full max-w-2xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "#FFFFFF",
            }}
          >
            Get in Touch
          </h2>
          <p className="text-lg opacity-80" style={{ color: "#B8E4F9" }}>
            Dive into conversation - let's explore possibilities together
          </p>
        </motion.div>

        <motion.div
          className="backdrop-blur-xl rounded-3xl p-8 md:p-12 relative overflow-hidden"
          style={{
            background: isDark
              ? "rgba(10, 31, 61, 0.6)"
              : "rgba(255, 255, 255, 0.15)",
            border: isDark
              ? "1px solid rgba(0, 201, 167, 0.3)"
              : "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: isDark
              ? "0 0 40px rgba(0, 201, 167, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)"
              : "0 0 40px rgba(126, 206, 202, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Form glow effect */}
          <div
            className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full pointer-events-none opacity-30"
            style={{
              background: isDark
                ? "radial-gradient(circle, rgba(0, 201, 167, 0.2) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(126, 206, 202, 0.2) 0%, transparent 70%)",
            }}
          />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            {/* Name Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label className="block mb-2 text-sm font-medium" style={{ color: "#B8E4F9" }}>
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg transition-all duration-200 focus:outline-none"
                style={{
                  background: isDark
                    ? "rgba(255, 255, 255, 0.08)"
                    : "rgba(255, 255, 255, 0.2)",
                  border: isDark
                    ? "1px solid rgba(255, 255, 255, 0.2)"
                    : "1px solid rgba(255, 255, 255, 0.3)",
                  color: "#FFFFFF",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.background = isDark
                    ? "rgba(0, 201, 167, 0.15)"
                    : "rgba(126, 206, 202, 0.3)";
                  e.currentTarget.style.borderColor = isDark ? "#00C9A7" : "#1A8FA0";
                  e.currentTarget.style.boxShadow = `0 0 15px ${isDark ? "rgba(0, 201, 167, 0.3)" : "rgba(126, 206, 202, 0.3)"}`;
                }}
                onBlur={(e) => {
                  e.currentTarget.style.background = isDark
                    ? "rgba(255, 255, 255, 0.08)"
                    : "rgba(255, 255, 255, 0.2)";
                  e.currentTarget.style.borderColor = isDark
                    ? "rgba(255, 255, 255, 0.2)"
                    : "rgba(255, 255, 255, 0.3)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label className="block mb-2 text-sm font-medium" style={{ color: "#B8E4F9" }}>
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-3.5 w-5 h-5"
                  style={{ color: isDark ? "#00C9A7" : "#1A8FA0" }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-lg transition-all duration-200 focus:outline-none"
                  style={{
                    background: isDark
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(255, 255, 255, 0.2)",
                    border: isDark
                      ? "1px solid rgba(255, 255, 255, 0.2)"
                      : "1px solid rgba(255, 255, 255, 0.3)",
                    color: "#FFFFFF",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.background = isDark
                      ? "rgba(0, 201, 167, 0.15)"
                      : "rgba(126, 206, 202, 0.3)";
                    e.currentTarget.style.borderColor = isDark ? "#00C9A7" : "#1A8FA0";
                    e.currentTarget.style.boxShadow = `0 0 15px ${isDark ? "rgba(0, 201, 167, 0.3)" : "rgba(126, 206, 202, 0.3)"}`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.background = isDark
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(255, 255, 255, 0.2)";
                    e.currentTarget.style.borderColor = isDark
                      ? "rgba(255, 255, 255, 0.2)"
                      : "rgba(255, 255, 255, 0.3)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
              <ValidationError field="email" errors={state.errors} />
            </motion.div>

            {/* Message Textarea */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label className="block mb-2 text-sm font-medium" style={{ color: "#B8E4F9" }}>
                Message
              </label>
              <div className="relative">
                <MessageSquare
                  className="absolute left-3 top-3 w-5 h-5"
                  style={{ color: isDark ? "#00C9A7" : "#1A8FA0" }}
                />
                <textarea
                  name="message"
                  placeholder="Your message here..."
                  rows={5}
                  className="w-full pl-10 pr-4 py-3 rounded-lg transition-all duration-200 focus:outline-none resize-none"
                  style={{
                    background: isDark
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(255, 255, 255, 0.2)",
                    border: isDark
                      ? "1px solid rgba(255, 255, 255, 0.2)"
                      : "1px solid rgba(255, 255, 255, 0.3)",
                    color: "#FFFFFF",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.background = isDark
                      ? "rgba(0, 201, 167, 0.15)"
                      : "rgba(126, 206, 202, 0.3)";
                    e.currentTarget.style.borderColor = isDark ? "#00C9A7" : "#1A8FA0";
                    e.currentTarget.style.boxShadow = `0 0 15px ${isDark ? "rgba(0, 201, 167, 0.3)" : "rgba(126, 206, 202, 0.3)"}`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.background = isDark
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(255, 255, 255, 0.2)";
                    e.currentTarget.style.borderColor = isDark
                      ? "rgba(255, 255, 255, 0.2)"
                      : "rgba(255, 255, 255, 0.3)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
              <ValidationError field="message" errors={state.errors} />
            </motion.div>

            {/* Status Messages */}
            <AnimatePresence>
              {state.succeeded && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-lg text-center"
                  style={{
                    background: "rgba(34, 197, 94, 0.2)",
                    border: "1px solid rgba(34, 197, 94, 0.5)",
                    color: "#86EFAC",
                  }}
                >
                  Thank you! Message sent successfully 🌊
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={state.submitting}
              className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              style={{
                background: isDark
                  ? "linear-gradient(135deg, #00C9A7 0%, #0D8B7F 100%)"
                  : "linear-gradient(135deg, #1A8FA0 0%, #0D5B6E 100%)",
                color: "#FFFFFF",
                boxShadow: isDark
                  ? "0 0 20px rgba(0, 201, 167, 0.4)"
                  : "0 0 20px rgba(26, 143, 160, 0.3)",
              }}
              whileHover={
                !state.submitting
                  ? {
                      scale: 1.02,
                      boxShadow: isDark
                        ? "0 0 30px rgba(0, 201, 167, 0.6)"
                        : "0 0 30px rgba(26, 143, 160, 0.5)",
                    }
                  : {}
              }
              whileTap={!state.submitting ? { scale: 0.98 } : {}}
            >
              {state.submitting ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    ⚙️
                  </motion.span>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Wavy SVG path at bottom with gradient animation */}
        <svg
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            height: "120px",
            width: "100%",
            opacity: isDark ? 0.15 : 0.25,
          }}
        >
          <motion.path
            d="M0,64L100,58.7C200,53,400,42.7,600,48C800,53.3,1000,74.7,1100,80L1200,85.3L1200,120L1100,120C1000,120,800,120,600,120C400,120,200,120,100,120L0,120Z"
            fill={isDark ? "#00C9A7" : "#1A8FA0"}
            animate={{
              d: [
                "M0,64L100,58.7C200,53,400,42.7,600,48C800,53.3,1000,74.7,1100,80L1200,85.3L1200,120L1100,120C1000,120,800,120,600,120C400,120,200,120,100,120L0,120Z",
                "M0,64L100,69.3C200,74.7,400,85.3,600,80C800,74.7,1000,53.3,1100,48L1200,42.7L1200,120L1100,120C1000,120,800,120,600,120C400,120,200,120,100,120L0,120Z",
                "M0,64L100,58.7C200,53,400,42.7,600,48C800,53.3,1000,74.7,1100,80L1200,85.3L1200,120L1100,120C1000,120,800,120,600,120C400,120,200,120,100,120L0,120Z",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    </section>
  );
}
