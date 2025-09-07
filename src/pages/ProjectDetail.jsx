import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Eye, Code, Globe, Calendar, Tag } from 'lucide-react';
import { projects } from '../data/projects';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Card, CardContent, Button } from '../components/ui';
import ImageViewer from '../components/ImageViewer';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [imageError, setImageError] = useState(false);
  const [markdownContent, setMarkdownContent] = useState(null);
  const [imageViewer, setImageViewer] = useState({ isOpen: false, src: '', alt: '' });

  const project = projects.find(p => p.id === parseInt(id));

  const getLocalizedText = (textObj) => {
    return textObj[i18n.language] || textObj.en;
  };

  const getLocalizedCategory = (category) => {
    return t(`projects.categories.${category}`);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageClick = (src, alt) => {
    setImageViewer({ isOpen: true, src, alt });
  };

  const closeImageViewer = () => {
    setImageViewer({ isOpen: false, src: '', alt: '' });
  };

  const createSVGPlaceholder = (title, width = 800, height = 500) => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
        <rect width="100%" height="100%" fill="#6B7280"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="32" font-weight="bold">
          ${title}
        </text>
      </svg>
    `;
    return `data:image/svg+xml;base64,${btoa(svg)}`;
  };

  // 加载可选 Markdown：/public/projects/{id}.{lang}.md -> /public/projects/{id}.en.md
  useEffect(() => {
    if (!project) return;

    const loadMarkdown = async () => {
      const currentLang = (i18n.language || 'en').split('-')[0];
      const baseUrl = import.meta.env.BASE_URL; // 动态获取部署路径
      const candidates = [
        `${baseUrl}projects/${project.id}.${currentLang}.md`,
        `${baseUrl}projects/${project.id}.en.md`
      ];

      for (const url of candidates) {
        try {
          const res = await fetch(url, { cache: 'no-store' });
          if (res.ok) {
            const contentType = res.headers.get('content-type') || '';
            const text = await res.text();
            
            // 检查是否为 Markdown 内容：
            // 1. 内容类型应该是 text/plain 或包含 markdown
            // 2. 内容不应该包含 HTML 标签（避免服务器返回 HTML 页面）
            // 3. 内容长度大于 0
            if (text && 
                text.trim().length > 0 && 
                !text.includes('<!doctype html>') && 
                !text.includes('<html') && 
                (contentType.includes('text/plain') || contentType.includes('markdown') || contentType === '')) {
              setMarkdownContent(text);
              return;
            }
          }
        } catch (_) {
          // 忽略错误，尝试下一个候选
        }
      }

      setMarkdownContent(null);
    };

    loadMarkdown();
  }, [project, i18n.language]);

  // 键盘事件监听器
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && imageViewer.isOpen) {
        closeImageViewer();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [imageViewer.isOpen]);

  if (!project) {
    return (
      <div className="min-h-screen bg-blue-50 dark:bg-gray-900 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Card variant="outline" className="max-w-md mx-auto">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
                  <Code size={32} className="text-gray-400" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('projects.detail.projectNotFound')}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {t('projects.detail.projectNotFoundDescription')}
                </p>
                <Button
                  variant="default"
                  onClick={() => navigate('/projects')}
                  leftIcon={<ArrowLeft size={16} />}
                >
                  {t('projects.detail.backToProjects')}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 dark:bg-gray-900 pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate('/projects')}
            leftIcon={<ArrowLeft size={18} />}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            {t('projects.detail.backToProjects')}
          </Button>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {getLocalizedText(project.title)}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full font-semibold">
                  {getLocalizedCategory(project.category)}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  ID: {project.id}
                </span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  leftIcon={<Globe size={20} />}
                  className="min-w-[140px]"
                >
                  {t('projects.detail.liveDemo')}
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  leftIcon={<Github size={20} />}
                  className="min-w-[140px]"
                >
                  {t('projects.detail.sourceCode')}
                </Button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card variant="glass" shadow="lg" className="overflow-hidden">
            <div className="relative h-96 lg:h-[500px] bg-gray-200 dark:bg-gray-700">
              <img
                src={imageError ? createSVGPlaceholder(getLocalizedText(project.title)) : project.image}
                alt={getLocalizedText(project.title)}
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </Card>
        </motion.div>

        {/* Project Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card variant="glass" shadow="lg">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <Eye size={24} className="text-blue-600 dark:text-blue-400" />
                    {t('projects.detail.overview')}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {getLocalizedText(project.description)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project Details (Markdown) - Only show if markdown content exists */}
            {markdownContent && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <Card variant="glass" shadow="lg">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                      <Calendar size={24} className="text-green-600 dark:text-green-400" />
                      {t('projects.detail.projectDetails')}
                    </h2>
                    <div className="prose dark:prose-invert max-w-none prose-img:rounded-lg prose-img:shadow-md prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:my-4 prose-headings:mt-6 prose-headings:mb-4 prose-ul:my-4 prose-ol:my-4 prose-li:my-1">
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={{
                          img: ({ src, alt, ...props }) => (
                            <img
                              {...props}
                              src={src}
                              alt={alt}
                              className="cursor-pointer hover:opacity-90 transition-opacity rounded-lg shadow-md"
                              onClick={() => handleImageClick(src, alt)}
                            />
                          )
                        }}
                      >
                        {markdownContent}
                      </ReactMarkdown>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: markdownContent ? 0.45 : 0.4 }}
            >
              <Card variant="glass" shadow="lg">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <Code size={24} className="text-purple-600 dark:text-purple-400" />
                    {t('projects.detail.technologies')}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: markdownContent ? 0.55 : 0.5 }}
            >
              <Card variant="gradient" shadow="lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <ExternalLink size={20} className="text-green-600 dark:text-green-400" />
                    {t('projects.detail.projectLinks')}
                  </h3>
                  <div className="space-y-3">
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        leftIcon={<Globe size={16} />}
                        className="w-full justify-start"
                      >
                        {t('projects.viewProject')}
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        leftIcon={<Github size={16} />}
                        className="w-full justify-start"
                      >
                        {t('projects.viewGitHub')}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: markdownContent ? 0.65 : 0.6 }}
            >
              <Card variant="outline" shadow="lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Tag size={20} className="text-orange-600 dark:text-orange-400" />
                    {t('projects.detail.projectInfo')}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">{t('projects.detail.category')}</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {getLocalizedCategory(project.category)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">{t('projects.detail.techStack')}</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {project.technologies.length} {project.technologies.length === 1 ? t('projects.detail.technology') : t('projects.detail.technologiesCount')}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">{t('projects.detail.projectId')}</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        #{project.id}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 图片查看器 */}
      <ImageViewer
        isOpen={imageViewer.isOpen}
        onClose={closeImageViewer}
        imageSrc={imageViewer.src}
        imageAlt={imageViewer.alt}
      />
    </div>
  );
};

export default ProjectDetail; 