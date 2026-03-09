import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Brain, Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Academics', path: '/academics' },
    { name: 'Research', path: '/research' },
    { name: 'Feedbacks', path: '/feedbacks' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-sky-50/90 backdrop-blur-md border-b border-sky-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-1.5 bg-[#0f4c81] rounded-lg group-hover:bg-[#0f4c81]/80 transition-colors overflow-hidden flex items-center justify-center w-10 h-10">
              <img src="/logo.png" alt="RG.io Logo" className="w-16 h-16 object-cover scale-[1.3] mix-blend-screen" />
            </div>
            <span className="text-xl font-bold text-[#0f4c81] tracking-tight">Ron Gab <span className="text-sky-500">Tech</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-all",
                    location.pathname === link.path
                      ? "text-[#0f4c81] bg-sky-100"
                      : "text-slate-500 hover:text-[#0f4c81] hover:bg-sky-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-[#0f4c81] hover:bg-sky-50 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-sky-200"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === link.path
                    ? "text-[#0f4c81] bg-sky-100"
                    : "text-slate-500 hover:text-[#0f4c81] hover:bg-sky-50"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-sky-200 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-12 overflow-hidden rounded-lg bg-[#0f4c81] flex items-center justify-center">
              <img src="/logo.png" alt="RG.io Logo" className="w-20 h-20 object-cover scale-[1.3] mix-blend-screen" />
            </div>
            <span className="text-xl font-bold text-[#0f4c81]">Ron Gab Tech</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Pushing the boundaries of machine learning and artificial intelligence through innovation and continuous learning.
          </p>
        </div>
        <div>
          <h4 className="text-[#0f4c81] font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li><Link to="/projects" className="hover:text-[#0f4c81] transition-colors">Projects</Link></li>
            <li><Link to="/research" className="hover:text-[#0f4c81] transition-colors">Research</Link></li>
            <li><Link to="/blogs" className="hover:text-[#0f4c81] transition-colors">Blogs</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#0f4c81] font-bold mb-4">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-[#0f4c81] transition-colors"><Github className="w-6 h-6" /></a>
            <a href="#" className="text-slate-400 hover:text-[#0f4c81] transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="text-slate-400 hover:text-[#0f4c81] transition-colors"><Twitter className="w-6 h-6" /></a>
          </div>
          <p className="mt-4 text-xs text-slate-400">© 2024 Ron Gab Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export { Navbar, Footer };
