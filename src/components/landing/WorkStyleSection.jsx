import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const workStyles = [
  "Analytisch und strukturiert",
  "Lösungsorientiert und zuverlässig",
  "Klare, verständliche Kommunikation",
  "Teamorientiert und qualitätsbewusst",
  "Fokus auf nachhaltige Lösungen statt kurzfristiger Workarounds"
];

const languages = [
  { name: "Deutsch", level: "Fließend" },
  { name: "Englisch", level: "Sehr gut" }
];

export default function WorkStyleSection() {
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
          className="grid md:grid-cols-[1.5fr,1fr] gap-20"
        >
          {/* Work Style */}
          <div className="space-y-12">
            <div>
              <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">
                Arbeitsweise
              </span>
            </div>

            <ul className="space-y-5">
              {workStyles.map((style, index) => (
                <motion.li
                  key={style}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-4 text-lg text-slate-700"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2.5 flex-shrink-0" />
                  <span>{style}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="space-y-12">
            <div>
              <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">
                Sprachen
              </span>
            </div>

            <div className="space-y-6">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-baseline">
                    <span className="text-lg font-medium text-slate-900">{lang.name}</span>
                    <span className="text-sm text-slate-500">{lang.level}</span>
                  </div>
                  <div className="h-px bg-slate-200" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}