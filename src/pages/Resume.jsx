import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { usePersonalInfo } from '../hooks/usePersonalInfo';
import { Download, Eye, FileText } from 'lucide-react';

const Resume = () => {
  const { t } = useTranslation();
  const { personalInfo } = usePersonalInfo();

  const handleDownload = () => {
    // Create a dummy PDF download link
    const link = document.createElement('a');
    link.href = personalInfo.resume.path; // 从配置文件获取PDF路径
    link.download = personalInfo.resume.filename; // 从配置文件获取文件名
    link.click();
  };

  const handlePreview = () => {
    window.open(personalInfo.resume.path, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t('nav.resume')}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Download my resume or view it online
            </p>
          </motion.div>
        </div>

        {/* Resume Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
          {/* Resume Preview */}
          <div className="p-8">
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-32 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <FileText size={48} className="text-gray-400" />
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {personalInfo.resume.filename}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {personalInfo.title} Resume
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  What's Included
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Professional Experience
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Technical Skills
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Education & Certifications
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Notable Projects
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Contact Information
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  File Details
                </h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-400">
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span className="font-medium">PDF</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Size:</span>
                    <span className="font-medium">{personalInfo.resume.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pages:</span>
                    <span className="font-medium">{personalInfo.resume.pages}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Updated:</span>
                    <span className="font-medium">{personalInfo.resume.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                <Download size={20} />
                <span>{t('common.downloadResume')}</span>
              </motion.button>
              
              <motion.button
                onClick={handlePreview}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors font-semibold"
              >
                <Eye size={20} />
                <span>Preview Online</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Resume Sections Preview */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Experience Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Experience Highlights
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Senior Frontend Developer
                </h4>
                <p className="text-blue-600 dark:text-blue-400 text-sm">
                  Tech Company • 2022 - Present
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  Leading development of React applications and improving user experience
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Full-Stack Developer
                </h4>
                <p className="text-purple-600 dark:text-purple-400 text-sm">
                  Startup Inc. • 2020 - 2022
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  Developed full-stack applications using modern web technologies
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Tailwind CSS', 'Next.js'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Python', 'PostgreSQL', 'MongoDB'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Alternative Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Want to Know More?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Feel free to reach out if you have any questions about my experience or would like to discuss opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Get In Touch
            </a>
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-semibold"
            >
              Email Directly
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume; 