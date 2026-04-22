import { motion } from 'framer-motion';

export default function Thesis() {
  const wedges = [
    {
      num: "01.",
      title: "Industrial & Manufacturing Intelligence",
      desc: "Factory-floor AI: vision, quality, scheduling, predictive maintenance."
    },
    {
      num: "02.",
      title: "Logistics & Warehouse Autonomy",
      desc: "AMRs, yard automation, warehouse orchestration, last-mile."
    },
    {
      num: "03.",
      title: "Robotics Middleware & Orchestration",
      desc: "Fleet management, safety, simulation, synthetic data, tele-ops, tooling."
    },
    {
      num: "04.",
      title: "Energy & Industrial Mobility",
      desc: "Inspection robotics, grid-edge AI, autonomous maintenance for utilities and heavy equipment."
    },
    {
      num: "05.",
      title: "Agricultural & Construction Robotics",
      desc: "The most under-funded categories relative to TAM. Measurable unit economics."
    },
    {
      num: "06.",
      title: "Applied Vertical AI for Heavy Industries",
      desc: "Domain-specific models and workflow software for mid-market manufacturing, construction, mining."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section id="thesis" className="py-32 px-6 md:px-12 bg-offwhite border-t border-navy/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 max-w-4xl">
          <p className="text-copper font-bold tracking-widest uppercase mb-6 flex items-center">
            <span className="w-8 h-[2px] bg-copper mr-4"></span> Thesis
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-10 leading-[1.1] tracking-tight">
            The AI that earns the next decade of returns lives in the physical world.
          </h2>
          
          <div className="text-xl text-navy/70 space-y-8 leading-relaxed font-medium max-w-3xl">
            <p>
              Eighty percent of venture dollars in Q1 2026 went to AI — most of it to chatbots, copilots, and vertical SaaS. Meanwhile, foundation models for robotics shipped (π0, GR00T, Gemini Robotics). Edge compute got cheap (Jetson Thor: 2,070 FP4 TFLOPS at the edge). Humanoid bills of materials dropped from $250K in 2022 to under $30K today, with a line of sight to $17K by 2030.
            </p>
            <p>
              Physical AI is no longer a research bet. It's a deployment bet. The companies building the middleware, the data infrastructure, the vertical workflows, and the autonomy stacks for real industrial environments are under-funded relative to the opportunity by an order of magnitude. That's the wedge Astra was built for.
            </p>
          </div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          {wedges.map((wedge, idx) => (
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
  )
}
