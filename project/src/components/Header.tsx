import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [logoImage, setLogoImage] = useState<string | null>('/LandingAssets/logo.png'); // <--- Buraya logo PNG dosya yolunu yaz!
  const [isDragOver, setIsDragOver] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target?.result) {
            setLogoImage(event.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <header className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Background fade effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-slate-800/30 via-slate-900/20 to-transparent transition-opacity duration-2000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Logo */}
      <div className="relative z-10 container mx-auto px-4">
        <div
          className={`text-center transition-all duration-1500 ${
            isLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          }`}
        >
          <div
            className={`relative inline-block transition-all duration-300 ${
              isDragOver ? 'scale-305 opacity-80' : ''
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {logoImage ? (
              <img
                src={logoImage}
                alt="Brand Logo"
                className="h-20 md:h-26 lg:h-32 max-w-full object-contain mx-auto"

              />
            ) : (
              <>
              </>
            )}
          </div>
          <div className="mt-4 w-24 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto" />
          <p className="mt-6 text-slate-300 text-sm md:text-base font-light tracking-wide uppercase">
            Where Time Meets Art
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
