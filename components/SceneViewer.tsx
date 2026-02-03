
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ColorOption } from '../types';
import { Sparkles } from 'lucide-react';

interface SceneViewerProps {
  selectedColor: ColorOption;
  aiTip: string | null;
  isGenerating: boolean;
  onGetTip: () => void;
}

const SceneViewer: React.FC<SceneViewerProps> = ({ selectedColor, aiTip, isGenerating, onGetTip }) => {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 md:px-0 h-[50vh] md:h-[65vh]">
      <div className="w-full h-full bg-stone-200 rounded-2xl overflow-hidden shadow-2xl relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={selectedColor.id}
            src={selectedColor.imageUrl}
            alt={`${selectedColor.name} flooring scene`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Info Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        
        <motion.div 
          key={`info-${selectedColor.id}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-6 left-6 text-white"
        >
          <h3 className="text-2xl font-serif mb-1">{selectedColor.name}</h3>
          <p className="text-sm font-light opacity-90">{selectedColor.description}</p>
        </motion.div>

        {/* AI Vibe Check Button */}
        <button
          onClick={onGetTip}
          disabled={isGenerating}
          className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-4 py-2 text-xs font-medium flex items-center gap-2 hover:bg-white/20 transition-colors"
        >
          <Sparkles className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''}`} />
          {isGenerating ? 'Analyzing Vibe...' : 'Interior Tip'}
        </button>
      </div>

      {/* AI Tip Bubble */}
      <AnimatePresence>
        {aiTip && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] max-w-md bg-stone-900/90 backdrop-blur-xl text-white p-4 rounded-xl shadow-xl z-20 text-center text-sm italic font-light"
          >
            {aiTip}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SceneViewer;
