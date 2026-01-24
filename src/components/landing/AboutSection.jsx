import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 md:py-40 bg-white border-b border-slate-100">
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
              Über mich
            </span>
          </div>

          {/* Content */}
          <div className="max-w-3xl space-y-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
              Technische Kompetenz trifft auf strukturierte Arbeitsweise
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Sven Kai Clauß ist ein erfahrener IT-Support-Spezialist mit mehrjähriger 
                Praxis in professionellen Support-Umgebungen, unter anderem bei 
                Mercedes-Benz und Lenovo. Sein Schwerpunkt liegt auf strukturierter 
                Fehleranalyse, nachhaltiger Problemlösung und sauberer technischer 
                Dokumentation.
              </p>
              <p>
                Er verbindet technische Kompetenz mit klarer, verständlicher 
                Kundenkommunikation und arbeitet sicher in komplexen Support- und 
                Eskalationsumgebungen. Qualität, saubere Prozesse und nachvollziehbare 
                Lösungen stehen im Mittelpunkt seiner Arbeitsweise.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-8">
              <div>
                <div className="text-4xl font-semibold text-slate-900 mb-1">5+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide">Jahre Erfahrung</div>
              </div>
              <div className="w-px bg-slate-200" />
              <div>
                <div className="text-4xl font-semibold text-slate-900 mb-1">1-3</div>
                <div className="text-sm text-slate-500 uppercase tracking-wide">Support-Level</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}