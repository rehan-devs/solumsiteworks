import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <div className="relative h-[40vh] min-h-[300px] w-full bg-[#111111] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/50 to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-300 font-light"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
}
