import React, { useState, useEffect } from 'react';
import blogData from '../data/blogs.json';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const BlogList: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [blogs] = useState<BlogPost[]>(blogData);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('blog-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleBlogClick = (blogId: string) => {
    // For now, just log - in a real app this would use React Router
    console.log(`Navigate to /blog/${blogId}`);
    // window.location.href = `/blog/${blogId}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'History': 'text-blue-400',
      'Design': 'text-green-400',
      'Theory': 'text-purple-400',
      'Philosophy': 'text-yellow-400'
    };
    return colors[category] || 'text-slate-400';
  };

  return (
    <section 
      id="blog-section" 
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-800/30 to-slate-900/50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div 
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 tracking-wide">
              Insights
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-8" />
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Exploring the intersection of art, time, and craftsmanship through thoughtful analysis and reflection.
            </p>
          </div>

          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {blogs.map((blog, index) => (
              <article
                key={blog.id}
                className={`group cursor-pointer transition-all duration-1000 delay-${index * 200} ${
                  isVisible 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-8'
                }`}
                onClick={() => handleBlogClick(blog.id)}
              >
                <div className="space-y-4 p-6 md:p-8 rounded-lg bg-slate-800/20 border border-slate-700/30 hover:border-slate-600/50 hover:bg-slate-800/30 transition-all duration-300">
                  {/* Category and date */}
                  <div className="flex items-center justify-between text-sm">
                    <span className={`font-medium ${getCategoryColor(blog.category)}`}>
                      {blog.category}
                    </span>
                    <time className="text-slate-400">
                      {formatDate(blog.date)}
                    </time>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-light text-white group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>

                  {/* Read time */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/30">
                    <span className="text-slate-400 text-xs md:text-sm">
                      {blog.readTime}
                    </span>
                    <span className="text-yellow-400 text-sm group-hover:translate-x-1 transition-transform duration-300">
                      Read more →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View all blogs link */}
          <div 
            className={`text-center mt-12 transition-all duration-1000 delay-800 ${
              isVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-4'
            }`}
          >
            <button 
              className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group"
              onClick={() => console.log('Navigate to /blog')}
            >
              <span className="text-base md:text-lg font-light">View All Insights</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;