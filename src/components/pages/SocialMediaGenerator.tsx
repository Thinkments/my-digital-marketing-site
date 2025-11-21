import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SocialPost {
  platform: string;
  content: string;
  hashtags: string[];
  characterCount: number;
}

interface GeneratedPosts {
  facebook: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  hashtags: string[];
}

const SocialMediaGenerator = () => {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('professional');
  const [includeHashtags, setIncludeHashtags] = useState(true);
  const [includeEmojis, setIncludeEmojis] = useState(true);
  const [loading, setLoading] = useState(false);
  const [generatedPosts, setGeneratedPosts] = useState<GeneratedPosts | null>(null);
  const [error, setError] = useState('');

  const platforms = [
    { id: 'facebook', name: 'Facebook', icon: '📘', color: 'bg-blue-600', limit: 63206 },
    { id: 'instagram', name: 'Instagram', icon: '📷', color: 'bg-pink-600', limit: 2200 },
    { id: 'twitter', name: 'Twitter/X', icon: '🐦', color: 'bg-sky-500', limit: 280 },
    { id: 'linkedin', name: 'LinkedIn', icon: '💼', color: 'bg-blue-700', limit: 3000 },
  ];

  const handleGenerate = async () => {
    if (!topic.trim()) {
      setError('Please enter a topic');
      return;
    }

    setLoading(true);
    setError('');
    setGeneratedPosts(null);

    try {
      const response = await fetch('/.netlify/functions/generate-social-posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic,
          tone,
          includeHashtags,
          includeEmojis,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate posts');
      }

      const data = await response.json();
      setGeneratedPosts(data.posts);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, platform: string) => {
    navigator.clipboard.writeText(text);
    alert(`${platform} post copied to clipboard!`);
  };

  const getCharacterCount = (text: string) => {
    return text.length;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">📱 Social Media Post Generator</h1>
              <p className="text-gray-600 mt-1">Create engaging posts for all major platforms</p>
            </div>
            <a
              href="/admin"
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
            >
              ← Back to Dashboard
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl shadow-sm p-8 border border-gray-200"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Post Settings</h2>

              <div className="space-y-6">
                {/* Topic */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Topic or Message *
                  </label>
                  <textarea
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g., Announcing our new SEO services for local businesses in Decatur"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Tone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tone
                  </label>
                  <select
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="professional">Professional</option>
                    <option value="casual">Casual & Friendly</option>
                    <option value="excited">Excited & Enthusiastic</option>
                    <option value="informative">Informative</option>
                    <option value="promotional">Promotional</option>
                  </select>
                </div>

                {/* Options */}
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={includeHashtags}
                      onChange={(e) => setIncludeHashtags(e.target.checked)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-700 font-medium">Include relevant hashtags</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={includeEmojis}
                      onChange={(e) => setIncludeEmojis(e.target.checked)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-700 font-medium">Include emojis</span>
                  </label>
                </div>

                {/* Generate Button */}
                <motion.button
                  onClick={handleGenerate}
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-lg font-semibold text-white text-lg ${
                    loading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Generating Posts...
                    </span>
                  ) : (
                    '✨ Generate Social Posts'
                  )}
                </motion.button>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 font-semibold">Error:</p>
                    <p className="text-red-500 text-sm mt-1">{error}</p>
                  </div>
                )}
              </div>

              {/* Platform Info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-semibold text-gray-700 mb-2">Character Limits:</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                  <div>📘 Facebook: 63,206</div>
                  <div>📷 Instagram: 2,200</div>
                  <div>🐦 Twitter/X: 280</div>
                  <div>💼 LinkedIn: 3,000</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Results Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              {!generatedPosts && !loading && (
                <div className="bg-white rounded-xl shadow-sm p-12 border border-gray-200 text-center">
                  <div className="text-6xl mb-4">📱</div>
                  <p className="text-gray-400 text-lg">Your generated posts will appear here</p>
                </div>
              )}

              {loading && (
                <div className="bg-white rounded-xl shadow-sm p-12 border border-gray-200 text-center">
                  <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600 mb-4"></div>
                  <p className="text-gray-600">Generating posts for all platforms...</p>
                  <p className="text-sm text-gray-500 mt-2">This takes about 10-15 seconds</p>
                </div>
              )}

              {generatedPosts && (
                <>
                  {platforms.map((platform, index) => {
                    const postContent = generatedPosts[platform.id as keyof GeneratedPosts] as string;
                    const charCount = postContent ? getCharacterCount(postContent) : 0;
                    const isOverLimit = charCount > platform.limit;

                    return (
                      <motion.div
                        key={platform.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                      >
                        {/* Platform Header */}
                        <div className={`${platform.color} px-6 py-4 flex items-center justify-between`}>
                          <div className="flex items-center">
                            <span className="text-3xl mr-3">{platform.icon}</span>
                            <div>
                              <h3 className="text-white font-bold text-lg">{platform.name}</h3>
                              <p className={`text-sm ${isOverLimit ? 'text-red-200 font-bold' : 'text-white/80'}`}>
                                {charCount} / {platform.limit} characters
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => copyToClipboard(postContent, platform.name)}
                            className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg font-semibold transition-colors"
                          >
                            📋 Copy
                          </button>
                        </div>

                        {/* Post Content */}
                        <div className="p-6">
                          <div className="bg-gray-50 rounded-lg p-4 min-h-[120px] whitespace-pre-wrap font-medium text-gray-800">
                            {postContent}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* Common Hashtags */}
                  {generatedPosts.hashtags && generatedPosts.hashtags.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl shadow-sm p-6 border border-purple-200"
                    >
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Suggested Hashtags</h3>
                      <div className="flex flex-wrap gap-2">
                        {generatedPosts.hashtags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm font-semibold border border-blue-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaGenerator;
