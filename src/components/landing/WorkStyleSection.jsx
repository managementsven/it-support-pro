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
    <section className="py-32 bg-[#0a0a0a] border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Work Style */}
          <div className="space-y-8">
            <div className="font-mono text-xs text-zinc-600 uppercase tracking-widest">
              <span className="text-cyan-400">[</span> 04 <span className="text-cyan-400">]</span> Arbeitsweise
            </div>

            <ul className="space-y-4">
              {workStyles.map((style, index) => (
                <motion.li
                  key={style}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-3 text-zinc-300"
                >
                  <span className="text-cyan-400 font-mono text-xs mt-1">›</span>
                  <span className="text-sm">{style}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="space-y-8">
            <div className="font-mono text-xs text-zinc-600 uppercase tracking-widest">
              Sprachen
            </div>

            <div className="space-y-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="flex items-center justify-between py-3 border-b border-zinc-800"
                >
                  <span className="text-zinc-300 text-sm">{lang.name}</span>
                  <span className="text-zinc-500 text-xs font-mono">{lang.level}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}