import { useState, useEffect } from 'react';
import { Menu, X, Download, Edit3, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface NavbarProps {
  data: PortfolioData;
  onOpenCustomizer: () => void;
}

export function Navbar({ data, onOpenCustomizer }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['bio', 'projects', 'skills', 'experience', 'publications', 'testimonials', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#bio' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Papers', href: '#publications' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  const githubLink = data.socials.find(s => s.platform === 'github')?.url;
  const linkedinLink = data.socials.find(s => s.platform === 'linkedin')?.url;

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121212]/90 backdrop-blur-md border-b border-gray-800 shadow-xl shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none"
          id="nav-brand-logo"
        >
          <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            {data.profile.name.split(' ').map(n => n[0]).join('') || data.profile.name.charAt(0)}
          </div>
          <div className="flex flex-col">
            <span className="text-base font-light tracking-tight text-white group-hover:text-indigo-400 transition-colors leading-tight">
              {data.profile.name}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-medium flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {data.profile.isAvailableForWork ? 'Available' : 'Portfolio'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#181818] p-1.5 rounded-full border border-gray-800 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  isActive
                    ? 'bg-indigo-500/20 text-indigo-300 shadow-sm'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons & Social shortcuts */}
        <div className="hidden sm:flex items-center gap-3">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-indigo-400 hover:bg-gray-800/70 rounded-full transition-colors"
              title="GitHub Profile"
              id="nav-github-link"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {linkedinLink && (
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-indigo-400 hover:bg-gray-800/70 rounded-full transition-colors"
              title="LinkedIn Profile"
              id="nav-linkedin-link"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}

          {/* Customize Profile Button */}
          <button
            onClick={onOpenCustomizer}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-300 bg-indigo-950/40 hover:bg-indigo-900/50 border border-indigo-700/40 rounded-full transition-all shadow-sm cursor-pointer"
            id="nav-customize-profile-btn"
            title="Edit portfolio content & personal details"
          >
            <Edit3 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Customize</span>
          </button>

          {/* Direct CTA */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-5 py-2 text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-indigo-500 hover:text-white rounded-full transition-all shadow-sm active:scale-95"
            id="nav-contact-cta"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Let's Talk</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenCustomizer}
            className="p-2 text-xs text-indigo-300 bg-indigo-950/50 border border-indigo-800/50 rounded-full flex items-center gap-1"
            title="Edit Details"
          >
            <Edit3 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#181818]/98 border-b border-gray-800 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-indigo-400 font-medium text-xs uppercase tracking-wider transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomizer();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-indigo-300 bg-indigo-950/50 border border-indigo-800/60 rounded-full flex items-center justify-center gap-2"
            >
              <Edit3 className="w-4 h-4" />
              Customize Portfolio Details
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 text-center text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-indigo-500 hover:text-white rounded-full transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
