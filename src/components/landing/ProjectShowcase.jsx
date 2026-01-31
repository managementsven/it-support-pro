import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Shield, Server, AlertTriangle, Database } from "lucide-react";

const projects = [
  {
    id: "#MB-8821",
    title: "Enterprise Security Breach Response",
    category: "Security",
    context: "Mercedes-Benz",
    priority: "CRITICAL",
    icon: Shield,
    problem: "Verdacht auf unauthorisierten Zugriff in kritischer Produktionsumgebung mit möglicher Datenkompromittierung",
    analysisSteps: [
      "Sofortige Isolation betroffener Systeme",
      "Forensische Analyse der Access Logs",
      "Identifikation der Angriffsvektoren",
      "Cross-System-Korrelation mit SIEM"
    ],
    solution: "Zero-Trust-Architektur implementiert, betroffene Credentials rotiert, Enhanced Monitoring aufgesetzt",
    impact: "< 45min Response Time / 0% Data Loss / Security Posture erhöht"
  },
  {
    id: "#LVO-2947",
    title: "Legacy System Integration Failure",
    category: "Infrastructure",
    context: "Lenovo",
    priority: "HIGH",
    icon: Server,
    problem: "Kritischer Deployment-Fehler bei Migration zu neuer Support-Plattform mit Auswirkung auf globale Ticket-Workflows",
    analysisSteps: [
      "Root Cause Analysis auf Middleware-Ebene",
      "Kompatibilitätsprüfung Legacy APIs",
      "Rollback-Strategie evaluiert",
      "Datenmigrations-Pipeline debugged"
    ],
    solution: "Custom Adapter-Layer entwickelt, Staged Rollout mit Canary Deployment, Monitoring-Dashboard implementiert",
    impact: "3.2k User betroffen / 6h Downtime / 100% Data Integrity"
  },
  {
    id: "#MB-7134",
    title: "Performance Degradation Analysis",
    category: "Infrastructure",
    context: "Mercedes-Benz",
    priority: "HIGH",
    icon: Database,
    problem: "Massive Performance-Einbußen in Business-Critical Application nach Wartungsfenster",
    analysisSteps: [
      "Performance Profiling mit APM Tools",
      "Database Query Optimization",
      "Cache-Layer Analyse",
      "Network Latency Measurements"
    ],
    solution: "Index-Strategie überarbeitet, Query-Cache optimiert, Load Balancer neu konfiguriert",
    impact: "92% Performance-Steigerung / < 2h Resolution Time"
  },
  {
    id: "#LVO-8456",
    title: "Critical Data Recovery Operation",
    category: "Incident Response",
    context: "Lenovo",
    priority: "CRITICAL",
    icon: AlertTriangle,
    problem: "Hardwareausfall mit Datenverlustrisiko auf produktiver Enterprise-Infrastruktur",
    analysisSteps: [
      "Emergency Backup Verification",
      "Hardware Diagnostics unter Zeitdruck",
      "Recovery Point Objective Assessment",
      "Koordination mit Vendor Support"
    ],
    solution: "Express-Ersatzteil innerhalb SLA, Hot-Swap durchgeführt, vollständige Datenwiederherstellung",
    impact: "0% Datenverlust / Business Continuity gewährleistet"
  }
];

const categoryColors = {
  Security: "text-red-500 bg-red-950/30 border-red-900/50",
  Infrastructure: "text-blue-500 bg-blue-950/30 border-blue-900/50",
  "Incident Response": "text-amber-500 bg-amber-950/30 border-amber-900/50"
};

export default function ProjectShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState(null);

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
              05 / Project Archive
            </div>
            <p className="text-sm text-zinc-500 max-w-2xl">
              Ausgewählte Enterprise-Eskalationen und kritische Incident-Response-Operationen
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="relative border border-zinc-900 bg-zinc-950/30 overflow-hidden group hover:border-zinc-800 transition-colors"
                >
                  {/* Scan Line Effect */}
                  {hoveredProject === project.id && (
                    <motion.div
                      initial={{ top: 0 }}
                      animate={{ top: "100%" }}
                      transition={{ duration: 1.5, ease: "linear" }}
                      className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-10 pointer-events-none"
                    />
                  )}

                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-900 bg-zinc-900/30">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-zinc-700" />
                        <div className="w-2 h-2 rounded-full bg-zinc-700" />
                        <div className="w-2 h-2 rounded-full bg-zinc-700" />
                      </div>
                      <span className="font-mono text-[9px] text-zinc-600 ml-2">{project.id}</span>
                    </div>
                    <div className={`font-mono text-[8px] px-2 py-0.5 border ${
                      project.priority === "CRITICAL" 
                        ? "text-red-500 border-red-900/50 bg-red-950/30" 
                        : "text-amber-500 border-amber-900/50 bg-amber-950/30"
                    }`}>
                      {project.priority}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-5">
                    {/* Title & Meta */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Icon className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                        <div className="space-y-2 flex-1">
                          <h3 className="text-sm font-semibold text-white leading-tight">
                            {project.title}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            <span className={`text-[9px] font-mono px-2 py-0.5 border ${categoryColors[project.category]}`}>
                              {project.category}
                            </span>
                            <span className="text-[9px] font-mono text-zinc-600 px-2 py-0.5 border border-zinc-800 bg-zinc-900/30">
                              {project.context}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Problem */}
                    <div>
                      <div className="font-mono text-[8px] text-zinc-600 uppercase tracking-wider mb-2">
                        Problem
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* Analysis */}
                    <div>
                      <div className="font-mono text-[8px] text-zinc-600 uppercase tracking-wider mb-2">
                        Root Cause Analysis
                      </div>
                      <ul className="space-y-1.5">
                        {project.analysisSteps.slice(0, 3).map((step, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-[11px] text-zinc-500">
                            <span className="text-cyan-500 mt-0.5 text-[8px]">→</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solution */}
                    <div>
                      <div className="font-mono text-[8px] text-zinc-600 uppercase tracking-wider mb-2">
                        Solution
                      </div>
                      <p className="text-[11px] text-zinc-500 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    {/* Impact */}
                    <div className="pt-4 border-t border-zinc-900">
                      <div className="font-mono text-[8px] text-zinc-700 uppercase tracking-wider mb-1">
                        Impact
                      </div>
                      <div className="font-mono text-[10px] text-zinc-600">
                        {project.impact}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Meta */}
          <div className="pt-8 border-t border-zinc-900 flex items-center justify-between font-mono text-[9px] text-zinc-700">
            <span>ARCHIVE: {projects.length} CASES</span>
            <span>STATUS: DOCUMENTED</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}