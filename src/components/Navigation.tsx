import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#thesis', label: 'Thesis' },
    { href: '#stack', label: 'How We Operate' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-offwhite/98 shadow-sm' : 'bg-offwhite/95'} backdrop-blur-md border-b border-navy/10 py-5 px-6 md:px-12`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#hero" className="text-xl md:text-2xl font-bold tracking-tighter text-navy uppercase">
            Astra Ventures
          </a>

          <div className="hidden lg:flex items-center space-x-10 text-sm font-bold tracking-widest text-navy/70">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="relative group overflow-hidden py-2">
                <span className="group-hover:text-navy transition-colors duration-300">{link.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-copper transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border-2 border-navy text-navy text-sm font-bold tracking-widest rounded-full hover:bg-navy hover:text-offwhite transition-all duration-300"
            >
              For LPs
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 -mr-2 text-navy"
            >
              {mobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed top-[73px] inset-x-0 z-40 bg-offwhite border-b border-navy/10 shadow-xl"
          >
            <motion.div
              className="px-6 py-8 space-y-1"
              variants={{ show: { transition: { staggerChildren: 0.07 } } }}
              initial="hidden"
              animate="show"
            >
              {links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className="block py-4 border-b border-navy/5 text-sm font-bold tracking-widest text-navy/70 hover:text-copper transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                className="pt-6"
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-navy text-navy text-sm font-bold tracking-widest rounded-full hover:bg-navy hover:text-offwhite transition-all duration-300 w-full"
                >
                  For LPs
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
