import { motion } from 'framer-motion';

export default function Team() {
  const team = [
    {
      name: "Ramiro López-García, CFA",
      title: "General Partner — Global Capital & Industrial Operations",
      bio: [
        "Ramiro López García is a General Partner at Astra Ventures and Managing Partner of an M&A advisory firm for mid-market companies across the Americas. He has 20+ years of experience in industrial operations, corporate finance, and cloud infrastructure.",
        "He was most recently General Manager of a multi-site industrial manufacturing business. Before that, he was Director of Finance and Strategy at Amazon Prime and AWS, leading a $10 billion compute platform and a $2 billion cloud services business, and closing over $1 billion in infrastructure partnerships. He held M&A, strategic planning, and Chief of Staff roles at CEMEX across the U.S., Europe, and Latin America. He began his career as an engineer at Airbus and Mercedes-Benz in Germany.",
        "Ramiro holds a degree in Mechatronics Engineering, an MBA from Cornell Johnson, and the CFA charter. He is based in Latin America."
      ],
      linkedin: "https://www.linkedin.com/in/ramirolg"
    },
    {
      name: "Ishtiaque Mohammad",
      title: "General Partner — Technology, Platform & AI Operations",
      bio: [
        "Ishtiaque Mohammad is a General Partner at Astra Ventures and the Founder and CEO of SowFin, a vertical AI platform for venture capital due diligence. He has 25+ years of experience in semiconductors, corporate finance, and AI platforms. He also owns VentureReady, a Bay Area community of 1,300 founders, and built VentureScope, Astra's internal AI diligence and portfolio management system now in use at other Bay Area venture firms.",
        "He was previously Director of Strategic Finance at Intel, where he led $2 billion in annual R&D capital allocation and shaped Xeon datacenter CPU strategy. Before Intel, he managed corporate finance and capital budgeting at Broadcom.",
        "Ishtiaque holds a degree in Electrical Engineering and an MBA in Finance from Cornell. He is based in the San Francisco Bay Area, with networks in the Middle East, Japan, and India."
      ],
      linkedin: "https://www.linkedin.com/in/ishtiaque-mohammad/"
    }
  ];

  return (
    <section id="team" className="py-32 px-6 md:px-12 bg-offwhite">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <p className="text-copper font-bold tracking-widest uppercase mb-6 flex items-center">
            <span className="w-8 h-[2px] bg-copper mr-4"></span> Team
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight tracking-tight">
            Operators First. Leading the New Economy.
          </h2>
          <p className="text-xl text-navy/70 max-w-3xl font-medium leading-relaxed">
            Two general partners. Twenty years of physical-economy and deep-tech operating experience between them — CEMEX, Amazon, AWS, Intel, Airbus, Broadcom.
          </p>
        </div>

        <div className="space-y-32">
          {team.map((gp, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row gap-12 lg:gap-20"
            >
              <div className="w-full md:w-1/3 lg:w-1/4 shrink-0">
                <div className="aspect-[3/4] bg-navy border-[8px] border-navy w-full relative group overflow-hidden shadow-2xl">
                  {/* Placeholder for portrait */}
                  <div className="absolute inset-0 flex items-center justify-center text-offwhite/20 bg-navy transition-transform duration-700 group-hover:scale-105">
                    <span className="text-sm font-bold uppercase tracking-widest z-10 relative">Portrait</span>
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] bg-[position:100%_0] group-hover:bg-[position:0_100%] transition-all duration-1000 ease-out"></div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-navy mb-2 tracking-tight">{gp.name}</h3>
                <p className="text-copper font-bold text-lg mb-8 pb-8 border-b-2 border-copper/20 inline-block w-full max-w-xl">
                  {gp.title}
                </p>
                
                <div className="space-y-6 text-navy/70 text-lg leading-relaxed mb-10 font-medium max-w-3xl">
                  {gp.bio.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
                
                <div>
                  <a 
                    href={gp.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-navy hover:text-copper transition-colors group"
                  >
                    <svg className="w-5 h-5 mr-3 transform group-hover:-translate-y-1 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
