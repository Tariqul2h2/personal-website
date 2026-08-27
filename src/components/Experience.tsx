import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { Experience as ExperienceType, Education as EducationType, Certification } from '../types/portfolio';

interface ExperienceProps {
  experiences: ExperienceType[];
  education: EducationType[];
  certifications: Certification[];
}

export function Experience({ experiences, education, certifications }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 bg-[#121212] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-gray-500 font-medium">
            04 // Career Trajectory & Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
            Experience & Education
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm sm:text-base font-normal">
            Track record of shipping impactful software, leading engineering teams, and continuous technical learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Work Experience Timeline (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            <h3 className="text-xl font-light text-white flex items-center gap-2.5 mb-6">
              <Briefcase className="w-5 h-5 text-indigo-400" />
              <span>Work History & Roles</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-gray-800 space-y-10">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative group">
                  
                  {/* Timeline bullet node */}
                  <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 ${
                    exp.current 
                      ? 'bg-indigo-500 border-[#121212] ring-4 ring-indigo-500/20' 
                      : 'bg-gray-800 border-[#121212]'
                  }`} />

                  {/* Experience Card */}
                  <div className="bg-[#181818] border border-gray-800 hover:border-gray-700 rounded-2xl p-6 transition-all group-hover:shadow-xl group-hover:shadow-black/50">
                    
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-lg font-medium text-white group-hover:text-indigo-400 transition-colors">
                          {exp.role}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-indigo-400 font-medium">
                          <span>{exp.company}</span>
                          {exp.companyUrl && (
                            <a 
                              href={exp.companyUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-indigo-400 transition-colors"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                        {exp.current && (
                          <span className="px-3 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 font-semibold text-[11px]">
                            Present Role
                          </span>
                        )}
                        <span className="px-3 py-0.5 rounded-full bg-[#121212] text-gray-400 border border-gray-800 text-[11px]">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Location & Type */}
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-mono">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-gray-500" />
                        {exp.location}
                      </span>
                      <span>•</span>
                      <span>{exp.type}</span>
                    </div>

                    {/* Descriptions */}
                    <ul className="space-y-2 mb-5 text-xs sm:text-sm text-gray-300">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-800">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-full text-xs text-gray-300 bg-[#121212] border border-gray-800 font-normal"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications (4 Cols) */}
          <div className="lg:col-span-4 space-y-10">
            
            {/* Education Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-light text-white flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-purple-400" />
                <span>Education</span>
              </h3>

              <div className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="bg-[#181818] border border-gray-800 rounded-2xl p-6 space-y-3"
                  >
                    <div className="text-xs font-mono text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full inline-block border border-indigo-800/50">
                      {edu.period}
                    </div>
                    <h4 className="text-base font-medium text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-300 font-medium">
                      {edu.institution}
                    </p>
                    <div className="text-xs text-gray-400 flex items-center gap-1 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-gray-500" />
                      {edu.location}
                    </div>
                    {edu.details && (
                      <p className="text-xs text-gray-400 leading-relaxed pt-2 border-t border-gray-800">
                        {edu.details}
                      </p>
                    )}
                    {edu.honors && (
                      <div className="text-xs text-indigo-300 font-medium flex items-center gap-1.5 pt-1">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{edu.honors}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-light text-white flex items-center gap-2.5">
                <Award className="w-5 h-5 text-indigo-400" />
                <span>Certifications</span>
              </h3>

              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="bg-[#181818] border border-gray-800 rounded-2xl p-4 flex items-start justify-between gap-3 hover:border-gray-700 transition-colors"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-white">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {cert.issuer} • <span className="font-mono text-indigo-400">{cert.date}</span>
                      </p>
                    </div>

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-gray-400 hover:text-indigo-400 transition-colors shrink-0"
                        title="Verify Credential"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
