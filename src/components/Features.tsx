import React from 'react';
import { Brain, Zap, Leaf, Target, BarChart3, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Transfer Learning',
      description: 'Leverages pre-trained neural networks to achieve high accuracy with minimal training data.',
      color: 'bg-blue-500'
    },
    {
      icon: Zap,
      title: 'Real-time Classification',
      description: 'Instant waste material identification with sub-second response times.',
      color: 'bg-yellow-500'
    },
    {
      icon: Target,
      title: 'High Accuracy',
      description: 'Achieves 95%+ accuracy across multiple waste categories using advanced AI models.',
      color: 'bg-red-500'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Promotes sustainable practices by optimizing recycling and waste sorting processes.',
      color: 'bg-green-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights and statistics to track waste management performance.',
      color: 'bg-purple-500'
    },
    {
      icon: Shield,
      title: 'Reliable & Secure',
      description: 'Enterprise-grade security with consistent performance in production environments.',
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
              Cutting-Edge Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered waste management solution combines advanced machine learning 
              with practical sustainability goals.
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