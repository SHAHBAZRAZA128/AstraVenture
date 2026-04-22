import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-20 px-6 md:px-12 relative overflow-hidden">
      
      {/* Background typography accent */}
      <div className="absolute top-1/4 -right-1/4 text-[20vw] font-bold text-navy/[0.02] tracking-tighter pointer-events-none select-none leading-none z-0">
        ASTRA
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-[5rem] font-bold leading-[1.05] tracking-tighter text-navy mb-10"
          >
            The next trillion-dollar AI wave won't live in chatbots. <br/>
            <span className="text-navy/60">It will live in factories, fleets, machines, and critical infrastructure.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="text-xl md:text-2xl text-navy/70 mb-12 max-w-3xl leading-relaxed font-medium"
          >
            Astra Ventures is a seed fund for physical-world AI. 
            AI-native in how we operate: deal flow, diligence, monitoring, reporting.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-5 mb-24"
          >
            <a 
              href="#contact" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-navy text-offwhite text-sm font-bold uppercase tracking-widest rounded-full hover:bg-copper transition-all duration-300 hover:shadow-[0_0_20px_rgba(184,115,51,0.3)] hover:-translate-y-1"
            >
              For founders
              <svg className="w-4 h-4 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            <a 
              href="mailto:lp@astraventures.ai" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-navy text-navy text-sm font-bold uppercase tracking-widest rounded-full hover:bg-navy hover:text-offwhite transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-navy/10"
            >
              For LPs
            </a>
          </motion.div>
        </div>

        {/* HERO VIDEO BLOCK */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
          className="relative w-full aspect-video bg-[#050914] flex items-center justify-center group overflow-hidden border-4 border-navy shadow-2xl"
        >
          {/* Pulse ring */}
          <div className="absolute z-0 w-24 h-24 bg-copper/30 rounded-full animate-pulse-slow"></div>
          
          <button className="absolute z-10 w-24 h-24 bg-copper rounded-full flex items-center justify-center text-offwhite shadow-[0_0_40px_rgba(184,115,51,0.5)] hover:bg-copper/90 hover:scale-110 transition-all duration-500 ease-out">
            <Play className="w-10 h-10 ml-2" fill="currentColor" />
          </button>
          
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80 mix-blend-multiply"></div>
          
          <div className="absolute bottom-8 left-0 right-0 text-center z-10 px-6 transform translate-y-2 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-500">
            <p className="text-offwhite text-sm md:text-lg font-medium tracking-wide">
              Eighty percent of venture dollars this year went to AI. Almost none of it went to the AI that moves things.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
