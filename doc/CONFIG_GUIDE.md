# 个人信息配置指南

## 📋 概述

这个作品集网站现在支持通过一个单独的JSON配置文件来管理所有个人信息，无需修改多个代码文件。

## 📁 配置文件位置

配置文件位于: `src/config/personal-info.json`

## 🔧 配置说明

### 基本个人信息
```json
{
  "personal": {
    "name": "Your Name",                    // 姓名
    "title": {                              // 职位标题
      "en": "Full Stack Developer",
      "zh": "全栈开发者"
    },
    "avatar": {                             // 头像设置
      "letter": "Y",                        // 头像字母
      "color": "bg-blue-500"               // 头像颜色 (Tailwind CSS 类)
    },
    "description": {                        // 个人描述
      "en": "English description",
      "zh": "中文描述"
    }
  }
}
```

### 联系信息
```json
{
  "contact": {
    "email": "your.email@example.com",     // 邮箱地址
    "phone": "+1 (555) 123-4567",          // 电话号码
    "location": "Your City, State",         // 位置
    "experience": "X+ Years"                // 工作经验
  }
}
```

### 社交媒体链接
```json
{
  "social": {
    "github": {
      "url": "https://github.com/yourusername",
      "username": "yourusername"
    },
    "linkedin": {
      "url": "https://linkedin.com/in/yourusername",
      "username": "yourusername"
    },
    "twitter": {
      "url": "https://twitter.com/yourusername",
      "username": "yourusername"
    }
  }
}
```

### 工作经历
```json
{
  "experience": [
    {
      "title": {
        "en": "Job Title",
        "zh": "职位名称"
      },
      "company": {
        "en": "Company Name",
        "zh": "公司名称"
      },
      "period": {
        "en": "2022 - Present",
        "zh": "2022 - 至今"
      },
      "description": {
        "en": "Job description",
        "zh": "工作描述"
      }
    }
  ]
}
```

### 教育背景
```json
{
  "education": [
    {
      "degree": {
        "en": "Degree Name",
        "zh": "学位名称"
      },
      "school": {
        "en": "School Name",
        "zh": "学校名称"
      },
      "period": {
        "en": "2016 - 2020",
        "zh": "2016 - 2020"
      },
      "description": {
        "en": "Education description",
        "zh": "教育描述"
      }
    }
  ]
}
```

### 简历信息
```json
{
  "resume": {
    "filename": "Your_Resume.pdf",          // 简历文件名
    "path": "/resume.pdf",                  // 简历文件路径
    "size": "2.1 MB",                       // 文件大小
    "pages": 2,                             // 页数
    "lastUpdated": "Jan 2024"               // 最后更新时间
  }
}
```

### 工作时间
```json
{
  "workingHours": {
    "monday": "9:00 AM - 6:00 PM",
    "tuesday": "9:00 AM - 6:00 PM",
    "wednesday": "9:00 AM - 6:00 PM",
    "thursday": "9:00 AM - 6:00 PM",
    "friday": "9:00 AM - 6:00 PM",
    "weekend": "flexible"
  }
}
```

### 可用性状态
```json
{
  "availability": {
    "status": "available",                  // 状态: "available" 或 "unavailable"
    "message": {
      "en": "Currently available for new projects",
      "zh": "目前可接受新项目合作"
    }
  },
  "response": {
    "time": "24 hours",                     // 响应时间
    "message": {
      "en": "I usually respond within 24 hours",
      "zh": "我通常会在24小时内回复"
    }
  }
}
```

## 🚀 快速开始

1. **修改邮箱地址**:
   ```json
   "contact": {
     "email": "your.new.email@example.com"
   }
   ```

2. **更新社交媒体链接**:
   ```json
   "social": {
     "github": {
       "url": "https://github.com/yournewusername",
       "username": "yournewusername"
     }
   }
   ```

3. **修改个人信息**:
   ```json
   "personal": {
     "name": "Your New Name",
     "title": {
       "en": "Your New Title",
       "zh": "您的新职位"
     }
   }
   ```

## 📝 注意事项

1. **JSON格式**: 确保JSON格式正确，注意逗号和括号的匹配
2. **双语支持**: 所有文本内容都支持中英文双语
3. **图片路径**: 简历文件需要放在 `public` 目录中
4. **颜色类**: 头像颜色使用 Tailwind CSS 类名 (如: `bg-blue-500`)
5. **特殊字符**: 在JSON中使用特殊字符时需要转义

## 🔄 即时生效

修改配置文件后，开发服务器会自动重新加载，更改立即生效。

## 📞 影响的页面

配置文件会影响以下页面:
- 🏠 **首页**: 个人信息和描述
- 👤 **关于我**: 联系信息、工作经历、教育背景
- 📧 **联系方式**: 联系信息和社交媒体链接
- 📄 **简历**: 简历文件信息和下载链接

## 🛠️ 自定义扩展

如果需要添加新的配置项，您可以:

1. 在 `personal-info.json` 中添加新字段
2. 在 `usePersonalInfo.js` Hook 中添加对应的处理逻辑
3. 在相应的页面组件中使用新的配置

## 📋 示例配置

查看 `src/config/personal-info.json` 文件获取完整的配置示例。

---

现在您可以通过修改一个JSON文件来更新整个作品集网站的个人信息！🎉 