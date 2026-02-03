
import React, { useState, useCallback, useMemo } from 'react';
import Header from './components/Header';
import SceneViewer from './components/SceneViewer';
import ColorSelector from './components/ColorSelector';
import CategoryMenu from './components/CategoryMenu';
import { COLLECTIONS, SYSTEM_PROMPT } from './constants';
import { GoogleGenAI } from '@google/genai';

const App: React.FC = () => {
  const [activeCollectionId, setActiveCollectionId] = useState<string>('polaris');
  const [selectedId, setSelectedId] = useState<string>('grey');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aiTip, setAiTip] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const activeCollection = useMemo(() => 
    COLLECTIONS.find(c => c.id === activeCollectionId) || COLLECTIONS[0]
  , [activeCollectionId]);

  const selectedColor = useMemo(() => 
    activeCollection.colors.find(c => c.id === selectedId) || activeCollection.colors[0]
  , [activeCollection, selectedId]);

  const handleCollectionChange = (collectionId: string) => {
    setActiveCollectionId(collectionId);
    const newCollection = COLLECTIONS.find(c => c.id === collectionId) || COLLECTIONS[0];
    setSelectedId(newCollection.colors[0].id); // Default to first color of new collection
    setAiTip(null);
  };

  const handleColorSelect = (id: string) => {
    setSelectedId(id);
    setAiTip(null); 
  };

  const generateDesignTip = useCallback(async () => {
    if (isGenerating) return;
    
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Provide a design tip for the "${selectedColor.name}" flooring from our ${activeCollection.name}. The description of this color is: "${selectedColor.description}"`,
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.7,
        }
      });

      const text = response.text || "This elegant tone brings a unique sense of balance to any modern living space.";
      setAiTip(text);
    } catch (error) {
      console.error('Failed to generate tip:', error);
      setAiTip(`${selectedColor.name} adds an unmistakable warmth to contemporary architecture.`);
    } finally {
      setIsGenerating(false);
    }
  }, [selectedColor, activeCollection, isGenerating]);

  return (
    <div className="min-h-screen pb-40">
      <Header 
        collection={activeCollection} 
        onOpenMenu={() => setIsMenuOpen(true)} 
      />
      
      <main className="mb-12">
        <SceneViewer 
          selectedColor={selectedColor} 
          aiTip={aiTip}
          isGenerating={isGenerating}
          onGetTip={generateDesignTip}
        />
      </main>

      <ColorSelector 
        colors={activeCollection.colors}
        selectedId={selectedId} 
        onSelect={handleColorSelect} 
      />

      <CategoryMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelect={handleCollectionChange}
        activeId={activeCollectionId}
      />

      {/* Decorative background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-30">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-stone-200 blur-3xl rounded-full" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-stone-100 blur-3xl rounded-full" />
      </div>
    </div>
  );
};

export default App;
