import React, { useState, useEffect, useCallback } from 'react';
import { CategoryType, Effect } from './types';
import { CATEGORIES, EFFECTS } from './constants';
import CategoryColumn from './components/CategoryColumn';
import EffectCard from './components/EffectCard';

// Types for scoring
interface ScoreTracker {
  correct: number;
  incorrect: number;
}
type CategoryScores = Record<CategoryType, ScoreTracker>;
type CategorizedEffects = Record<CategoryType, Effect[]>;

// Helper functions
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Initial state constants
const initialCategorizedEffects: CategorizedEffects = {
  Social: [],
  Environmental: [],
  Economic: [],
};

const initialCategoryScores: CategoryScores = {
  Social: { correct: 0, incorrect: 0 },
  Environmental: { correct: 0, incorrect: 0 },
  Economic: { correct: 0, incorrect: 0 },
};

// Notification Component
const Notification: React.FC<{ message: string; onClose: () => void }> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000); // Auto-close after 5 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 w-11/12 max-w-lg bg-white p-4 rounded-lg shadow-2xl border-l-8 border-green-500 z-50 transition-transform duration-300 transform animate-bounce">
        <div className="flex items-start">
            <div className="flex-shrink-0">
                <span className="text-2xl">💡</span>
            </div>
            <div className="ml-3 flex-1">
                <p className="text-lg font-bold text-green-800">Why is it correct?</p>
                <p className="text-md text-gray-700 mt-1">{message}</p>
            </div>
            <div className="ml-4 flex-shrink-0 flex">
                <button onClick={onClose} className="inline-flex text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Close</span>
                    &times;
                </button>
            </div>
        </div>
    </div>
  );
};


