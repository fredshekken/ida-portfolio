"use client";

import { motion } from "framer-motion";
import { SiGithub as Github } from "react-icons/si";
import { FaLinkedin as Linkedin, FaFacebook as Facebook, FaInstagram as Instagram } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

const contactLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/fredshekken",
    href: "https://github.com/fredshekken",
    description: "Check out my repositories",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://www.linkedin.com/in/ida-magaan",
    description: "Let's connect professionally",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "facebook.com/yourprofile",
    href: "https://www.facebook.com/magaan.friedamarievelasco",
    description: "Say hi anytime",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@yourhandle",
    href: "https://www.instagram.com/eethamarie",
    description: "Behind the scenes stuff",
  },
];

export default function ContactForm() {
  const { isDark } = useTheme();

  return (
    <section
      id="contact"
      className="relative w-full px-6 pt-24 pb-0 overflow-hidden"
      style={{ background: "transparent" }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-display font-bold mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#FFFFFF",
              textShadow: isDark
                ? "0 0 40px rgba(0,201,167,0.3)"
                : "0 0 40px rgba(126,206,202,0.4)",
            }}
          >
            Get in Touch
          </h2>
          <p style={{ color: "#B8E4F9", fontSize: "1rem", opacity: 0.8 }}>
            Have a project in mind, or just want to say hi?
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-lg flex flex-col gap-4"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{
                  x: 6,
                  background: isDark ? "rgba(0,201,167,0.12)" : "rgba(126,206,202,0.2)",
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px 20px",
                  borderRadius: "16px",
                  background: isDark ? "rgba(10,31,61,0.4)" : "rgba(13,59,110,0.2)",
                  border: `1px solid ${isDark ? "rgba(0,201,167,0.1)" : "rgba(126,206,202,0.2)"}`,
                  backdropFilter: "blur(8px)",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: isDark ? "rgba(0,201,167,0.15)" : "rgba(126,206,202,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <link.icon
                    style={{
                      width: "20px",
                      height: "20px",
                      color: isDark ? "#00C9A7" : "#7ECECA",
                    }}
                  />
                </div>
                <div>
                  <p style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 600, margin: 0 }}>
                    {link.label}
                  </p>
                  <p style={{ color: "#B8E4F9", fontSize: "12px", opacity: 0.6, margin: 0 }}>
                    {link.description}
                  </p>
                </div>
                <div style={{ marginLeft: "auto" }}>
                  <span style={{ color: "#7ECECA", fontSize: "18px", opacity: 0.5 }}>→</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
                      <ellipse cx="720" cy="195" rx="800" ry="30" fill="rgba(180,140,80,0.15)" />
