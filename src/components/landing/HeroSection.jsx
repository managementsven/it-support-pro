import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* Name Badge */}
          <div>
            <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">
              Sven Kai Clauß
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 leading-[1.1] tracking-tight max-w-4xl">
              IT-Support mit technischer Tiefe, Struktur und Verantwortung
            </h1>
            
            <div className="w-16 h-0.5 bg-slate-900" />
          </div>

          {/* Intro Text */}
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl font-light">
            Mehrjährige Erfahrung im professionellen IT-Support bei internationalen 
            Unternehmen wie Mercedes-Benz und Lenovo. Strukturierte Fehleranalyse, 
            nachhaltige Lösungen und klare Dokumentation – von der ersten Anfrage 
            bis zur finalen Problemlösung.
          </p>
        </motion.div>
      </div>
    </section>
  );
}