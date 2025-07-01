import React from 'react';
import { TrendingUp, Users, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Statistics: React.FC = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '95.7%',
      label: 'Classification Accuracy',
      description: 'Achieved through advanced transfer learning on 12,000+ annotated images',
      color: 'text-green-600'
    },
    {
      icon: Clock,
      value: '<1s',
      label: 'Analysis Time',
      description: 'Real-time blood cell classification with sub-second response times',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Healthcare Professionals',
      description: 'Pathologists and clinicians using HematoVision worldwide',
      color: 'text-purple-600'
    },
    {
      icon: Award,
      value: '4',
      label: 'Cell Types Classified',
      description: 'Eosinophils, Lymphocytes, Monocytes, and Neutrophils',
      color: 'text-primary-600'
    }
  ];

  const additionalMetrics = [
    { label: 'Training Images', value: '12,000+' },
    { label: 'Model Parameters', value: '25M+' },
    { label: 'Training Time Reduction', value: '80%' },
    { label: 'Computational Cost Savings', value: '70%' }
  ];

  return (
    <section id="statistics" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Performance Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              HematoVision delivers exceptional performance through advanced transfer learning, 
              providing reliable and efficient blood cell classification.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className={`inline-flex p-3 rounded-full bg-gray-100 mb-4`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="card p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Transfer Learning Advantages
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              By leveraging pre-trained neural networks, HematoVision achieves superior performance 
              with significantly reduced training time and computational requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-gray-50 rounded-lg"
              >
                <div className="text-2xl font-bold text-primary-600 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="card p-8 bg-gradient-to-r from-primary-500 to-medical-500 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Proven Results in Clinical Settings
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              HematoVision has been validated in real-world clinical environments, 
              demonstrating consistent accuracy and reliability in blood cell classification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors">
                View Case Studies
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-primary-600 transition-colors">
                Request Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;