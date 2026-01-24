import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Lenovo",
    role: "Premier Technical Support Specialist",
    period: "04/2024 – heute",
    points: [
      "Bearbeitung komplexer Windows-Support-Fälle und Eskalationen",
      "Strukturierte Root-Cause-Analysen für Hardware- und Softwareprobleme",
      "Kundenberatung zur System-Optimierung",
      "Dokumentation und Wissenstransfer im Team"
    ]
  },
  {
    company: "Mercedes-Benz",
    role: "Technical Service Representative",
    subtitle: "Customer Assistance Center",
    period: "2020 – 2023",
    points: [
      "Analyse komplexer technischer Fragestellungen",
      "Zusammenarbeit mit höheren Support-Ebenen",
      "Dokumentation und Prozessverbesserung",
      "Mitwirkung an Schulungen"
    ]
  },
  {
    company: "Weitere Stationen",
    role: "Technischer Support & Kundenservice",
    points: [
      "Direkter Kundenkontakt und technische Unterstützung",
      "Dokumentation und Ticketbearbeitung",
      "Fundament für Serviceorientierung und Teamarbeit"
    ]
  }
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-[#0a0a0a] border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Section Label */}
          <div className="font-mono text-xs text-zinc-600 uppercase tracking-widest">
            <span className="text-cyan-400">[</span> 03 <span className="text-cyan-400">]</span> Erfahrung
          </div>

          {/* Experience Blocks */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-zinc-900/30 border border-zinc-800 p-6 hover:border-zinc-700 transition-colors duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-zinc-800">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-zinc-400 text-sm font-medium">
                      {exp.role}
                    </p>
                    {exp.subtitle && (
                      <p className="text-zinc-500 text-xs mt-1">
                        {exp.subtitle}
                      </p>
                    )}
                  </div>
                  <span className="text-xs text-zinc-500 font-mono whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                {/* Points */}
                <ul className="space-y-2">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-zinc-400 text-sm">
                      <span className="text-cyan-400 font-mono text-xs mt-1">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}