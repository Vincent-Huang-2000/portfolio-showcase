import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { Card, CardContent, Input, Button, Select } from '../components/ui';
import { Search, Filter, X, Code, Globe, Database, BarChart3 } from 'lucide-react';

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    { label: t('projects.categories.all'), value: 'all' },
    { label: t('projects.categories.frontend'), value: 'frontend' },
    { label: t('projects.categories.fullstack'), value: 'fullstack' },
    { label: t('projects.categories.dataScience'), value: 'dataScience' }
  ];

  const getLocalizedText = (textObj) => {
    return textObj[i18n.language] || textObj.en;
  };

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = 
        getLocalizedText(project.title).toLowerCase().includes(searchTerm.toLowerCase()) ||
        getLocalizedText(project.description).toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, i18n.language]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
  };

  const statistics = [
    {
      icon: Code,
      value: projects.length,
      label: t('projects.statistics.totalProjects'),
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Globe,
      value: projects.filter(p => p.category === 'frontend').length,
      label: t('projects.statistics.frontend'),
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: Database,
      value: projects.filter(p => p.category === 'fullstack').length,
      label: t('projects.statistics.fullstack'),
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: BarChart3,
      value: projects.filter(p => p.category === 'dataScience').length,
      label: t('projects.statistics.dataScience'),
      color: 'text-orange-600 dark:text-orange-400'
    }
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
            {t('projects.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            {t('projects.description')}
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 relative z-[10000]"
        >
          <Card variant="glass" shadow="lg" className="overflow-visible">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search Input */}
                <div className="flex-1 max-w-md lg:max-w-lg">
                  <Input
                    type="text"
                    placeholder={t('projects.searchPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    leftIcon={<Search size={16} />}
                    className="w-full"
                  />
                </div>

                {/* Filter Button (Mobile) */}
                <Button
                  variant="default"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="lg:hidden"
                  leftIcon={<Filter size={16} />}
                >
                  {t('projects.filter')}
                </Button>

                {/* Category Filter (Desktop) */}
                <div className="hidden lg:block relative z-[9999]">
                  <Select
                    value={selectedCategory}
                    onChange={setSelectedCategory}
                    options={categories}
                    className="w-40"
                  />
                </div>
              </div>

              {/* Mobile Filter Menu */}
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="lg:hidden mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 relative z-[9999]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t('projects.filterByCategory')}</h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsFilterOpen(false)}
                    >
                      <X size={16} />
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {categories.map((category) => (
                      <Button
                        key={category.value}
                        variant={selectedCategory === category.value ? "default" : "outline"}
                        onClick={() => {
                          setSelectedCategory(category.value);
                          setIsFilterOpen(false);
                        }}
                        className="justify-center"
                      >
                        {category.label}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Card variant="outline" className="max-w-md mx-auto">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
                  <Search size={32} className="text-gray-400" />
                </div>
                <div className="space-y-3 mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {t('projects.noProjects')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {t('projects.noProjectsDescription')}
                  </p>
                </div>
                <Button
                  variant="default"
                  onClick={clearFilters}
                >
                  {t('projects.clearFilters')}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              >
                <Card variant="gradient" shadow="lg" hover="lift">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <Icon size={24} className={stat.color} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects; 