
import React from 'react';
import { motion } from 'framer-motion';
import { ColorOption } from '../types';

interface ColorSelectorProps {
  colors: ColorOption[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ colors, selectedId, onSelect }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-stone-200 pb-8 pt-6 z-30">
      <div className="max-w-4xl mx-auto px-6 overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-start md:justify-center gap-6 md:gap-10 pb-2 min-w-max">
          {colors.map((color) => {
            const isSelected = selectedId === color.id;
            
            return (
              <button
                key={color.id}
                onClick={() => onSelect(color.id)}
                className="flex flex-col items-center gap-3 transition-transform active:scale-95 group"
              >
                <div className="relative">
                  {isSelected && (
                    <motion.div
                      layoutId="outline"
                      className="absolute -inset-1.5 border border-stone-800 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div
                    style={{ backgroundColor: color.hex }}
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-full shadow-inner border border-stone-200 transition-all duration-300 ${
                      isSelected ? 'scale-110 shadow-lg' : 'hover:scale-105'
                    }`}
                  />
                </div>
                <span className={`text-[10px] md:text-xs uppercase tracking-widest transition-colors ${
                  isSelected ? 'text-stone-900 font-semibold' : 'text-stone-400 group-hover:text-stone-600'
                }`}>
                  {color.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ColorSelector;
