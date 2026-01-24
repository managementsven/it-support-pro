import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Lenovo",
    role: "Premier Technical Support Specialist",
    description: "Technischer Support für komplexe Hard- und Softwareprobleme im Windows-Umfeld, Eskalationsbearbeitung, Kundenberatung, Prozessverbesserung und Wissenstransfer innerhalb des Teams.",
    highlight: true
  },
  {
    company: "Mercedes-Benz",
    role: "Technical Service Representative",
    subtitle: "Customer Assistance Center",
    description: "Mehrjährige Erfahrung im technischen Kundenservice, Analyse komplexer Problemstellungen, Zusammenarbeit mit höheren Support-Ebenen, Dokumentation, Schulungen und Prozessoptimierung.",
    highlight: true
  },
  {
    company: "Weitere Stationen",
    role: "Technischer Support & Kundenservice",
    description: "Verschiedene Rollen mit Fokus auf Kundenkontakt, technischer Unterstützung, Dokumentation und Prozessverbesserung. Diese Tätigkeiten legten das Fundament für Serviceorientierung, Teamarbeit und Verantwortungsbewusstsein.",
    highlight: false
  }
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Label */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-px bg-slate-300" />
            <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
              Berufserfahrung
            </span>
          </div>

          {/* Timeline */}
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-[5px] top-3 bottom-0 w-px bg-slate-200" />
                )}
                
                {/* Timeline dot */}
                <div className={`absolute left-0 top-2 w-[11px] h-[11px] rounded-full border-2 ${
                  exp.highlight 
                    ? 'border-slate-900 bg-slate-900' 
                    : 'border-slate-300 bg-white'
                }`} />

                {/* Content */}
                <div className="space-y-3">
                  <div>
                    <h3 className={`text-xl font-semibold ${
                      exp.highlight ? 'text-slate-900' : 'text-slate-700'
                    }`}>
                      {exp.company}
                    </h3>
                    <p className="text-slate-600 font-medium">
                      {exp.role}
                    </p>
                    {exp.subtitle && (
                      <p className="text-sm text-slate-500">
                        {exp.subtitle}
                      </p>
                    )}
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}