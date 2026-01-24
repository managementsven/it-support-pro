import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Monitor, 
  Wrench, 
  Search, 
  ArrowUpRight, 
  Database, 
  FileText, 
  MessageSquare 
} from "lucide-react";

const skills = [
  {
    icon: Monitor,
    title: "Windows, macOS, iOS",
    description: "Fundierte Kenntnisse über alle gängigen Betriebssysteme"
  },
  {
    icon: Wrench,
    title: "1st–3rd Level Support",
    description: "Durchgängige Betreuung von einfachen bis komplexen Anfragen"
  },
  {
    icon: Search,
    title: "Root-Cause-Analyse",
    description: "Systematisches Troubleshooting bis zur Ursache"
  },
  {
    icon: ArrowUpRight,
    title: "Eskalationsmanagement",
    description: "Strukturierte Weiterleitung und Nachverfolgung"
  },
  {
    icon: Database,
    title: "CRM & Ticketsysteme",
    description: "Effiziente Arbeit mit gängigen Support-Tools"
  },
  {
    icon: FileText,
    title: "Technische Dokumentation",
    description: "Aufbau und Pflege von Knowledge Bases"
  },
  {
    icon: MessageSquare,
    title: "Kundenkommunikation",
    description: "Komplexes verständlich erklären"
  }
];

export default function SkillsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
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
              Fachliche Schwerpunkte
            </span>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-white rounded-2xl border border-slate-200/50 hover:border-slate-300 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-slate-900 transition-colors duration-300">
                  <skill.icon className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-medium text-slate-900 mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}