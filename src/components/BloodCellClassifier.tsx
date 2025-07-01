import React, { useState, useRef } from 'react';
import { Upload, Camera, FileImage, AlertCircle, CheckCircle, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';

interface PredictionResult {
  cellType: string;
  confidence: number;
  description: string;
  characteristics: string[];
}

const BloodCellClassifier: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const cellTypes = {
    eosinophil: {
      name: 'Eosinophil',
      description: 'A type of white blood cell involved in allergic reactions and parasitic infections.',
      characteristics: ['Bilobed nucleus', 'Pink/orange granules', '2-4% of total WBCs', 'Involved in allergic responses']
    },
    lymphocyte: {
      name: 'Lymphocyte',
      description: 'Key immune system cells responsible for adaptive immunity.',
      characteristics: ['Large nucleus', 'Minimal cytoplasm', '20-40% of total WBCs', 'B-cells and T-cells']
    },
    monocyte: {
      name: 'Monocyte',
      description: 'Large white blood cells that differentiate into macrophages and dendritic cells.',
      characteristics: ['Kidney-shaped nucleus', 'Abundant cytoplasm', '2-8% of total WBCs', 'Phagocytic function']
    },
    neutrophil: {
      name: 'Neutrophil',
      description: 'Most abundant white blood cells, first responders to bacterial infections.',
      characteristics: ['Multi-lobed nucleus', 'Fine granules', '50-70% of total WBCs', 'Primary immune defense']
    }
  };

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setPrediction(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const simulateClassification = async () => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock prediction result
    const cellTypeKeys = Object.keys(cellTypes) as (keyof typeof cellTypes)[];
    const randomCellType = cellTypeKeys[Math.floor(Math.random() * cellTypeKeys.length)];
    const cellInfo = cellTypes[randomCellType];
    
    const mockResult: PredictionResult = {
      cellType: cellInfo.name,
      confidence: Math.random() * 0.3 + 0.7, // 70-100% confidence
      description: cellInfo.description,
      characteristics: cellInfo.characteristics
    };
    
    setPrediction(mockResult);
    setIsLoading(false);
  };

  return (
    <section id="classifier" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Blood Cell Classifier
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Upload a blood cell image to get instant AI-powered classification and analysis
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div
              className={`upload-area rounded-xl p-8 text-center cursor-pointer transition-all duration-300 ${
                dragOver ? 'dragover' : ''
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => e.target.files && handleFileSelect(e.target.files[0])}
                className="hidden"
              />
              
              {selectedImage ? (
                <div className="space-y-4">
                  <img
                    src={selectedImage}
                    alt="Selected blood cell"
                    className="max-w-full max-h-64 mx-auto rounded-lg shadow-lg"
                  />
                  <p className="text-gray-600">Click to select a different image</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary-100 rounded-full">
                      <Upload className="h-8 w-8 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900 mb-2">
                      Upload Blood Cell Image
                    </p>
                    <p className="text-gray-600">
                      Drag and drop your image here, or click to browse
                    </p>
                  </div>
                  <div className="flex justify-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <FileImage className="h-4 w-4" />
                      <span>JPG, PNG</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Camera className="h-4 w-4" />
                      <span>Max 10MB</span>
                    </span>
                  </div>
                </div>
              )}
            </div>

            {selectedImage && (
              <button
                onClick={simulateClassification}
                disabled={isLoading}
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="loading-spinner"></div>
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Microscope className="h-5 w-5" />
                    <span>Classify Blood Cell</span>
                  </>
                )}
              </button>
            )}
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {prediction ? (
              <div className="prediction-card card p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-green-100 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Classification Result</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-semibold text-gray-900">
                        {prediction.cellType}
                      </span>
                      <span className="text-lg font-bold text-primary-600">
                        {(prediction.confidence * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-primary-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${prediction.confidence * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                    <p className="text-gray-600 leading-relaxed">{prediction.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Characteristics</h4>
                    <ul className="space-y-2">
                      {prediction.characteristics.map((characteristic, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                          <span className="text-gray-600">{characteristic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card p-8 text-center">
                <div className="p-4 bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Microscope className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ready for Analysis
                </h3>
                <p className="text-gray-600">
                  Upload a blood cell image to see detailed classification results and medical insights.
                </p>
              </div>
            )}

            <div className="card p-6 bg-blue-50 border-blue-200">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Medical Disclaimer</h4>
                  <p className="text-sm text-blue-800">
                    This tool is for educational and research purposes. Always consult qualified 
                    healthcare professionals for medical diagnosis and treatment decisions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BloodCellClassifier;