import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface AdminTool {
  title: string;
  description: string;
  icon: string;
  path: string;
  color: string;
  badge?: string;
}

const AdminDashboard = () => {
  const tools: AdminTool[] = [
    {
      title: 'AI Blog Creator',
      description: 'Generate professional blog posts in seconds using Claude AI',
      icon: '🤖',
      path: '/admin/blog-creator',
      color: 'from-blue-500 to-blue-600',
      badge: 'Popular'
    },
    {
      title: 'Photo Manager',
      description: 'Upload, manage, and organize all website images',
      icon: '📸',
      path: '/admin/photo-manager',
      color: 'from-purple-500 to-purple-600',
      badge: 'New'
    },
    {
      title: 'Social Media Generator',
      description: 'Create engaging social media posts for all platforms',
      icon: '📱',
      path: '/admin/social-media',
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Client Reports',
      description: 'Generate automated performance reports for clients',
      icon: '📊',
      path: '/admin/client-reports',
      color: 'from-green-500 to-green-600',
      badge: 'Time Saver'
    },
    {
      title: 'SEO Optimizer',
      description: 'Analyze and optimize content for search engines',
      icon: '🔍',
      path: '/admin/seo-optimizer',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'GBP Post Generator',
      description: 'Create Google Business Profile posts and updates',
      icon: '🏢',
      path: '/admin/gbp-posts',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Review Responder',
      description: 'Generate professional responses to customer reviews',
      icon: '⭐',
      path: '/admin/review-responder',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Website Auditor',
      description: 'Comprehensive website analysis and SEO audit tool',
      icon: '🔧',
      path: '/admin/website-audit',
      color: 'from-teal-500 to-teal-600'
    },
  ];

  const stats = [
    { label: 'Active Clients', value: '28', icon: '👥' },
    { label: 'Blog Posts', value: '0', icon: '📝' },
    { label: 'Images Managed', value: '0', icon: '🖼️' },
    { label: 'Reports Generated', value: '0', icon: '📈' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-gray-900"
              >
                🎯 ThinkMents Admin Dashboard
              </motion.h1>
              <p className="text-gray-600 mt-1">
                Welcome back! Manage your marketing operations from one place.
              </p>
            </div>
            <Link
              to="/"
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
            >
              ← Back to Site
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <div className="text-4xl">{stat.icon}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Admin Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative"
              >
                <Link to={tool.path}>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200 overflow-hidden">
                    {/* Color Header */}
                    <div className={`h-2 bg-gradient-to-r ${tool.color}`}></div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-5xl">{tool.icon}</div>
                        {tool.badge && (
                          <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full">
                            {tool.badge}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {tool.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {tool.description}
                      </p>
                      
                      <div className="mt-4 flex items-center text-blue-600 font-semibold text-sm">
                        Open Tool
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Need Help Getting Started?</h3>
              <p className="text-blue-100 mb-4">
                Check out our quick start guide or contact support for assistance.
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Quick Start Guide
                </button>
                <button className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors border border-blue-500">
                  Contact Support
                </button>
              </div>
            </div>
            <div className="text-8xl hidden lg:block">🚀</div>
          </div>
        </motion.div>

        {/* Recent Activity (placeholder) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-white rounded-xl shadow-sm p-6 border border-gray-200"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
          <div className="text-center py-12 text-gray-400">
            <svg className="mx-auto h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>No recent activity yet. Start using your admin tools!</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
