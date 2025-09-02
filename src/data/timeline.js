/**
 * 技术栈时间轴数据配置
 * 展示技术学习和掌握的时间历程
 * 
 * 数据结构说明：
 * - year: 年份
 * - title: 阶段标题（支持中英文）
 * - description: 阶段描述（支持中英文）
 * - technologies: 该年份掌握的技术列表
 *   - name: 技术名称
 *   - icon: 技术图标名称（对应lucide-react图标）
 *   - category: 技术分类（frontend/backend/tools/database等）
 *   - level: 掌握程度（beginner/intermediate/advanced/expert）
 * - milestone: 是否为重要里程碑
 * - color: 时间轴节点颜色
 */

export const techTimelineData = [
  {
    year: 2020,
    title: { en: 'Programming Foundation', zh: '编程基础' },
    description: { en: 'Started learning programming fundamentals and web development basics', zh: '开始学习编程基础和Web开发基础知识' },
    technologies: [
      { name: 'HTML', icon: 'Code', category: 'frontend', level: 'beginner' },
      { name: 'CSS', icon: 'Palette', category: 'frontend', level: 'beginner' },
      { name: 'JavaScript', icon: 'Zap', category: 'frontend', level: 'beginner' },
      { name: 'Git', icon: 'GitBranch', category: 'tools', level: 'beginner' }
    ],
    milestone: true,
    color: 'bg-blue-500'
  },
  {
    year: 2021,
    title: { en: 'Frontend Frameworks', zh: '前端框架' },
    description: { en: 'Mastered modern frontend frameworks and started building interactive applications', zh: '掌握现代前端框架，开始构建交互式应用程序' },
    technologies: [
      { name: 'React', icon: 'Atom', category: 'frontend', level: 'intermediate' },
      { name: 'Vue.js', icon: 'Triangle', category: 'frontend', level: 'intermediate' },
      { name: 'Tailwind CSS', icon: 'Paintbrush', category: 'frontend', level: 'intermediate' },
      { name: 'Webpack', icon: 'Package', category: 'tools', level: 'beginner' }
    ],
    milestone: false,
    color: 'bg-green-500'
  },
  {
    year: 2022,
    title: { en: 'Full-Stack Development', zh: '全栈开发' },
    description: { en: 'Expanded to backend development and database management', zh: '扩展到后端开发和数据库管理' },
    technologies: [
      { name: 'Node.js', icon: 'Server', category: 'backend', level: 'intermediate' },
      { name: 'Express.js', icon: 'Zap', category: 'backend', level: 'intermediate' },
      { name: 'MongoDB', icon: 'Database', category: 'database', level: 'intermediate' },
      { name: 'PostgreSQL', icon: 'Database', category: 'database', level: 'beginner' },
      { name: 'TypeScript', icon: 'FileType', category: 'frontend', level: 'intermediate' }
    ],
    milestone: true,
    color: 'bg-purple-500'
  },
  {
    year: 2023,
    title: { en: 'Advanced Technologies', zh: '高级技术' },
    description: { en: 'Deepened expertise in advanced technologies and cloud services', zh: '深化高级技术和云服务的专业知识' },
    technologies: [
      { name: 'Docker', icon: 'Container', category: 'tools', level: 'intermediate' },
      { name: 'AWS', icon: 'Cloud', category: 'cloud', level: 'beginner' },
      { name: 'Firebase', icon: 'Flame', category: 'cloud', level: 'advanced' },
      { name: 'GraphQL', icon: 'Share2', category: 'backend', level: 'intermediate' },
      { name: 'Next.js', icon: 'ArrowRight', category: 'frontend', level: 'advanced' }
    ],
    milestone: false,
    color: 'bg-orange-500'
  },
  {
    year: 2024,
    title: { en: 'Expert Level & Leadership', zh: '专家级别与领导力' },
    description: { en: 'Achieved expert level in core technologies and started mentoring others', zh: '在核心技术方面达到专家级别，开始指导他人' },
    technologies: [
      { name: 'React', icon: 'Atom', category: 'frontend', level: 'expert' },
      { name: 'Framer Motion', icon: 'Zap', category: 'frontend', level: 'advanced' },
      { name: 'Python', icon: 'FileCode', category: 'backend', level: 'advanced' },
      { name: 'Figma', icon: 'Figma', category: 'design', level: 'advanced' },
      { name: 'AI/ML', icon: 'Brain', category: 'ai', level: 'beginner' }
    ],
    milestone: true,
    color: 'bg-red-500'
  }
];

/**
 * 技术分类颜色配置
 * 为不同类别的技术定义颜色主题
 */

export const techCategoryColors = {
  frontend: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  backend: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  database: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  tools: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  cloud: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  design: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
  ai: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
};

export default { techTimelineData, techCategoryColors };


