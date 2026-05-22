import { motion } from 'framer-motion';
import { useT } from '../i18n/LanguageContext';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease, delay } },
});

export default function Thesis() {
  const t = useT();

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
  };

  const statContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const statItem = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } },
  };

  return (
    <section id="thesis" className="pt-16 pb-32 px-6 md:px-12 bg-offwhite border-t border-navy/5">
      <div className="max-w-7xl mx-auto">

        {/* Section heading block — two column: text left, stats right */}
        <motion.div
          className="mb-24 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-16 items-stretch"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Left: text content */}
          <div>
            <motion.p
              variants={fadeUp(0)}
              className="text-copper font-bold tracking-widest uppercase mb-6 flex items-center"
            >
              <span className="w-8 h-0.5 bg-copper mr-4"></span> {t.thesis.eyebrow}
            </motion.p>

            <motion.h2
              variants={fadeUp(0)}
              className="text-4xl md:text-5xl font-bold text-navy mb-8 leading-[1.1] tracking-tight"
            >
              {t.thesis.headingMain}<br />
              <span className="text-copper">{t.thesis.headingAccent}</span>
            </motion.h2>

            <motion.p
              variants={fadeUp(0)}
              className="text-xl text-navy/70 leading-relaxed font-medium"
            >
              {t.thesis.body}
            </motion.p>
          </div>

          {/* Right: stats stacked vertically — separate cards, stretch to match left column */}
          <motion.div
            className="flex flex-col gap-5 h-full"
            variants={statContainer}
          >
            {t.thesis.stats.map(({ stat, label }) => (
              <motion.div key={stat} variants={statItem} className="flex-1 flex flex-col justify-center px-7 py-7 border border-navy/10 rounded-2xl">
                <p className="text-4xl font-bold text-copper tracking-tight mb-2">{stat}</p>
                <p className="text-sm text-navy/50 font-medium leading-snug">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Wedge cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          {t.thesis.wedges.map((wedge, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group flex flex-col p-8 border border-navy/10 hover:border-copper/50 hover:bg-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:shadow-copper/5"
            >
              <span className="text-copper text-xl font-bold mb-4 font-mono">{wedge.num}</span>
              <h3 className="text-xl font-bold text-navy mb-3 leading-tight group-hover:text-copper transition-colors">{wedge.title}</h3>
              <p className="text-navy/70 text-base leading-relaxed font-medium">{wedge.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
