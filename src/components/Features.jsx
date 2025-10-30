import React from 'react';
import { Shield, Zap, Star } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Fast by default',
    desc: 'Vite-powered dev server and build pipeline keep iteration blazing fast.'
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Production-ready',
    desc: 'Accessible components, responsive layouts, and sensible defaults.'
  },
  {
    icon: <Star className="h-5 w-5" />,
    title: 'Polished UI',
    desc: 'Thoughtful design system with gradients, shadows, and modern typography.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything you need to start strong</h2>
          <p className="mt-3 text-gray-600">Opinionated structure, elegant styling, and sensible patterns to ship confidently.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;