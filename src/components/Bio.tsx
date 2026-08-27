import { useState } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Users, 
  Terminal, 
  CheckCircle, 
  Award, 
  FileText,
  Compass,
  Lightbulb,
  HeartHandshake
} from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface BioProps {
  data: PortfolioData;
}

export function Bio({ data }: BioProps) {
  const [activeTab, setActiveTab] = useState<'journey' | 'philosophy' | 'approach'>('journey');

  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Users': return <Users className="w-5 h-5 text-indigo-400" />;
      default: return <Award className="w-5 h-5 text-cyan-400" />;
    }
  };

  const tabs = [
    { id: 'journey', label: 'My Journey', icon: <Compass className="w-4 h-4" /> },
    { id: 'philosophy', label: 'Engineering Philosophy', icon: <Lightbulb className="w-4 h-4" /> },
    { id: 'approach', label: 'Working With Me', icon: <HeartHandshake className="w-4 h-4" /> },
  ];

  return (
    <section id="bio" className="py-20 bg-[#121212] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-gray-500 font-medium">
            01 // About & Core Approach
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
            Architecture, Engineering & Leadership
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm sm:text-base font-normal">
            Bridging deep technical craftsmanship and business impact through scalable system design, clean abstractions, and team mentorship.
          </p>
        </div>

        {/* Core Pillars / Highlights 4-Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {data.profile.highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-[#181818] border border-gray-800 hover:border-gray-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700/60 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform text-indigo-400">
                  {getHighlightIcon(highlight.icon)}
                </div>
                <h3 className="text-lg font-light text-white mb-2 tracking-tight">{highlight.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {highlight.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-800/60 flex items-center">
                <span className="text-[10px] uppercase tracking-wider text-indigo-400 font-bold">Pillar // 0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Narrative & Quick Facts Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Narrative Tabs */}
          <div className="lg:col-span-7 bg-[#181818] border border-gray-800 rounded-2xl p-6 sm:p-8">
            
            {/* Tab Selector */}
            <div className="flex items-center gap-2 border-b border-gray-800 pb-4 mb-6 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-sm'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              {activeTab === 'journey' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  {data.profile.fullBio.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-300 leading-relaxed text-sm sm:text-base font-normal">
                      {paragraph}
                    </p>
                  ))}
                  <div className="pt-3 flex flex-wrap items-center gap-4 text-xs font-mono text-indigo-400">
                    <span className="flex items-center gap-1.5 bg-[#121212] px-3 py-1.5 rounded-full border border-gray-800">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      8+ Years in Production
                    </span>
                    <span className="flex items-center gap-1.5 bg-[#121212] px-3 py-1.5 rounded-full border border-gray-800">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      Multi-Cloud Fluent
                    </span>
                  </div>
                </div>
              )}

              {activeTab === 'philosophy' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="p-4 rounded-xl bg-[#121212] border border-gray-800">
                    <h4 className="text-sm font-medium text-white mb-1">1. Simplicity over cleverness</h4>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Code is read 10x more often than it is written. I prioritize maintainable architectures with clear boundaries over dense, overly complex abstractions.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#121212] border border-gray-800">
                    <h4 className="text-sm font-medium text-white mb-1">2. Measure first, optimize second</h4>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Performance bottlenecks are rarely where you expect. Comprehensive telemetry, APM tracing, and rigorous benchmarks drive every optimization decision.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#121212] border border-gray-800">
                    <h4 className="text-sm font-medium text-white mb-1">3. Automated resilience</h4>
                    <p className="text-xs sm:text-sm text-gray-400">
                      Systems fail. Good engineering builds self-healing systems through circuit breakers, retry queues, graceful degradation, and comprehensive integration testing.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'approach' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <p className="text-gray-300">
                    I believe great software is the product of collaborative teams with high psychological safety and rigorous engineering standards.
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      <span><strong>Async-first communication:</strong> Clear documentation, detailed RFCs, and clean PR descriptions keep distributed teams aligned.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      <span><strong>Continuous Mentorship:</strong> Actively coaching teammates through empathetic code reviews and technical deep-dives.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      <span><strong>Pragmatic Execution:</strong> Delivering incremental, value-producing milestones rather than endlessly delayed massive releases.</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Quick Facts & Credentials Card */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="bg-[#181818] border border-gray-800 rounded-2xl p-6 sm:p-7">
              <h3 className="text-base font-light text-white mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-indigo-400" />
                <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">Quick Facts // Overview</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">Location</span>
                  <span className="text-gray-200 font-medium">{data.profile.location}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">Core Stack</span>
                  <span className="text-indigo-400 font-medium">React, Go, TypeScript, AWS</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">Availability</span>
                  <span className="text-emerald-400 font-medium">Immediate / Open</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400">Education</span>
                  <span className="text-gray-200 font-medium">B.S. Computer Science, UC Berkeley</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-400">Interests</span>
                  <span className="text-gray-200 font-medium">Distributed Systems, Generative AI, Cloud</span>
                </div>
              </div>

              {/* Resume download box */}
              <div className="mt-6 p-4 rounded-xl bg-[#121212] border border-gray-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-white">Full Curriculum Vitae</div>
                  <div className="text-[11px] text-gray-500 font-mono">PDF • Portfolio Edition</div>
                </div>
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-full bg-white hover:bg-indigo-500 text-black hover:text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Request CV</span>
                </a>
              </div>

            </div>

            {/* Testimonial / Quote Box */}
            <div className="bg-[#181818] border border-gray-800 rounded-2xl p-6 relative overflow-hidden">
              <div className="text-[10px] uppercase tracking-[0.2em] text-indigo-400 mb-2 font-medium">
                Engineering Mantra
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light italic">
                "Make it work, make it right, make it fast — in that exact order."
              </p>
              <div className="mt-3 text-[11px] text-gray-500 font-mono">
                — Kent Beck
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
