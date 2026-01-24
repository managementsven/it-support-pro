import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-32 bg-[#0a0a0a] border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Closing Statement */}
          <div className="max-w-2xl">
            <p className="text-xl text-zinc-400 leading-relaxed">
              Ich arbeite gerne in Umgebungen, in denen technische Qualität, 
              klare Prozesse und professionelle Zusammenarbeit im Vordergrund stehen.
            </p>
          </div>

          {/* Footer Info */}
          <div className="pt-12 border-t border-zinc-800">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-8">
              {/* Left */}
              <div className="space-y-1">
                <div className="font-mono text-sm text-white">Sven Kai Clauß</div>
                <div className="text-xs text-zinc-500">IT-Support-Spezialist</div>
              </div>

              {/* Right */}
              <div className="text-xs text-zinc-500 space-y-1 text-left sm:text-right">
                <div>Nordrhein-Westfalen, Deutschland</div>
                <div className="font-mono">© {new Date().getFullYear()}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}