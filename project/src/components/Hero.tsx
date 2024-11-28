import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="h-full md:py-32 bg-black flex items-center relative overflow-hidden" id="home">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://i.pinimg.com/474x/91/f1/64/91f164d561efe7a7105e9076f9c41f76.jpg')] bg-cover bg-center opacity-10" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between relative z-10 space-y-10 md:space-y-0">
        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative "
        >
          <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
          <img
            src="https://i.pinimg.com/originals/10/5a/be/105abe0636996714c7389203ec23e541.gif"
            alt="Creative Design"
            className="block sm:hidden w-full h-full object-cover rounded-2xl"
          />

        </motion.div>

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center md:text-left"
        >
          <h2 className="text-blue-400 text-lg sm:text-xl md:text-2xl mb-4">
            CREATIVE DESIGNER
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            WE ARE{' '}
            <span className="text-blue-400">CREATIVE</span>
            <br />
            DESIGNERS
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8">
            Transforming ideas into stunning digital experiences. We craft beautiful, 
            functional designs that elevate your brand and engage your audience.
          </p>
          
        </motion.div>

        
      </div>
    </div>
  );
};

export default Hero;
