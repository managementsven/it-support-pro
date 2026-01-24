import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Wrench, Search, Database } from "lucide-react";

const skillSections = [
  {
    title: "Systeme",
    icon: Server,
    items: ["Windows", "macOS", "iOS"]
  },
  {
    title: "Support",
    icon: Wrench,
    items: ["1st bis 3rd Level", "Eskalationsmanagement", "Enterprise-Support-Umgebungen"]
  },
  {
    title: "Analyse",
    icon: Search,
    items: ["Troubleshooting", "Root-Cause-Analyse", "Fehlerbild-Reproduktion"]
  },
  {
    title: "Tools & Prozesse",
    icon: Database,
    items: ["CRM- und Ticketsysteme", "Technische Dokumentation", "Knowledge Bases"]
  }
];

export default function SkillsGrid() {
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
            <span className="text-cyan-400">[</span> 02 <span className="text-cyan-400">]</span> Tech Stack
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 p-6"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
                  <section.icon className="w-4 h-4 text-cyan-400" />
                  <h3 className="font-mono text-sm text-zinc-400 uppercase tracking-wider">
                    {section.title}
                  </h3>
                </div>

                {/* Items */}
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-zinc-300">
                      <span className="text-cyan-400 font-mono text-xs mt-1">›</span>
                      <span className="text-sm leading-relaxed">{item}</span>
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