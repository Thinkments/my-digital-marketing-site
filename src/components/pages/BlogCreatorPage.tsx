import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface BlogFormData {
  topic: string;
  keywords: string;
  tone: string;
  audience: string;
  wordCount: number;
}

const BlogCreatorPage = () => {
  const [formData, setFormData] = useState<BlogFormData>({
    topic: '',
    keywords: '',
    tone: 'professional',
    audience: 'business owners',
    wordCount: 1500,
  });

  const [loading, setLoading] = useState(false);
  const [generatedBlog, setGeneratedBlog] = useState<any>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setGeneratedBlog(null);

    try {
      const response = await fetch('/.netlify/functions/generate-blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to generate blog post');
      }

      const data = await response.json();
      setGeneratedBlog(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyToClipboard = () => {
    if (generatedBlog) {
      navigator.clipboard.writeText(generatedBlog.content);
      alert('Blog content copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🤖 AI Blog Creator
          </h1>
          <p className="text-xl text-gray-600">
            Generate professional blog posts in seconds using Claude AI
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Blog Settings
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Topic */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Blog Topic *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    placeholder="e.g., Benefits of Local SEO for Small Businesses"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Keywords */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Target Keywords
                  </label>
                  <input
                    type="text"
                    value={formData.keywords}
                    onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                    placeholder="e.g., local SEO, Decatur Texas, small business marketing"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Tone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tone
                  </label>
                  <select
                    value={formData.tone}
                    onChange={(e) => setFormData({ ...formData, tone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="professional">Professional</option>
                    <option value="casual">Casual & Friendly</option>
                    <option value="technical">Technical</option>
                    <option value="conversational">Conversational</option>
                  </select>
                </div>

                {/* Audience */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Target Audience
                  </label>
                  <input
                    type="text"
                    value={formData.audience}
                    onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                    placeholder="e.g., small business owners in Texas"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Word Count */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Target Word Count: {formData.wordCount}
                  </label>
                  <input
                    type="range"
                    min="500"
                    max="3000"
                    step="100"
                    value={formData.wordCount}
                    onChange={(e) => setFormData({ ...formData, wordCount: parseInt(e.target.value) })}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>500</span>
                    <span>1500</span>
                    <span>3000</span>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-lg font-semibold text-white text-lg ${
                    loading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700'
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
                      Generating Blog Post...
                    </span>
                  ) : (
                    '✨ Generate Blog Post'
                  )}
                </motion.button>

                {error && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 font-semibold">Error:</p>
                    <p className="text-red-500 text-sm mt-1">{error}</p>
                  </div>
                )}
              </form>

              {/* Cost Estimate */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>💡 Cost:</strong> ~$0.03-0.05 per blog post
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  Using Claude Sonnet 4 API
                </p>
              </div>
            </div>
          </motion.div>

          {/* Preview Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8 sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Preview</h2>
                {generatedBlog && (
                  <button
                    onClick={handleCopyToClipboard}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold"
                  >
                    📋 Copy HTML
                  </button>
                )}
              </div>

              {!generatedBlog && !loading && (
                <div className="text-center py-20 text-gray-400">
                  <svg
                    className="mx-auto h-16 w-16 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <p className="text-lg">Your generated blog will appear here</p>
                </div>
              )}

              {loading && (
                <div className="text-center py-20">
                  <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600 mb-4"></div>
                  <p className="text-gray-600">Generating your blog post...</p>
                  <p className="text-sm text-gray-500 mt-2">This takes about 10-15 seconds</p>
                </div>
              )}

              {generatedBlog && (
                <div>
                  <div className="mb-4 p-4 bg-green-50 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Word Count</p>
                        <p className="font-semibold text-gray-900">{generatedBlog.wordCount}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Generated At</p>
                        <p className="font-semibold text-gray-900">
                          {new Date(generatedBlog.generatedAt).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="max-h-[600px] overflow-y-auto border border-gray-200 rounded-lg p-6">
                    <div
                      className="prose prose-blue max-w-none"
                      dangerouslySetInnerHTML={{ __html: generatedBlog.content }}
                    />
                  </div>

                  <div className="mt-6 space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Meta Description:</p>
                      <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                        {generatedBlog.metaDescription}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogCreatorPage;
