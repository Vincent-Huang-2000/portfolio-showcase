/**
 * 项目和技能数据配置文件
 * 
 * 本文件包含：
 * 1. skillLevels - 技能等级配置系统
 * 2. projects - 项目展示数据
 * 3. skillsData - 个人技能数据
 * 
 * 使用方式：
 * - 在 About.jsx 中导入 skillsData 和 skillLevels
 * - 在 Projects.jsx 中导入 projects
 * - 所有数据都支持中英文双语
 */

/**
 * 技能等级配置
 * 定义每个技能等级对应的星级、显示文本和颜色
 * 
 * 等级说明：
 * - beginner: 初学者 (2星) - 了解基础概念，能在指导下完成简单任务
 * - intermediate: 中级 (3星) - 熟悉常用功能，能独立完成大部分任务
 * - advanced: 高级 (4星) - 精通该技术，能解决复杂问题和优化性能
 * - expert: 专家 (5星) - 深度掌握，能架构设计和指导他人
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

/**
 * 星级系统说明：
 * ★☆☆☆☆ (1星) - 未使用（保留）
 * ★★☆☆☆ (2星) - 初级：了解基础概念
 * ★★★☆☆ (3星) - 中级：熟悉常用功能
 * ★★★★☆ (4星) - 高级：精通技术应用
 * ★★★★★ (5星) - 专家：深度掌握精髓
 * 
 * 自定义扩展说明：
 * 1. 添加新等级：在 skillLevels 对象中添加新的等级配置
 * 2. 修改星级范围：调整 stars 属性值（建议保持1-5星范围）
 * 3. 自定义颜色：修改 color 属性（使用 Tailwind CSS 类名）
 * 4. 添加描述：在 text 和 description 中添加中英文描述
 * 5. 使用新等级：在 skillsData 中的 level 字段使用新等级名称
 */

