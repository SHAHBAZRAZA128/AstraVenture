import { motion } from 'framer-motion';
import ramiroPhoto from '../assets/Ramiro.jpeg';
import ishtiaquePhoto from '../assets/Ishtique.jpeg';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function Team() {
  const team = [
    {
      name: "Ramiro López-García, CFA",
      photo: ramiroPhoto,
      title: "General Partner — Global Capital & Industrial Operations",
      bio: [
        "Ramiro López García is a General Partner at Astra Ventures and Managing Partner of an M&A advisory firm for mid-market companies across the Americas. He has 20+ years of experience in industrial operations, corporate finance, and cloud infrastructure. He was most recently General Manager of a multi-site industrial manufacturing business, and previously Director of Finance and Strategy at Amazon Prime and AWS — leading a $10 billion compute platform and closing over $1 billion in infrastructure partnerships. He held M&A, strategic planning, and Chief of Staff roles at CEMEX across the U.S., Europe, and Latin America, and began his career as an engineer at Airbus and Mercedes-Benz in Germany.",
        "Ramiro holds a degree in Mechatronics Engineering, an MBA from Cornell Johnson, and the CFA charter. He is based in Latin America.",
      ],
      linkedin: "https://www.linkedin.com/in/ramirolg"
    },
    {
      name: "Ishtiaque Mohammad",
      photo: ishtiaquePhoto,
      title: "General Partner — Technology, Platform & AI Operations",
      bio: [
        "Ishtiaque Mohammad is a General Partner at Astra Ventures and the Founder and CEO of SowFin, a vertical AI platform for venture capital due diligence. He has 25+ years of experience in semiconductors, corporate finance, and AI platforms. He also owns VentureReady, a Bay Area community of 1,300 founders, and built VentureScope, Astra's internal AI diligence and portfolio management system. He was previously Director of Strategic Finance at Intel, where he led $2 billion in annual R&D capital allocation and shaped Xeon datacenter CPU strategy. Before Intel, he managed corporate finance and capital budgeting at Broadcom.",
        "Ishtiaque holds a degree in Electrical Engineering and an MBA in Finance from Cornell. He is based in the San Francisco Bay Area, with networks in the Middle East, Japan, and India.",
      ],
      linkedin: "https://www.linkedin.com/in/ishtiaque-mohammad/"
    }
  ];

  return (
    <section id="team" className="py-32 px-6 md:px-12 bg-offwhite">
      <div className="max-w-7xl mx-auto">

        {/* Section heading — animated */}
        <motion.div
          className="mb-24"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={fadeUp} className="text-copper font-bold tracking-widest uppercase mb-6 flex items-center">
            <span className="w-8 h-0.5 bg-copper mr-4"></span> Team
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight tracking-tight">
            Operators First. Leading the New Economy.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-navy/70 max-w-3xl font-medium leading-relaxed">
            Two general partners. Decades of physical-economy and deep-tech operating experience between them — Amazon, AWS, Intel, Airbus, Broadcom, Mercedes-Benz, CEMEX.
          </motion.p>
        </motion.div>

        {/* GP cards — staggered */}
        <motion.div
          className="space-y-28"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {team.map((gp, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }}
              className="flex flex-col md:flex-row gap-12 lg:gap-20"
            >
              {/* Portrait */}
              <div className="w-full md:w-1/3 lg:w-1/4 shrink-0">
                <div className="aspect-3/4 bg-navy border-8 border-navy w-full relative overflow-hidden shadow-2xl group">
                  <img
                    src={gp.photo}
                    alt={gp.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-white/0 via-white/3 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>

              {/* Bio */}
              <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-navy mb-2 tracking-tight">{gp.name}</h3>
                <p className="text-copper font-bold text-lg mb-8 pb-8 border-b-2 border-copper/20 max-w-xl">
                  {gp.title}
                </p>
                <div className="space-y-5 text-navy/70 text-lg leading-relaxed mb-10 font-medium max-w-3xl">
                  {gp.bio.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
                <a
                  href={gp.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-navy hover:text-copper transition-colors group self-start"
                >
                  <svg className="w-5 h-5 mr-3 group-hover:-translate-y-0.5 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
