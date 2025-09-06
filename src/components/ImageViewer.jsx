import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Download, RotateCw } from 'lucide-react';

const ImageViewer = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = imageAlt || 'image';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={handleBackdropClick}
      >
        {/* 关闭按钮 */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        >
          <X size={24} className="text-white" />
        </motion.button>

        {/* 下载按钮 */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={handleDownload}
          className="absolute top-4 right-16 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        >
          <Download size={24} className="text-white" />
        </motion.button>

        {/* 图片容器 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            style={{ maxWidth: '90vw', maxHeight: '90vh' }}
          />
        </motion.div>

      </motion.div>
    </AnimatePresence>
  );
};

export default ImageViewer;
