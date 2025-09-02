# TechTimeline 组件使用文档

## 概述

`TechTimeline` 是一个可视化展示技术学习历程的时间轴组件，支持交互式导航、自动播放和完整的国际化功能。

## 功能特点

- 📅 **时间轴展示**：按年份显示技术栈演变历程
- 🎮 **交互导航**：支持点击、键盘导航和自动播放
- 🌍 **国际化**：完整的中英文双语支持
- 🎨 **技术分类**：不同技术类别使用不同颜色标识
- ⭐ **技能等级**：显示每个技术的熟练程度星级
- 🏆 **里程碑**：重要年份标记特殊里程碑
- 📱 **响应式**：适配移动端和桌面端
- ♿ **无障碍**：支持键盘导航和ARIA标签

## 基本用法

```jsx
import TechTimeline from '../components/TechTimeline';

function MyPage() {
  return (
    <div>
      <TechTimeline />
    </div>
  );
}
```

## Props 配置

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `className` | `string` | `''` | 自定义样式类名 |
| `showHeader` | `boolean` | `true` | 是否显示头部标题和控制按钮 |
| `autoPlayInterval` | `number` | `4000` | 自动播放间隔时间（毫秒） |
| `enableKeyboardNavigation` | `boolean` | `true` | 是否启用键盘导航 |

## 使用示例

### 基本使用
```jsx
<TechTimeline />
```

### 自定义样式
```jsx
<TechTimeline className="my-custom-timeline" />
```

### 隐藏头部
```jsx
<TechTimeline showHeader={false} />
```

### 自定义自动播放间隔
```jsx
<TechTimeline autoPlayInterval={6000} />
```

### 禁用键盘导航
```jsx
<TechTimeline enableKeyboardNavigation={false} />
```

### 完整配置
```jsx
<TechTimeline
  className="custom-timeline"
  showHeader={true}
  autoPlayInterval={5000}
  enableKeyboardNavigation={true}
/>
```

## 数据配置

时间轴数据定义在 `src/data/projects.js` 中：

### techTimelineData 结构
```javascript
export const techTimelineData = [
  {
    year: 2020,
    title: { en: "Programming Foundation", zh: "编程基础" },
    description: { en: "Started learning...", zh: "开始学习..." },
    technologies: [
      { 
        name: "React", 
        icon: "Atom", 
        category: "frontend", 
        level: "intermediate" 
      }
    ],
    milestone: true,
    color: "bg-blue-500"
  }
];
```

### 技术分类颜色
```javascript
export const techCategoryColors = {
  frontend: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  backend: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  // ... 更多分类
};
```

## 键盘快捷键

- `←` / `→` : 切换时间轴
- `空格键` : 播放/暂停自动播放

## 国际化支持

组件使用 `react-i18next` 进行国际化，相关翻译文本在：
- `src/i18n/locales/zh.json`
- `src/i18n/locales/en.json`

### 翻译键名
```json
{
  "about": {
    "timeline": {
      "title": "技术栈时间轴",
      "description": "探索我的技术学习历程和技能发展轨迹",
      "technologiesMastered": "掌握的技术",
      "play": "播放",
      "pause": "暂停",
      "keyboardHint": "使用 ←→ 键导航，空格键播放/暂停"
    }
  }
}
```

## 自定义样式

组件使用 Tailwind CSS 构建，可以通过 `className` 属性添加自定义样式：

```jsx
<TechTimeline className="shadow-2xl border-2 border-gray-200" />
```

## 依赖项

- `react` - React 核心库
- `react-i18next` - 国际化支持
- `framer-motion` - 动画效果
- `lucide-react` - 图标库
- `tailwindcss` - 样式框架

## 注意事项

1. 确保项目中已配置 `react-i18next`
2. 需要在 `src/data/projects.js` 中配置时间轴数据
3. 组件依赖 `src/components/ui` 中的基础组件
4. 键盘导航会在全局监听，注意避免冲突

## 扩展开发

### 添加新技术类别
1. 在 `techCategoryColors` 中添加新的颜色配置
2. 在时间轴数据中使用新的类别名称

### 添加新图标
1. 在组件的 `iconMap` 中添加新的图标映射
2. 在数据中使用对应的图标名称

### 自定义动画
组件使用 Framer Motion，可以通过修改 `motion.div` 的属性来自定义动画效果。 