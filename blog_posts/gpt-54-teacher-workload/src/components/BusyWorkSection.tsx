import React from 'react';
import ScrollModule from './ScrollModule';
import { theme } from '../theme';

const t = theme.colors;
const LABELS = [
  'Data Entry',
  'Report Writing',
  'Email Correspondence',
  'Rubric Development',
];

export const BusyWorkSection: React.FC = () => (
  <section
    className="py-20 px-6 sm:px-12 lg:px-24"
    style={{ backgroundColor: t.bgElevated }}
  >
    <div className="max-w-5xl mx-auto">
      <ScrollModule>
        <h2
          className="font-serif text-3xl sm:text-4xl font-normal mb-6"
          style={{ color: t.text }}
        >
          The Busy Work That's Been Killing Teacher Wellbeing
        </h2>
        <p
          className="text-lg mb-10 max-w-3xl"
          style={{ color: t.textMuted }}
        >
          Australian teachers work an average of{' '}
          <strong style={{ color: t.accent }}>50+ hours per week</strong>, with
          many reporting that only about half of that time is actually spent on
          teaching and student interaction. The rest? Meetings, compliance
          paperwork, data entry, report writing, and the endless cycle of
          assessment.
        </p>
      </ScrollModule>
      <ScrollModule delay={100}>
        <div
          className="my-12 p-6 rounded-xl transition-shadow hover:shadow-lg"
          style={{
            backgroundColor: t.bg,
            border: `1px solid ${t.border}`,
          }}
        >
          <p
            className="text-sm font-semibold uppercase tracking-wider mb-6"
            style={{ color: t.accent }}
          >
            Teacher Work Week
          </p>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-4 items-stretch lg:items-center flex-wrap">
            <div
              className="flex-1 min-w-[140px] rounded-lg p-4 text-center font-medium transition-transform hover:scale-[1.02]"
              style={{
                backgroundColor: t.blockTeaching.bg,
                color: t.blockTeaching.text,
                border: `2px solid ${t.blockTeaching.border}`,
              }}
            >
              Direct Teaching
            </div>
            <div
              className="flex-1 min-w-[140px] rounded-lg p-4 text-center font-medium transition-transform hover:scale-[1.02]"
              style={{
                backgroundColor: t.blockSupport.bg,
                color: t.blockSupport.text,
                border: `2px solid ${t.blockSupport.border}`,
              }}
            >
              Student Support
            </div>
            <div
              className="flex-1 min-w-[140px] rounded-lg p-4 text-center font-medium transition-transform hover:scale-[1.02]"
              style={{
                backgroundColor: t.blockAdmin.bg,
                color: t.blockAdmin.text,
                border: `2px solid ${t.blockAdmin.border}`,
              }}
            >
              Administrative Tasks
            </div>
          </div>
          <div
            className="mt-6 pt-6 border-t flex flex-wrap gap-4 justify-center"
            style={{ borderColor: t.border }}
          >
            {LABELS.map((label) => (
              <span
                key={label}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: t.surface,
                  color: t.textMuted,
                }}
              >
                {label}
              </span>
            ))}
          </div>
          <p
            className="text-sm mt-4 text-center"
            style={{ color: t.textMuted }}
          >
            The administrative quadrant is where AI tools like GPT-5.4 can
            genuinely help—not by replacing the teaching, but by handling the
            documentation that surrounds it.
          </p>
        </div>
      </ScrollModule>
    </div>
  </section>
);

export default BusyWorkSection;
