import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const capabilities = [
  {
    id: "systems",
    category: "SYSTEMS",
    code: "SYS",
    items: ["Windows", "macOS", "iOS"],
    connections: ["support", "tools"]
  },
  {
    id: "support",
    category: "SUPPORT_LEVEL",
    code: "SUP",
    items: ["1st Level", "2nd Level", "3rd Level", "Eskalation"],
    connections: ["analysis", "communication"]
  },
  {
    id: "analysis",
    category: "ANALYSIS",
    code: "ANA",
    items: ["Troubleshooting", "Root-Cause-Analyse", "Fehlerbild-Reproduktion"],
    connections: ["tools", "systems"]
  },
  {
    id: "tools",
    category: "TOOLS",
    code: "TLS",
    items: ["CRM/Ticketsysteme", "Dokumentation", "Knowledge Bases"],
    connections: ["communication"]
  },
  {
    id: "communication",
    category: "COMMUNICATION",
    code: "COM",
    items: ["Kundenberatung", "Technische Erklärung", "Team-Koordination"],
    connections: ["support"]
  }
];

export default function SkillsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeNode, setActiveNode] = useState(null);

  return (
    <section className="py-32 bg-[#0a0a0a] border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
              02 / Capability Matrix
            </div>
            <div className="flex items-center gap-2 font-mono text-[9px] text-zinc-700">
              <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
              <span>ACTIVE</span>
            </div>
          </div>

          {/* Network Visualization */}
          <div className="relative border border-zinc-900 bg-zinc-950/20 p-8">
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(34 211 238 / 0.1)" />
                  <stop offset="100%" stopColor="rgb(34 211 238 / 0.3)" />
                </linearGradient>
              </defs>
              {capabilities.map((cap, idx) => 
                cap.connections.map((connId) => {
                  const targetIdx = capabilities.findIndex(c => c.id === connId);
                  if (targetIdx > idx) {
                    const y1 = (idx * 20) + 10;
                    const y2 = (targetIdx * 20) + 10;
                    const isActive = activeNode === cap.id || activeNode === connId;
                    return (
                      <line
                        key={`${cap.id}-${connId}`}
                        x1="2%"
                        y1={`${y1}%`}
                        x2="98%"
                        y2={`${y2}%`}
                        stroke={isActive ? "rgb(34 211 238 / 0.4)" : "url(#lineGradient)"}
                        strokeWidth={isActive ? "1.5" : "1"}
                        strokeDasharray="4 4"
                        className="transition-all duration-300"
                      />
                    );
                  }
                  return null;
                })
              )}
            </svg>

            {/* Capability Nodes */}
            <div className="relative space-y-1" style={{ zIndex: 1 }}>
              {capabilities.map((cap, index) => (
                <motion.div
                  key={cap.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  onMouseEnter={() => setActiveNode(cap.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  className={`
                    group relative border transition-all duration-300 cursor-pointer
                    ${activeNode === cap.id 
                      ? 'border-cyan-500/50 bg-cyan-950/20 shadow-[0_0_20px_rgba(34,211,238,0.1)]' 
                      : activeNode && cap.connections.includes(activeNode)
                      ? 'border-cyan-500/30 bg-zinc-900/50'
                      : 'border-zinc-800 bg-zinc-950/50 hover:border-zinc-700'
                    }
                  `}
                >
                  <div className="grid md:grid-cols-[120px,1fr] gap-6 p-5">
                    {/* Node Label */}
                    <div className="flex items-center gap-3">
                      <div className={`
                        w-2 h-2 rounded-full transition-all duration-300
                        ${activeNode === cap.id 
                          ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]' 
                          : 'bg-zinc-700 group-hover:bg-zinc-600'
                        }
                      `} />
                      <div>
                        <div className="font-mono text-[9px] text-zinc-600 uppercase tracking-wider">
                          {cap.code}
                        </div>
                        <div className={`
                          font-mono text-[10px] uppercase tracking-[0.15em] transition-colors
                          ${activeNode === cap.id ? 'text-cyan-400' : 'text-zinc-500'}
                        `}>
                          {cap.category}
                        </div>
                      </div>
                    </div>
                    
                    {/* Items */}
                    <div className="flex flex-wrap gap-2 items-center">
                      {cap.items.map((item, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.2, delay: index * 0.08 + idx * 0.05 }}
                          className={`
                            text-xs px-2.5 py-1 border transition-all duration-200
                            ${activeNode === cap.id
                              ? 'text-cyan-300 bg-cyan-950/30 border-cyan-700/50'
                              : 'text-zinc-400 bg-zinc-900/30 border-zinc-800 group-hover:border-zinc-700'
                            }
                          `}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Status Indicator */}
                  {activeNode === cap.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute right-5 top-1/2 -translate-y-1/2 font-mono text-[8px] text-cyan-500"
                    >
                      ●
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* System Info */}
            <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between font-mono text-[9px] text-zinc-700">
              <span>NODES: {capabilities.length}</span>
              <span>STATUS: OPERATIONAL</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}