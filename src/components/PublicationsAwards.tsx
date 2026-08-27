import { Publication, Award } from '../types/portfolio';
import { Award as AwardIcon, BookOpen, ExternalLink, Trophy, FileText, CheckCircle } from 'lucide-react';

interface PublicationsAwardsProps {
  publications?: Publication[];
  awards?: Award[];
}

export function PublicationsAwards({ publications, awards }: PublicationsAwardsProps) {
  if ((!publications || publications.length === 0) && (!awards || awards.length === 0)) {
    return null;
  }

  return (
    <section id="publications" className="py-20 bg-[#121212] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-gray-500 font-medium">
            04 // Research & Academic Distinctions
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
            Publications & Honors
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm sm:text-base font-normal">
            Peer-reviewed research contributions in deep learning and embedded IoT systems alongside university academic distinctions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Publications (7 Cols) */}
          {publications && publications.length > 0 && (
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-indigo-400" />
                <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">
                  Peer-Reviewed Research Publications
                </h3>
              </div>

              <div className="space-y-4">
                {publications.map((pub) => (
                  <div
                    key={pub.id}
                    className="bg-[#181818] border border-gray-800 hover:border-gray-700 rounded-3xl p-6 shadow-xl shadow-black/40 transition-all group"
                  >
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <span className="px-3 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                        {pub.type === 'journal' ? 'Academic Journal' : 'IEEE Conference'}
                      </span>
                      <span className="text-xs font-mono text-gray-500">{pub.year}</span>
                    </div>

                    <h4 className="text-base font-medium text-white group-hover:text-indigo-300 transition-colors mb-2">
                      {pub.title}
                    </h4>

                    <p className="text-xs text-gray-400 font-mono mb-2">
                      <strong className="text-gray-300">Authors:</strong> {pub.authors}
                    </p>

                    <p className="text-xs text-indigo-300/80 mb-3 italic">
                      {pub.venue}
                    </p>

                    {pub.details && (
                      <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                        {pub.details}
                      </p>
                    )}

                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold uppercase tracking-wider text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <span>View Publication Source</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Awards & Distinctions (5 Cols) */}
          {awards && awards.length > 0 && (
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-4 h-4 text-amber-400" />
                <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">
                  Honors & Academic Awards
                </h3>
              </div>

              <div className="space-y-4">
                {awards.map((award) => (
                  <div
                    key={award.id}
                    className="bg-[#181818] border border-gray-800 hover:border-gray-700 rounded-3xl p-6 shadow-xl shadow-black/40 transition-all flex items-start gap-4"
                  >
                    <div className="p-3 rounded-2xl bg-[#121212] border border-gray-800 text-amber-400 shrink-0">
                      <AwardIcon className="w-6 h-6" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-medium text-white">
                          {award.title}
                        </h4>
                        <span className="text-xs font-mono text-gray-500 shrink-0">
                          {award.year}
                        </span>
                      </div>

                      <p className="text-xs text-indigo-400 font-normal">
                        {award.organization}
                      </p>

                      {award.description && (
                        <p className="text-xs text-gray-400 font-light leading-relaxed pt-1">
                          {award.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
