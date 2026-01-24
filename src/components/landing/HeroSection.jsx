import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-[#0a0a0a] relative overflow-hidden border-b border-zinc-900">
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Path */}
          <div className="font-mono text-xs text-zinc-600">
            <span className="text-cyan-500">~</span>/sven-kai-clauss
          </div>

          {/* Main Content */}
          <div className="space-y-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight max-w-5xl">
              Ich löse komplexe
              <br />
              Support-Probleme
              <br />
              <span className="text-zinc-600">strukturiert.</span>
            </h1>
            
            <div className="h-px w-16 bg-cyan-500" />

            <div className="max-w-2xl space-y-3 text-zinc-400">
              <p className="text-lg">
                IT-Support mit Fokus auf Analyse, Eskalationen und technische Dokumentation.
              </p>
              <p className="text-sm text-zinc-500 font-mono">
                Enterprise-Erfahrung: Mercedes-Benz, Lenovo
              </p>
            </div>
          </div>

          {/* Status */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-zinc-800 bg-zinc-950/50 font-mono text-xs">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <span className="text-zinc-500">AVAILABLE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}