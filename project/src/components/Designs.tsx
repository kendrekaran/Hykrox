
import { motion } from 'framer-motion';
import {  Monitor, Smartphone, Layout } from 'lucide-react';

const designs = [
  {
    category: 'Web Design',
    icon: Monitor,
    projects: [
      {
        title: 'Modern E-commerce',
        image: 'https://i.pinimg.com/474x/6e/84/70/6e847035f07ce5b4152702311c11583b.jpg',
        description: 'Clean and intuitive shopping experience'
      },
      {
        title: 'Portfolio Platform',
        image: 'https://i.pinimg.com/474x/c8/2d/c9/c82dc9d2ac8e3cc870fccfc048554dd9.jpg',
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
        image: 'https://i.pinimg.com/474x/9e/c7/9c/9ec79cb33b34eec7ba84bdc740deede1.jpg',
        description: 'Track workouts and health metrics'
      },
      {
        title: 'Food Delivery',
        image: 'https://i.pinimg.com/474x/42/d3/d8/42d3d89bace307b0a6ff3b24fbba2753.jpg',
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
