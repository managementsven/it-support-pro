import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Quote mark */}
          <div className="text-6xl text-slate-200 font-serif mb-6">"</div>
          
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8">
            Ich schätze Umgebungen, in denen technische Qualität, klare Prozesse 
            und professionelle Zusammenarbeit im Mittelpunkt stehen.
          </p>

          {/* Subtle divider */}
          <div className="w-12 h-px bg-slate-300 mx-auto" />
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto px-6 mt-16 pt-8 border-t border-slate-100">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <span>© {new Date().getFullYear()}</span>
          <span>IT-Support Spezialist</span>
        </div>
      </div>
    </section>
  );
}