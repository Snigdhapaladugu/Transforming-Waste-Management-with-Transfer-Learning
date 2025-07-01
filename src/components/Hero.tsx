import React from 'react';
import { ArrowRight, Microscope, Heart } from 'lucide-react';
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
              <Microscope className="h-4 w-4 text-white" />
              <span className="text-white text-sm font-medium">AI-Powered Blood Cell Analysis</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Revolutionizing Healthcare with{' '}
              <span className="text-blue-200">HematoVision</span>
            </h1>
            
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Harness the power of transfer learning to accurately classify blood cells. 
              Our advanced AI model identifies eosinophils, lymphocytes, monocytes, and neutrophils 
              with exceptional precision, transforming diagnostic workflows.
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
              <Heart className="h-5 w-5" />
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

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white/80">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">12,000+</div>
                <div className="text-sm">Annotated Images</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4</div>
                <div className="text-sm">Cell Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">95%+</div>
                <div className="text-sm">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">&lt;1s</div>
                <div className="text-sm">Analysis Time</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;