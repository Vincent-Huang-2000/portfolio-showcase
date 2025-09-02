import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui';
import { usePersonalInfo } from '../hooks/usePersonalInfo';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  User,
  Clock,
  Calendar,
  Code,
  Coffee,
  Star,
  Globe,
  MessageCircle,
  CheckCircle2
} from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();
  const { personalInfo } = usePersonalInfo();

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.email'),
      value: personalInfo.contact.email,
      href: `mailto:${personalInfo.contact.email}`
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      value: personalInfo.contact.phone,
      href: `tel:${personalInfo.contact.phone.replace(/\D/g, '')}`
    },
    {
      icon: MapPin,
      title: t('contact.location'),
      value: personalInfo.contact.location,
      href: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    { icon: Github, href: personalInfo.social.github.url, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.social.linkedin.url, label: 'LinkedIn' },
    { icon: Twitter, href: personalInfo.social.twitter.url, label: 'Twitter' }
  ];

  const workingHours = [
    { day: t('contact.workingHours.monday'), hours: personalInfo.workingHours.monday },
    { day: t('contact.workingHours.tuesday'), hours: personalInfo.workingHours.tuesday },
    { day: t('contact.workingHours.wednesday'), hours: personalInfo.workingHours.wednesday },
    { day: t('contact.workingHours.thursday'), hours: personalInfo.workingHours.thursday },
    { day: t('contact.workingHours.friday'), hours: personalInfo.workingHours.friday },
    { day: t('contact.workingHours.weekend'), hours: t('contact.workingHours.flexible') }
  ];

  const skills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'MongoDB', level: 80 },
    { name: 'PostgreSQL', level: 85 }
  ];

  const services = [
    { name: t('contact.services.webDevelopment'), icon: Code },
    { name: t('contact.services.mobileApp'), icon: MessageCircle },
    { name: t('contact.services.consulting'), icon: User },
    { name: t('contact.services.maintenance'), icon: CheckCircle2 }
  ];

  return (
    <div className="min-h-screen bg-blue-50 dark:bg-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Card variant="gradient" shadow="lg">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {t('contact.about.title')}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {t('contact.about.description')}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Coffee className="text-blue-600 dark:text-blue-400" size={20} />
                      <span className="text-gray-700 dark:text-gray-300">
                        {t('contact.about.coffeeLovers')}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="text-yellow-500" size={20} />
                      <span className="text-gray-700 dark:text-gray-300">
                        {t('contact.about.rating')}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                        <Icon size={32} className="text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {service.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('contact.info.title')}
              </h2>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    >
                      <Card hover="lift" className="cursor-pointer">
                        <CardContent className="p-6">
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                              <Icon size={24} className="text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{item.title}</h3>
                              <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
                            </div>
                          </a>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Skills Overview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card variant="outline">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code size={24} />
                    {t('contact.skills.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                            className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card variant="gradient" shadow="lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar size={24} />
                    {t('contact.workingHours.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {workingHours.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {item.day}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card variant="gradient" shadow="lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {t('contact.social.title')}
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((link, index) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={index}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-105"
                        >
                          <Icon size={20} />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card variant="outline" className="bg-blue-50 dark:bg-blue-900/20">
                <CardContent className="p-6 text-center">
                  <Clock size={32} className="text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t('contact.response.title')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('contact.response.description')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Card variant="outline" className="bg-green-50 dark:bg-green-900/20">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <Globe size={24} className="text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t('contact.availability.title')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('contact.availability.description')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 