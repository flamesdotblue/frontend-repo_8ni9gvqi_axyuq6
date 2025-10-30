import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
              Elevate your product launch
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Build beautiful UIs faster with a modern starter
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              A thoughtfully crafted React + Tailwind template with delightful defaults so you can focus on shipping, not setup.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-gray-900 text-white font-medium hover:bg-gray-800">
                Explore Features
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50">
                Live Demo
              </a>
            </div>
            <p className="mt-3 text-sm text-gray-500">No credit card required. Try it free.</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 p-1 shadow-xl">
              <div className="h-full w-full rounded-2xl bg-white grid grid-cols-3 gap-2 p-3">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200" />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-indigo-200 blur-2xl opacity-60" />
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-violet-200 blur-2xl opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;