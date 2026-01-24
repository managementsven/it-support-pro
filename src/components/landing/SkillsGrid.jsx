import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Windows, macOS, iOS",
  "Technischer Support (1st–3rd Level)",
  "Troubleshooting & Root-Cause-Analyse",
  "Eskalationsmanagement",
  "CRM- und Ticketsysteme",
  "Technische Dokumentation & Knowledge Bases",
  "Kundenberatung und verständliche Kommunikation"
];

export default function SkillsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 md:py-40 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Section Label */}
          <div>
            <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">
              Fachliche Schwerpunkte
            </span>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="flex items-start gap-4 p-6 bg-white border border-slate-200 hover:border-slate-900 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 flex-shrink-0" />
                  <h3 className="text-lg font-medium text-slate-900 leading-relaxed">
                    {skill}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}