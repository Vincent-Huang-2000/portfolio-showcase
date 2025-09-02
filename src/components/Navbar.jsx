import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button, Select } from './ui';
import { 
  Menu, 
  X, 
  Globe,
  Home,
  User,
  Code,
  Mail,
  FileText
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const navigation = [
    { name: 'nav.home', href: '/', icon: Home },
    { name: 'nav.about', href: '/about', icon: User },
    { name: 'nav.projects', href: '/projects', icon: Code },
    { name: 'nav.contact', href: '/contact', icon: Mail },
  ];

  const languageOptions = [
    { label: 'Eng', value: 'en' },
    { label: '中文', value: 'zh' }
  ];

  const toggleLanguage = (newLang) => {
    i18n.changeLanguage(newLang);
  };

  const isActiveRoute = (href) => {
    return location.pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-gray-900">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActiveRoute(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <Icon size={16} />
                  <span>{t(item.name)}</span>
                </Link>
              );
            })}
          </div>

          {/* Language Toggle and Resume Button */}
          <div className="flex items-center space-x-4">
            {/* Language Select */}
            <Select
              value={i18n.language}
              onChange={toggleLanguage}
              options={languageOptions}
              className="w-24"
              buttonClassName="text-sm py-2"
            />

            {/* Resume Button */}
            <Link to="/resume" className="hidden md:block">
              <Button
                variant="default"
                size="sm"
                leftIcon={<FileText size={16} />}
              >
                {t('common.downloadResume')}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActiveRoute(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <Icon size={18} />
                  <span>{t(item.name)}</span>
                </Link>
              );
            })}
            <Link
              to="/resume"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-2"
            >
              <Button
                variant="default"
                size="sm"
                leftIcon={<FileText size={18} />}
                className="w-full"
              >
                {t('common.downloadResume')}
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar; 