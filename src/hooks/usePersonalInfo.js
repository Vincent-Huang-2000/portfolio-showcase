import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import personalInfoConfig from '../config/personal-info.json';

/**
 * 个人信息管理Hook
 * 提供统一的个人信息访问接口
 */
export const usePersonalInfo = () => {
  const { i18n } = useTranslation();
  const [personalInfo, setPersonalInfo] = useState(personalInfoConfig);

  // 获取本地化文本的辅助函数
  const getLocalizedText = (textObj) => {
    if (typeof textObj === 'string') {
      return textObj;
    }
    return textObj[i18n.language] || textObj.en || textObj;
  };

  // 更新个人信息的函数
  const updatePersonalInfo = (updates) => {
    setPersonalInfo(prev => ({
      ...prev,
      ...updates
    }));
  };

  // 格式化的个人信息对象
  const formattedInfo = {
    // 基本信息
    name: personalInfo.personal.name,
    title: getLocalizedText(personalInfo.personal.title),
    avatar: personalInfo.personal.avatar,
    description: getLocalizedText(personalInfo.personal.description),
    
    // 联系信息
    contact: personalInfo.personal.contact,
    
    // 社交媒体
    social: personalInfo.social,
    
    // 工作经历
    experience: personalInfo.experience.map(exp => ({
      title: getLocalizedText(exp.title),
      company: getLocalizedText(exp.company),
      period: getLocalizedText(exp.period),
      description: getLocalizedText(exp.description)
    })),
    
    // 教育背景
    education: personalInfo.education.map(edu => ({
      degree: getLocalizedText(edu.degree),
      school: getLocalizedText(edu.school),
      period: getLocalizedText(edu.period),
      description: getLocalizedText(edu.description)
    })),
    
    // 简历信息
    resume: personalInfo.resume
  };

  return {
    personalInfo: formattedInfo,
    rawInfo: personalInfo,
    updatePersonalInfo,
    getLocalizedText
  };
};

export default usePersonalInfo; 