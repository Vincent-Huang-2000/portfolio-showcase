import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Eye, Info } from 'lucide-react';

// 创建SVG占位符的函数
const createSVGPlaceholder = (title, width = 600, height = 400) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <rect width="100%" height="100%" fill="#6B7280"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="24" font-weight="bold">
        ${title}
      </text>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

const ProjectCard = ({ project }) => {
  const { t, i18n } = useTranslation();

  const getLocalizedText = (textObj) => {
    return textObj[i18n.language] || textObj.en;
  };

  const handleImageError = (e) => {
    const title = getLocalizedText(project.title);
    e.target.src = createSVGPlaceholder(title);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col"
    >
      {/* Project Image */}
      <div className="relative h-52 md:h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <img
          src={project.image}
          alt={getLocalizedText(project.title)}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
          <Link
            to={`/projects/${project.id}`}
            className="flex items-center space-x-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium shadow-lg"
          >
            <Info size={16} />
            <span>{t('projects.detail.viewDetails')}</span>
          </Link>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 lg:p-8 flex-1 flex flex-col project-card">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-tight flex-1 mr-3">
            {getLocalizedText(project.title)}
          </h3>
          <span className="px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full whitespace-nowrap">
            {project.category}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-1 line-clamp-3">
          {getLocalizedText(project.description)}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
            {t('projects.technologies')}
          </h4>
          <div className="tech-tags">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
          <Link
            to={`/projects/${project.id}`}
            className="flex items-center space-x-2 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors font-medium"
          >
            <Info size={16} />
            <span>{t('projects.detail.viewDetails')}</span>
          </Link>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
            >
              <ExternalLink size={16} />
              <span>{t('projects.viewProject')}</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors font-medium"
            >
              <Github size={16} />
              <span>{t('projects.viewGitHub')}</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 