'use client';

import { useState, useEffect } from 'react';

interface HeroProps {
  headline: string;
  subtext: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA: {
    label: string;
    href: string;
  };
}

const medicalImages = [
  {
    src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop',
    alt: 'Healthcare professional with patient'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2017/08/06/07/12/dentist-2589771_1280.jpg',
    alt: 'Medical professional in healthcare setting'
  },
  {
    src: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=600&fit=crop',
    alt: 'Elderly care support'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2022/09/14/02/36/care-7453215_1280.jpg',
    alt: 'Healthcare team discussion'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2026/03/22/11/38/u_c48rf6ybx8-laptop-10186538_1280.jpg',
    alt: 'Healthcare professional care'
  },
  {
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
    alt: 'Care team providing support'
  },
];

export default function Hero({
  headline,
  subtext,
  primaryCTA,
  secondaryCTA,
}: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % medicalImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[600px] md:min-h-[680px] bg-white flex items-center pt-6">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-semibold text-slate-950 leading-tight">
              {headline}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              {subtext}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href={primaryCTA.href}
                className="bg-[#77bdda] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#5a9bb3] transition-colors text-center"
              >
                {primaryCTA.label}
              </a>
              <a
                href={secondaryCTA.href}
                className="border-2 border-slate-300 text-slate-950 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors text-center"
              >
                {secondaryCTA.label}
              </a>
            </div>
          </div>

          {/* Auto-Scrolling Medical Images Carousel */}
          <div className="relative h-96 rounded-xl overflow-hidden border border-slate-200 shadow-lg">
            <div className="relative w-full h-full">
              {medicalImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {medicalImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? 'bg-white w-6'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
