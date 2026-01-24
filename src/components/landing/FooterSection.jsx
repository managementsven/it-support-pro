import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-32 md:py-40 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-20"
        >
          {/* Closing Statement */}
          <div className="max-w-3xl">
            <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed font-light">
              Ich arbeite gerne in Umgebungen, in denen technische Qualität, klare 
              Prozesse und professionelle Zusammenarbeit im Vordergrund stehen.
            </p>
          </div>

          {/* Footer */}
          <div className="pt-12 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-sm text-slate-500">
              <div className="space-y-1">
                <div className="font-medium text-slate-900">Sven Kai Clauß</div>
                <div>IT-Support-Spezialist</div>
              </div>
              <div className="text-left sm:text-right space-y-1">
                <div>Nordrhein-Westfalen, Deutschland</div>
                <div>© {new Date().getFullYear()}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}