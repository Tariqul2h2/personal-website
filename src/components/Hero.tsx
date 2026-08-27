import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  MapPin, 
  Briefcase, 
  Github, 
  Linkedin, 
  Twitter, 
  ExternalLink,
  Code2, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface HeroProps {
  data: PortfolioData;
  onOpenCustomizer: () => void;
}

export function Hero({ data, onOpenCustomizer }: HeroProps) {
  const [greeting, setGreeting] = useState('Hello, I am');
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting('Good morning, I am');
    else if (hour >= 12 && hour < 18) setGreeting('Good afternoon, I am');
    else setGreeting('Good evening, I am');
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.profile.email);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2500);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github': return <Github className="w-5 h-5" />;
      case 'linkedin': return <Linkedin className="w-5 h-5" />;
      case 'twitter': return <Twitter className="w-5 h-5" />;
      default: return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#121212]"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-900/20 via-purple-900/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content (Left Column) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181818] border border-gray-800 text-xs uppercase tracking-wider text-gray-300 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{data.profile.status}</span>
            </div>

            {/* Headline */}
            <div className="space-y-2.5">
              <p className="text-xs uppercase tracking-widest text-indigo-400 font-medium">
                {greeting}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
                {data.profile.name}
              </h1>
              <h2 className="text-xl sm:text-2xl font-normal text-gray-300">
                {data.profile.roleTitle}
              </h2>
            </div>

            {/* Tagline / Pitch */}
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed font-normal">
              {data.profile.tagline}
            </p>

            {/* Metadata Badges (Location & Availability) */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-300">
              <div className="flex items-center gap-1.5 bg-[#181818] px-4 py-1.5 rounded-full border border-gray-800">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>{data.profile.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#181818] px-4 py-1.5 rounded-full border border-gray-800">
                <Briefcase className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>{data.profile.yearsExperience}+ Years Experience</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-indigo-500 text-black hover:text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-black/40 active:scale-98"
                id="hero-explore-projects-btn"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#181818] hover:bg-gray-800 text-gray-200 border border-gray-800 font-semibold text-xs uppercase tracking-wider transition-all active:scale-98"
                id="hero-contact-btn"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-full bg-[#181818] hover:bg-gray-800 text-gray-400 hover:text-gray-200 border border-gray-800 text-xs font-mono transition-all cursor-pointer"
                title="Copy Email Address"
                id="hero-copy-email-btn"
              >
                {copySuccess ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <span>{data.profile.email}</span>
                )}
              </button>
            </div>

            {/* Social Profile Links */}
            <div className="pt-4 flex items-center gap-4">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Profiles:</span>
              <div className="flex items-center gap-3">
                {data.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-400 text-xs uppercase tracking-widest font-semibold border-b border-gray-700 pb-0.5 transition-colors"
                    title={`${social.label} (${social.username})`}
                    id={`hero-social-${social.platform}`}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (Visual Card & Quick Stats) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              
              {/* Profile Card Container */}
              <div className="relative bg-[#181818] rounded-2xl p-7 border border-gray-800 shadow-2xl shadow-black/80 overflow-hidden">
                
                {/* Decorative top pattern */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600" />

                {/* Profile Image & Avatar */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={data.profile.avatarUrl}
                      alt={data.profile.name}
                      referrerPolicy="no-referrer"
                      className="w-20 h-20 rounded-full object-cover border-2 border-gray-700 shadow-md"
                    />
                    <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-indigo-500 border-2 border-[#181818] flex items-center justify-center text-[9px] text-white font-bold" title="Active">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-white tracking-tight">{data.profile.name}</h3>
                    <p className="text-xs uppercase tracking-widest text-indigo-400 font-medium mt-0.5">{data.profile.roleTitle}</p>
                    <p className="text-xs text-gray-400 mt-1">{data.profile.location}</p>
                  </div>
                </div>

                {/* Short Bio snippet */}
                <p className="text-xs sm:text-sm text-gray-300 bg-[#121212] p-4 rounded-xl border border-gray-800 mb-6 leading-relaxed">
                  "{data.profile.shortBio}"
                </p>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-3 gap-3 text-center border-t border-gray-800 pt-6">
                  <div className="p-3 rounded-xl bg-[#121212] border border-gray-800">
                    <div className="text-xl font-bold text-indigo-400 font-mono">{data.profile.yearsExperience}+</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mt-1">Years</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#121212] border border-gray-800">
                    <div className="text-xl font-bold text-indigo-400 font-mono">{data.profile.completedProjects}+</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mt-1">Projects</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#121212] border border-gray-800">
                    <div className="text-xl font-bold text-indigo-400 font-mono">{data.profile.contributionsCount}</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mt-1">Commits</div>
                  </div>
                </div>

                {/* Card Footer with Quick Customizer Action */}
                <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1.5 uppercase tracking-wider text-[11px] text-gray-500">
                    <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                    Verified Portfolio
                  </span>
                  <button
                    onClick={onOpenCustomizer}
                    className="text-indigo-400 hover:text-indigo-300 font-semibold uppercase tracking-wider text-[11px] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Edit details
                  </button>
                </div>

              </div>

              {/* Floating Accent Badge */}
              <div className="absolute -bottom-3 -right-3 hidden sm:flex items-center gap-2 bg-[#181818] border border-indigo-500/30 rounded-full px-4 py-1.5 shadow-xl backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-200">Production Tested</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
