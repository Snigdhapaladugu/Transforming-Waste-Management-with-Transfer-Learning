import React from 'react';
import { Brain, Zap, Target, Microscope, BarChart3, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Transfer Learning',
      description: 'Leverages pre-trained CNNs to achieve superior accuracy with efficient training on 12,000 annotated blood cell images.',
      color: 'bg-primary-500'
    },
    {
      icon: Zap,
      title: 'Real-time Analysis',
      description: 'Instant blood cell classification with sub-second response times for rapid diagnostic workflows.',
      color: 'bg-medical-500'
    },
    {
      icon: Target,
      title: 'High Precision',
      description: 'Achieves exceptional accuracy in classifying eosinophils, lymphocytes, monocytes, and neutrophils.',
      color: 'bg-green-500'
    },
    {
      icon: Microscope,
      title: 'Clinical Grade',
      description: 'Designed for healthcare professionals with enterprise-level reliability and medical-grade accuracy.',
      color: 'bg-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Comprehensive Reports',
      description: 'Detailed analysis reports with cell counts, percentages, and diagnostic insights for pathologists.',
      color: 'bg-orange-500'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Secure, privacy-focused platform ensuring patient data protection and regulatory compliance.',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Medical AI Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cutting-edge transfer learning technology delivers precise blood cell classification 
              for enhanced diagnostic accuracy and improved patient outcomes.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 hover:scale-105 transition-transform duration-300"
            >
              <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-6`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;