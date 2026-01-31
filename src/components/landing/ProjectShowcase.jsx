import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Wifi, HardDrive, User } from "lucide-react";

const projects = [
  {
    id: "LVO-2024-3841",
    title: "Dockingstation-Verbindungsfehler nach Windows-Update",
    environment: "Production",
    context: "Lenovo",
    escalationLevel: "L2",
    slaStatus: "Within SLA",
    icon: Monitor,
    affectedDevices: "Lenovo L14/L15 Gen 3",
    problem: "Intermittierende Verbindungsfehler bei USB-C Dockingstations nach automatischem Windows 11 Feature-Update. Betroffen: ca. 180 Geräte im Außendienst.",
    analysisSteps: [
      "Firmware-Versionen der Dockingstations überprüft",
      "BIOS-Versionen im Vergleich (betroffene vs. funktionierende Geräte)",
      "Ausschlussprinzip: Kabel, Netzteil, Board-Level-Diagnose",
      "Event Viewer Analyse: USB-Controller Errors identifiziert"
    ],
    solution: "Spezifischen Thunderbolt-Firmware-Patch via MECM ausgerollt. Gruppenrichtlinie für Windows Update temporär angepasst. Monitoring über 14 Tage.",
    impact: "Resolution Time: 4h / 0 Ticket-Reopens / Rollout: 3 Tage"
  },
  {
    id: "MB-2023-7622",
    title: "VPN-Authentifizierungsfehler Außendienst",
    environment: "Production",
    context: "Mercedes-Benz",
    escalationLevel: "L3",
    slaStatus: "Escalated",
    icon: Wifi,
    affectedDevices: "~450 Mobile Clients",
    problem: "Massenhafte VPN-Authentifizierungsfehler nach geplantem Root-CA-Zertifikatswechsel. Kritischer Impact auf Außendienst-Mitarbeiter.",
    analysisSteps: [
      "Logfile-Analyse VPN-Client (Cisco AnyConnect)",
      "Lokale Zertifikatsspeicher auf Testgeräten geprüft",
      "Root-CA-Chain-Verifizierung fehlgeschlagen",
      "Gruppenrichtlinien-Verteilung verzögert erkannt"
    ],
    solution: "PowerShell-Skript für manuellen Zertifikats-Import entwickelt. GPO-Update beschleunigt. Kommunikation via Service-Portal und direkte Anrufe an betroffene User.",
    impact: "MTTR: 6h / Kritischer Business Impact / Post-Mortem dokumentiert"
  },
  {
    id: "LVO-2024-1203",
    title: "Massenhafte Outlook-Abstürze nach Patch",
    environment: "Production",
    context: "Lenovo",
    escalationLevel: "L2",
    slaStatus: "Within SLA",
    icon: HardDrive,
    affectedDevices: "~320 Clients",
    problem: "Nach Microsoft Office Patch treten reproduzierbare Outlook-Abstürze beim Öffnen von .msg-Dateien auf.",
    analysisSteps: [
      "Event Viewer: Application Error 1000 identifiziert",
      "Office Repair Tool auf Testgeräten ausgeführt",
      "Patch-Historie analysiert (KB-Nummer isoliert)",
      "Add-In-Kompatibilität überprüft"
    ],
    solution: "Problematischer Patch via WSUS deaktiviert. Koordination mit Microsoft Support für Hotfix. Temporärer Workaround über Add-In-Deaktivierung kommuniziert.",
    impact: "Downtime: 2.5h / Workaround verfügbar / Hotfix nach 48h deployed"
  },
  {
    id: "MB-2024-0891",
    title: "Druckertreiber-Konflikt nach Citrix-Upgrade",
    environment: "Production",
    context: "Mercedes-Benz",
    escalationLevel: "L2",
    slaStatus: "Within SLA",
    icon: User,
    affectedDevices: "Citrix Virtual Apps",
    problem: "Nach Citrix Virtual Apps Upgrade auf Version 2402 können User nicht mehr auf Netzwerkdrucker zugreifen. Error Code 0x00000709.",
    analysisSteps: [
      "Citrix Universal Print Driver Kompatibilität geprüft",
      "Registry-Einträge auf Session Hosts analysiert",
      "Print Spooler Logs ausgewertet",
      "Treiber-Mapping im Citrix Studio überprüft"
    ],
    solution: "Universal Print Driver neu deployed. Print Server Policies angepasst. Session Hosts staged rebootet. Knowledge Base Artikel für Support-Team erstellt.",
    impact: "Resolution: 3h / 0 Data Loss / 250 User betroffen"
  }
];

export default function ProjectShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
              05 / Ticket Archive
            </div>
            <p className="text-sm text-zinc-500 max-w-2xl">
              Dokumentierte Support-Fälle aus Enterprise-Umgebungen
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
                  className="border border-zinc-900 bg-zinc-950/30 hover:border-cyan-950 transition-colors group"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-900 bg-zinc-900/30">
                    <div className="flex items-center gap-3">
                      <Icon className="w-3.5 h-3.5 text-zinc-600" />
                      <span className="font-mono text-[10px] text-zinc-500">{project.id}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] text-zinc-600 px-2 py-0.5 border border-zinc-800 bg-zinc-900/50">
                        {project.escalationLevel}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-4">
                    {/* Title & Meta */}
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-white leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 text-[9px] font-mono">
                        <span className="text-zinc-600 px-2 py-0.5 border border-zinc-800 bg-zinc-900/30">
                          {project.context}
                        </span>
                        <span className="text-zinc-600 px-2 py-0.5 border border-zinc-800 bg-zinc-900/30">
                          {project.environment}
                        </span>
                        <span className={`px-2 py-0.5 border ${
                          project.slaStatus === "Within SLA" 
                            ? "text-green-600 border-green-900/50 bg-green-950/20"
                            : "text-amber-600 border-amber-900/50 bg-amber-950/20"
                        }`}>
                          {project.slaStatus}
                        </span>
                      </div>
                    </div>

                    {/* Affected Devices */}
                    <div className="text-[10px] font-mono text-zinc-600">
                      Betroffene Geräte: {project.affectedDevices}
                    </div>

                    {/* Problem */}
                    <div>
                      <div className="font-mono text-[9px] text-zinc-600 uppercase tracking-wider mb-2">
                        Problem
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* Analysis */}
                    <div>
                      <div className="font-mono text-[9px] text-zinc-600 uppercase tracking-wider mb-2">
                        Analyse
                      </div>
                      <ul className="space-y-1">
                        {project.analysisSteps.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-[11px] text-zinc-500">
                            <span className="text-zinc-700 mt-0.5">—</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solution */}
                    <div>
                      <div className="font-mono text-[9px] text-zinc-600 uppercase tracking-wider mb-2">
                        Lösung
                      </div>
                      <p className="text-[11px] text-zinc-500 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    {/* Impact */}
                    <div className="pt-3 border-t border-zinc-900">
                      <div className="font-mono text-[9px] text-zinc-700">
                        {project.impact}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer Meta */}
          <div className="pt-8 border-t border-zinc-900 flex items-center justify-between font-mono text-[9px] text-zinc-700">
            <span>DOKUMENTIERT: {projects.length} TICKETS</span>
            <span>STATUS: ARCHIVIERT</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}