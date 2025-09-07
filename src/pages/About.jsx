import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { skillsData, skillLevels } from '../data/skills';
import { Card, CardContent, CardHeader, CardTitle, Button } from '../components/ui';
import TechTimeline from '../components/TechTimeline';
import { usePersonalInfo } from '../hooks/usePersonalInfo';
import { Download, Award, BookOpen, Briefcase, MapPin, Mail, Calendar, Star, Github, Linkedin, Twitter } from 'lucide-react';

/**
 * About 页面组件
 * 
 * 技能系统说明：
 * 1. 技能数据定义在 src/data/skills.js 的 skillsData 数组中
 * 2. 星级配置定义在 src/data/skills.js 的 skillLevels 对象中
 * 3. 支持四个等级：beginner(2星), intermediate(3星), advanced(4星), expert(5星)
 * 4. 每个等级包含：星级数量、显示文本、颜色、详细描述
 * 5. 鼠标悬停星级可查看详细描述
 * 6. 支持中英文切换
 * 7. 颜色系统已简化：1-3星显示蓝色，4-5星显示橙色
 * 
 * 如需修改技能信息：
 * - 编辑 src/data/skills.js 中的 skillsData 数组
 * - 修改 skillLevels 对象可调整等级配置
 * - 调整 getSimplifiedColor 函数可修改颜色方案
 * - 所有配置都有详细的中文注释说明
 */

