import { useState, useEffect } from 'react';
import { defaultPortfolioData } from './data/defaultPortfolio';
import { PortfolioData, Testimonial, BlogPost } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Bio } from './components/Bio';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { PublicationsAwards } from './components/PublicationsAwards';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { EditProfileModal } from './components/EditProfileModal';

const STORAGE_KEY = 'portfolio_custom_data_v2';

export default function App() {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure new sections exist even if loaded from older localStorage state
        return {
          ...defaultPortfolioData,
          ...parsed,
          profile: {
            ...defaultPortfolioData.profile,
            ...(parsed.profile || {})
          },
          testimonials: parsed.testimonials && parsed.testimonials.length > 0
            ? parsed.testimonials
            : defaultPortfolioData.testimonials,
          blogPosts: parsed.blogPosts && parsed.blogPosts.length > 0
            ? parsed.blogPosts
            : defaultPortfolioData.blogPosts,
          publications: parsed.publications || defaultPortfolioData.publications,
          awards: parsed.awards || defaultPortfolioData.awards,
        };
      }
    } catch (e) {
      console.warn('Could not load cached portfolio data', e);
    }
    return defaultPortfolioData;
  });

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  const handleSaveData = (updated: PortfolioData) => {
    setData(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Could not save portfolio to localStorage', e);
    }
  };

  const handleAddTestimonial = (newTestimonial: Testimonial) => {
    const updated: PortfolioData = {
      ...data,
      testimonials: [newTestimonial, ...data.testimonials]
    };
    handleSaveData(updated);
  };

  const handleAddBlogPost = (newPost: BlogPost) => {
    const updated: PortfolioData = {
      ...data,
      blogPosts: [newPost, ...data.blogPosts]
    };
    handleSaveData(updated);
  };

  const handleResetData = () => {
    setData(defaultPortfolioData);
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem('portfolio_custom_data_v1');
    } catch (e) {
      console.error('Could not reset localStorage', e);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-gray-200 selection:bg-indigo-500/30 selection:text-indigo-200 flex flex-col font-sans">
      {/* Top Navbar */}
      <Navbar
        data={data}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          data={data}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* Biography & Story Section */}
        <Bio data={data} />

        {/* Projects Showcase */}
        <Projects projects={data.projects} />

        {/* Skills & Technologies Matrix */}
        <Skills categories={data.skills} />

        {/* Experience & Education Timeline */}
        <Experience
          experiences={data.experiences}
          education={data.education}
          certifications={data.certifications}
        />

        {/* Research Publications & Academic Distinctions */}
        <PublicationsAwards
          publications={data.publications}
          awards={data.awards}
        />

        {/* Peer Recommendations & Testimonials */}
        <Testimonials
          testimonials={data.testimonials}
          onAddTestimonial={handleAddTestimonial}
        />

        {/* Engineering Blog & Articles */}
        <Blog
          posts={data.blogPosts}
          onAddPost={handleAddBlogPost}
        />

        {/* Functional Contact Form & Direct Connections */}
        <Contact data={data} />
      </main>

      {/* Footer */}
      <Footer data={data} />

      {/* Live Customizer Modal */}
      <EditProfileModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        data={data}
        onSave={handleSaveData}
        onReset={handleResetData}
      />
    </div>
  );
}
