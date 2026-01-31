import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

const caseLogs = [
  {
    id: "CASE-2024-1847",
    status: "RESOLVED",
    problem: "Systemweite Performance-Degradation bei Enterprise-Deployment",
    analysis: [
      "Root-Cause-Analyse auf Basis von System-Logs durchgeführt",
      "Identifikation eines Speicherlecks in der Kernapplikation",
      "Korrelation mit kürzlich durchgeführten Updates"
    ],
    solution: "Rollback des Updates, koordinierte Neuinstallation mit Patch, langfristige Monitoring-Anpassung implementiert",
    impact: "15 betroffene Systeme, < 2h Downtime"
  },
  {
    id: "CASE-2023-0934",
    status: "RESOLVED",
    problem: "Kritischer Eskalationsfall: Hardware-Fehler mit Datenverlustrisiko",
    analysis: [
      "Hardware-Diagnose unter Zeitdruck",
      "Sicherstellung der Datensicherung vor physischem Austausch",
      "Koordination mit Drittanbieter für Express-Ersatzteil"
    ],
    solution: "Notfall-Backup erfolgreich, Hardware-Tausch innerhalb SLA, vollständige Systemwiederherstellung",
    impact: "Business-kritisches System, 0% Datenverlust"
  }
];

export default function TroubleshootingLog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCase, setExpandedCase] = useState(null);

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
          <div className="space-y-3">
            <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
              04 / Troubleshooting Log
            </div>
            <p className="text-sm text-zinc-500 max-w-2xl">
              Auszug aus dokumentierten Eskalationsfällen und komplexen Support-Prozessen
            </p>
          </div>

          {/* Case Logs */}
          <div className="space-y-4">
            {caseLogs.map((caseLog, index) => (
              <motion.div
                key={caseLog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border border-zinc-900 bg-zinc-950/30 hover:border-zinc-800 transition-colors"
              >
                {/* Case Header */}
                <button
                  onClick={() => setExpandedCase(expandedCase === caseLog.id ? null : caseLog.id)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span className="font-mono text-[10px] text-zinc-600">{caseLog.id}</span>
                    </div>
                    <div className="h-3 w-px bg-zinc-800" />
                    <span className="text-xs text-zinc-400">{caseLog.problem}</span>
                  </div>
                  <ChevronRight 
                    className={`w-4 h-4 text-zinc-600 transition-transform ${
                      expandedCase === caseLog.id ? 'rotate-90' : ''
                    }`}
                  />
                </button>

                {/* Expanded Content */}
                {expandedCase === caseLog.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-zinc-900 px-5 py-6 space-y-6"
                  >
                    {/* Analysis */}
                    <div>
                      <div className="font-mono text-[9px] text-zinc-600 uppercase tracking-wider mb-3">
                        Analyse
                      </div>
                      <ul className="space-y-2">
                        {caseLog.analysis.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-zinc-500">
                            <span className="text-cyan-500 mt-0.5">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solution */}
                    <div>
                      <div className="font-mono text-[9px] text-zinc-600 uppercase tracking-wider mb-3">
                        Lösung
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {caseLog.solution}
                      </p>
                    </div>

                    {/* Impact */}
                    <div className="pt-4 border-t border-zinc-900 flex items-center gap-4">
                      <div className="font-mono text-[9px] text-zinc-700 uppercase">Impact</div>
                      <div className="text-xs text-zinc-500">{caseLog.impact}</div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Meta Info */}
          <div className="pt-8 border-t border-zinc-900 font-mono text-[9px] text-zinc-700">
            <span>TOTAL CASES: {caseLogs.length} / STATUS: ARCHIVED</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}