import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative h-[85vh] min-h-[600px] w-full bg-[#111111] overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
          {/* Fallback image if video fails */}
          <img src="/media/site-prep.jpg" alt="Construction Site" className="w-full h-full object-cover" />
        </video>
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-block bg-[#3b2f28] text-[#e5e0d8] px-4 py-1.5 font-bold tracking-widest text-xs uppercase mb-6 rounded-sm">
            Commercial Earthwork & Site Prep
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            GROUNDWORK <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5e0d8] to-[#8b8276]">DONE RIGHT.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
            Precision excavation, underground utilities, and comprehensive site development for commercial contractors and municipalities nationwide.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="bg-white text-[#111111] hover:bg-[#e5e0d8] px-8 py-4 rounded-sm font-bold text-base transition-colors flex items-center justify-center">
              Request a Bid <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/projects" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-sm font-bold text-base transition-colors flex items-center justify-center">
              View Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
