import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Lenovo",
    role: "Premier Technical Support Specialist",
    period: "seit April 2024",
    description: "Technischer Support für komplexe Hard- und Softwareprobleme im Windows-Umfeld. Bearbeitung anspruchsvoller Supportfälle und Eskalationen, strukturierte Root-Cause-Analysen sowie Beratung von Kunden zur Optimierung von Systemen. Enge Zusammenarbeit mit internen Teams, saubere Dokumentation und aktiver Wissenstransfer.",
    highlight: true
  },
  {
    company: "Mercedes-Benz",
    role: "Technical Service Representative",
    subtitle: "Customer Assistance Center",
    period: "2020–2023",
    description: "Mehrjährige Tätigkeit im technischen Kundenservice mit Fokus auf Analyse komplexer Fragestellungen. Zusammenarbeit mit höheren Support-Ebenen, hohe Dokumentationsqualität sowie Mitwirkung an Schulungen und Prozessverbesserungen.",
    highlight: true
  },
  {
    company: "Weitere Stationen",
    role: "Technischer Support & Kundenservice",
    description: "Technischer Support und Kundenservice in verschiedenen Rollen mit direktem Kundenkontakt, Dokumentation und Unterstützung bei Hard- und Softwareproblemen. Diese Stationen bilden das Fundament für Serviceorientierung, Teamarbeit und technische Zuverlässigkeit.",
    highlight: false
  }
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 md:py-40 bg-white border-b border-slate-100">
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
              Berufserfahrung
            </span>
          </div>

          {/* Experience Blocks */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="space-y-4 border-l-2 border-slate-200 pl-8"
              >
                {/* Header */}
                <div className="space-y-1">
                  <div className="flex items-baseline justify-between gap-4 flex-wrap">
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {exp.company}
                    </h3>
                    {exp.period && (
                      <span className="text-sm text-slate-500 font-medium">
                        {exp.period}
                      </span>
                    )}
                  </div>
                  <p className="text-lg text-slate-600 font-medium">
                    {exp.role}
                  </p>
                  {exp.subtitle && (
                    <p className="text-sm text-slate-500">
                      {exp.subtitle}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}