import { ArrowUp, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface FooterProps {
  data: PortfolioData;
}

export function Footer({ data }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github': return <Github className="w-4 h-4" />;
      case 'linkedin': return <Linkedin className="w-4 h-4" />;
      case 'twitter': return <Twitter className="w-4 h-4" />;
      default: return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <footer className="bg-[#121212] border-t border-gray-800 py-12 text-gray-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-800">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-sm">
              {data.profile.name.charAt(0)}
            </div>
            <div>
              <div className="font-medium text-white text-sm">{data.profile.name}</div>
              <div className="text-[11px] text-gray-500 font-mono">{data.profile.roleTitle}</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-gray-400 font-medium">
            <a href="#bio" className="hover:text-indigo-400 transition-colors uppercase tracking-wider">About</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors uppercase tracking-wider">Projects</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors uppercase tracking-wider">Skills</a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors uppercase tracking-wider">Experience</a>
            <a href="#publications" className="hover:text-indigo-400 transition-colors uppercase tracking-wider">Papers</a>
            <a href="#testimonials" className="hover:text-indigo-400 transition-colors uppercase tracking-wider">Testimonials</a>
            <a href="#blog" className="hover:text-indigo-400 transition-colors uppercase tracking-wider">Blog</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors uppercase tracking-wider">Contact</a>
          </div>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              {data.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-[#181818] hover:bg-gray-800 text-gray-400 hover:text-indigo-400 border border-gray-800 transition-colors"
                  title={social.label}
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#181818] hover:bg-indigo-500/20 hover:text-indigo-400 text-gray-400 border border-gray-800 transition-colors cursor-pointer"
              title="Scroll to top"
              id="footer-back-to-top-btn"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <p>© {new Date().getFullYear()} {data.profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with modern TypeScript, React 19 & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
