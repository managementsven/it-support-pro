import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ExternalLink, Copy } from "lucide-react";
import { toast } from "sonner";

export default function ContactPanel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleCopyEmail = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText("business.clauss@proton.me");
      toast.success("E-Mail kopiert – Bereit für Analyse", {
        style: {
          background: '#18181b',
          color: '#a1a1aa',
          border: '1px solid #27272a',
          fontFamily: 'monospace',
          fontSize: '11px'
        }
      });
    } catch (err) {
      toast.error("Kopieren fehlgeschlagen");
    }
  };

  return (
    <section className="py-20 bg-[#0a0a0a] border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="border border-zinc-900 p-8 hover:border-zinc-800 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              {/* Label */}
              <div>
                <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.2em] mb-2">
                  Connect
                </div>
                <p className="text-sm text-zinc-500">
                  Für Anfragen und Austausch verfügbar
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="group flex items-center gap-3 px-4 py-2.5 border border-zinc-800 bg-zinc-950/50 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all"
                >
                  <Copy className="w-3.5 h-3.5 text-zinc-600 group-hover:text-cyan-500 transition-colors" />
                  <span className="text-xs text-zinc-400 font-mono">E-Mail kopieren</span>
                </button>
                <a
                  href="mailto:business.clauss@proton.me"
                  className="group flex items-center gap-3 px-4 py-2.5 border border-zinc-800 bg-zinc-950/50 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-zinc-600 group-hover:text-cyan-500 transition-colors" />
                  <span className="text-xs text-zinc-400 font-mono">E-Mail</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/sven-kai-clauß-6ab009267"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-2.5 border border-zinc-800 bg-zinc-950/50 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-cyan-500 transition-colors" />
                  <span className="text-xs text-zinc-400 font-mono">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}