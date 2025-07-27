import React, { useState, useEffect } from 'react';

interface RoadmapItem {
  id: number;
  title: string;
  description: string;
  status: 'planning' | 'in-progress' | 'completed';
}

const Roadmap: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  const roadmapItems: RoadmapItem[] = [
    {
      id: 1,
      title: "Initial Funding & Physical Prototype",
      description: "Secure initial investment and create the first physical prototype of the Temporal Canvas Series.",
      status: 'in-progress'
    },
    {
      id: 2,
      title: "Micro Art & Watch Fairs",
      description: "Debut at select micro art fairs and boutique watch exhibitions to introduce the concept to collectors.",
      status: 'planning'
    },
    {
      id: 3,
      title: "Launch Web Store",
      description: "Establish direct-to-collector online presence with custom configurator and bespoke ordering system.",
      status: 'planning'
    },
    {
      id: 4,
      title: "NFT Tie-ins & Digital Art",
      description: "Create limited digital art pieces that accompany physical timepieces, bridging traditional and digital collecting.",
      status: 'planning'
    },
    {
      id: 5,
      title: "Illustrator Collaborations",
      description: "Partner with renowned illustrators and artists to create limited edition dial designs and case decorations.",
      status: 'planning'
    },
    {
      id: 6,
      title: "Small-Batch Handmade Production",
      description: "Establish workshop for exclusive small-batch production, maintaining artisanal quality and uniqueness.",
      status: 'planning'
    },
    {
      id: 7,
      title: "International Expansion",
      description: "Expand global reach with international shipping, authorized dealers, and regional exhibitions.",
      status: 'planning'
    }
  ];

  useEffect(() => {
    const observers = roadmapItems.map((item) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set(prev).add(item.id));
          }
        },
        { threshold: 0.3 }
      );

      const element = document.getElementById(`roadmap-item-${item.id}`);
      if (element) observer.observe(element);

      return observer;
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-yellow-400';
      default: return 'bg-slate-600';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      default: return 'Planning';
    }
  };

  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 tracking-wide">
              Roadmap
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8" />
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              A journey from concept to global presence, each step carefully crafted 
              to maintain artistic integrity while expanding our reach.
            </p>
          </div>

          {/* Roadmap items */}
          <div className="space-y-8 md:space-y-12">
            {roadmapItems.map((item, index) => (
              <div
                key={item.id}
                id={`roadmap-item-${item.id}`}
                className={`flex items-start space-x-6 md:space-x-8 transition-all duration-1000 delay-${index * 100} ${
                  visibleItems.has(item.id)
                    ? 'opacity-100 transform translate-x-0'
                    : 'opacity-0 transform translate-x-8'
                }`}
              >
                {/* Step number and line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-white font-light text-lg md:text-xl">
                    {item.id}
                  </div>
                  {index < roadmapItems.length - 1 && (
                    <div className="w-px h-16 md:h-20 bg-gradient-to-b from-slate-600 to-transparent mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-light text-white">
                      {item.title}
                    </h3>
                    <span 
                      className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(item.status)}`}
                    >
                      {getStatusText(item.status)}
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;