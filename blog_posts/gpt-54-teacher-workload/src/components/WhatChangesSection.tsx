import React from 'react';
import ScrollModule from './ScrollModule';
import { theme } from '../theme';

const t = theme.colors;

const TABLE_ROWS: [string, string][] = [
  ['Professional work tasks (GDPval)', '83% vs 71%'],
  ['Spreadsheet modelling tasks', '87% vs 68%'],
  ['Computer use (OSWorld)', '75% vs 47%'],
  ['Factual accuracy', '33% fewer false claims'],
  ['Error rate', '18% fewer errors'],
];

export const WhatChangesSection: React.FC = () => (
  <section
    className="py-20 px-6 sm:px-12 lg:px-24"
    style={{ backgroundColor: t.bg }}
  >
    <div className="max-w-5xl mx-auto">
      <ScrollModule>
        <h2
          className="font-serif text-3xl sm:text-4xl font-normal mb-6"
          style={{ color: t.text }}
        >
          What Actually Changes in a Classroom
        </h2>
        <p
          className="text-lg mb-8 max-w-3xl"
          style={{ color: t.textMuted }}
        >
          The biggest shift isn't the AI itself. It's what the AI can now{' '}
          <em>do</em>. GPT-5.4 is the first OpenAI model with genuine{' '}
          <strong style={{ color: t.accent }}>computer-use capabilities</strong>
          . That means it doesn't just generate text—it can actually operate
          software. It can click buttons, navigate websites, fill in
          spreadsheets, and manipulate documents.
        </p>
      </ScrollModule>
      <ScrollModule delay={100}>
        <div
          className="overflow-x-auto rounded-xl border my-10 transition-shadow hover:shadow-lg"
          style={{
            borderColor: t.border,
            backgroundColor: t.bgElevated,
          }}
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr style={{ backgroundColor: t.surface }}>
                <th
                  className="py-4 px-5 font-semibold"
                  style={{ color: t.text }}
                >
                  Capability
                </th>
                <th
                  className="py-4 px-5 font-semibold"
                  style={{ color: t.text }}
                >
                  Improvement Over Previous Version
                </th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(([cap, improvement], i) => (
                <tr
                  key={i}
                  className="border-t transition-colors hover:bg-opacity-80"
                  style={{
                    borderColor: t.border,
                    color: i % 2 === 0 ? t.textMuted : t.text,
                  }}
                >
                  <td className="py-3 px-5">{cap}</td>
                  <td
                    className="py-3 px-5 font-medium"
                    style={{ color: t.accent }}
                  >
                    {improvement}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ScrollModule>
      <ScrollModule delay={150}>
        <p className="text-lg max-w-3xl" style={{ color: t.textMuted }}>
          A model that can reliably work with spreadsheets and presentations at
          an 87% accuracy level isn't replacing teacher judgment—it's eliminating
          the hours spent formatting cells and aligning columns.
        </p>
      </ScrollModule>
    </div>
  </section>
);

export default WhatChangesSection;
