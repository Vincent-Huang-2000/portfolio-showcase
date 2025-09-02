import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Copyright */}
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p className="flex items-center justify-center space-x-1">
              <span>&copy; {new Date().getFullYear()} Portfolio.</span>
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>using React & Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 