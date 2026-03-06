import React from 'react';
import { theme } from '../theme';

const t = theme.colors;

export const Hero: React.FC = () => (
  <section
    className="relative min-h-[85vh] flex flex-col justify-end pb-20 px-6 sm:px-12 lg:px-24"
    style={{
      background: `linear-gradient(165deg, ${t.bg} 0%, ${t.bgElevated} 45%, #0c4a6e 100%)`,
    }}
    aria-label="Article header"
  >
    <div className="absolute inset-0 opacity-20" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, ${t.accent}22 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${t.teal}22 0%, transparent 40%)`,
        }}
      />
    </div>
    <div className="relative z-10 max-w-4xl">
      <p
        className="text-sm font-semibold tracking-widest uppercase mb-4"
        style={{ color: t.accent }}
      >
        AI in Education
      </p>
      <h1
        className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight"
        style={{ color: t.text }}
      >
        GPT-5.4 and the Future of Teacher Workload
      </h1>
      <p
        className="mt-6 text-xl sm:text-2xl font-normal max-w-2xl leading-relaxed"
        style={{ color: t.textMuted }}
      >
        How the latest AI breakthrough could finally free teachers from the
        busy work that's eating their evenings.
      </p>
    </div>
  </section>
);

export default Hero;
