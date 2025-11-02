import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="scroll-smooth bg-white text-gray-900">
      <Navbar />
      <main className="pt-16">{/* offset for sticky navbar */}
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
