
import { Collection } from './types';

export const COLLECTIONS: Collection[] = [
  {
    id: 'polaris',
    name: 'POLARIS Collection',
    subtitle: 'Feel the exotic wood texture of Polaris; each of its seven tones offers a unique degree of warmth to your space.',
    colors: [
      {
        id: 'white',
        name: 'White',
        hex: '#F2F2F2',
        imageUrl: 'https://images.unsplash.com/photo-1581850518616-bcb8077fa2aa?auto=format&fit=crop&q=80&w=1600',
        description: 'A bright, crisp finish that opens up spaces with a clean Scandinavian feel.'
      },
      {
        id: 'cream',
        name: 'Cream',
        hex: '#F5E6D3',
        imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1600',
        description: 'Soft and inviting, Cream adds a gentle warmth to any room.'
      },
      {
        id: 'beige',
        name: 'Beige',
        hex: '#E1D4C0',
        imageUrl: 'https://images.unsplash.com/photo-1615876234886-fd9a39f005ae?auto=format&fit=crop&q=80&w=1600',
        description: 'The quintessential neutral, offering balanced warmth and versatility.'
      },
      {
        id: 'naturalle',
        name: 'Naturalle',
        hex: '#D2B48C',
        imageUrl: 'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=1600',
        description: 'Capturing the raw essence of exotic wood with authentic golden undertones.'
      },
      {
        id: 'taupe',
        name: 'Taupe',
        hex: '#A09081',
        imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600',
        description: 'Sophisticated and modern, blending grey and brown for a timeless aesthetic.'
      },
      {
        id: 'mokka',
        name: 'Mokka',
        hex: '#6F4E37',
        imageUrl: 'https://images.unsplash.com/photo-1617806118233-f8e137bc7289?auto=format&fit=crop&q=80&w=1600',
        description: 'Rich, deep, and luxurious. Mokka provides a dramatic, high-end anchor.'
      },
      {
        id: 'grey',
        name: 'Grey',
        hex: '#9CA3AF',
        imageUrl: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=1600',
        description: 'A contemporary staple with cool undertones, perfect for minimalist living.'
      }
    ]
  },
  {
    id: 'aurora',
    name: 'AURORA Collection',
    subtitle: 'Inspired by the northern lights, Aurora features wide oak planks with soft, ethereal gradients.',
    colors: [
      {
        id: 'nordic-ash',
        name: 'Nordic Ash',
        hex: '#E5E4E2',
        imageUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=1600',
        description: 'Pale and airy, mirroring the light of a winter morning.'
      },
      {
        id: 'honey-oak',
        name: 'Honey Oak',
        hex: '#C19A6B',
        imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600',
        description: 'Warm amber tones that bring a cozy, lived-in feel to large spaces.'
      },
      {
        id: 'smoked-timber',
        name: 'Smoked Timber',
        hex: '#4A4139',
        imageUrl: 'https://images.unsplash.com/photo-1600607687940-c52af096999c?auto=format&fit=crop&q=80&w=1600',
        description: 'A deep, charcoal-infused oak for bold architectural statements.'
      }
    ]
  },
  {
    id: 'stellar',
    name: 'STELLAR Series',
    subtitle: 'Precision-engineered for durability, the Stellar series offers industrial-grade textures with refined finishes.',
    colors: [
      {
        id: 'cosmic-grey',
        name: 'Cosmic Grey',
        hex: '#708090',
        imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1600',
        description: 'Cool, slate-inspired tones for a modern, tech-forward interior.'
      },
      {
        id: 'nebulous-tan',
        name: 'Nebulous Tan',
        hex: '#D2B48C',
        imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1600',
        description: 'Soft sandstone textures that bridge the gap between organic and industrial.'
      }
    ]
  }
];

export const SYSTEM_PROMPT = `You are an interior design expert. 
The user is viewing a premium flooring collection.
Provide a very short, poetic, and professional one-sentence design tip about why the selected color works well in a modern space.
Keep it under 25 words.`;
