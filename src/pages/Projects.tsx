import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    { id: 1, title: "Apex Industrial Park", category: "Commercial", location: "Dallas, TX", image: "/media/site-prep.jpg" },
    { id: 2, title: "Oakridge Municipal Road", category: "Municipal", location: "Austin, TX", image: "/media/grading.jpg" },
    { id: 3, title: "Pinnacle Logistics Center", category: "Industrial", location: "Houston, TX", image: "/media/project1.jpg" },
    { id: 4, title: "Westside Retail Hub", category: "Commercial", location: "Denver, CO", image: "/media/after.jpg" },
    { id: 5, title: "City Center Demolition", category: "Demolition", location: "Chicago, IL", image: "/media/demolition.jpg" },
    { id: 6, title: "Highland Water Mains", category: "Utilities", location: "Phoenix, AZ", image: "/media/utilities.jpg" },
  ];

  const categories = ['All', 'Commercial', 'Industrial', 'Municipal', 'Utilities', 'Demolition'];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="w-full">
      <PageHeader 
        title="Our Portfolio" 
        subtitle="Proven results across commercial, industrial, and municipal sectors." 
        image="/media/project1.jpg" 
      />

      <section className="py-24 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-sm font-bold uppercase tracking-wider rounded-sm transition-colors ${
                  filter === cat 
                    ? 'bg-[#3b2f28] text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-[#3b2f28]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                      <span className="text-white font-bold flex items-center">View Details <ChevronRight className="w-5 h-5 ml-1" /></span>
                    </div>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold text-[#475569] uppercase tracking-widest mb-2">{project.category}</p>
                    <h4 className="text-xl font-bold text-[#111111] mb-1">{project.title}</h4>
                    <p className="text-sm text-gray-500">{project.location}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Before / After Slider Section */}
      <section className="py-24 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">The Solum Transformation</h2>
          
          <div className="max-w-4xl mx-auto relative group rounded-sm overflow-hidden border-4 border-[#3b2f28]">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 relative">
                <img src="/media/before.jpg" alt="Before" className="w-full h-64 md:h-[400px] object-cover" />
                <div className="absolute top-4 left-4 bg-black/70 px-4 py-1 text-sm font-bold uppercase tracking-wider rounded-sm">Before</div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <img src="/media/after.jpg" alt="After" className="w-full h-64 md:h-[400px] object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 text-black px-4 py-1 text-sm font-bold uppercase tracking-wider rounded-sm">After</div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
