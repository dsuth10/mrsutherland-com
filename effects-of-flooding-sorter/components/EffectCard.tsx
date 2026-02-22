import React from 'react';
import { Effect } from '../types';

interface EffectCardProps {
  effect: Effect;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, id: string) => void;
}

const EffectCard: React.FC<EffectCardProps> = ({ effect, onDragStart }) => {
  return (
    <div
      id={effect.id}
      draggable
      onDragStart={(e) => onDragStart(e, effect.id)}
      className="bg-white p-4 m-2 rounded-lg shadow-md border border-gray-200 cursor-grab active:cursor-grabbing transition-shadow duration-200 hover:shadow-lg"
    >
      <div className="flex items-center justify-center gap-3">
        <span className="text-3xl" aria-hidden="true">{effect.icon}</span>
        <p className="text-gray-800 text-center flex-1">{effect.text}</p>
      </div>
    </div>
  );
};

export default EffectCard;
