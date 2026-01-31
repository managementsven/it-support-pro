import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const terminalSequence = [
  { delay: 400, text: "> Initializing system check..." },
  { delay: 1000, text: "> Fetching escalation logs..." },
  { delay: 1600, text: "> Analyzing support patterns..." },
  { delay: 2200, text: "> Root cause identified: Enterprise-grade expertise" },
  { delay: 2800, text: "> Status: OPERATIONAL", highlight: true }
];

export default function HeroSection() {
  const [terminalLines, setTerminalLines] = useState([]);

  useEffect(() => {
    terminalSequence.forEach((line, index) => {
      setTimeout(() => {
        setTerminalLines(prev => [...prev, line]);
      }, line.delay);
    });
  }, []);

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

          {/* Contact Panel */}
          <div className="mt-16 border border-zinc-900 bg-zinc-950/30 p-4 inline-block">
            <div className="font-mono text-[9px] text-zinc-600 uppercase tracking-[0.2em] mb-3">
              Interface
            </div>
            <div className="flex gap-4">
              <a 
                href="mailto:business.clauss@proton.me"
                className="flex items-center gap-2 text-xs text-zinc-400 hover:text-cyan-400 transition-colors group"
              >
                <span className="w-1 h-1 bg-zinc-700 group-hover:bg-cyan-400 transition-colors" />
                <span>E-Mail</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/sven-kai-clauß-6ab009267"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-zinc-400 hover:text-cyan-400 transition-colors group"
              >
                <span className="w-1 h-1 bg-zinc-700 group-hover:bg-cyan-400 transition-colors" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}