import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Footer() {
  const navLinks = ['Thesis', 'Team', 'Contact'];
  const hrefs = ['#thesis', '#team', '#contact'];

  return (
    <motion.footer
      className="bg-[#050914] border-t border-offwhite/5 py-16 px-6 md:px-12 text-offwhite/70"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
        >
          <div className="text-2xl font-bold tracking-tighter text-offwhite uppercase mb-1">
            Astra Ventures
          </div>
          <p className="text-xs text-offwhite/30 font-medium tracking-wide">Fund I · astraventures.ai</p>
        </motion.div>

        {/* Nav links — staggered */}
        <motion.div
          className="flex items-center space-x-8 text-sm font-bold tracking-widest uppercase"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {navLinks.map((label, idx) => (
            <motion.a
              key={label}
              href={hrefs[idx]}
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease } } }}
              className="hover:text-copper transition-colors"
            >
              {label}
            </motion.a>
          ))}
        </motion.div>

        {/* LP contact */}
        <motion.div
          className="hidden md:block text-right"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-offwhite/30 mb-1">For LPs</p>
          <a href="mailto:lp@astraventures.ai" className="text-sm text-offwhite/50 hover:text-copper transition-colors font-medium">
            lp@astraventures.ai
          </a>
        </motion.div>
      </div>

      {/* Legal row */}
      <motion.div
        className="max-w-7xl mx-auto mt-12 pt-8 border-t border-offwhite/10 flex flex-col md:flex-row justify-between items-start gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease, delay: 0.4 }}
      >
        <p className="text-xs font-medium tracking-wide text-offwhite/30">
          © 2026 Astra Ventures. All rights reserved.
        </p>
        <p className="text-xs text-offwhite/20 font-medium max-w-xl md:text-right leading-relaxed">
          This site is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. Past performance is not indicative of future results. Subject to fund counsel review prior to LP distribution.
        </p>
      </motion.div>
    </motion.footer>
  );
}
