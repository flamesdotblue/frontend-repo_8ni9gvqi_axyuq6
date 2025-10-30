import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero3D />
        <Experience />
        <Projects />
      </main>
      {/* Minimal footer inside the main layout to keep components to four total */}
      <footer className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Pavan Kumar PS. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
