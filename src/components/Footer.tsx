import { motion } from 'framer-motion';
import logo from '../assets/astrafooterwhite.png';

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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
        >
          <img src={logo} alt="Astra Ventures" className="h-16 md:h-20 w-auto" />
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

      </div>

      {/* Legal row */}
      <motion.div
        className="max-w-7xl mx-auto mt-12 pt-8 border-t border-offwhite/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease, delay: 0.4 }}
      >
        <p className="text-xs font-medium tracking-wide text-offwhite/30">
          © 2026 Astra Ventures. All rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
}
