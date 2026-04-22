import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Stack() {
  const operations = [
    {
      title: "01. Deal flow.",
      desc: "Our internal sourcing engine pulls from the 1,300+ founder network, the Monterrey corridor, Cornell's Big Red Ventures pipeline, and open technical signal — GitHub, arXiv, technical press — and scores every lead against a 20-criteria model."
    },
    {
      title: "02. Diligence.",
      desc: "Every company in the pipeline is run through automated technical and market scoring — team, data moat, BOM defensibility, customer gravity, regulatory surface — before a partner spends a minute. Yes-or-no in days, not weeks."
    },
    {
      title: "03. Monitoring.",
      desc: "Portfolio companies plug into one dashboard: metrics, milestones, burn, runway. We notice drift before the next board meeting. Founders get a co-pilot, not a reporting tax."
    },
    {
      title: "04. Reporting.",
      desc: "LP reports are generated from the same system that monitors the portfolio. Quarterly updates are accurate, timely, and auditable."
    }
  ];

  return (
    <section id="stack" className="py-32 px-6 md:px-12 bg-navy text-offwhite relative overflow-hidden">
      {/* Floating decorative circle */}
      <div className="absolute top-0 right-0 w-200 h-200 bg-copper/3 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none animate-float" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">

          {/* Left column — staggered children */}
          <motion.div
            className="flex flex-col justify-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
              className="text-copper font-bold tracking-widest uppercase mb-6 flex items-center"
            >
              <span className="w-8 h-0.5 bg-copper mr-4"></span> How We Operate
            </motion.p>

            <motion.h2
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] tracking-tight"
            >
              We invest in AI.<br />We run on AI.
            </motion.h2>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
              className="text-xl text-offwhite/70 leading-relaxed mb-12 font-medium"
            >
              Astra is an AI-native fund. We use AI across the stack — deal flow, diligence, monitoring, reporting — on a platform built by our own GP, Ishtiaque Mohammad. It's called SowFin, and it's the reason a two-GP firm sees more companies, decides faster, and reports to LPs more transparently than most funds twice our size.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
              className="flex flex-col gap-4 self-start"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-copper blur-lg opacity-40 animate-pulse-slow"></div>
                <a
                  href="https://sowfin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center px-8 py-4 bg-copper text-offwhite text-sm font-bold uppercase tracking-widest rounded-full hover:bg-copper/90 transition-all duration-300 group shadow-2xl"
                >
                  See SowFin
                  <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              </div>
              <p className="text-sm text-offwhite/50 max-w-sm font-medium">
                SowFin is live. Review the platform, the scoring model, and the underlying AI agents we run the fund on.
              </p>
            </motion.div>
          </motion.div>

          {/* Right column — operation items */}
          <div className="space-y-12">
            {operations.map((op, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease }}
                className="group border-l-2 border-offwhite/10 pl-8 hover:border-copper transition-colors duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-offwhite group-hover:text-copper transition-colors">{op.title}</h3>
                <p className="text-offwhite/60 text-lg leading-relaxed font-medium">{op.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mt-32 pt-16 border-t border-offwhite/10 text-center max-w-4xl mx-auto"
        >
          <p className="text-2xl md:text-3xl font-bold text-offwhite/90 leading-tight tracking-tight">
            We invest in physical-world AI. <br className="hidden md:block" />
            <span className="text-copper">We also use AI to run a venture firm.</span> <br className="hidden md:block" />
            Both are what the next decade will look like.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
