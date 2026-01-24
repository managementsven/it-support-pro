import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Section Label */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-slate-300" />
            <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
              Über mich
            </span>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-[1fr,2fr] gap-12 items-start">
            {/* Left: Visual element */}
            <div className="hidden md:block">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200/50 relative overflow-hidden">
                <div className="absolute inset-4 border border-dashed border-slate-200 rounded-xl" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="h-2 bg-slate-200 rounded-full mb-2 w-3/4" />
                  <div className="h-2 bg-slate-100 rounded-full w-1/2" />
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 leading-snug">
                Technische Kompetenz trifft auf strukturierte Arbeitsweise
              </h2>
              
              <div className="space-y-4 text-slate-600 leading-relaxed">
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
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-semibold text-slate-900">5+</div>
                  <div className="text-sm text-slate-500">Jahre Erfahrung</div>
                </div>
                <div className="w-px bg-slate-200" />
                <div>
                  <div className="text-3xl font-semibold text-slate-900">3</div>
                  <div className="text-sm text-slate-500">Support-Level</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}