import { motion } from 'framer-motion';
import heroVideo from '../assets/0423.mov';

export default function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-80px)] flex flex-col justify-center pt-12 pb-10 relative overflow-hidden">

      <div className="max-w-7xl mx-auto w-full relative z-10 px-6 md:px-12">
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
            Astra Ventures funds the foundational technologies powering Physical AI.{' '}
            <span className="text-navy/50 font-bold">AI-native in how we operate: deal flow, diligence, monitoring, reporting.</span>
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
          </motion.div>
        </div>
      </div>

      {/* HERO VIDEO BLOCK — full-bleed */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
        className="relative w-full aspect-video bg-[#050914] flex items-center justify-center group overflow-hidden shadow-2xl z-10"
      >
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>
    </section>
  )
}
