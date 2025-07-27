import React, { useState, useEffect, useCallback } from 'react';

const ProductViewer: React.FC = () => {
  const [currentAngle, setCurrentAngle] = useState(3); // Start with front view (index 3)
  const [isLoaded, setIsLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const angles = [
    { name: 'left-45', file: 'watch-left-45.PNG' },
    { name: 'left-30', file: 'watch-left-30.PNG' },
    { name: 'left-15', file: 'watch-left-15.PNG' },
    { name: 'front', file: 'watch-front.PNG' },
    { name: 'right-15', file: 'watch-right-15.PNG' },
    { name: 'right-30', file: 'watch-right-30.PNG' },
    { name: 'right-45', file: 'watch-right-45.PNG' }
  ];

  // Preload images
  useEffect(() => {
    const imagePromises = angles.map((angle) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = `/watch-views/${angle.file}`;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true)); // Proceed even if some images fail

    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const mouseX = e.clientX;
    const offset = mouseX - centerX;
    const maxOffset = rect.width / 2;
    const normalizedOffset = Math.max(-1, Math.min(1, offset / maxOffset));
    
    // Map normalized offset to angle index (0-6)
    const angleIndex = Math.round((normalizedOffset + 1) * 3);
    const clampedIndex = Math.max(0, Math.min(6, angleIndex));
    
    setCurrentAngle(clampedIndex);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setCurrentAngle(3); // Return to front view
  }, []);

  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div 
          className={`text-center transition-all duration-1000 ${
            isLoaded 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          {/* Product viewer */}
          <div className="max-w-2xl mx-auto">
            <div 
              className="relative group cursor-crosshair"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Watch image container */}
              <div className="relative w-full aspect-square bg-gradient-to-br from-slate-800/20 to-slate-900/40 rounded-full p-8 md:p-12 lg:p-16">
                {imagesLoaded ? (
                  <img
                    src={`/watch-views/${angles[currentAngle].file}`}
                    alt={`Watch ${angles[currentAngle].name} view`}
                    className="w-full h-full object-contain transition-all duration-150 ease-out transform group-hover:scale-105"
                  />
                ) : (
                  // Placeholder while loading
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-slate-600 flex items-center justify-center">
                      <div className="w-16 h-16 md:w-24 md:h-24 bg-slate-700 rounded-full animate-pulse" />
                    </div>
                  </div>
                )}
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Interaction hint */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <p className="text-slate-400 text-xs md:text-sm font-light tracking-wide opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  Move mouse to rotate
                </p>
              </div>
            </div>
            
            {/* Product title */}
            <div className="mt-16 space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white tracking-wide">
                Temporal Canvas Series
              </h2>
              <p className="text-slate-300 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                A fusion of traditional Swiss precision and contemporary artistic vision, 
                where each timepiece becomes a canvas for temporal expression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductViewer;