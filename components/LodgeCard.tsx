import React from 'react';
import ImageWithFallback from './ImageWithFallback';

export interface LodgeProps {
  image: string;
  name: string;
  location: string;
  price: string;
  ecoScore: number;
  tags: string[];
}

const LodgeCard: React.FC<LodgeProps> = ({ image, name, location, price, ecoScore, tags }) => {
  return (
    <div className="group relative bg-white rounded-t-2xl rounded-b-md overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-72 overflow-hidden">
        <ImageWithFallback 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
        
        {/* Sustainability Badge */}
        <div className="absolute top-4 right-4 bg-sandstone/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
          <span className="material-symbols-outlined text-forest text-base">eco</span>
          <span className="text-forest font-bold text-sm">{ecoScore}/10</span>
        </div>

        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center gap-1 text-xs font-medium uppercase tracking-wider mb-1 opacity-90">
            <span className="material-symbols-outlined text-base">pin_drop</span>
            {location}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-forest mb-2 group-hover:text-earth transition-colors">{name}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span key={idx} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-sandstone text-earth rounded-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-end justify-between border-t border-sandstone/50 pt-4">
          <div>
            <span className="block text-xs text-gray-400">Starting from</span>
            <span className="text-lg font-bold text-earth">{price}</span>
            <span className="text-xs text-gray-400">/night</span>
          </div>
          <button className="text-forest font-medium text-sm hover:underline flex items-center gap-1">
            View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LodgeCard;