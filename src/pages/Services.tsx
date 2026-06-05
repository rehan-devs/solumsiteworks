import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "Site Preparation & Clearing",
      image: "/media/site-prep.jpg",
      details: [
        "Tree and brush clearing",
        "Topsoil stripping and stockpiling",
        "Erosion control installation",
        "Demolition of existing structures"
      ]
    },
    {
      title: "Mass Excavation & Grading",
      image: "/media/grading.jpg",
      details: [
        "Cut-to-fill operations",
        "Import/export of materials",
        "GPS-guided fine grading",
        "Building pad construction"
      ]
    },
    {
      title: "Underground Utilities",
      image: "/media/utilities.jpg",
      details: [
        "Stormwater drainage systems",
        "Sanitary sewer installation",
        "Water main construction",
        "Retention pond excavation"
      ]
    },
    {
      title: "Demolition & Crushing",
      image: "/media/demolition.jpg",
      details: [
        "Commercial structural demolition",
        "Concrete breaking and removal",
        "On-site concrete crushing",
        "Material recycling"
      ]
    }
  ];

  return (
    <div className="w-full">
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive earthwork solutions from start to finish." 
        image="/media/utilities.jpg" 
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 1 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-sm shadow-lg">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 1 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2"
                >
                  <h3 className="text-3xl font-extrabold text-[#111111] mb-6">{service.title}</h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    We deliver precise execution for {service.title.toLowerCase()}, ensuring a solid foundation for your commercial project. Our specialized crews use the latest equipment to handle complex requirements efficiently.
                  </p>
                  <ul className="space-y-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-gray-700 font-medium">
                        <div className="w-2 h-2 bg-[#3b2f28] rounded-full mr-4"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
