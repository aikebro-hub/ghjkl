
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { COLLECTIONS } from '../constants';

interface CategoryMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (id: string) => void;
  activeId: string;
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({ isOpen, onClose, onSelect, activeId }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[2.5rem] p-8 z-[60] shadow-2xl max-h-[80vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-serif text-stone-800">Select Collection</h3>
              <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
                <X className="w-6 h-6 text-stone-400" />
              </button>
            </div>
            
            <div className="grid gap-4">
              {COLLECTIONS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    onSelect(c.id);
                    onClose();
                  }}
                  className={`p-6 rounded-2xl border text-left transition-all duration-300 ${
                    activeId === c.id 
                      ? 'border-stone-800 bg-stone-50 shadow-md ring-1 ring-stone-800' 
                      : 'border-stone-200 hover:border-stone-400 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs uppercase tracking-widest text-stone-400 font-medium">Collection</span>
                    {activeId === c.id && (
                      <span className="w-2 h-2 bg-stone-800 rounded-full" />
                    )}
                  </div>
                  <h4 className="text-lg font-serif text-stone-800 mb-1">{c.name}</h4>
                  <p className="text-sm text-stone-500 font-light line-clamp-2">{c.subtitle}</p>
                </button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CategoryMenu;
