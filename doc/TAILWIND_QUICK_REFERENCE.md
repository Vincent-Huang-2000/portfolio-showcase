# Tailwind CSS v3 快速参考

## 🎯 本项目Card组件用法

### Card 变体
```jsx
// 默认白色卡片
<Card variant="default" shadow="md" hover="lift" padding="md">

// 渐变卡片（技能展示）
<Card variant="gradient" shadow="lg" hover="lift" padding="md">

// 玻璃效果卡片
<Card variant="glass" shadow="md" hover="scale" padding="md">

// 多彩渐变卡片（CTA）
<Card variant="fresh" shadow="xl" hover="lift" padding="lg">

// 边框卡片
<Card variant="outline" shadow="sm" hover="glow" padding="md">
```

### 参数说明
- **variant**: `default` | `gradient` | `glass` | `fresh` | `outline`
- **shadow**: `none` | `sm` | `md` | `lg` | `xl`
- **hover**: `none` | `lift` | `scale` | `glow`
- **padding**: `none` | `sm` | `md` | `lg` | `xl`

## 🎨 常用样式类名

### 背景色
```css
bg-white           /* 白色 */
bg-gray-50         /* 浅灰色 */
bg-gray-100        /* 更深灰色 */
bg-blue-50         /* 浅蓝色 */
bg-blue-500        /* 蓝色 */
bg-gradient-to-r   /* 左到右渐变 */
bg-gradient-to-br  /* 左上到右下渐变 */
```

### 文字
```css
text-gray-900      /* 深色文字 */
text-gray-600      /* 中等灰色文字 */
text-blue-600      /* 蓝色文字 */
text-xl            /* 较大文字 */
text-2xl           /* 更大文字 */
font-bold          /* 粗体 */
font-medium        /* 中等粗细 */
leading-relaxed    /* 宽松行高 */
```

### 边框
```css
border             /* 默认边框 */
border-gray-200    /* 浅灰色边框 */
border-blue-300    /* 蓝色边框 */
border-2           /* 2px边框 */
rounded-lg         /* 圆角 */
rounded-xl         /* 更大圆角 */
```

### 阴影
```css
shadow-sm          /* 小阴影 */
shadow-md          /* 中等阴影 */
shadow-lg          /* 大阴影 */
shadow-xl          /* 超大阴影 */
shadow-2xl         /* 巨大阴影 */
```

### 间距
```css
p-4               /* 内边距 1rem */
p-6               /* 内边距 1.5rem */
p-8               /* 内边距 2rem */
m-4               /* 外边距 1rem */
space-y-4         /* 垂直间距 1rem */
gap-4             /* Grid/Flex间距 1rem */
```

### 布局
```css
flex              /* 弹性布局 */
grid              /* 网格布局 */
grid-cols-1       /* 1列网格 */
grid-cols-3       /* 3列网格 */
justify-center    /* 水平居中 */
items-center      /* 垂直居中 */
```

### 悬停效果
```css
hover:bg-blue-600        /* 悬停背景色 */
hover:shadow-lg          /* 悬停阴影 */
hover:-translate-y-2     /* 悬停上移 */
hover:scale-105          /* 悬停放大 */
transition-all           /* 过渡所有属性 */
duration-300            /* 过渡时间 */
```

## 🌙 深色模式

### 使用方法
```jsx
// 文字颜色
<p className="text-gray-900 dark:text-gray-100">
  自适应深色模式的文字
</p>

// 背景色
<div className="bg-white dark:bg-gray-800">
  自适应深色模式的背景
</div>

// 边框
<div className="border-gray-200 dark:border-gray-700">
  自适应深色模式的边框
</div>
```

## 📱 响应式设计

### 断点
```css
sm:   /* >= 640px */
md:   /* >= 768px */
lg:   /* >= 1024px */
xl:   /* >= 1280px */
```

### 使用示例
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <div className="p-4 md:p-6 text-sm md:text-base">
    响应式内容
  </div>
</div>
```

## 🎯 实用技巧

### 1. 条件样式
```jsx
const cardClass = `
  rounded-xl border transition-all duration-200
  ${isActive ? 'bg-blue-50 border-blue-300' : 'bg-white border-gray-200'}
  ${isHovered ? 'shadow-lg' : 'shadow-sm'}
`;
```

### 2. 样式常量
```jsx
const STYLES = {
  card: 'bg-white border border-gray-200 rounded-xl shadow-sm p-6',
  button: 'px-4 py-2 rounded-lg font-medium transition-colors',
  input: 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2',
};
```

### 3. 组合类名
```jsx
import clsx from 'clsx'; // 或者使用 classnames

const className = clsx(
  'base-styles',
  condition && 'conditional-styles',
  {
    'active-styles': isActive,
    'disabled-styles': isDisabled,
  }
);
```

## 🚀 项目特定样式

### 主题色
```jsx
// 主蓝色
bg-blue-50, bg-blue-500, text-blue-600

// 主灰色
bg-gray-50, bg-gray-800, text-gray-900

// 强调色
bg-purple-50, bg-green-50, text-purple-600
```

### 常用组合
```jsx
// 标准卡片
className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"

// 渐变按钮
className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all"

// 输入框
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
```

## 📋 检查清单

### 样式修改前
- [ ] 确认使用 Tailwind v3 语法
- [ ] 检查是否需要重启开发服务器
- [ ] 确认样式在 `tailwind.config.js` 中配置

### 样式修改后
- [ ] 检查深色模式适配
- [ ] 确认响应式效果
- [ ] 测试悬停和交互效果
- [ ] 验证在不同浏览器中的表现

## 🔧 故障排除

### 样式不生效？
1. 检查类名拼写是否正确
2. 确认 `tailwind.config.js` 中包含了相关文件
3. 重启开发服务器
4. 检查浏览器开发者工具中的样式

### 深色模式问题？
1. 确认使用 `dark:` 前缀
2. 检查 `tailwind.config.js` 中的 `darkMode: 'class'`
3. 确认父元素有 `dark` 类名

### 响应式问题？
1. 检查断点前缀使用正确
2. 确认从小屏幕到大屏幕的样式覆盖
3. 使用浏览器开发者工具测试不同屏幕尺寸

---

💡 **快速提醒**: 
- 优先使用 Tailwind 原生类名
- 避免使用 `class-variance-authority`
- 大量重复样式考虑提取到 `@layer components`
- 修改配置后记得重启开发服务器 