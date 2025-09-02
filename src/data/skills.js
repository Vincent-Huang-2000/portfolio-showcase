/**
 * 技能数据配置
 * 定义个人技能分类和熟练程度
 * 
 * 数据结构说明：
 * - category: 技能分类（支持中英文）
 * - skills: 技能列表
 *   - name: 技能名称
 *   - level: 熟练程度等级（参考上面的 skillLevels 配置）
 * 
 * 等级选择参考：
 * - beginner: 刚接触，了解基本概念
 * - intermediate: 有实际项目经验，熟悉常用功能
 * - advanced: 有丰富经验，能解决复杂问题
 * - expert: 精通掌握，能指导他人和架构设计
 */

export const skillLevels = {
  beginner: {
    stars: 2,
    text: { en: 'Beginner', zh: '初级' },
    color: 'text-gray-400',
    description: {
      en: 'Basic understanding, can complete simple tasks with guidance',
      zh: '基础理解，在指导下能完成简单任务'
    }
  },
  intermediate: {
    stars: 3,
    text: { en: 'Intermediate', zh: '中级' },
    color: 'text-yellow-400',
    description: {
      en: 'Familiar with common features, can work independently on most tasks',
      zh: '熟悉常用功能，能独立完成大部分任务'
    }
  },
  advanced: {
    stars: 4,
    text: { en: 'Advanced', zh: '高级' },
    color: 'text-orange-400',
    description: {
      en: 'Proficient in the technology, can solve complex problems and optimize performance',
      zh: '精通该技术，能解决复杂问题和优化性能'
    }
  },
  expert: {
    stars: 5,
    text: { en: 'Expert', zh: '专家' },
    color: 'text-blue-500',
    description: {
      en: 'Deep mastery, can architect solutions and mentor others',
      zh: '深度掌握，能架构设计和指导他人'
    }
  }
};

export const skillsData = [
  {
    category: {
      en: 'Frontend',
      zh: '前端'
    },
    skills: [
      { name: 'React', level: 'expert' },
      { name: 'Vue.js', level: 'advanced' },
      { name: 'TypeScript', level: 'advanced' },
      { name: 'Tailwind CSS', level: 'expert' },
      { name: 'Framer Motion', level: 'intermediate' }
    ]
  },
  {
    category: {
      en: 'Backend',
      zh: '后端'
    },
    skills: [
      { name: 'Node.js', level: 'advanced' },
      { name: 'Python', level: 'advanced' },
      { name: 'Express.js', level: 'expert' },
      { name: 'PostgreSQL', level: 'intermediate' },
      { name: 'MongoDB', level: 'advanced' }
    ]
  },
  {
    category: {
      en: 'Tools & Others',
      zh: '工具与其他'
    },
    skills: [
      { name: 'Git', level: 'expert' },
      { name: 'Docker', level: 'intermediate' },
      { name: 'AWS', level: 'beginner' },
      { name: 'Firebase', level: 'advanced' },
      { name: 'Figma', level: 'advanced' }
    ]
  }
];

export default { skillLevels, skillsData };


