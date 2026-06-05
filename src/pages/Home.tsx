import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import TrustBanner from '../components/TrustBanner';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const services = [
    { title: "Site Preparation", image: "/media/site-prep.jpg", desc: "Clearing, grubbing, and total site development to prepare for vertical construction." },
    { title: "Mass Excavation", image: "/media/grading.jpg", desc: "Large-scale dirt moving, cut-to-fill operations, and precision grading." },
    { title: "Underground Utilities", image: "/media/utilities.jpg", desc: "Installation of storm, water, and sewer infrastructure systems." },
    { title: "Demolition", image: "/media/demolition.jpg", desc: "Safe, efficient structural demolition and concrete crushing/recycling." }
  ];

  return (
    <div className="w-full">
      <Hero />
      <TrustBanner />

      {/* Intro / Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-[#475569] uppercase tracking-widest mb-3">The Solum Standard</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#111111] leading-tight mb-6">
                Building the foundation for America's progress.
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Solum Site Work, we know that the success of any commercial project relies on what happens before the concrete is poured. We deliver precise, efficient, and safe earthwork solutions that keep your project on schedule and on budget.
              </p>
              <ul className="space-y-4 mb-10">
                {['Advanced GPS machine control for millimeter accuracy', 'In-house fleet of late-model heavy equipment', 'Dedicated safety directors on every major site'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#4f5e4d] mr-3 shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-flex items-center font-bold text-[#3b2f28] hover:text-[#111111] transition-colors border-b-2 border-[#3b2f28] pb-1">
                Learn more about our company <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] w-full overflow-hidden rounded-sm">
                <img src="/media/fleet.jpg" alt="Heavy equipment fleet" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#3b2f28] p-8 text-white hidden md:block max-w-xs rounded-sm shadow-xl">
                <p className="text-4xl font-extrabold mb-2">25+</p>
                <p className="text-sm font-medium text-[#e5e0d8] uppercase tracking-wide">Years of Earthwork Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#f8f7f5] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-[#475569] uppercase tracking-widest mb-3">Core Capabilities</h2>
              <h3 className="text-4xl font-extrabold text-[#111111]">Comprehensive Sitework Solutions</h3>
            </div>
            <Link to="/services" className="hidden md:inline-flex items-center font-bold text-[#3b2f28] hover:text-[#111111] transition-colors">
              View all services <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] w-full overflow-hidden mb-6 rounded-sm relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
                <h4 className="text-xl font-bold text-[#111111] mb-3 group-hover:text-[#3b2f28] transition-colors">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                <Link to="/services" className="text-sm font-bold text-[#475569] group-hover:text-[#111111] flex items-center transition-colors">
                  Details <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 md:hidden">
            <Link to="/services" className="inline-flex items-center font-bold text-[#3b2f28] hover:text-[#111111] transition-colors">
              View all services <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#111111] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to break ground?</h2>
          <p className="text-xl text-gray-400 mb-10 font-light">
            Partner with Solum Site Work for your next commercial development. We provide accurate bids, reliable timelines, and unmatched execution.
          </p>
          <Link to="/contact" className="inline-flex bg-white text-[#111111] hover:bg-[#e5e0d8] px-10 py-5 rounded-sm font-bold text-lg transition-colors items-center justify-center">
            Request a Bid Today <ArrowRight className="w-6 h-6 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
