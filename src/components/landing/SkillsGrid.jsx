import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    category: "SYSTEMS",
    items: ["Windows", "macOS", "iOS"]
  },
  {
    category: "SUPPORT_LEVEL",
    items: ["1st Level", "2nd Level", "3rd Level", "Eskalation"]
  },
  {
    category: "ANALYSIS",
    items: ["Troubleshooting", "Root-Cause-Analyse", "Fehlerbild-Reproduktion"]
  },
  {
    category: "TOOLS",
    items: ["CRM/Ticketsysteme", "Dokumentation", "Knowledge Bases"]
  },
  {
    category: "COMMUNICATION",
    items: ["Kundenberatung", "Technische Erklärung", "Team-Koordination"]
  }
];

export default function SkillsGrid() {
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
            02 / Capability Matrix
          </div>

          {/* Matrix */}
          <div className="border border-zinc-900">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.category}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="border-b border-zinc-900 last:border-b-0 hover:bg-zinc-950/30 transition-colors"
              >
                <div className="grid md:grid-cols-[200px,1fr] gap-6 p-6">
                  {/* Category */}
                  <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.15em]">
                    {cap.category}
                  </div>
                  
                  {/* Items */}
                  <div className="flex flex-wrap gap-3">
                    {cap.items.map((item, idx) => (
                      <span 
                        key={idx} 
                        className="text-sm text-zinc-400 px-3 py-1 bg-zinc-900/50 border border-zinc-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}