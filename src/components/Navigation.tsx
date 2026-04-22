import { motion } from 'framer-motion';

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 bg-offwhite/95 backdrop-blur-md border-b border-navy/10 py-5 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl md:text-2xl font-bold tracking-tighter text-navy uppercase">
          Astra Ventures
        </div>
        
        <div className="hidden lg:flex items-center space-x-10 text-sm font-bold tracking-widest uppercase text-navy/70">
          <a href="#thesis" className="relative group overflow-hidden py-2">
            <span className="group-hover:text-navy transition-colors duration-300">Thesis</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-copper transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
          </a>
          <a href="#stack" className="relative group overflow-hidden py-2">
            <span className="group-hover:text-navy transition-colors duration-300">How we operate</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-copper transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
          </a>
          <a href="#team" className="relative group overflow-hidden py-2">
            <span className="group-hover:text-navy transition-colors duration-300">Team</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-copper transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
          </a>
          <a href="#contact" className="relative group overflow-hidden py-2">
            <span className="group-hover:text-navy transition-colors duration-300">Contact</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-copper transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
          </a>
        </div>
        
        <div className="flex items-center">
          <a 
            href="#contact" 
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border-2 border-navy text-navy text-sm font-bold uppercase tracking-widest rounded-full hover:bg-navy hover:text-offwhite transition-all duration-300"
          >
            For LPs
          </a>
          <button className="lg:hidden p-2 -mr-2 text-navy">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
