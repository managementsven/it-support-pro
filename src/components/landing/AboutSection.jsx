import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-[#0a0a0a] border-b border-zinc-900">
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
            01 / Profil
          </div>

          {/* Content */}
          <div className="max-w-2xl border-l border-zinc-800 pl-8 space-y-6 text-base text-zinc-400 leading-relaxed">
            <p>
              Ich arbeite seit mehreren Jahren im professionellen IT-Support. 
              Mein Schwerpunkt liegt auf strukturierter Fehleranalyse, nachhaltiger 
              Problemlösung und sauberer Dokumentation.
            </p>
            <p>
              Ich bewege mich sicher in komplexen Support- und Eskalationsumgebungen 
              und lege Wert auf nachvollziehbare technische Entscheidungen. 
              Klare Kommunikation und saubere Prozesse sind für mich kein Extra, 
              sondern Voraussetzung.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}