const About = () => {
  const { t, i18n } = useTranslation();
  const { personalInfo, getLocalizedText } = usePersonalInfo();

  const handleDownload = () => {
    // 创建下载链接
    const link = document.createElement('a');
    link.href = personalInfo.resume.path;
    link.download = personalInfo.resume.filename;
    link.click();
  };

  // 从配置文件获取个人信息
  const personalInfoItems = [
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.contact.location
    },
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.contact.email
    },
    {
      icon: Calendar,
      label: 'Experience',
      value: personalInfo.contact.experience
    }
  ];

  const socialLinks = [
    personalInfo.social.github && {
      icon: Github,
      url: personalInfo.social.github.url,
      label: 'GitHub'
    },
    personalInfo.social.linkedin && {
      icon: Linkedin,
      url: personalInfo.social.linkedin.url,
      label: 'LinkedIn'
    },
    personalInfo.social.twitter && {
      icon: Twitter,
      url: personalInfo.social.twitter.url,
      label: 'Twitter'
    }
  ].filter(Boolean);

  // 获取技能等级配置（从 skillLevels 导入）
  const getSkillLevel = (level) => {
    return skillLevels[level] || skillLevels.beginner;
  };

  /**
   * 获取简化的技能颜色
   * 1-3星用蓝色，4-5星用橙色
   * @param {number} stars - 星级数量
   * @returns {string} 颜色类名
   */
  const getSimplifiedColor = (stars) => {
    return stars >= 4 ? 'text-orange-500' : 'text-blue-500';
  };

  /**
   * 渲染星级评分组件
   * @param {string} level - 技能等级 (beginner/intermediate/advanced/expert)
   * @returns {Array} 星级图标数组
   */
  const renderStars = (level) => {
    const skillLevel = getSkillLevel(level);
    const stars = [];
    const starColor = getSimplifiedColor(skillLevel.stars);
    
    // 生成5颗星，根据技能等级填充对应数量的星星
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={16}
          className={`${
            i <= skillLevel.stars 
              ? `${starColor} fill-current` // 已填充的星星使用简化的颜色
              : 'text-gray-300 dark:text-gray-600'  // 未填充的星星使用灰色
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-blue-50 dark:bg-gray-900 pt-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            {personalInfo.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Personal Info & Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Card variant="fresh" shadow="lg" >
              <CardContent className="p-8 text-center">
                <div className={`w-32 h-32 md:w-36 md:h-36 mx-auto mb-6 rounded-full ${personalInfo.avatar.color} p-1`}>
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                    <div className={`w-28 h-28 md:w-32 md:h-32 rounded-full ${personalInfo.avatar.color} flex items-center justify-center text-white text-3xl md:text-4xl font-bold`}>
                      {personalInfo.avatar.letter}
                    </div>
                  </div>
                </div>
                <div className="space-y-3 mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {personalInfo.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {personalInfo.title}
                  </p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {personalInfoItems.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0 min-w-0">
                        <div className="flex items-center space-x-3 min-w-0 flex-shrink">
                          <Icon size={18} className="text-gray-500 dark:text-gray-400 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400 font-medium text-sm sm:text-base truncate">{info.label}</span>
                        </div>
                        <span className="text-gray-900 dark:text-white font-semibold text-sm sm:text-base ml-2 flex-shrink-0">{info.value}</span>
                      </div>
                    );
                  })}
                </div>

                {/* 社交媒体链接 */}
                <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 flex-wrap">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                        title={social.label}
                      >
                        <Icon size={24} className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200" />
                      </a>
                    );
                  })}
                </div>
                
                <Button
                  variant="default"
                  size="lg"
                  leftIcon={<Download size={20} />}
                  className="w-full"
                  onClick={handleDownload}
                >
                  {t('common.downloadResume')}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Card variant="fresh" shadow="lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award size={24} />
                  {t('about.skills')}
                </CardTitle>
                {/* 星级系统图例 */}
                <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
                    {i18n.language === 'zh' ? '熟练度等级：' : 'Skill Level:'}
                  </p>
                  <div className="flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-2 text-xs">
                    {Object.entries(skillLevels).map(([level, config]) => {
                      const simplifiedColor = getSimplifiedColor(config.stars);
                      return (
                        <div key={level} className="flex items-center gap-1 min-w-0">
                          <div className="flex items-center flex-shrink-0">
                            {Array.from({ length: config.stars }, (_, i) => (
                              <Star key={i} size={12} className={`${simplifiedColor} fill-current`} />
                            ))}
                            {Array.from({ length: 5 - config.stars }, (_, i) => (
                              <Star key={i + config.stars} size={12} className="text-gray-300 dark:text-gray-600" />
                            ))}
                          </div>
                          <span className={`${simplifiedColor} font-medium truncate`}>
                            {getLocalizedText(config.text)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {skillsData.map((skillCategory, index) => (
                    <div 
                      key={index} 
                      className="skill-item border-t border-gray-200 dark:border-gray-700 pt-8 first:border-t-0 first:pt-0"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        {getLocalizedText(skillCategory.category)}
                      </h4>
                      <div className="space-y-4">
                        {skillCategory.skills.map((skill, skillIndex) => {
                          const skillLevel = getSkillLevel(skill.level);
                          const simplifiedColor = getSimplifiedColor(skillLevel.stars);
                          return (
                            <div key={skillIndex} className="flex items-center justify-between py-2 min-w-0">
                              <span className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base flex-shrink min-w-0 truncate mr-2">{skill.name}</span>
                              <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                                <div 
                                  className="flex items-center space-x-1"
                                  title={getLocalizedText(skillLevel.description)} // 工具提示显示详细描述
                                >
                                  {renderStars(skill.level)}
                                </div>
                                <span className={`text-xs sm:text-sm font-medium ${simplifiedColor} hidden sm:inline`}>
                                  {getLocalizedText(skillLevel.text)}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Tech Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <TechTimeline />
        </motion.div>

        {/* Experience & Education */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card variant="glass" shadow="lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase size={24} />
                  {t('about.experience')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {personalInfo.experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6 space-y-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                        {exp.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 font-medium">
                        {exp.period}
                      </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card variant="fresh" shadow="lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen size={24} />
                  {t('about.education')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {personalInfo.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-purple-500 pl-6 space-y-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                        {edu.degree}
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold">
                        {edu.school}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 font-medium">
                        {edu.period}
                      </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About; 