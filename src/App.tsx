import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import BloodCellClassifier from './components/BloodCellClassifier';
import Statistics from './components/Statistics';
import Scenarios from './components/Scenarios';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Features />
      <BloodCellClassifier />
      <Scenarios />
      <Statistics />
      <Footer />
    </div>
  );
}

export default App;