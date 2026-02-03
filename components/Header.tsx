
import React from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { Collection } from '../types';

interface HeaderProps {
  collection: Collection;
  onOpenMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ collection, onOpenMenu }) => {
  return (
    <header className="px-6 py-8 md:py-12 max-w-4xl mx-auto text-center">
      <div className="inline-block mb-6">
        <button 
          onClick={onOpenMenu}
          className="flex items-center gap-2 px-4 py-1.5 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-full transition-colors group"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-semibold">
            Change Category
          </span>
          <ChevronDown className="w-3 h-3 text-stone-400 group-hover:text-stone-600 transition-transform group-hover:translate-y-0.5" />
        </button>
      </div>

      <h1 className="text-sm uppercase tracking-[0.3em] text-stone-500 font-medium mb-3">
        {collection.name}
      </h1>
      <h2 className="text-3xl md:text-5xl font-serif text-stone-800 mb-4 leading-tight">
        Experience Premium Texture
      </h2>
      <p className="text-stone-600 max-w-lg mx-auto mb-8 leading-relaxed font-light">
        {collection.subtitle}
      </p>
      <button 
        onClick={() => alert('Flyer download started...')}
        className="inline-flex items-center gap-2 px-6 py-3 border border-stone-300 rounded-full text-sm font-medium text-stone-700 hover:bg-stone-800 hover:text-white transition-all duration-300 group"
      >
        <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        Download Flyer
      </button>
    </header>
  );
};

export default Header;
