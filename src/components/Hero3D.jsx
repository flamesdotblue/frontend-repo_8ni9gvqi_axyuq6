import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero3D = () => {
  return (
    <section id="home" className="relative h-[90vh] sm:h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Top gradient + vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_120px_40px_rgba(0,0,0,0.6)]" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="w-full">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Oracle APEX · PL/SQL · Cloud · Data Engineering
          </div>

          <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05]">
            Pavan Kumar PS
          </h1>
          <p className="mt-3 sm:mt-5 max-w-2xl text-base sm:text-lg text-white/80">
            Certified Oracle APEX Cloud Developer & Team Lead. I build immersive, data-driven systems and migrate legacy stacks to scalable cloud apps.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 font-semibold hover:bg-white/90 transition">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/30 bg-transparent px-5 py-3 font-semibold hover:bg-white/10 transition">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-widest text-white/70">
        SCROLL
      </div>
    </section>
  );
};

export default Hero3D;
