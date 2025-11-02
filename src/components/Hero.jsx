import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative h-[90vh] min-h-[560px] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays to ensure text readability; pointer-events-none so scene stays interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />

      <div className="relative z-10 mx-auto flex h-full max-w-screen-xl flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-xs tracking-widest text-gray-600 uppercase">Machine Learning Engineer</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
          M ARHAM RAFIQUE
        </h1>
        <p className="mt-3 text-lg text-gray-700 max-w-2xl">
          Building intelligent systems with Deep Learning and NLP
        </p>
        <p className="mt-2 text-sm text-gray-600">Sahiwal, Pakistan</p>

        <div className="mt-10 inline-flex items-center gap-3 text-gray-700">
          <a href="#about" className="rounded border border-gray-900 bg-gray-900 px-5 py-2.5 text-white hover:opacity-90 transition">Explore</a>
          <a href="#contact" className="rounded border border-gray-900 px-5 py-2.5 text-gray-900 hover:bg-gray-900 hover:text-white transition">Contact</a>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-600">
          <span className="text-xs">Scroll</span>
          <span className="mt-1 inline-block h-6 w-px bg-gray-500" />
        </div>
      </div>
    </section>
  );
}
