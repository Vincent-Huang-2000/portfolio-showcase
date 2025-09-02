# 🚀 Portfolio Showcase Website

一个现代化的个人项目展示网站，支持中英文切换、暗黑模式、响应式设计。

## 🎨 UI 组件库

### 新增功能
- **高质量UI组件**: 使用 Headless UI + Tailwind CSS 构建的现代化组件系统
- **统一设计语言**: 所有组件遵循一致的设计规范
- **优雅的交互**: 包含悬停效果、过渡动画和视觉反馈
- **完全响应式**: 适配所有设备尺寸

### 组件库包含
- **Button**: 支持多种变体（默认、轮廓、幽灵、成功、警告、危险）和尺寸
- **Card**: 灵活的卡片组件，支持渐变、玻璃态、阴影等效果
- **Input**: 现代化输入框，支持图标、验证状态、标签等
- **Textarea**: 自适应高度的文本区域
- **Switch**: 优雅的开关组件，用于主题切换
- **Select**: 下拉选择器，支持搜索和自定义样式

## ✨ 主要特性

- 🌐 **多语言支持** - 中文/英文切换
- 🌓 **暗黑模式** - 自动适应系统主题偏好
- 📱 **响应式设计** - 完美适配桌面和移动设备
- 🎨 **现代UI设计** - 基于Tailwind CSS的优雅界面
- ⚡ **流畅动画** - 使用Framer Motion的精美过渡效果
- 🔍 **项目搜索** - 支持按名称、技术栈搜索项目
- 📄 **在线简历** - 在线预览和下载简历功能

## 🏗️ 技术栈

- **前端框架**: React 19 + Vite
- **样式框架**: Tailwind CSS v3.4.0
- **路由管理**: React Router
- **动画库**: Framer Motion  
- **图标库**: Lucide React
- **国际化**: React i18next
- **开发工具**: ESLint + 热重载

## 📚 样式指南

本项目已配置为使用 **Tailwind CSS v3.4.0** 版本，并包含详细的样式开发指南：

### 📖 样式文档

- **[TAILWIND_V3_GUIDE.md](./TAILWIND_V3_GUIDE.md)** - 完整的Tailwind CSS v3使用指南
  - 项目配置说明
  - 样式修改方法
  - 重要注意事项
  - 最佳实践

- **[TAILWIND_QUICK_REFERENCE.md](./TAILWIND_QUICK_REFERENCE.md)** - 快速参考文档
  - Card组件用法
  - 常用类名速查
  - 实用技巧
  - 故障排除

### 🎨 核心样式特性

- **Card组件系统**: 支持 `default`、`gradient`、`glass`、`fresh`、`outline` 五种变体
- **响应式设计**: 完美适配移动端和桌面端
- **深色模式**: 自动适应系统主题偏好
- **流畅动画**: 悬停效果和过渡动画
- **现代渐变**: 多彩渐变背景和玻璃态效果

### ⚡ 快速开始样式开发

```jsx
// 使用Card组件
<Card variant="gradient" shadow="lg" hover="lift" padding="md">
  <CardContent>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
      标题
    </h3>
    <p className="text-gray-600 dark:text-gray-300 mt-2">
      内容描述
    </p>
  </CardContent>
</Card>

// 常用样式模式
<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
  通用卡片样式
</div>
```

### 🚨 重要提醒

- 使用 Tailwind CSS v3 语法
- 避免使用 `class-variance-authority` 库
- 修改配置后需重启开发服务器
- 参考样式文档中的最佳实践

## 📁 项目结构

```
src/
├── components/           # 可复用组件
│   ├── Navbar.jsx       # 导航栏
│   ├── Footer.jsx       # 页脚
│   └── ProjectCard.jsx  # 项目卡片
├── pages/               # 页面组件
│   ├── Home.jsx         # 首页
│   ├── About.jsx        # 关于页面
│   ├── Projects.jsx     # 项目展示页面
│   ├── Contact.jsx      # 联系页面
│   └── Resume.jsx       # 简历页面
├── context/             # React Context
│   └── ThemeContext.jsx # 主题管理
├── data/                # 静态数据
│   └── projects.js      # 项目数据
├── i18n/                # 国际化配置
│   ├── index.js         # i18n配置
│   └── locales/         # 语言文件
│       ├── en.json      # 英文
│       └── zh.json      # 中文
└── assets/              # 静态资源
    └── project-images/  # 项目图片
```

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/yourusername/portfolio-showcase.git
cd portfolio-showcase
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

### 4. 构建生产版本

```bash
npm run build
```

### 5. 预览生产版本

```bash
npm run preview
```

## 🎯 页面功能

### 🏠 首页 (Home)
- 个人介绍和欢迎信息
- 技能亮点展示
- 快速导航到其他页面

### 👤 关于我 (About)
- 个人信息和头像
- 技能图表展示
- 工作经历和教育背景

### 💼 项目展示 (Projects)
- 项目卡片网格布局
- 搜索和筛选功能
- 项目详情和链接
- 技术栈标签

### 📧 联系方式 (Contact)
- 联系表单
- 社交媒体链接
- 联系信息展示

### 📄 简历 (Resume)
- 在线简历预览
- PDF下载功能
- 简历亮点展示

## 🎨 自定义配置

### 修改项目数据

编辑 `src/data/projects.js` 文件来更新项目信息：

```javascript
export const projects = [
  {
    id: 1,
    title: {
      en: "Your Project Name",
      zh: "你的项目名称"
    },
    description: {
      en: "Project description in English",
      zh: "项目的中文描述"
    },
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://your-project.com"
  }
];
```

### 修改个人信息

更新以下文件中的个人信息：
- `src/components/Footer.jsx` - 社交媒体链接
- `src/pages/Contact.jsx` - 联系信息
- `src/pages/About.jsx` - 个人简介

### 修改语言文本

编辑 `src/i18n/locales/` 目录下的语言文件来自定义文本内容。

## 🎯 部署建议

### Vercel 部署

1. 连接GitHub仓库到Vercel
2. 自动构建和部署
3. 支持自定义域名

### Netlify 部署

1. 连接GitHub仓库到Netlify
2. 构建设置: `npm run build`
3. 发布目录: `dist`

### GitHub Pages 部署

1. 安装gh-pages: `npm install --save-dev gh-pages`
2. 在package.json中添加deploy脚本
3. 运行: `npm run deploy`

## 🔧 环境要求

- Node.js 16+
- npm 8+

## 📝 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献

欢迎提交 Issues 和 Pull Requests！

## 📞 联系方式

- GitHub: [yourusername](https://github.com/yourusername)
- Email: your.email@example.com
- LinkedIn: [yourprofile](https://linkedin.com/in/yourprofile)

---

⭐ 如果这个项目对你有帮助，请给个Star！
