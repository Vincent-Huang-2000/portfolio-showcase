import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, Button } from '../components/ui';
import { usePersonalInfo } from '../hooks/usePersonalInfo';
import { 
  Code, 
  Palette, 
  Zap, 
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download
} from 'lucide-react';

const Home = () => {
  const { t, i18n } = useTranslation();
  const { personalInfo } = usePersonalInfo();

  const getLocalizedText = (key) => {
    const text = t(key);
    if (text === key) {
      // 如果翻译不存在，返回默认英文
      const defaultTexts = {
        'home.welcome': 'Welcome to My Portfolio',
        'home.skills.fullstack': 'Full Stack Development',
        'home.skills.fullstack.desc': 'End-to-end web development with modern technologies',
        'home.skills.design': 'UI/UX Design',
        'home.skills.design.desc': 'Creating beautiful and intuitive user experiences',
        'home.skills.performance': 'Performance Optimization',
        'home.skills.performance.desc': 'Building fast and efficient web applications',
        'home.cta.title': 'Let\'s Work Together',
        'home.cta.subtitle': 'Ready to bring your ideas to life? Let\'s discuss your next project.',
        'home.cta.contact': 'Get in Touch',
        'home.cta.projects': 'View My Work',
        'home.whatIDo': 'What I Do',
        'home.whatIDoDesc': 'I specialize in creating comprehensive digital solutions that combine functionality with exceptional user experience.',
        'home.downloadResume': 'Download Resume'
      };
      return defaultTexts[key] || key;
    }
    return text;
  };

  const skills = [
    {
      icon: Code,
      title: getLocalizedText('home.skills.fullstack'),
      description: getLocalizedText('home.skills.fullstack.desc'),
      color: 'bg-blue-500'
    },
    {
      icon: Palette,
      title: getLocalizedText('home.skills.design'),
      description: getLocalizedText('home.skills.design.desc'),
      color: 'bg-purple-500'
    },
    {
      icon: Zap,
      title: getLocalizedText('home.skills.performance'),
      description: getLocalizedText('home.skills.performance.desc'),
      color: 'bg-yellow-500'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' }
  ];

  return (
    <div className="min-h-screen bg-blue-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                {getLocalizedText('home.welcome')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {personalInfo.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link to="/about">
                <Button
                  variant="default"
                  size="lg"
                  rightIcon={<ArrowRight size={20} />}
                  className="w-full sm:w-auto"
                >
                  {getLocalizedText('home.cta.contact')}
                </Button>
              </Link>
              <Link to="/projects">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {getLocalizedText('home.cta.projects')}
                </Button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center space-x-6"
            >
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {getLocalizedText('home.whatIDo')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {getLocalizedText('home.whatIDoDesc')}
            </p>
          </motion.div>

          {/* Skills Display Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon; // Get skill icon
              return (
                <motion.div
                  key={index} // Use index as unique key
                  initial={{ opacity: 0, y: 20 }} // Initial state: opacity 0, offset 20px down
                  animate={{ opacity: 1, y: 0 }} // Animation state: opacity 1, back to original position
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }} // Animation duration and delay
                >
                  <Card variant="gradient" shadow="lg" hover="lift"> {/* Render card */}
                    <CardContent className="text-center p-8"> {/* Card content */}
                      <div className={`w-16 h-16 rounded-full ${skill.color} flex items-center justify-center mx-auto mb-6`}>
                        <Icon size={32} className="text-white" /> {/* Display skill icon */}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        {skill.title} {/* Display skill title */}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {skill.description} {/* Display skill description */}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Card variant="default" shadow="xl" className="text-center">
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {getLocalizedText('home.cta.title')}
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  {getLocalizedText('home.cta.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/about">
                    <Button
                      variant="default"
                      size="lg"
                      rightIcon={<Mail size={20} />}
                      className="w-full sm:w-auto"
                    >
                      {getLocalizedText('home.cta.contact')}
                    </Button>
                  </Link>
                  <Link to="/resume">
                    <Button
                      variant="outline"
                      size="lg"
                      rightIcon={<Download size={20} />}
                      className="w-full sm:w-auto"
                                          >
                        {getLocalizedText('home.downloadResume')}
                      </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 