import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import WasteClassifier from './components/WasteClassifier';
import Statistics from './components/Statistics';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Features />
      <WasteClassifier />
      <Statistics />
      <Footer />
    </div>
  );
}

export default App;