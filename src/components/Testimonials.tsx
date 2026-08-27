import { useState, FormEvent } from 'react';
import { Testimonial } from '../types/portfolio';
import { Quote, Star, Plus, User, Building, MessageSquare, CheckCircle, X, Sparkles } from 'lucide-react';

interface TestimonialsProps {
  testimonials: Testimonial[];
  onAddTestimonial: (testimonial: Testimonial) => void;
}

export function Testimonials({ testimonials, onAddTestimonial }: TestimonialsProps) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [quote, setQuote] = useState('');
  const [relationship, setRelationship] = useState('');
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !quote.trim() || !company.trim()) return;

    const newTestimonial: Testimonial = {
      id: `test-${Date.now()}`,
      name: name.trim(),
      role: role.trim() || 'Colleague / Client',
      company: company.trim(),
      quote: quote.trim(),
      rating,
      relationship: relationship.trim() || 'Professional Endorsement',
      date: new Date().getFullYear().toString()
    };

    onAddTestimonial(newTestimonial);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsAddModalOpen(false);
      setName('');
      setRole('');
      setCompany('');
      setQuote('');
      setRelationship('');
      setRating(5);
    }, 1200);
  };

  return (
    <section id="testimonials" className="py-20 bg-[#121212] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-[0.25em] text-gray-500 font-medium">
              05 // Peer Recommendations & References
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
              Endorsements & Testimonials
            </h2>
            <p className="text-gray-400 max-w-2xl text-sm sm:text-base font-normal">
              Direct feedback and recommendations from senior engineering leaders, general managers, and cross-functional collaborators.
            </p>
          </div>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="self-start md:self-auto px-5 py-2.5 rounded-full bg-[#181818] hover:bg-gray-800 text-gray-200 hover:text-white border border-gray-800 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all active:scale-95 cursor-pointer shadow-md"
            id="add-testimonial-button"
          >
            <Plus className="w-4 h-4 text-indigo-400" />
            <span>Add Testimonial</span>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#181818] border border-gray-800 hover:border-gray-700 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl shadow-black/40 transition-all group"
            >
              <div>
                {/* Rating & Top Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < t.rating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-gray-700'
                        }`}
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-indigo-500/30 group-hover:text-indigo-400/50 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-gray-800/80 flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md">
                  {t.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-medium text-white truncate group-hover:text-indigo-300 transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-xs text-indigo-400 font-normal truncate">
                    {t.role}
                  </p>
                  <p className="text-xs text-gray-500 truncate mt-0.5">
                    {t.company}
                  </p>
                  {t.relationship && (
                    <span className="inline-block mt-2 text-[10px] uppercase font-mono tracking-wider text-gray-400 bg-[#121212] px-2.5 py-0.5 rounded-full border border-gray-800">
                      {t.relationship}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Testimonial Modal */}
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/85 backdrop-blur-md" 
              onClick={() => setIsAddModalOpen(false)}
            />

            <div className="relative bg-[#181818] border border-gray-800 rounded-3xl w-full max-w-lg p-6 sm:p-8 z-10 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-2xl bg-[#121212] border border-gray-800 text-indigo-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-white">Share a Recommendation</h3>
                    <p className="text-xs text-gray-400">Leave a testimonial for Tariqulhasan Fazle Rabbi</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-medium text-white">Thank You for Your Endorsement!</h4>
                  <p className="text-xs text-gray-400">Your recommendation has been added to the portfolio.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">
                      Your Full Name <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Md. Nasir Uddin"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">
                        Your Role / Title <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Head of Cloud & DevOps"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">
                        Company / Organization <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. TechnoNext Software Ltd."
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">
                      Professional Context / Relationship
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Managed Tariqul directly / Cloud Project Collaborator"
                      value={relationship}
                      onChange={(e) => setRelationship(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">
                      Rating
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="p-1 text-amber-400 hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Star
                            className={`w-5 h-5 ${
                              star <= rating
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-gray-700'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs text-gray-400 ml-2 font-mono">
                        {rating} / 5 Stars
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">
                      Your Testimonial / Recommendation Quote <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your feedback regarding technical skills, leadership, problem-solving, or reliability..."
                      value={quote}
                      onChange={(e) => setQuote(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500 resize-y"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsAddModalOpen(false)}
                      className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-gray-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-white hover:bg-indigo-500 text-black hover:text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                    >
                      Submit Recommendation
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
