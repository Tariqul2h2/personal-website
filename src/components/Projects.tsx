import { useState, useMemo } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Search, 
  Sparkles, 
  X, 
  Layers, 
  ArrowUpRight,
  Filter
} from 'lucide-react';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'AI & ML', 'Cloud & Systems', 'Frontend & UI', 'Mobile'];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 bg-[#121212] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-gray-500 font-medium">
            02 // Featured Selection & Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
            Engineered Works & Systems
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm sm:text-base font-normal">
            A curated selection of distributed platforms, AI systems, developer tools, and high-performance applications.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-[#181818] hover:bg-gray-800 text-gray-400 hover:text-gray-200 border border-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Field */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search stack, title, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-8 py-2 bg-[#181818] border border-gray-800 rounded-full text-xs sm:text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-500/70 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-[#181818] rounded-2xl border border-gray-800">
            <Filter className="w-10 h-10 text-gray-600 mx-auto mb-3" />
            <h3 className="text-lg font-light text-gray-300">No projects match your filter</h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 mb-4">
              Try adjusting your search terms or select "All" categories.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-5 py-2 bg-white text-black hover:bg-indigo-500 hover:text-white text-xs font-bold uppercase tracking-wider rounded-full transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#181818] border border-gray-800 hover:border-gray-700 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/70 group"
              >
                {/* Thumbnail Image */}
                <div 
                  className="relative aspect-[4/3] w-full overflow-hidden bg-[#121212] cursor-pointer"
                  onClick={() => setActiveProject(project)}
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-medium bg-[#181818]/90 text-gray-300 border border-gray-700/60 backdrop-blur-sm">
                    {project.category}
                  </span>

                  {/* Featured Badge */}
                  {project.featured && (
                    <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-500 text-white flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div 
                      className="cursor-pointer" 
                      onClick={() => setActiveProject(project)}
                    >
                      <h3 className="text-xl font-medium text-white group-hover:text-indigo-400 transition-colors flex items-center justify-between">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-indigo-400 transition-colors shrink-0" />
                      </h3>
                      <p className="text-xs text-indigo-400 font-medium mt-1 mb-3 line-clamp-1">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Key Stat if present */}
                    {project.stats && project.stats[0] && (
                      <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121212] border border-gray-800 text-xs font-mono text-indigo-300">
                        <span className="text-gray-400">{project.stats[0].label}:</span>
                        <span className="font-bold">{project.stats[0].value}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs text-gray-300 bg-gray-800/80 border border-gray-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2.5 py-1 rounded-full text-xs text-gray-400 bg-[#121212] border border-gray-800">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Bottom Action Links */}
                    <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="text-[10px] uppercase tracking-wider text-indigo-400 font-bold hover:text-indigo-300 flex items-center gap-1 cursor-pointer"
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Architecture & Case Study</span>
                      </button>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-gray-400 hover:text-indigo-400 hover:bg-gray-800 rounded-full transition-colors"
                            title="GitHub Repository"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-gray-400 hover:text-indigo-400 hover:bg-gray-800 rounded-full transition-colors"
                            title="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
