import React from 'react';
import TechTimeline from './TechTimeline';

/**
 * TechTimeline 组件使用示例
 * 展示不同配置选项的使用方式
 */
const TechTimelineExample = () => {
  return (
    <div className="space-y-12 p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">TechTimeline 组件示例</h1>
        <p className="text-gray-600">展示不同配置选项的使用方式</p>
      </div>

      {/* 基本用法 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">基本用法</h2>
        <TechTimeline />
      </section>

      {/* 隐藏头部 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">隐藏头部标题</h2>
        <TechTimeline showHeader={false} />
      </section>

      {/* 自定义样式 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">自定义样式</h2>
        <TechTimeline 
          className="border-2 border-dashed border-gray-300 rounded-lg p-4"
        />
      </section>

      {/* 自定义自动播放间隔 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">快速自动播放 (2秒间隔)</h2>
        <TechTimeline autoPlayInterval={2000} />
      </section>

      {/* 禁用键盘导航 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">禁用键盘导航</h2>
        <TechTimeline enableKeyboardNavigation={false} />
      </section>

      {/* 完整配置 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">完整配置示例</h2>
        <TechTimeline
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6"
          showHeader={true}
          autoPlayInterval={5000}
          enableKeyboardNavigation={true}
        />
      </section>
    </div>
  );
};

export default TechTimelineExample; 