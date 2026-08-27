import { useState, FormEvent } from 'react';
import { BlogPost } from '../types/portfolio';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  Tag, 
  Search, 
  Plus, 
  ArrowRight, 
  X, 
  CheckCircle, 
  Share2, 
  Sparkles,
  User
} from 'lucide-react';

interface BlogProps {
  posts: BlogPost[];
  onAddPost: (post: BlogPost) => void;
}

export function Blog({ posts, onAddPost }: BlogProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Form states for creating a new post
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('DevOps');
  const [tagsInput, setTagsInput] = useState('Kubernetes, Cloud, Architecture');
  const [readTime, setReadTime] = useState('5 min read');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000');
  const [submitted, setSubmitted] = useState(false);

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category)))];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleCreatePost = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !excerpt.trim() || !content.trim()) return;

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const newPost: BlogPost = {
      id: `blog-${Date.now()}`,
      title: title.trim(),
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }),
      excerpt: excerpt.trim(),
      content: content.trim(),
      coverImage: coverImage.trim() || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
      author: 'Md. Tariqulhasan Fazle Rabbi',
      readTime: readTime.trim() || '4 min read',
      category: category.trim() || 'DevOps',
      tags: tags.length > 0 ? tags : ['Cloud', 'DevOps']
    };

    onAddPost(newPost);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsWriteModalOpen(false);
      setTitle('');
      setExcerpt('');
      setContent('');
    }, 1200);
  };

  return (
    <section id="blog" className="py-20 bg-[#121212] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-[0.25em] text-gray-500 font-medium">
              06 // Technical Deep-Dives & Articles
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
              Engineering Blog & Case Studies
            </h2>
            <p className="text-gray-400 max-w-2xl text-sm sm:text-base font-normal">
              Practical guides on CI/CD pipelines, Kubernetes operations, full-stack observability, and distributed cloud architectures.
            </p>
          </div>

          <button
            onClick={() => setIsWriteModalOpen(true)}
            className="self-start md:self-auto px-5 py-2.5 rounded-full bg-[#181818] hover:bg-gray-800 text-gray-200 hover:text-white border border-gray-800 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all active:scale-95 cursor-pointer shadow-md"
            id="write-blog-button"
          >
            <Plus className="w-4 h-4 text-indigo-400" />
            <span>Write New Article</span>
          </button>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-[#181818] hover:bg-gray-800 text-gray-400 hover:text-gray-200 border border-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-1.5 bg-[#181818] border border-gray-800 rounded-full text-xs sm:text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-[#181818] border border-gray-800 rounded-3xl p-8">
            <BookOpen className="w-10 h-10 text-gray-600 mx-auto mb-3" />
            <h3 className="text-base font-light text-white">No Articles Found</h3>
            <p className="text-xs text-gray-400 mt-1">Try refining your search query or selected category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-[#181818] border border-gray-800 hover:border-gray-700 rounded-3xl overflow-hidden shadow-xl shadow-black/40 flex flex-col justify-between transition-all group cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div>
                  {/* Article Thumbnail */}
                  {post.coverImage && (
                    <div className="relative h-48 w-full overflow-hidden bg-[#121212]">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent opacity-80" />
                      <span className="absolute bottom-3 left-4 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-indigo-500 text-white shadow-md">
                        {post.category}
                      </span>
                    </div>
                  )}

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Meta info */}
                    <div className="flex items-center gap-3 text-xs text-gray-500 font-mono mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-indigo-400" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-medium text-white group-hover:text-indigo-400 transition-colors line-clamp-2 mb-3">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-gray-400 bg-[#121212] border border-gray-800"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer read link */}
                <div className="px-6 pb-6 pt-2 border-t border-gray-800/80 flex items-center justify-between text-xs font-semibold text-indigo-400 uppercase tracking-wider group-hover:text-indigo-300">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Read Article Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/85 backdrop-blur-md" 
              onClick={() => setSelectedPost(null)}
            />

            <div className="relative bg-[#181818] border border-gray-800 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
              
              {/* Header Image */}
              {selectedPost.coverImage && (
                <div className="relative h-56 sm:h-72 w-full overflow-hidden rounded-t-3xl bg-[#121212]">
                  <img
                    src={selectedPost.coverImage}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/40 to-transparent" />
                  
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-[#121212]/80 hover:bg-gray-800 text-gray-400 hover:text-white border border-gray-700 backdrop-blur-sm transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-4 left-6">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500 text-white shadow-md">
                      {selectedPost.category}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-8 space-y-6">
                {!selectedPost.coverImage && (
                  <div className="flex justify-end">
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                )}

                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 border-b border-gray-800 pb-4 font-mono">
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-indigo-400" />
                    <span className="text-gray-200">{selectedPost.author}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span>{selectedPost.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-indigo-400" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight leading-snug">
                  {selectedPost.title}
                </h2>

                {/* Excerpt Lead */}
                <p className="text-base text-indigo-300/90 font-normal leading-relaxed border-l-2 border-indigo-500 pl-4 py-1 italic">
                  {selectedPost.excerpt}
                </p>

                {/* Content Body */}
                <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed font-light whitespace-pre-line">
                  {selectedPost.content}
                </div>

                {/* Tags */}
                <div className="pt-6 border-t border-gray-800 space-y-2">
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">
                    Article Topics & Tags
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-[#121212] text-gray-300 border border-gray-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    Written by <strong className="text-gray-300 font-medium">{selectedPost.author}</strong>
                  </div>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="px-5 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Close Article
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Create / Write Article Modal */}
        {isWriteModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/85 backdrop-blur-md" 
              onClick={() => setIsWriteModalOpen(false)}
            />

            <div className="relative bg-[#181818] border border-gray-800 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 z-10 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-2xl bg-[#121212] border border-gray-800 text-indigo-400">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-light text-white">Publish New Article</h3>
                    <p className="text-xs text-gray-400">Add a new technical post or case study to your portfolio</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsWriteModalOpen(false)}
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
                  <h4 className="text-base font-medium text-white">Article Published Successfully!</h4>
                  <p className="text-xs text-gray-400">Your new post is now live in the blog section.</p>
                </div>
              ) : (
                <form onSubmit={handleCreatePost} className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">
                      Article Title <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Managing Kubernetes Microservices with ArgoCD and GitOps"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">
                        Category
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. DevOps, Cloud, K8s"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">
                        Estimated Read Time
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 6 min read"
                        value={readTime}
                        onChange={(e) => setReadTime(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">
                        Tags (comma-separated)
                      </label>
                      <input
                        type="text"
                        placeholder="Docker, CI/CD, AWS"
                        value={tagsInput}
                        onChange={(e) => setTagsInput(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">
                      Cover Image URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://images.unsplash.com/photo-..."
                      value={coverImage}
                      onChange={(e) => setCoverImage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">
                      Article Excerpt / Summary <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={2}
                      placeholder="A short 1-2 sentence hook summarizing the article..."
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">
                      Full Article Content (Markdown / Text) <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={7}
                      placeholder="Write your article paragraphs, key takeaways, architectural diagrams explanation, or code patterns..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500 font-mono text-xs resize-y"
                    />
                  </div>

                  <div className="pt-3 flex items-center justify-end gap-3 border-t border-gray-800">
                    <button
                      type="button"
                      onClick={() => setIsWriteModalOpen(false)}
                      className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-gray-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-white hover:bg-indigo-500 text-black hover:text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                    >
                      Publish Article
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