// SuccessModal Component
const SuccessModal: React.FC<{ 
  onPlayAgain: () => void; 
  score: number; 
  categoryScores: CategoryScores;
}> = ({ onPlayAgain, score, categoryScores }) => {

  const FeedbackSection = () => {
    // Fix: Explicitly type `scores` to resolve properties `correct` and `incorrect`.
    const feedback = Object.entries(categoryScores).map(([category, scores]: [string, ScoreTracker]) => {
      let message;
      let colorClass;
      if (scores.incorrect === 0 && scores.correct > 0) {
        message = "Excellent job!";
        colorClass = "text-green-600 font-semibold";
      } else if (scores.incorrect > 0) {
        message = "Needs some review.";
        colorClass = "text-yellow-600 font-semibold";
      } else {
        message = "No items placed here.";
        colorClass = "text-gray-500";
      }

      return (
        <li key={category} className="py-2 px-3 border-b border-gray-200 last:border-b-0 flex justify-between items-center">
          <div>
            <strong className="font-semibold text-gray-700">{category}:</strong>
            <span className="ml-2 text-gray-600">{scores.correct} correct, {scores.incorrect} incorrect.</span>
          </div>
          <span className={colorClass}>{message}</span>
        </li>
      );
    });

    return (
      <div className="mt-6 text-left w-full max-w-md mx-auto">
        <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Detailed Feedback</h3>
        <ul className="bg-gray-50 p-2 rounded-lg border border-gray-200">{feedback}</ul>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl text-center transform transition-all scale-100 max-w-2xl w-full">
        <h2 className="text-4xl font-bold text-green-600 mb-2">Activity Complete!</h2>
        <p className="text-3xl font-bold text-indigo-600 my-4">Final Score: {score}</p>
        <FeedbackSection />
        <button
          onClick={onPlayAgain}
          className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-xl transition-transform duration-200 hover:scale-105"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

// Main App Component
export default function App() {
  const [unassignedEffects, setUnassignedEffects] = useState<Effect[]>([]);
  const [categorizedEffects, setCategorizedEffects] = useState<CategorizedEffects>(initialCategorizedEffects);
  const [draggedItemId, setDraggedItemId] = useState<string | null>(null);
  const [incorrectDrop, setIncorrectDrop] = useState<CategoryType | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [categoryScores, setCategoryScores] = useState<CategoryScores>(initialCategoryScores);
  const [notification, setNotification] = useState<string | null>(null);

  const initializeGame = useCallback(() => {
    setUnassignedEffects(shuffleArray(EFFECTS));
    setCategorizedEffects(initialCategorizedEffects);
    setIsComplete(false);
    setDraggedItemId(null);
    setScore(0);
    setCategoryScores(initialCategoryScores);
    setNotification(null);
  }, []);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  useEffect(() => {
    if (unassignedEffects.length === 0 && EFFECTS.length > 0) {
      // Fix: Explicitly type `arr` to resolve `length` property.
      const hasPlacedItems = Object.values(categorizedEffects).some((arr: Effect[]) => arr.length > 0);
      if (hasPlacedItems) {
        setIsComplete(true);
      }
    }
  }, [unassignedEffects, categorizedEffects]);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    setDraggedItemId(id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDrop = (targetCategory: CategoryType) => {
    if (!draggedItemId) return;

    const effect = EFFECTS.find((e) => e.id === draggedItemId);
    if (!effect) return;

    if (effect.category === targetCategory) {
      // Correct drop
      setScore(prev => prev + 10);
      setCategoryScores(prev => ({ 
        ...prev, 
        [targetCategory]: { ...prev[targetCategory], correct: prev[targetCategory].correct + 1 } 
      }));
      setUnassignedEffects((prev) => prev.filter((e) => e.id !== draggedItemId));
      setCategorizedEffects((prev) => ({
        ...prev,
        [targetCategory]: [...prev[targetCategory], effect],
      }));
      setNotification(effect.explanation);
    } else {
      // Incorrect drop
      setScore(prev => prev - 5);
      setCategoryScores(prev => ({ 
        ...prev, 
        [targetCategory]: { ...prev[targetCategory], incorrect: prev[targetCategory].incorrect + 1 } 
      }));
      setIncorrectDrop(targetCategory);
      setTimeout(() => setIncorrectDrop(null), 500);
    }
    setDraggedItemId(null);
  };
  
  const handleUnassignedDrop = () => {
      if (!draggedItemId) return;
      
      const effect = categorizedEffects.Social.find(e => e.id === draggedItemId) || 
                     categorizedEffects.Environmental.find(e => e.id === draggedItemId) || 
                     categorizedEffects.Economic.find(e => e.id === draggedItemId);

      if (effect) {
          setCategorizedEffects(prev => {
              const newCategorized = {...prev};
              (Object.keys(newCategorized) as CategoryType[]).forEach(cat => {
                  newCategorized[cat] = newCategorized[cat].filter(e => e.id !== draggedItemId);
              });
              return newCategorized;
          });
          setUnassignedEffects(prev => [...prev, effect]);
      }
      setDraggedItemId(null);
  }

  const [isOverUnassigned, setIsOverUnassigned] = useState(false);

  return (
    <div className="min-h-screen bg-sky-50 font-sans w-full" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', padding: '2rem 1rem' }}>
      {notification && <Notification message={notification} onClose={() => setNotification(null)} />}
      {isComplete && <SuccessModal onPlayAgain={initializeGame} score={score} categoryScores={categoryScores} />}
      <header className="text-center mb-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800">Effects of Flooding</h1>
        <p className="text-lg text-slate-600 mt-2">Drag each effect into the correct category.</p>
      </header>
      
      <div className="text-center mb-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg max-w-md mx-auto">
        <h3 className="text-xl font-bold text-blue-800 mb-2">Scoring Rules</h3>
        <div className="flex justify-center items-center gap-6">
          <p className="text-lg text-green-700 font-semibold">
            <span role="img" aria-label="correct checkmark" className="mr-1">✅</span>
            Correct: <span className="font-bold">+10</span> Points
          </p>
          <p className="text-lg text-red-700 font-semibold">
            <span role="img" aria-label="incorrect cross mark" className="mr-1">❌</span>
            Incorrect: <span className="font-bold">-5</span> Points
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-8 mb-6">
        <div className="text-2xl font-bold bg-white px-6 py-2 rounded-full shadow-md text-indigo-600">
            Score: {score}
        </div>
        <button
            onClick={initializeGame}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform duration-200 hover:scale-105"
        >
            Reset Game
        </button>
      </div>

      <main className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-[95vw] mx-auto" style={{ maxWidth: 'none', width: '95%' }}>
        <div 
          className={`lg:col-span-1 p-6 rounded-xl border-4 border-dashed transition-colors duration-300 ${isOverUnassigned ? 'bg-gray-200' : 'bg-gray-100'} border-gray-400`}
          onDragOver={(e) => { e.preventDefault(); setIsOverUnassigned(true); }}
          onDragLeave={() => setIsOverUnassigned(false)}
          onDrop={handleUnassignedDrop}
        >
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">Effects</h2>
          <div className="min-h-[400px] h-full">
            {unassignedEffects.map((effect) => (
              <EffectCard key={effect.id} effect={effect} onDragStart={handleDragStart} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <CategoryColumn
              key={cat.name}
              category={cat}
              effects={categorizedEffects[cat.name]}
              onDrop={handleDrop}
              onDragStart={handleDragStart}
              isIncorrectDrop={incorrectDrop === cat.name}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
