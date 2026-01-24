import { motion } from "framer-motion";
import { Monitor, ArrowDown } from "lucide-react";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative bg-gradient-to-b from-slate-50 to-white">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f920_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f920_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center">
              <Monitor className="w-5 h-5 text-white" />
            </div>
            <span className="text-slate-500 text-sm font-medium tracking-wide uppercase">
              IT-Support Spezialist
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 leading-tight tracking-tight">
            Technische Probleme
            <br />
            <span className="text-slate-500">strukturiert lösen.</span>
          </h1>

          {/* Intro Text */}
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Erfahrener IT-Support mit Fokus auf nachhaltige Problemlösung, 
            klare Kommunikation und effiziente Prozesse. Mehrjährige Praxis 
            bei internationalen Unternehmen – von der Analyse bis zur Dokumentation.
          </p>

          {/* Subtle line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-24 h-px bg-slate-300 origin-left"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-slate-600 transition-colors"
        aria-label="Nach unten scrollen"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}