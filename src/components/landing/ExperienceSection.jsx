import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Lenovo",
    role: "Premier Technical Support Specialist",
    period: "04.2024 – heute",
    points: [
      "Windows-Support und Eskalationsbearbeitung",
      "Root-Cause-Analysen für Hardware/Software",
      "Kundenberatung und System-Optimierung",
      "Dokumentation und Wissenstransfer"
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
      "Prozessverbesserung und Dokumentation"
    ]
  },
  {
    company: "Weitere Stationen",
    role: "Technical Support",
    points: [
      "Kundenkontakt und technische Unterstützung",
      "Ticketbearbeitung und Dokumentation"
    ]
  }
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-[#0a0a0a] border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Label */}
          <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
            03 / Erfahrung
          </div>

          {/* Blocks */}
          <div className="space-y-px border border-zinc-900">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-[#0a0a0a] hover:bg-zinc-950/50 transition-colors p-6"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-base font-semibold text-white mb-0.5">
                      {exp.company}
                    </h3>
                    <p className="text-zinc-500 text-xs">
                      {exp.role}
                      {exp.subtitle && <span className="text-zinc-600"> · {exp.subtitle}</span>}
                    </p>
                  </div>
                  <span className="text-[10px] text-zinc-600 font-mono whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                {/* Points */}
                <ul className="space-y-1.5">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-zinc-400 text-xs">
                      <span className="text-zinc-700 mt-1">—</span>
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