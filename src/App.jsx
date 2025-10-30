import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Simple pricing/cta section to round out the layout */}
        <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Simple pricing</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Start free and upgrade when you need more. No hidden fees, cancel anytime.</p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold">Starter</h3>
                <p className="mt-2 text-gray-600">Perfect for trying things out</p>
                <p className="mt-6"><span className="text-4xl font-extrabold">$0</span> <span className="text-gray-500">/mo</span></p>
                <ul className="mt-6 space-y-2 text-left text-gray-600">
                  <li>• Core components</li>
                  <li>• Community support</li>
                  <li>• MIT license</li>
                </ul>
                <button className="mt-8 w-full px-4 py-3 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50">Get started</button>
              </div>

              <div className="rounded-2xl border-2 border-gray-900 bg-white p-8 shadow-lg">
                <h3 className="text-xl font-semibold">Pro</h3>
                <p className="mt-2 text-gray-600">For teams that move fast</p>
                <p className="mt-6"><span className="text-4xl font-extrabold">$12</span> <span className="text-gray-500">/mo</span></p>
                <ul className="mt-6 space-y-2 text-left text-gray-600">
                  <li>• Everything in Starter</li>
                  <li>• Advanced layouts</li>
                  <li>• Priority support</li>
                </ul>
                <button className="mt-8 w-full px-4 py-3 rounded-md bg-gray-900 text-white font-medium hover:bg-gray-800">Upgrade</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;