// 创建SVG占位符的函数
const createProjectPlaceholder = (title, color = '#6B7280', textColor = '#FFFFFF') => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
      <rect width="100%" height="100%" fill="${color}"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-family="Arial, sans-serif" font-size="32" font-weight="bold">
        ${title}
      </text>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export const projects = [
  {
    id: 1,
    title: {
      en: "E-commerce Platform",
      zh: "电商平台"
    },
    description: {
      en: "A full-stack e-commerce platform built with React and Node.js, featuring user authentication, product management, shopping cart, and payment integration.",
      zh: "基于React和Node.js构建的全栈电商平台，具有用户认证、产品管理、购物车和支付集成功能。"
    },
    image: createProjectPlaceholder("E-commerce", "#3B82F6"),
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    // githubUrl: "https://github.com/example/ecommerce-platform",
    // liveUrl: "https://ecommerce-demo.com",
    category: "Full-Stack"
  },
  {
    id: 2,
    title: {
      en: "Task Management App",
      zh: "任务管理应用"
    },
    description: {
      en: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      zh: "具有实时更新、拖拽功能和团队协作特性的协作任务管理应用程序。"
    },
    image: createProjectPlaceholder("Task Manager", "#10B981"),
    technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
    githubUrl: "https://github.com/example/task-manager",
    liveUrl: "https://task-manager-demo.com",
    category: "Frontend"
  },
  {
    id: 3,
    title: {
      en: "Weather Dashboard",
      zh: "天气仪表板"
    },
    description: {
      en: "A responsive weather dashboard that displays current weather conditions, forecasts, and interactive maps using external APIs.",
      zh: "响应式天气仪表板，使用外部API显示当前天气条件、预报和交互式地图。"
    },
    image: createProjectPlaceholder("Weather", "#F59E0B"),
    technologies: ["Vue.js", "OpenWeather API", "Chart.js", "CSS Grid"],
    githubUrl: "https://github.com/example/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.com",
    category: "Frontend"
  },
  {
    id: 4,
    title: {
      en: "Chat Application",
      zh: "聊天应用"
    },
    description: {
      en: "Real-time chat application with multiple rooms, file sharing, and user presence indicators built with Socket.io.",
      zh: "使用Socket.io构建的实时聊天应用，具有多个房间、文件共享和用户在线状态指示器。"
    },
    image: createProjectPlaceholder("Chat App", "#8B5CF6"),
    technologies: ["React", "Socket.io", "Express.js", "PostgreSQL"],
    githubUrl: "https://github.com/example/chat-app",
    liveUrl: "https://chat-app-demo.com",
    category: "Full-Stack"
  },
  {
    id: 5,
    title: {
      en: "Data Visualization Tool",
      zh: "数据可视化工具"
    },
    description: {
      en: "Interactive data visualization tool that transforms complex datasets into beautiful, interactive charts and graphs.",
      zh: "交互式数据可视化工具，将复杂数据集转换为美观的交互式图表和图形。"
    },
    image: createProjectPlaceholder("Data Viz", "#EF4444"),
    technologies: ["D3.js", "Python", "Flask", "PostgreSQL"],
    githubUrl: "https://github.com/example/data-viz-tool",
    liveUrl: "https://data-viz-demo.com",
    category: "Data Science"
  },
  {
    id: 6,
    title: {
      en: "Portfolio Website",
      zh: "个人作品集网站"
    },
    description: {
      en: "A responsive portfolio website showcasing projects and skills with smooth animations and modern design.",
      zh: "展示项目和技能的响应式作品集网站，具有流畅的动画和现代设计。"
    },
    image: createProjectPlaceholder("Portfolio", "#06B6D4"),
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/example/portfolio",
    liveUrl: "https://portfolio-demo.com",
    category: "Frontend"
  },
  {
    id: 7,
    title: {
      en: "My Personal Blog",
      zh: "我的个人博客"
    },
    description: {
      en: "A modern blog built with Next.js and MDX, featuring dark mode, search functionality, and responsive design.",
      zh: "使用Next.js和MDX构建的现代博客，具有深色模式、搜索功能和响应式设计。"
    },
    image: "https://example.com/blog-screenshot.jpg",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/yourusername/my-blog",
    liveUrl: "https://yourblog.com",
    category: "Frontend"
  }
];

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
export const skillsData = [
  {
    category: {
      en: "Frontend",
      zh: "前端"
    },
    skills: [
      { name: "React", level: "expert" },           // 深度掌握，能架构复杂应用
      { name: "Vue.js", level: "advanced" },        // 熟练使用，有多个项目经验
      { name: "TypeScript", level: "advanced" },    // 熟练类型系统，能写高质量代码
      { name: "Tailwind CSS", level: "expert" },    // 精通响应式设计和组件化
      { name: "Framer Motion", level: "intermediate" } // 熟悉动画库，能实现常见效果
    ]
  },
  {
    category: {
      en: "Backend",
      zh: "后端"
    },
    skills: [
      { name: "Node.js", level: "advanced" },       // 熟练异步编程和API开发
      { name: "Python", level: "advanced" },        // 熟练数据处理和Web开发
      { name: "Express.js", level: "expert" },      // 精通中间件和路由设计
      { name: "PostgreSQL", level: "intermediate" }, // 熟悉关系型数据库设计
      { name: "MongoDB", level: "advanced" }        // 熟练NoSQL数据建模
    ]
  },
  {
    category: {
      en: "Tools & Others",
      zh: "工具与其他"
    },
    skills: [
      { name: "Git", level: "expert" },             // 精通版本控制和协作流程
      { name: "Docker", level: "intermediate" },    // 熟悉容器化部署
      { name: "AWS", level: "beginner" },           // 了解云服务基础概念
      { name: "Firebase", level: "advanced" },      // 熟练实时数据库和认证
      { name: "Figma", level: "advanced" }          // 熟练UI设计和原型制作
    ]
  }
];

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
    title: {
      en: "Programming Foundation",
      zh: "编程基础"
    },
    description: {
      en: "Started learning programming fundamentals and web development basics",
      zh: "开始学习编程基础和Web开发基础知识"
    },
    technologies: [
      { name: "HTML", icon: "Code", category: "frontend", level: "beginner" },
      { name: "CSS", icon: "Palette", category: "frontend", level: "beginner" },
      { name: "JavaScript", icon: "Zap", category: "frontend", level: "beginner" },
      { name: "Git", icon: "GitBranch", category: "tools", level: "beginner" }
    ],
    milestone: true,
    color: "bg-blue-500"
  },
  {
    year: 2021,
    title: {
      en: "Frontend Frameworks",
      zh: "前端框架"
    },
    description: {
      en: "Mastered modern frontend frameworks and started building interactive applications",
      zh: "掌握现代前端框架，开始构建交互式应用程序"
    },
    technologies: [
      { name: "React", icon: "Atom", category: "frontend", level: "intermediate" },
      { name: "Vue.js", icon: "Triangle", category: "frontend", level: "intermediate" },
      { name: "Tailwind CSS", icon: "Paintbrush", category: "frontend", level: "intermediate" },
      { name: "Webpack", icon: "Package", category: "tools", level: "beginner" }
    ],
    milestone: false,
    color: "bg-green-500"
  },
  {
    year: 2022,
    title: {
      en: "Full-Stack Development",
      zh: "全栈开发"
    },
    description: {
      en: "Expanded to backend development and database management",
      zh: "扩展到后端开发和数据库管理"
    },
    technologies: [
      { name: "Node.js", icon: "Server", category: "backend", level: "intermediate" },
      { name: "Express.js", icon: "Zap", category: "backend", level: "intermediate" },
      { name: "MongoDB", icon: "Database", category: "database", level: "intermediate" },
      { name: "PostgreSQL", icon: "Database", category: "database", level: "beginner" },
      { name: "TypeScript", icon: "FileType", category: "frontend", level: "intermediate" }
    ],
    milestone: true,
    color: "bg-purple-500"
  },
  {
    year: 2023,
    title: {
      en: "Advanced Technologies",
      zh: "高级技术"
    },
    description: {
      en: "Deepened expertise in advanced technologies and cloud services",
      zh: "深化高级技术和云服务的专业知识"
    },
    technologies: [
      { name: "Docker", icon: "Container", category: "tools", level: "intermediate" },
      { name: "AWS", icon: "Cloud", category: "cloud", level: "beginner" },
      { name: "Firebase", icon: "Flame", category: "cloud", level: "advanced" },
      { name: "GraphQL", icon: "Share2", category: "backend", level: "intermediate" },
      { name: "Next.js", icon: "ArrowRight", category: "frontend", level: "advanced" }
    ],
    milestone: false,
    color: "bg-orange-500"
  },
  {
    year: 2024,
    title: {
      en: "Expert Level & Leadership",
      zh: "专家级别与领导力"
    },
    description: {
      en: "Achieved expert level in core technologies and started mentoring others",
      zh: "在核心技术方面达到专家级别，开始指导他人"
    },
    technologies: [
      { name: "React", icon: "Atom", category: "frontend", level: "expert" },
      { name: "Framer Motion", icon: "Zap", category: "frontend", level: "advanced" },
      { name: "Python", icon: "FileCode", category: "backend", level: "advanced" },
      { name: "Figma", icon: "Figma", category: "design", level: "advanced" },
      { name: "AI/ML", icon: "Brain", category: "ai", level: "beginner" }
    ],
    milestone: true,
    color: "bg-red-500"
  }
];

/**
 * 技术分类颜色配置
 * 为不同类别的技术定义颜色主题
 */
export const techCategoryColors = {
  frontend: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  backend: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  database: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  tools: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
  cloud: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  design: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
  ai: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
}; 