
import { motion } from 'framer-motion';
import { Award, Heart, Target, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We pour our heart into every project, ensuring exceptional results.'
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Attention to detail is at the core of everything we create.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with clients to bring their vision to life.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our work.'
  }
];

const team = [
  {
    name: 'Alex Thompson',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    bio: 'Leading creative vision with 10+ years of experience.'
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    bio: 'Expert in UI/UX with a passion for beautiful design.'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    bio: 'Bridging design and technology with innovative solutions.'
  }
];

const AboutUs = () => {
  return (
    <div className="bg-black py-20 pt-32" id="about-us">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-400 mb-4">ABOUT US</h2>
          <h3 className="text-4xl font-bold text-white mb-6">
            WHO ARE <span className="text-blue-400">WE?</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We are a team of passionate designers and developers dedicated to creating
            exceptional digital experiences that inspire and engage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-black/50 p-6 rounded-xl border border-blue-400/20 hover:border-blue-400/50 transition-all"
            >
              <value.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Meet Our <span className="text-blue-400">Team</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-black/50 rounded-xl overflow-hidden group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                <p className="text-blue-400 mb-3">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;