import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { techTimelineData, techCategoryColors, skillLevels } from '../data/projects';
import { Card, CardContent, CardHeader, CardTitle } from './ui';
import { 
  Clock, ChevronLeft, ChevronRight, Star, Play, Pause, Keyboard,
  Code, Palette, Zap, GitBranch, Atom, Triangle, Paintbrush, Package, 
  Server, Database, FileType, Container, Cloud, Flame, Share2, 
  ArrowRight, FileCode, Figma, Brain
} from 'lucide-react';

/**
 * 技术栈时间轴组件
 * 
 * 功能特点：
 * 1. 可视化展示技术学习历程
 * 2. 按年份显示掌握的技术栈演变
 * 3. 支持横向滚动时间轴+技术图标
 * 4. 交互方式：点击导航、键盘控制、自动播放
 * 5. 完整的国际化支持
 * 6. 响应式设计和无障碍支持
 * 
 * Props:
 * - className: 自定义样式类名
 * - showHeader: 是否显示头部标题（默认true）
 * - autoPlayInterval: 自动播放间隔时间（默认4000ms）
 * - enableKeyboardNavigation: 是否启用键盘导航（默认true）
 */
const TechTimeline = ({ 
  className = '', 
  showHeader = true, 
  autoPlayInterval = 4000,
  enableKeyboardNavigation = true 
}) => {
  const { t, i18n } = useTranslation();
  const [currentTimelineIndex, setCurrentTimelineIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(false);

  // 图标映射对象
  const iconMap = {
    Code, Palette, Zap, GitBranch, Atom, Triangle, Paintbrush, Package, 
    Server, Database, FileType, Container, Cloud, Flame, Share2, 
    ArrowRight, FileCode, Figma, Brain
  };

  // 获取本地化文本
  const getLocalizedText = (textObj) => {
    return textObj[i18n.language] || textObj.en;
  };

  // 获取图标组件
  const getIcon = (iconName) => {
    return iconMap[iconName] || Code;
  };

  // 获取技能等级配置
  const getSkillLevel = (level) => {
    return skillLevels[level] || skillLevels.beginner;
  };

  // 时间轴导航函数
  const goToNextTimeline = React.useCallback(() => {
    setCurrentTimelineIndex((prev) => 
      prev < techTimelineData.length - 1 ? prev + 1 : 0
    );
  }, []);

  const goToPrevTimeline = React.useCallback(() => {
    setCurrentTimelineIndex((prev) => 
      prev > 0 ? prev - 1 : techTimelineData.length - 1
    );
  }, []);

  const goToTimelineIndex = React.useCallback((index) => {
    setCurrentTimelineIndex(index);
  }, []);

  // 自动播放功能
  React.useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        goToNextTimeline();
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, autoPlayInterval, goToNextTimeline]);

  // 键盘导航
  React.useEffect(() => {
    if (!enableKeyboardNavigation) return;

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        goToPrevTimeline();
      } else if (event.key === 'ArrowRight') {
        goToNextTimeline();
      } else if (event.key === ' ') {
        event.preventDefault();
        setIsAutoPlaying(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardNavigation, goToPrevTimeline, goToNextTimeline]);

  return (
    <div className={className}>
      <Card variant="default" shadow="lg">
        {showHeader && (
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Clock size={24} />
                {t('about.timeline.title')}
              </CardTitle>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="flex items-center space-x-2 px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                  title={isAutoPlaying ? t('about.timeline.pauseAutoplay') : t('about.timeline.startAutoplay')}
                >
                  {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
                  <span className="text-sm font-medium">
                    {isAutoPlaying ? t('about.timeline.pause') : t('about.timeline.play')}
                  </span>
                </button>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {t('about.timeline.description')}
            </p>
            {enableKeyboardNavigation && (
              <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <Keyboard size={14} />
                  <span>
                    {t('about.timeline.keyboardHint')}
                  </span>
                </div>
              </div>
            )}
          </CardHeader>
        )}
        
        <CardContent>
          {/* 时间轴导航 */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={goToPrevTimeline}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label={t('about.timeline.previousTimeline')}
              title={t('about.timeline.previousTimeline')}
            >
              <ChevronLeft size={20} className="text-gray-600 dark:text-gray-400" />
            </button>
            
            {/* 年份指示器 */}
            <div className="flex items-center space-x-2">
              {techTimelineData.map((item, index) => (
                <button
                  key={item.year}
                  onClick={() => goToTimelineIndex(index)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === currentTimelineIndex
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {item.year}
                </button>
              ))}
            </div>
            
            <button
              onClick={goToNextTimeline}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label={t('about.timeline.nextTimeline')}
              title={t('about.timeline.nextTimeline')}
            >
              <ChevronRight size={20} className="text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          {/* 当前时间轴内容 */}
          <motion.div
            key={currentTimelineIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {techTimelineData[currentTimelineIndex] && (
              <div className="relative">
                {/* 时间轴节点 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 relative">
                    <div className={`w-4 h-4 rounded-full ${techTimelineData[currentTimelineIndex].color} ring-4 ring-white dark:ring-gray-900`}></div>
                    {techTimelineData[currentTimelineIndex].milestone && (
                      <div className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                        <Star size={12} className="text-white fill-current" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    {/* 年份和标题 */}
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {techTimelineData[currentTimelineIndex].year}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {getLocalizedText(techTimelineData[currentTimelineIndex].title)}
                      </h4>
                    </div>
                    
                    {/* 描述 */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {getLocalizedText(techTimelineData[currentTimelineIndex].description)}
                    </p>
                    
                    {/* 技术标签 */}
                    <div className="space-y-4">
                      <h5 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        {t('about.timeline.technologiesMastered')}
                      </h5>
                      <div className="flex flex-wrap gap-3">
                        {techTimelineData[currentTimelineIndex].technologies.map((tech, index) => {
                          const IconComponent = getIcon(tech.icon);
                          const skillLevel = getSkillLevel(tech.level);
                          const categoryColor = techCategoryColors[tech.category] || techCategoryColors.tools;
                          
                          return (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${categoryColor} transition-all duration-200 hover:shadow-md`}
                              title={`${tech.name} - ${getLocalizedText(skillLevel.text)}`}
                            >
                              <IconComponent size={16} />
                              <span className="text-sm font-medium">{tech.name}</span>
                              <div className="flex items-center space-x-1">
                                {Array.from({ length: skillLevel.stars }, (_, i) => (
                                  <Star key={i} size={10} className="text-yellow-500 fill-current" />
                                ))}
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* 进度指示器 */}
          <div className="mt-8 flex justify-center">
            <div className="flex space-x-2">
              {techTimelineData.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTimelineIndex
                      ? 'bg-blue-500 w-8'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechTimeline; 