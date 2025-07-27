// src/components/Gallery.tsx
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Örnek görseller (public klasöründe /watch-views içinde yer almalı)
const sampleImages = [
  {
    src: '/watch-views/watch-left-45.PNG',
    alt: 'Saat Sol 45°',
    title: 'Sol 45° Açı',
    description: 'Kasa ve kayış detayları bu açıdan belirginleşiyor.',
  },
  {
    src: '/watch-views/watch-left-30.PNG',
    alt: 'Saat Sol 30°',
    title: 'Sol 30° Açı',
    description: 'Sade tasarımı öne çıkaran açı.',
  },
  {
    src: '/watch-views/watch-left-15.PNG',
    alt: 'Saat Sol 15°',
    title: 'Sol 15° Açı',
    description: 'Kadranın kenar çizgileri görünür.',
  },
  {
    src: '/watch-views/watch-front.PNG',
    alt: 'Saat Ön Yüz',
    title: 'Ön Görünüm',
    description: 'Sanatsal ön kadran görünümü.',
  },
  {
    src: '/watch-views/watch-right-15.PNG',
    alt: 'Saat Sağ 15°',
    title: 'Sağ 15° Açı',
    description: 'Işık altında metal detayları.',
  },
  {
    src: '/watch-views/watch-right-30.PNG',
    alt: 'Saat Sağ 30°',
    title: 'Sağ 30° Açı',
    description: 'Kadran ve gövde geçişi.',
  },
  {
    src: '/watch-views/watch-right-45.PNG',
    alt: 'Saat Sağ 45°',
    title: 'Sağ 45° Açı',
    description: 'Saatin tüm karakteri bu açıdan ortaya çıkıyor.',
  },
];

const Gallery: React.FC = () => {
  return (
    <div className="bg-[#0a0f1c] text-white min-h-screen py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">EMRE KEBER SANAL SERGİ</h2>

      <Swiper
        navigation
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        className="max-w-4xl mx-auto"
      >
        {sampleImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <img
                src={img.src}
                alt={img.alt}
                className="rounded-2xl shadow-xl object-contain max-h-[500px] transition duration-300"
              />
              <div className="mt-4 text-center px-2">
                <h3 className="text-xl font-semibold text-white">{img.title}</h3>
                <p className="text-gray-400 text-sm">{img.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
