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
    category: "fullstack"
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
    category: "frontend"
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
    category: "frontend"
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
    category: "fullstack"
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
    category: "dataScience"
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
    category: "frontend"
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
    category: "frontend"
  }
];
