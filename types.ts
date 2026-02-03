
export interface ColorOption {
  id: string;
  name: string;
  hex: string;
  imageUrl: string;
  description: string;
}

export interface Collection {
  id: string;
  name: string;
  subtitle: string;
  colors: ColorOption[];
}

export interface AppState {
  activeCollectionId: string;
  selectedColorId: string;
  isGeneratingTip: boolean;
  aiTip: string | null;
}
