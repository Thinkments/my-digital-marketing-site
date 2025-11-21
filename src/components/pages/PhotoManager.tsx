import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface ImageFile {
  id: string;
  name: string;
  url: string;
  size: number;
  folder: string;
  uploadedAt: string;
}

const PhotoManager = () => {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [selectedFolder, setSelectedFolder] = useState<string>('all');
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const folders = [
    { id: 'all', name: 'All Images', icon: '📁', count: images.length },
    { id: 'hero', name: 'Hero Images', icon: '🎨', count: images.filter(i => i.folder === 'hero').length },
    { id: 'services', name: 'Services', icon: '⚙️', count: images.filter(i => i.folder === 'services').length },
    { id: 'portfolio', name: 'Portfolio', icon: '🖼️', count: images.filter(i => i.folder === 'portfolio').length },
    { id: 'clients', name: 'Client Logos', icon: '🏢', count: images.filter(i => i.folder === 'clients').length },
    { id: 'team', name: 'Team Photos', icon: '👥', count: images.filter(i => i.folder === 'team').length },
  ];

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = async (files: FileList) => {
    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);

    try {
      // Convert files to base64 and create image objects
      const filePromises = Array.from(files).map(async (file) => {
        return new Promise<ImageFile>((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const newImage: ImageFile = {
              id: Date.now().toString() + Math.random(),
              name: file.name,
              url: e.target?.result as string,
              size: file.size,
              folder: selectedFolder === 'all' ? 'services' : selectedFolder,
              uploadedAt: new Date().toISOString(),
            };
            resolve(newImage);
          };
          reader.readAsDataURL(file);
        });
      });

      const newImages = await Promise.all(filePromises);
      
      setUploadProgress(100);
      setTimeout(() => {
        setImages(prev => [...prev, ...newImages]);
        setIsUploading(false);
        setUploadProgress(0);
      }, 500);

    } catch (error) {
      console.error('Upload error:', error);
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const deleteImage = (id: string) => {
    if (confirm('Are you sure you want to delete this image?')) {
      setImages(prev => prev.filter(img => img.id !== id));
    }
  };

  const filteredImages = selectedFolder === 'all' 
    ? images 
    : images.filter(img => img.folder === selectedFolder);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">📸 Photo Manager</h1>
              <p className="text-gray-600 mt-1">Upload and manage your website images</p>
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
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar - Folders */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Folders</h2>
              <div className="space-y-2">
                {folders.map(folder => (
                  <motion.button
                    key={folder.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedFolder(folder.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      selectedFolder === folder.id
                        ? 'bg-blue-50 text-blue-700 border-2 border-blue-200'
                        : 'bg-gray-50 text-gray-700 border-2 border-transparent hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-xl mr-3">{folder.icon}</span>
                        <span className="font-semibold">{folder.name}</span>
                      </div>
                      <span className={`text-sm font-bold ${
                        selectedFolder === folder.id ? 'text-blue-600' : 'text-gray-400'
                      }`}>
                        {folder.count}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Upload Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 mb-6"
            >
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`border-3 border-dashed rounded-xl p-12 text-center transition-all ${
                  dragActive
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 bg-gray-50 hover:border-gray-400'
                }`}
              >
                <div className="text-6xl mb-4">📤</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Drop images here or click to upload
                </h3>
                <p className="text-gray-600 mb-6">
                  Supports: JPG, PNG, GIF, WebP (Max 10MB per file)
                </p>
                <input
                  type="file"
                  id="file-upload"
                  multiple
                  accept="image/*"
                  onChange={handleFileInput}
                  className="hidden"
                />
                <label
                  htmlFor="file-upload"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Select Files
                </label>
              </div>

              {/* Upload Progress */}
              {isUploading && (
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-700">Uploading...</span>
                    <span className="text-sm font-bold text-blue-600">{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${uploadProgress}%` }}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full"
                    />
                  </div>
                </div>
              )}
            </motion.div>

            {/* Images Grid */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  {folders.find(f => f.id === selectedFolder)?.name} ({filteredImages.length})
                </h2>
                {filteredImages.length > 0 && (
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold">
                    Select All
                  </button>
                )}
              </div>

              {filteredImages.length === 0 ? (
                <div className="text-center py-16 text-gray-400">
                  <svg className="mx-auto h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-lg">No images in this folder yet</p>
                  <p className="text-sm mt-1">Upload your first image to get started</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="group relative bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-200 hover:border-blue-400 transition-all"
                    >
                      {/* Image */}
                      <div className="aspect-square">
                        <img
                          src={image.url}
                          alt={image.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="space-x-2">
                          <button
                            onClick={() => window.open(image.url, '_blank')}
                            className="px-3 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors text-sm font-semibold"
                          >
                            View
                          </button>
                          <button
                            onClick={() => deleteImage(image.id)}
                            className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold"
                          >
                            Delete
                          </button>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-2 bg-white">
                        <p className="text-xs font-semibold text-gray-900 truncate" title={image.name}>
                          {image.name}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {formatFileSize(image.size)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoManager;
