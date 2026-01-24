import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Statement */}
          <div className="max-w-2xl border-l border-zinc-900 pl-8">
            <p className="text-base text-zinc-500 leading-relaxed">
              Ich arbeite gerne in Umgebungen, in denen technische Qualität, 
              klare Prozesse und professionelle Zusammenarbeit im Vordergrund stehen.
            </p>
          </div>

          {/* Footer */}
          <div className="pt-8 border-t border-zinc-900">
            <div className="flex items-center justify-between text-[10px] text-zinc-600 font-mono">
              <div>SVEN KAI CLAUẞ / IT-SUPPORT</div>
              <div>NRW, DE / {new Date().getFullYear()}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}