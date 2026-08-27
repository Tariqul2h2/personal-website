import { useState, FormEvent } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Copy, 
  Github, 
  Linkedin, 
  ExternalLink, 
  MapPin, 
  Globe, 
  Phone,
  Clock,
  Sparkles
} from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface ContactProps {
  data: PortfolioData;
}

export function Contact({ data }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'DevOps / Cloud Project',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    if (data.profile.phone) {
      navigator.clipboard.writeText(data.profile.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    // Simulate responsive submission & mailto trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      const mailtoLink = `mailto:${data.profile.email}?subject=${encodeURIComponent(`[${formData.inquiryType}] ${formData.subject || 'DevOps & Cloud Inquiry'}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}`)}`;
      
      // Open default email client
      try {
        window.location.href = mailtoLink;
      } catch (err) {
        console.log('Mail client dispatch triggered', err);
      }
    }, 600);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github': return <Github className="w-5 h-5" />;
      case 'linkedin': return <Linkedin className="w-5 h-5" />;
      default: return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#121212] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-gray-500 font-medium">
            07 // Direct Communication & Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm sm:text-base font-normal">
            Have a question about cloud architecture, CI/CD pipeline automation, Kubernetes deployment, or an engineering role? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Social Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card */}
            <div className="bg-[#181818] border border-gray-800 rounded-3xl p-6 relative overflow-hidden shadow-xl shadow-black/40">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-[#121212] border border-gray-800 text-indigo-400">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#121212] hover:bg-gray-800 text-gray-300 hover:text-white text-xs font-semibold uppercase tracking-wider border border-gray-800 transition-colors cursor-pointer"
                  title="Copy email address"
                  id="contact-copy-email-btn"
                >
                  {copiedEmail ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs text-gray-400 uppercase tracking-[0.2em] font-semibold">Primary Email</div>
              <a
                href={`mailto:${data.profile.email}`}
                className="text-base sm:text-lg font-light text-white hover:text-indigo-400 transition-colors block mt-1 break-all"
              >
                {data.profile.email}
              </a>
              <p className="text-xs text-gray-500 mt-2 font-normal">
                Direct response within 24 hours.
              </p>
            </div>

            {/* Direct Phone & Location Card */}
            {data.profile.phone && (
              <div className="bg-[#181818] border border-gray-800 rounded-3xl p-6 relative overflow-hidden shadow-xl shadow-black/40">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-[#121212] border border-gray-800 text-purple-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#121212] hover:bg-gray-800 text-gray-300 hover:text-white text-xs font-semibold uppercase tracking-wider border border-gray-800 transition-colors cursor-pointer"
                    title="Copy phone number"
                  >
                    {copiedPhone ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-purple-400" />
                        <span>Copy Phone</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-xs text-gray-400 uppercase tracking-[0.2em] font-semibold">Direct Phone / WhatsApp</div>
                <a
                  href={`tel:${data.profile.phone}`}
                  className="text-base sm:text-lg font-light text-white hover:text-purple-400 transition-colors block mt-1"
                >
                  {data.profile.phone}
                </a>
                <p className="text-xs text-gray-500 mt-2 font-normal">
                  Available for calls & WhatsApp messaging.
                </p>
              </div>
            )}

            {/* Professional Profiles Grid */}
            <div className="bg-[#181818] border border-gray-800 rounded-3xl p-6 space-y-4 shadow-xl shadow-black/40">
              <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">
                Professional Networks & Repositories
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-[#121212] hover:bg-gray-800 border border-gray-800/90 hover:border-gray-700 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-gray-400 group-hover:text-indigo-400 transition-colors">
                        {getSocialIcon(social.platform)}
                      </div>
                      <div>
                        <div className="text-xs font-medium text-white group-hover:text-indigo-300 transition-colors">
                          {social.label}
                        </div>
                        <div className="text-[11px] text-gray-500 font-mono">
                          {social.username}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-600 group-hover:text-indigo-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Location & Time Zone Note */}
            <div className="p-5 rounded-2xl bg-[#181818]/60 border border-gray-800/80 space-y-2 text-xs text-gray-400 font-normal">
              <div className="flex items-center gap-2 text-gray-300 font-medium">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>House: 27/3d North Pirerbag, Mirpur, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bangladesh Standard Time (UTC+6) • Open to Global Remote Collaboration</span>
              </div>
            </div>

          </div>

          {/* Right Column: Functional Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#181818] border border-gray-800 rounded-3xl p-6 sm:p-8 shadow-xl shadow-black/40">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-14 h-14 bg-emerald-950/80 border border-emerald-700/80 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-light text-white">Message Sent Successfully!</h3>
                <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <strong className="text-indigo-400 font-medium">{formData.name}</strong>. Your message inquiry has been recorded and an email draft has also been opened in your mail client.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        inquiryType: 'DevOps / Cloud Project',
                        subject: '',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="portfolio-contact-form">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-light text-white">Send a Message</h3>
                  <span className="text-xs text-gray-500 font-mono">* All fields required</span>
                </div>
                
                {/* Inquiry Type Chips */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-2">
                    Inquiry Topic
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'DevOps / Cloud Project',
                      'Full-Time Engineering Role',
                      'Infrastructure Consulting',
                      'Observability & Monitoring',
                      'Academic / Research'
                    ].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, inquiryType: type })}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                          formData.inquiryType === type
                            ? 'bg-indigo-500 text-white shadow-sm shadow-indigo-500/20'
                            : 'bg-[#121212] text-gray-400 hover:text-gray-200 border border-gray-800'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name and Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">
                      Your Name <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Md. Nasir Uddin"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">
                      Your Email Address <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. nasir@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="e.g. Cloud Migration / DevOps Consultation Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">
                    Message <span className="text-indigo-400">*</span>
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Please provide details regarding your requirements, infrastructure stack, timeline, or inquiries..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500 resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full bg-white hover:bg-indigo-500 text-black hover:text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-all active:scale-98 disabled:opacity-70 cursor-pointer"
                  id="submit-contact-form-button"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
