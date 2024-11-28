
import { motion } from 'framer-motion';
import { Globe, Smartphone, Palette, Image } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Design',
    description: 'We design and develop stunning websites that capture your brand essence.'
  },
  {
    icon: Smartphone,
    title: 'Mobile & Desktop App',
    description: 'Cross-platform applications that provide seamless user experiences.'
  },
  {
    icon: Palette,
    title: 'UI & UX Design',
    description: 'User-centered design solutions that engage and delight your audience.'
  },
  {
    icon: Image,
    title: 'Editing Photo',
    description: 'Professional photo editing services to enhance your visual content.'
  }
];

const Services = () => {
  return (
    <div className="bg-black/95 py-20" id='services'>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-400 mb-4">OUR SERVICES</h2>
          <h3 className="text-4xl font-bold text-white mb-6">
            WHAT WE <span className="text-blue-400">DO?</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-black/50 p-6 rounded-xl border border-blue-400/20 hover:border-blue-400/50 transition-colors"
            >
              <service.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;