import { useState, ChangeEvent } from 'react';
import { 
  X, 
  Save, 
  RotateCcw, 
  User, 
  Share2, 
  Download, 
  Upload, 
  Check, 
  Sparkles,
  Layers
} from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onSave: (updatedData: PortfolioData) => void;
  onReset: () => void;
}

export function EditProfileModal({
  isOpen,
  onClose,
  data,
  onSave,
  onReset
}: EditProfileModalProps) {
  const [formData, setFormData] = useState<PortfolioData>(data);
  const [activeTab, setActiveTab] = useState<'profile' | 'socials' | 'data'>('profile');
  const [saveToast, setSaveToast] = useState(false);

  if (!isOpen) return null;

  const handleProfileChange = (field: string, value: any) => {
    setFormData({
      ...formData,
      profile: {
        ...formData.profile,
        [field]: value
      }
    });
  };

  const handleSocialChange = (index: number, field: string, value: string) => {
    const newSocials = [...formData.socials];
    newSocials[index] = {
      ...newSocials[index],
      [field]: value
    };
    setFormData({
      ...formData,
      socials: newSocials
    });
  };

  const handleSave = () => {
    onSave(formData);
    setSaveToast(true);
    setTimeout(() => {
      setSaveToast(false);
      onClose();
    }, 600);
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${formData.profile.name.toLowerCase().replace(/\s+/g, '_')}_portfolio.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportJSON = (e: ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          if (parsed.profile && parsed.socials) {
            setFormData(parsed);
            onSave(parsed);
          }
        } catch (err) {
          console.error("Invalid JSON format", err);
        }
      };
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md" 
        onClick={onClose} 
      />

      {/* Modal Container */}
      <div className="relative bg-[#181818] border border-gray-800 rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-2xl bg-[#121212] border border-gray-800 text-indigo-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-light text-white tracking-tight">Customize Portfolio</h3>
              <p className="text-xs text-gray-400 font-normal">Personalize your name, bio, titles, and social profile links.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-gray-800 bg-[#121212]/60">
          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-3 px-3 text-xs uppercase tracking-wider font-semibold border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'profile'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Profile Details</span>
          </button>

          <button
            onClick={() => setActiveTab('socials')}
            className={`pb-3 px-3 text-xs uppercase tracking-wider font-semibold border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'socials'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <Share2 className="w-4 h-4" />
            <span>Social & Links</span>
          </button>

          <button
            onClick={() => setActiveTab('data')}
            className={`pb-3 px-3 text-xs uppercase tracking-wider font-semibold border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'data'
                ? 'border-indigo-500 text-indigo-400'
                : 'border-transparent text-gray-400 hover:text-gray-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Export / Reset</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {activeTab === 'profile' && (
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">Your Full Name</label>
                  <input
                    type="text"
                    value={formData.profile.name}
                    onChange={(e) => handleProfileChange('name', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-gray-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">Role Title / Headline</label>
                  <input
                    type="text"
                    value={formData.profile.roleTitle}
                    onChange={(e) => handleProfileChange('roleTitle', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-gray-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">Hero Tagline</label>
                <input
                  type="text"
                  value={formData.profile.tagline}
                  onChange={(e) => handleProfileChange('tagline', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-gray-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">Short Biography Pitch</label>
                <textarea
                  rows={2}
                  value={formData.profile.shortBio}
                  onChange={(e) => handleProfileChange('shortBio', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-gray-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">Location</label>
                  <input
                    type="text"
                    value={formData.profile.location}
                    onChange={(e) => handleProfileChange('location', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-gray-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">Public Email</label>
                  <input
                    type="email"
                    value={formData.profile.email}
                    onChange={(e) => handleProfileChange('email', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-gray-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">Phone / WhatsApp</label>
                <input
                  type="text"
                  value={formData.profile.phone || ''}
                  onChange={(e) => handleProfileChange('phone', e.target.value)}
                  placeholder="+8801558921524"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-gray-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">Years Experience</label>
                  <input
                    type="number"
                    value={formData.profile.yearsExperience}
                    onChange={(e) => handleProfileChange('yearsExperience', parseInt(e.target.value) || 0)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-gray-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">Completed Projects</label>
                  <input
                    type="number"
                    value={formData.profile.completedProjects}
                    onChange={(e) => handleProfileChange('completedProjects', parseInt(e.target.value) || 0)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-gray-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">Status Text</label>
                  <input
                    type="text"
                    value={formData.profile.status}
                    onChange={(e) => handleProfileChange('status', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-gray-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-1.5">Avatar Image URL</label>
                <input
                  type="url"
                  value={formData.profile.avatarUrl}
                  onChange={(e) => handleProfileChange('avatarUrl', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#121212] border border-gray-800 text-gray-200 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
          )}

          {activeTab === 'socials' && (
            <div className="space-y-4">
              <p className="text-xs text-gray-400">Update URLs and handles for your professional profiles:</p>
              {formData.socials.map((social, idx) => (
                <div key={social.platform} className="p-4 rounded-2xl bg-[#121212] border border-gray-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">{social.label}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-gray-500 mb-1">Profile URL</label>
                      <input
                        type="url"
                        value={social.url}
                        onChange={(e) => handleSocialChange(idx, 'url', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-xl bg-[#181818] border border-gray-800 text-xs text-gray-200 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-gray-500 mb-1">Handle / Username</label>
                      <input
                        type="text"
                        value={social.username}
                        onChange={(e) => handleSocialChange(idx, 'username', e.target.value)}
                        className="w-full px-3 py-1.5 rounded-xl bg-[#181818] border border-gray-800 text-xs text-gray-200 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'data' && (
            <div className="space-y-4 py-2">
              <div className="p-4 rounded-2xl bg-[#121212] border border-gray-800 space-y-2">
                <h4 className="text-sm font-medium text-white">Export & Backup Portfolio Configuration</h4>
                <p className="text-xs text-gray-400">Save all your bio info, projects, and skills to a local JSON file.</p>
                <button
                  onClick={handleExportJSON}
                  className="px-4 py-2 rounded-full bg-[#181818] hover:bg-gray-800 text-gray-200 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 border border-gray-800 transition-colors"
                >
                  <Download className="w-4 h-4 text-indigo-400" />
                  <span>Download Backup JSON</span>
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-[#121212] border border-gray-800 space-y-2">
                <h4 className="text-sm font-medium text-white">Import Portfolio Configuration</h4>
                <p className="text-xs text-gray-400">Load previously exported JSON profile configurations.</p>
                <label className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#181818] hover:bg-gray-800 text-gray-200 text-xs font-semibold uppercase tracking-wider border border-gray-800 cursor-pointer transition-colors">
                  <Upload className="w-4 h-4 text-indigo-400" />
                  <span>Upload JSON File</span>
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleImportJSON}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-900/40 space-y-2">
                <h4 className="text-sm font-medium text-rose-300">Reset to Default Data</h4>
                <p className="text-xs text-gray-400">Clear custom edits and restore the original sample portfolio data.</p>
                <button
                  onClick={() => {
                    onReset();
                    onClose();
                  }}
                  className="px-4 py-2 rounded-full bg-rose-900/60 hover:bg-rose-800 text-rose-200 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 border border-rose-700/50 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset All to Defaults</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-gray-800 bg-[#121212] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-gray-200 cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-6 py-2.5 rounded-full bg-white hover:bg-indigo-500 text-black hover:text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all cursor-pointer"
          >
            {saveToast ? (
              <>
                <Check className="w-4 h-4" />
                <span>Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Apply Changes</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
