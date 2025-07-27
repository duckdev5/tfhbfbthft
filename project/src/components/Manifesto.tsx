import React, { useState, useEffect } from 'react';

const Manifesto: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('manifesto-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="manifesto-section" 
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-900/50 to-slate-800/30"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Manifesto */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 tracking-wide">
                Manifesto
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8" />
            </div>
            
            <div className="prose prose-lg prose-invert mx-auto max-w-3xl">
              <blockquote 
                className={`text-center text-lg md:text-xl lg:text-2xl font-light text-slate-200 leading-relaxed border-none pl-0 transition-all duration-1200 delay-300 ${
                  isVisible 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-4'
                }`}
              >
                "Time is not merely measured—it is sculpted, painted, and given soul. 
                Each tick becomes a brushstroke, each mechanism a masterpiece of precision and beauty."
              </blockquote>
              
              <div 
                className={`mt-12 space-y-6 text-slate-300 text-base md:text-lg leading-relaxed transition-all duration-1200 delay-500 ${
                  isVisible 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-4'
                }`}
              >
                <p>
                  Born from the intersection of traditional horology and contemporary art, 
                  my work challenges the boundaries between functional craft and aesthetic expression. 
                  Each timepiece is conceived not merely as an instrument of measurement, 
                  but as a meditation on the passage of time itself.
                </p>
                
                <p>
                  Drawing inspiration from the geometric precision of Bauhaus design and the 
                  intricate beauty of Swiss complications, I create pieces that honor the past 
                  while boldly stepping into the future. Every watch is a canvas, 
                  every movement a poem written in metal and jewels.
                </p>
                
                <p>
                  This is horology reimagined—where art and time converge in perfect harmony.
                </p>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div 
            className={`mt-20 text-center transition-all duration-1200 delay-700 ${
              isVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
          >
            {/* Artist photo */}
            <div className="mb-8">
              <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-2 border-slate-700/50 hover:border-yellow-400/50 transition-all duration-300 group">
                <img
                  src="/LandingAssets/emre.jpg"
                  alt="Artist portrait"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            <h3 className="text-xl md:text-2xl font-light text-white mb-6 tracking-wide">
              About the Artist
            </h3>
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              With over a decade of experience in both fine arts and precision mechanics, 
              I bridge the gap between galleries and workshops, creating timepieces that 
              transcend traditional boundaries. Trained in Swiss techniques and inspired by 
              contemporary artistic movements, each creation represents a unique fusion of 
              technical mastery and creative vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
