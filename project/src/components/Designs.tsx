
import { motion } from 'framer-motion';
import {  Monitor, Smartphone, Layout } from 'lucide-react';

const designs = [
  {
    category: 'Web Design',
    icon: Monitor,
    projects: [
      {
        title: 'Modern E-commerce',
        image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028',
        description: 'Clean and intuitive shopping experience'
      },
      {
        title: 'Portfolio Platform',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
        description: 'Showcase creative work elegantly'
      }
    ]
  },
  {
    category: 'Mobile Design',
    icon: Smartphone,
    projects: [
      {
        title: 'Fitness App',
        image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5',
        description: 'Track workouts and health metrics'
      },
      {
        title: 'Food Delivery',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
        description: 'Order food with ease'
      }
    ]
  },
  {
    category: 'UI Components',
    icon: Layout,
    projects: [
      {
        title: 'Dashboard Elements',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
        description: 'Modern admin interface components'
      },
      {
        title: 'Form Components',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8',
        description: 'Beautiful form elements'
      }
    ]
  }
];

const Designs = () => {
  return (
    <div className="bg-black py-20 pt-32" id="designs">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-400 mb-4">OUR DESIGNS</h2>
          <h3 className="text-4xl font-bold text-white mb-6">
            CREATIVE <span className="text-blue-400">PORTFOLIO</span>
          </h3>
        </motion.div>

        <div className="space-y-20">
          {designs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <category.icon className="w-8 h-8 text-blue-400" />
                <h4 className="text-2xl font-bold text-white">{category.category}</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h5 className="text-xl font-bold text-white mb-2">{project.title}</h5>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Designs;