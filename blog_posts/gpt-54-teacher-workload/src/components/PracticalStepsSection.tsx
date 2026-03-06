import React from 'react';
import ScrollModule from './ScrollModule';
import { theme } from '../theme';

const t = theme.colors;

const STEPS = [
  {
    n: 1,
    title: 'Start small.',
    body: 'Use AI for one administrative task this week. See how it goes.',
  },
  {
    n: 2,
    title: 'Focus on busy work first.',
    body: 'Data entry, formatting, routine communications—these are the biggest time sinks and where AI now excels.',
  },
  {
    n: 3,
    title: 'Trust but verify.',
    body: "The 33% improvement in accuracy matters, but you're still the expert on your students.",
  },
  {
    n: 4,
    title: 'Share what works.',
    body: 'Teacher networks are where the best practices emerge.',
  },
];

export const PracticalStepsSection: React.FC = () => (
  <section
    className="py-20 px-6 sm:px-12 lg:px-24"
    style={{ backgroundColor: t.bg }}
  >
    <div className="max-w-4xl mx-auto">
      <ScrollModule>
        <h2
          className="font-serif text-3xl sm:text-4xl font-normal mb-8"
          style={{ color: t.text }}
        >
          What This Means for Your Classroom
        </h2>
        <p className="text-lg mb-10" style={{ color: t.textMuted }}>
          The practical steps are straightforward:
        </p>
      </ScrollModule>
      <ScrollModule delay={80}>
        <ol className="space-y-6 list-none">
          {STEPS.map(({ n, title, body }) => (
            <li key={n} className="flex gap-4">
              <span
                className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-serif text-xl font-normal transition-transform hover:scale-105"
                style={{
                  backgroundColor: t.bgElevated,
                  color: t.accent,
                  border: `2px solid ${t.accent}`,
                }}
                aria-hidden
              >
                {n}
              </span>
              <div>
                <strong
                  className="text-lg block"
                  style={{ color: t.text }}
                >
                  {title}
                </strong>
                <p className="mt-1" style={{ color: t.textMuted }}>
                  {body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </ScrollModule>
      <ScrollModule delay={150}>
        <p
          className="text-xl mt-12 font-medium"
          style={{ color: t.text }}
        >
          The technology is ready. The question is how we choose to use it.
        </p>
      </ScrollModule>
    </div>
  </section>
);

export default PracticalStepsSection;
