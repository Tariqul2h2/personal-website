import { X, ExternalLink, Github, Sparkles, Layers, CheckCircle, Calendar, UserCheck } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-[#181818] border border-gray-800 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Image / Banner */}
        <div className="relative h-56 sm:h-72 w-full overflow-hidden rounded-t-3xl bg-[#121212]">
          <img
            src={project.thumbnail}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/40 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#121212]/80 hover:bg-gray-800 text-gray-400 hover:text-white border border-gray-700 backdrop-blur-sm transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category Badge & Featured */}
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500 text-white shadow-md">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-600 text-white flex items-center gap-1 shadow-md">
                <Sparkles className="w-3 h-3" />
                Featured Project
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Title & Tagline */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-2">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-indigo-400 font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Meta Info Row */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 border-y border-gray-800 py-3">
            {project.role && (
              <div className="flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-indigo-400" />
                <span>Role: <strong className="text-gray-200">{project.role}</strong></span>
              </div>
            )}
            {project.duration && (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>Timeline: <strong className="text-gray-200">{project.duration}</strong></span>
              </div>
            )}
          </div>

          {/* Impact Stats */}
          {project.stats && project.stats.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-3">
                Measurable Impact & Benchmarks
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.stats.map((stat, idx) => (
                  <div key={idx} className="bg-[#121212] border border-gray-800 p-3.5 rounded-xl text-center">
                    <div className="text-lg font-bold text-indigo-400 font-mono">{stat.value}</div>
                    <div className="text-xs text-gray-400 mt-0.5 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Description */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">
              Overview
            </h4>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Highlights & Engineering Accomplishments */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">
                Key Technical Highlights
              </h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture Overview */}
          {project.architectureOverview && (
            <div className="p-4 rounded-xl bg-[#121212] border border-gray-800 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>Architecture & Data Flow</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 font-mono leading-relaxed">
                {project.architectureOverview}
              </p>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs text-gray-300 bg-gray-800/80 border border-gray-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-gray-800 flex flex-wrap items-center justify-end gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-[#121212] hover:bg-gray-800 text-gray-300 hover:text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 border border-gray-800 transition-colors"
              >
                <Github className="w-4 h-4 text-indigo-400" />
                <span>Source Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-white hover:bg-indigo-500 text-black hover:text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all shadow-md active:scale-95"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
