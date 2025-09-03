import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { usePersonalInfo } from '../hooks/usePersonalInfo';
import { Download, Eye, FileText } from 'lucide-react';
import { skillsData } from '../data/skills';

const Resume = () => {
  const { t } = useTranslation();
  const { personalInfo } = usePersonalInfo();

  // 仅取简短技能标签展示（各取前4项）
  const frontendSkills = (skillsData?.[0]?.skills || []).slice(0, 4).map((s) => s.name);
  const backendSkills = (skillsData?.[1]?.skills || []).slice(0, 4).map((s) => s.name);
  const experiences = (personalInfo?.experience || []).slice(0, 2);

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
              {t('resume.subtitle')}
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
                {personalInfo.title} {t('nav.resume')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {t('resume.whatsIncluded.title')}
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {t('resume.whatsIncluded.items.experience')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {t('resume.whatsIncluded.items.skills')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {t('resume.whatsIncluded.items.education')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {t('resume.whatsIncluded.items.projects')}
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {t('resume.whatsIncluded.items.contact')}
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {t('resume.fileDetails.title')}
                </h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-400">
                  <div className="flex justify-between">
                    <span>{t('resume.fileDetails.format')}:</span>
                    <span className="font-medium">PDF</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('resume.fileDetails.size')}:</span>
                    <span className="font-medium">{personalInfo.resume.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('resume.fileDetails.pages')}:</span>
                    <span className="font-medium">{personalInfo.resume.pages}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('resume.fileDetails.updated')}:</span>
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
                <span>{t('resume.previewOnline')}</span>
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
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('resume.experienceHighlights.title')}</h3>
            <div className="space-y-4">
              {experiences.map((exp, idx) => {
                const borderColors = ['border-blue-500', 'border-purple-500'];
                const textColors = ['text-blue-600 dark:text-blue-400', 'text-purple-600 dark:text-purple-400'];
                const colorIdx = idx % borderColors.length;
                return (
                  <div key={`${exp.title}-${idx}`} className={`border-l-4 ${borderColors[colorIdx]} pl-4`}>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                    <p className={`${textColors[colorIdx]} text-sm`}>{exp.company} • {exp.period}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{exp.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Skills Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('resume.technicalSkills.title')}</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('resume.technicalSkills.frontend')}</h4>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill) => (
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
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('resume.technicalSkills.backend')}</h4>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill) => (
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
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('resume.more.title')}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{t('resume.more.description')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              {t('resume.more.getInTouch')}
            </a>
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-semibold"
            >
              {t('resume.more.emailDirectly')}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume; 