# Tailwind CSS v3 使用指南

## 📋 项目配置说明

本项目已配置为使用 **Tailwind CSS v3.4.0** 版本，以下是完整的配置信息：

### 🔧 核心配置文件

#### 1. `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 自定义颜色配置
        gray: { 50: '#f9fafb', 100: '#f3f4f6', ... },
        blue: { 50: '#eff6ff', 100: '#dbeafe', ... },
        // 更多颜色...
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      // 自定义阴影、动画等...
    },
  },
  plugins: [],
  darkMode: 'class',
}
```

#### 2. `postcss.config.js`
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

#### 3. `src/index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 自定义样式 */
@layer base {
  /* 基础样式 */
}

@layer components {
  /* 组件样式 */
}

@layer utilities {
  /* 工具类样式 */
}
```

## 🎨 样式修改方法

### 1. **直接使用 Tailwind 类名**
```jsx
// ✅ 推荐方式
<div className="bg-blue-50 border border-gray-300 rounded-lg p-6 shadow-lg">
  <h2 className="text-2xl font-bold text-gray-900 mb-4">标题</h2>
  <p className="text-gray-600 leading-relaxed">内容</p>
</div>
```

### 2. **条件样式（推荐）**
```jsx
// ✅ 使用函数式条件样式
const getButtonStyles = (variant) => {
  switch (variant) {
    case 'primary':
      return 'bg-blue-500 hover:bg-blue-600 text-white border-blue-500';
    case 'secondary':
      return 'bg-gray-200 hover:bg-gray-300 text-gray-800 border-gray-300';
    default:
      return 'bg-white hover:bg-gray-50 text-gray-900 border-gray-300';
  }
};

<button className={`px-4 py-2 rounded-lg border transition-colors ${getButtonStyles(variant)}`}>
  按钮
</button>
```

### 3. **自定义组件样式**
```jsx
// ✅ 在 @layer components 中定义
// src/index.css
@layer components {
  .card-custom {
    @apply bg-white border border-gray-200 rounded-xl shadow-sm p-6;
    @apply hover:shadow-md transition-shadow duration-200;
  }
  
  .card-custom-gradient {
    @apply bg-gradient-to-br from-blue-50 to-indigo-50;
    @apply border-blue-200 shadow-lg;
  }
}
```

## 🚨 重要注意事项

### ❌ 避免使用的方法

1. **不要使用 class-variance-authority**
```jsx
// ❌ 避免 - 可能导致样式冲突
import { cva } from 'class-variance-authority';
```

2. **不要使用 @theme 指令**
```css
/* ❌ 避免 - 这是 v4 语法 */
@theme {
  --color-custom: #ff0000;
}
```

3. **不要使用 @tailwindcss/vite 插件**
```javascript
// ❌ 避免 - 这是 v4 插件
import tailwindcss from '@tailwindcss/vite'
```

### ✅ 推荐做法

1. **使用传统的 Tailwind 类名**
2. **通过 tailwind.config.js 扩展主题**
3. **使用 @layer 指令自定义样式**
4. **使用条件样式函数**

## 🎯 常用样式模式

### 1. **卡片组件**
```jsx
// 基础卡片
<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6">
  内容
</div>

// 渐变卡片
<div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl shadow-lg p-6">
  内容
</div>

// 玻璃效果卡片
<div className="bg-white/90 backdrop-blur-sm border border-gray-200/70 rounded-xl shadow-md p-6">
  内容
</div>
```

### 2. **悬停效果**
```jsx
// 上升效果
<div className="hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
  内容
</div>

// 缩放效果
<div className="hover:scale-105 transition-transform duration-300">
  内容
</div>

// 发光效果
<div className="hover:shadow-blue-500/25 hover:border-blue-300 transition-all duration-300">
  内容
</div>
```

### 3. **响应式设计**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
  <div className="p-4 md:p-6 text-sm md:text-base">
    响应式内容
  </div>
</div>
```

## 🔄 如何添加新样式

### 1. **扩展颜色**
```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      brand: {
        50: '#eff6ff',
        500: '#3b82f6',
        900: '#1e3a8a',
      }
    }
  }
}
```

### 2. **添加自定义组件**
```css
/* src/index.css */
@layer components {
  .btn-brand {
    @apply bg-brand-500 hover:bg-brand-600 text-white;
    @apply px-4 py-2 rounded-lg font-medium;
    @apply transition-colors duration-200;
  }
}
```

### 3. **添加工具类**
```css
/* src/index.css */
@layer utilities {
  .text-gradient {
    @apply bg-gradient-to-r from-blue-600 to-purple-600;
    @apply bg-clip-text text-transparent;
  }
}
```

## 🛠️ 开发工具

### 1. **Tailwind CSS IntelliSense**
安装 VS Code 扩展：`bradlc.vscode-tailwindcss`

### 2. **类名自动补全**
配置 `settings.json`：
```json
{
  "tailwindCSS.includeLanguages": {
    "javascript": "javascript",
    "javascriptreact": "javascriptreact"
  }
}
```

### 3. **样式调试**
使用浏览器开发者工具查看生成的 CSS：
- 右键检查元素
- 查看 Computed 样式
- 使用 Tailwind 类名快速定位

## 🚀 最佳实践

### 1. **组件样式管理**
```jsx
// ✅ 推荐：使用常量管理样式
const CARD_STYLES = {
  base: 'rounded-xl border transition-all duration-200',
  variants: {
    default: 'bg-white border-gray-300 shadow-sm',
    gradient: 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg',
    glass: 'bg-white/90 backdrop-blur-sm border-gray-300/70 shadow-md',
  }
};

const Card = ({ variant = 'default', className = '', ...props }) => {
  return (
    <div 
      className={`${CARD_STYLES.base} ${CARD_STYLES.variants[variant]} ${className}`}
      {...props}
    />
  );
};
```

### 2. **样式复用**
```jsx
// ✅ 推荐：提取公共样式
const commonStyles = {
  card: 'bg-white border border-gray-200 rounded-xl shadow-sm p-6',
  button: 'px-4 py-2 rounded-lg font-medium transition-colors',
  input: 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500',
};
```

### 3. **性能优化**
```jsx
// ✅ 推荐：使用 CSS 变量处理动态样式
<div 
  className="bg-blue-500 opacity-75"
  style={{ '--opacity': dynamicOpacity }}
/>
```

## 📚 参考资源

- [Tailwind CSS v3 官方文档](https://tailwindcss.com/docs)
- [配置文件参考](https://tailwindcss.com/docs/configuration)
- [自定义样式指南](https://tailwindcss.com/docs/adding-custom-styles)
- [响应式设计](https://tailwindcss.com/docs/responsive-design)
- [深色模式](https://tailwindcss.com/docs/dark-mode)

---

💡 **提示**: 修改样式时，请重启开发服务器以确保配置更改生效：
```bash
npm run dev
``` 