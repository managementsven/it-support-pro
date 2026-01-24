import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const workStyles = [
  "Analytisch und strukturiert",
  "Lösungsorientiert und zuverlässig",
  "Klare, verständliche Kommunikation",
  "Teamorientiert und qualitätsbewusst",
  "Fokus auf nachhaltige Lösungen statt kurzfristiger Workarounds"
];

const languages = [
  { name: "Deutsch", level: "Fließend", percent: 100 },
  { name: "Englisch", level: "Sehr gut", percent: 92 }
];

export default function WorkStyleSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16"
        >
          {/* Work Style */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-slate-600" />
              <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                Arbeitsweise
              </span>
            </div>

            <ul className="space-y-4">
              {workStyles.map((style, index) => (
                <motion.li
                  key={style}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-slate-400" />
                  </div>
                  <span className="text-slate-300">{style}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-slate-600" />
              <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                Sprachen
              </span>
            </div>

            <div className="space-y-6">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-white">{lang.name}</span>
                    <span className="text-slate-400 text-sm">{lang.level}</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${lang.percent}%` } : {}}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-gradient-to-r from-slate-500 to-slate-400 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}