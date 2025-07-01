import React from 'react';
import { Hospital, Video, GraduationCap, Stethoscope, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Scenarios: React.FC = () => {
  const scenarios = [
    {
      icon: Hospital,
      title: 'Automated Diagnostic Systems',
      subtitle: 'Healthcare Automation',
      description: 'Integrate HematoVision into clinical diagnostic systems for real-time blood analysis. Reduce manual workload on pathologists while ensuring high accuracy and faster diagnostic processes.',
      benefits: [
        'Automated blood sample analysis',
        'Real-time classification reports',
        'Reduced diagnostic turnaround time',
        'Enhanced accuracy and consistency'
      ],
      color: 'bg-primary-500'
    },
    {
      icon: Video,
      title: 'Remote Medical Consultations',
      subtitle: 'Telemedicine Integration',
      description: 'Enable remote healthcare providers to perform accurate blood cell analysis during virtual consultations, improving access to specialized medical expertise in underserved areas.',
      benefits: [
        'Remote diagnostic capabilities',
        'Instant analysis during consultations',
        'Improved healthcare accessibility',
        'Specialized expertise anywhere'
      ],
      color: 'bg-medical-500'
    },
    {
      icon: GraduationCap,
      title: 'Educational Training Tools',
      subtitle: 'Medical Education',
      description: 'Provide interactive learning platforms for medical students and laboratory technicians to practice blood cell identification with instant AI-powered feedback.',
      benefits: [
        'Hands-on learning experience',
        'Instant educational feedback',
        'Enhanced morphology understanding',
        'Practical diagnostic skills'
      ],
      color: 'bg-green-500'
    }
  ];

  return (
    <section id="scenarios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how HematoVision's transfer learning technology transforms 
              healthcare delivery across multiple scenarios and use cases.
            </p>
          </motion.div>
        </div>

        <div className="space-y-12">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`card overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:flex">
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`p-3 rounded-lg ${scenario.color}`}>
                      <scenario.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{scenario.title}</h3>
                      <p className="text-sm text-gray-500 font-medium">{scenario.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {scenario.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {scenario.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`inline-flex p-8 rounded-full ${scenario.color} mb-6 blood-cell-animation`}>
                      <scenario.icon className="h-16 w-16 text-white" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-2xl font-bold text-gray-900">95%+</div>
                        <div className="text-sm text-gray-600">Accuracy</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-2xl font-bold text-gray-900">&lt;1s</div>
                        <div className="text-sm text-gray-600">Response</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card p-8 bg-gradient-to-r from-primary-50 to-medical-50 border-primary-200">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Stethoscope className="h-8 w-8 text-primary-600" />
              <Users className="h-8 w-8 text-medical-600" />
              <BookOpen className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Healthcare Workflow?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join healthcare professionals worldwide who are already using HematoVision 
              to enhance diagnostic accuracy and improve patient outcomes.
            </p>
            <button className="btn-primary">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Scenarios;