import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.017 0C8.396 0 7.929.01 6.71.048 5.493.085 4.73.204 4.058.388a5.918 5.918 0 0 0-2.134 1.39 5.918 5.918 0 0 0-1.39 2.134C.204 4.73.085 5.493.048 6.71.01 7.929 0 8.396 0 12.017s.01 4.088.048 5.307c.037 1.216.156 1.98.34 2.652a5.918 5.918 0 0 0 1.39 2.134 5.918 5.918 0 0 0 2.134 1.39c.672.184 1.436.303 2.652.34 1.219.038 1.686.048 5.307.048s4.088-.01 5.307-.048c1.216-.037 1.98-.156 2.652-.34a5.918 5.918 0 0 0 2.134-1.39 5.918 5.918 0 0 0 1.39-2.134c.184-.672.303-1.436.34-2.652.038-1.219.048-1.686.048-5.307s-.01-4.088-.048-5.307c-.037-1.216-.156-1.98-.34-2.652a5.918 5.918 0 0 0-1.39-2.134A5.918 5.918 0 0 0 17.65.388C16.978.204 16.215.085 14.999.048 13.78.01 13.313 0 9.692 0h2.325zM12.017 5.838a6.18 6.18 0 1 0 0 12.36 6.18 6.18 0 0 0 0-12.36zM12.017 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.408-10.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'X (Twitter)',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 md:py-16 bg-slate-900/80 border-t border-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main footer content */}
          <div className="text-center space-y-8">
            {/* Logo */}
            
            {/* Social links */}
            <div className="flex justify-center space-x-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-slate-400 hover:text-yellow-400 transition-colors duration-300 group"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>

            {/* Newsletter signup */}
            <div className="max-w-md mx-auto">
              <p className="text-slate-300 text-sm mb-4">
                Stay updated on new releases and exhibitions
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-md text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                />
                <button className="px-6 py-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-medium rounded-md transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-sm text-slate-400">
              <p>
                © {currentYear} ChronosArt. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;