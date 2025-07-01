import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 pb-16 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-white text-sm font-medium">AI-Powered Waste Classification</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transforming Waste Management with{' '}
              <span className="text-green-200">Transfer Learning</span>
            </h1>
            
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to automatically classify waste materials, 
              optimize recycling processes, and create a more sustainable future for our planet.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#classifier"
              className="inline-flex items-center space-x-2 bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Try Classifier</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            
            <a
              href="#features"
              className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200"
            >
              <span>Learn More</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;