import { useState } from 'react';
import { 
  Code, 
  Layout, 
  Server, 
  Cloud, 
  Database, 
  Sparkles, 
  Check, 
  Cpu, 
  Search,
  Star
} from 'lucide-react';
import { SkillCategory } from '../types/portfolio';

interface SkillsProps {
  categories: SkillCategory[];
}

export function Skills({ categories }: SkillsProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [filterQuery, setFilterQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-4 h-4 text-indigo-400" />;
      case 'Server': return <Server className="w-4 h-4 text-indigo-400" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-purple-400" />;
      case 'Database': return <Database className="w-4 h-4 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-indigo-400" />;
      default: return <Code className="w-4 h-4 text-indigo-400" />;
    }
  };

  const filteredCategories = categories
    .map(category => {
      if (selectedCategoryId !== 'all' && category.id !== selectedCategoryId) {
        return null;
      }
      const q = filterQuery.toLowerCase().trim();
      const filteredSkills = category.skills.filter(s => 
        !q || s.name.toLowerCase().includes(q)
      );
      if (filteredSkills.length === 0) return null;
      return {
        ...category,
        skills: filteredSkills
      };
    })
    .filter(Boolean) as SkillCategory[];

  const allSkillsCount = categories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-20 bg-[#121212] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-gray-500 font-medium">
            03 // Technical Capabilities & Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
            Skills & Technology Matrix
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm sm:text-base font-normal">
            Engineered with deep proficiency across modern web frameworks, distributed backend architectures, and AI systems.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategoryId('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                selectedCategoryId === 'all'
                  ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-[#181818] hover:bg-gray-800 text-gray-400 hover:text-gray-200 border border-gray-800'
              }`}
            >
              All ({allSkillsCount})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryId(cat.id)}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategoryId === cat.id
                    ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-[#181818] hover:bg-gray-800 text-gray-400 hover:text-gray-200 border border-gray-800'
                }`}
              >
                {getCategoryIcon(cat.icon)}
                <span>{cat.name.split('&')[0]}</span>
              </button>
            ))}
          </div>

          {/* Search inside skills */}
          <div className="relative w-full sm:w-60">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Filter skills..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-1.5 bg-[#181818] border border-gray-800 rounded-full text-xs sm:text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-[#181818] border border-gray-800 rounded-2xl p-6 sm:p-7 shadow-xl shadow-black/40"
            >
              {/* Category Header */}
              <div className="flex items-start gap-3.5 mb-5 pb-4 border-b border-gray-800">
                <div className="p-2.5 rounded-xl bg-[#121212] border border-gray-800">
                  {getCategoryIcon(category.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-light text-white flex items-center gap-2">
                    <span>{category.name}</span>
                    <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded-full border border-indigo-800/40">
                      {category.skills.length}
                    </span>
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5 font-normal">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills List with Level Bars */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-gray-300 font-medium flex items-center gap-1.5">
                        {skill.name}
                        {skill.popular && (
                          <span className="text-[9px] font-mono text-indigo-300 bg-indigo-950/60 border border-indigo-800/50 px-1.5 py-0.5 rounded-full flex items-center gap-0.5" title="Core Specialty">
                            <Star className="w-2.5 h-2.5 fill-indigo-400 text-indigo-400" />
                            Core
                          </span>
                        )}
                      </span>
                      <div className="flex items-center gap-2 font-mono text-xs">
                        {skill.experienceYears && (
                          <span className="text-gray-500 text-[11px]">{skill.experienceYears}</span>
                        )}
                        <span className="text-indigo-400 font-semibold">{skill.level}%</span>
                      </div>
                    </div>

                    {/* Progress Track */}
                    <div className="h-1.5 w-full bg-[#121212] rounded-full overflow-hidden border border-gray-800/80">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Quick Summary Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#181818] border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-light text-white">Looking for a specific tech stack or custom framework?</h4>
            <p className="text-xs sm:text-sm text-gray-400 font-normal">
              I adapt rapidly to custom internal tools, legacy codebases, and emerging cloud technologies.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-white hover:bg-indigo-500 text-black hover:text-white font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-colors"
          >
            Inquire About Tech Stack
          </a>
        </div>

      </div>
    </section>
  );
}
