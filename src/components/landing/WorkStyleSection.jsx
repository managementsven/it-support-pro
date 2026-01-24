import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const workStyles = [
  "Analytisch und strukturiert",
  "Lösungsorientiert und zuverlässig",
  "Klare, verständliche Kommunikation",
  "Teamorientiert und qualitätsbewusst",
  "Nachhaltige Lösungen statt kurzfristiger Workarounds"
];

const languages = [
  { name: "Deutsch", level: "Fließend" },
  { name: "Englisch", level: "Sehr gut" }
];

export default function WorkStyleSection() {
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
          className="grid md:grid-cols-[1fr,300px] gap-16"
        >
          {/* Work Style */}
          <div className="space-y-8">
            <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
              04 / Arbeitsweise
            </div>

            <ul className="space-y-3 border-l border-zinc-900 pl-6">
              {workStyles.map((style, index) => (
                <motion.li
                  key={style}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="text-sm text-zinc-400"
                >
                  {style}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="space-y-8">
            <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
              Sprachen
            </div>

            <div className="space-y-3">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="flex items-baseline justify-between text-sm border-b border-zinc-900 pb-2"
                >
                  <span className="text-zinc-400">{lang.name}</span>
                  <span className="text-zinc-600 text-xs font-mono">{lang.level}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}