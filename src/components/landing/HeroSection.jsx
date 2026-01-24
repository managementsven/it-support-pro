import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-[#0a0a0a] relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Gradient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Terminal-style Badge */}
          <div className="flex items-center gap-3 font-mono text-sm">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="text-zinc-500">~/</span>
            <span className="text-cyan-400">sven-kai-clauss</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight max-w-4xl">
              Ich löse komplexe Support-Probleme
              <br />
              <span className="text-zinc-500">strukturiert und nachvollziehbar.</span>
            </h1>
            
            <div className="w-20 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent" />
          </div>

          {/* Subtext */}
          <div className="max-w-2xl space-y-4">
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              IT-Support mit Fokus auf Analyse, Eskalationen und saubere technische 
              Dokumentation.
            </p>
            <p className="text-base text-zinc-500">
              Erfahrung aus Enterprise-Umgebungen wie Mercedes-Benz und Lenovo.
            </p>
          </div>

          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-zinc-400 font-mono">Verfügbar für neue Projekte</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}