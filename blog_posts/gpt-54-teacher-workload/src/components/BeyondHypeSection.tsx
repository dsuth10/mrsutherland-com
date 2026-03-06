import React from 'react';
import ScrollModule from './ScrollModule';
import { theme } from '../theme';

const t = theme.colors;

const ITEMS = [
  {
    title: 'Reliability matters more than capability.',
    body:
      "A tool that's impressive but unreliable creates more work. GPT-5.4's 33% reduction in false claims means teachers spend less time checking and correcting AI output.",
  },
  {
    title: 'Context windows matter.',
    body: (
      <>
        GPT-5.4 supports up to <strong style={{ color: t.accent }}>1 million tokens of context</strong>. For a teacher, this means the AI can work with an entire term's worth of assessment data, student notes, and curriculum documents all at once.
      </>
    ),
  },
  {
    title: 'Computer use changes the workflow.',
    body: (
      <>
        Previous AI tools could suggest what to write. GPT-5.4 can actually <em>do</em> the formatting, filing, and data entry. A teacher can now say "organise these assessment results by student and generate the required reports" and actually mean it.
      </>
    ),
  },
];

export const BeyondHypeSection: React.FC = () => (
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
          Beyond the Hype: What Teachers Actually Need
        </h2>
      </ScrollModule>
      <ScrollModule delay={50}>
        <ul className="space-y-8" style={{ color: t.textMuted }}>
          {ITEMS.map((item, i) => (
            <li key={i} className="flex gap-4">
              <span
                className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                style={{ backgroundColor: t.accent, color: t.bg }}
                aria-hidden
              >
                {i + 1}
              </span>
              <div>
                <strong
                  className="block mb-2"
                  style={{ color: t.text }}
                >
                  {item.title}
                </strong>
                <span className="text-lg leading-relaxed">{item.body}</span>
              </div>
            </li>
          ))}
        </ul>
      </ScrollModule>
    </div>
  </section>
);

export default BeyondHypeSection;
