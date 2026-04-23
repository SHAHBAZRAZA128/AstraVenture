import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-navy text-offwhite border-t border-offwhite/10 relative overflow-hidden">
      
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-0 w-full h-125 bg-linear-to-t from-copper/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 relative z-10">

        {/* Left column — staggered children */}
        <motion.div
          className="lg:w-1/3"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p
            variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } } }}
            className="text-copper font-bold tracking-widest uppercase mb-6 flex items-center"
          >
            <span className="w-8 h-0.5 bg-copper mr-4"></span> Contact
          </motion.p>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } } }}
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight"
          >
            Write to us.
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } } }}
            className="text-xl text-offwhite/80 leading-relaxed mb-10 font-medium"
          >
            A paragraph or a deck — what you've built, what you're shipping, who's paying. We respond within two business days.
          </motion.p>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } } }}
            className="text-lg text-offwhite/60 font-medium"
          >
            Or write directly to{' '}
            <a href="mailto:founder@astraventures.ai" className="text-copper hover:text-white transition-colors pb-0.5 border-b border-copper/30 hover:border-white">
              founder@astraventures.ai
            </a>.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-2/3 max-w-2xl bg-offwhite/2 p-8 md:p-12 border border-offwhite/10 backdrop-blur-sm"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-offwhite/80 mb-3">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-offwhite/5 border border-offwhite/20 focus:border-copper focus:bg-offwhite/10 text-offwhite px-5 py-4 outline-none transition-all duration-300 font-medium"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-offwhite/80 mb-3">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-offwhite/5 border border-offwhite/20 focus:border-copper focus:bg-offwhite/10 text-offwhite px-5 py-4 outline-none transition-all duration-300 font-medium"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="company" className="block text-sm font-bold uppercase tracking-widest text-offwhite/80 mb-3">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full bg-offwhite/5 border border-offwhite/20 focus:border-copper focus:bg-offwhite/10 text-offwhite px-5 py-4 outline-none transition-all duration-300 font-medium"
                  required
                />
              </div>
              <div>
                <label htmlFor="url" className="block text-sm font-bold uppercase tracking-widest text-offwhite/80 mb-3">Company URL</label>
                <input 
                  type="url" 
                  id="url" 
                  className="w-full bg-offwhite/5 border border-offwhite/20 focus:border-copper focus:bg-offwhite/10 text-offwhite px-5 py-4 outline-none transition-all duration-300 font-medium"
                />
              </div>
            </div>

            <div>
              <label htmlFor="stage" className="block text-sm font-bold uppercase tracking-widest text-offwhite/80 mb-3">Stage</label>
              <div className="relative">
                <select 
                  id="stage" 
                  defaultValue=""
                  className="w-full bg-offwhite/5 border border-offwhite/20 focus:border-copper focus:bg-offwhite/10 text-offwhite px-5 py-4 outline-none transition-all duration-300 appearance-none font-medium cursor-pointer"
                  required
                >
                  <option value="" disabled className="text-navy bg-offwhite">Select a stage</option>
                  <option value="pre-seed" className="text-navy bg-offwhite">Pre-seed</option>
                  <option value="seed" className="text-navy bg-offwhite">Seed</option>
                  <option value="other" className="text-navy bg-offwhite">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-copper">
                  <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="building" className="block text-sm font-bold uppercase tracking-widest text-offwhite/80 mb-3">What you're building</label>
              <textarea 
                id="building" 
                rows={5} 
                className="w-full bg-offwhite/5 border border-offwhite/20 focus:border-copper focus:bg-offwhite/10 text-offwhite px-5 py-4 outline-none transition-all duration-300 resize-y font-medium"
                placeholder="One paragraph description..."
                required
              ></textarea>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full md:w-auto px-10 py-4 bg-copper text-offwhite font-bold uppercase tracking-widest rounded-full hover:bg-copper/90 transition-all duration-300 shadow-xl hover:-translate-y-1 hover:shadow-2xl"
              >
                Send
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  )
}
