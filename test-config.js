// 测试配置文件读取功能
const fs = require('fs');
const path = require('path');

try {
  // 读取配置文件
  const configPath = path.join(__dirname, 'src', 'config', 'personal-info.json');
  const configData = fs.readFileSync(configPath, 'utf8');
  const config = JSON.parse(configData);
  
  console.log('✅ 配置文件读取成功！');
  console.log('📧 邮箱地址:', config.personal.contact.email);
  console.log('📱 电话号码:', config.personal.contact.phone);
  console.log('📍 位置:', config.personal.contact.location);
  console.log('🏢 经验:', config.personal.contact.experience);
  console.log('👤 姓名:', config.personal.name);
  console.log('💼 职位 (英文):', config.personal.title.en);
  console.log('💼 职位 (中文):', config.personal.title.zh);
  console.log('🌐 GitHub:', config.social.github.url);
  console.log('🔗 LinkedIn:', config.social.linkedin.url);
  console.log('🐦 Twitter:', config.social.twitter.url);
  console.log('📄 简历文件名:', config.resume.filename);
  console.log('📄 简历大小:', config.resume.size);
  
  console.log('\n🎉 所有配置项都可以正常读取！');
  console.log('现在您可以通过修改 src/config/personal-info.json 来更新网站信息。');
  
} catch (error) {
  console.error('❌ 配置文件读取失败:', error.message);
} 