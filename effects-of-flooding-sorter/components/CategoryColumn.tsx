import React, { useState } from 'react';
import { Effect, CategoryType } from '../types';
import EffectCard from './EffectCard';

interface CategoryColumnProps {
  category: { name: CategoryType; bgColor: string; borderColor: string; highlightColor: string; };
  effects: Effect[];
  onDrop: (categoryName: CategoryType) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, id: string) => void;
  isIncorrectDrop: boolean;
}

const CategoryColumn: React.FC<CategoryColumnProps> = ({ category, effects, onDrop, onDragStart, isIncorrectDrop }) => {
  const [isOver, setIsOver] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsOver(false);
    onDrop(category.name);
  };

  const incorrectDropClass = isIncorrectDrop ? 'border-red-500 animate-pulse' : category.borderColor;
  const dragOverClass = isOver ? category.highlightColor : category.bgColor;

  return (
    <div className={`flex-1 p-6 rounded-xl border-4 border-dashed transition-colors duration-300 ${dragOverClass} ${incorrectDropClass}`} style={{ minWidth: '280px' }}>
      <h2 className={`text-2xl font-bold text-center mb-4 ${category.borderColor.replace('border-','text-')}`}>{category.name}</h2>
      <div
        className="min-h-[400px] h-full"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {effects.map((effect) => (
          <EffectCard key={effect.id} effect={effect} onDragStart={onDragStart} />
        ))}
      </div>
    </div>
  );
};

export default CategoryColumn;
