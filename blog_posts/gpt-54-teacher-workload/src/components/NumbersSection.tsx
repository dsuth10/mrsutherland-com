import React from 'react';
import ScrollModule from './ScrollModule';
import { theme } from '../theme';

const t = theme.colors;

export const NumbersSection: React.FC = () => (
  <section
    className="py-20 px-6 sm:px-12 lg:px-24"
    style={{ backgroundColor: t.bgElevated }}
  >
    <div className="max-w-4xl mx-auto">
      <ScrollModule>
        <h2
          className="font-serif text-3xl sm:text-4xl font-normal mb-8"
          style={{ color: t.text }}
        >
          The Numbers That Should Make Every Teacher Excited
        </h2>
      </ScrollModule>
      <ScrollModule delay={100}>
        <div
          className="space-y-6 text-lg leading-relaxed"
          style={{ color: t.textMuted }}
        >
          <p>
            OpenAI has just released GPT-5.4, and buried beneath the technical
            fanfare is something that should make every educator pay attention:
            this model can now do things that were previously the exclusive
            domain of skilled professionals—and it does them with{' '}
            <strong style={{ color: t.accent }}>83% accuracy</strong> on
            real-world professional work tasks.
          </p>
          <p>
            When OpenAI tested GPT-5.4 against actual professional work across
            44 different occupations—the kind of work that people spend years
            training to do—this AI matched or exceeded human professionals in{' '}
            <strong style={{ color: t.text }}>83 out of every 100 tasks</strong>.
            That's up from 71 out of 100 with the previous version.
          </p>
          <p>
            For teachers drowning in administrative work, here's the number that
            matters: <strong style={{ color: t.accent }}>18% fewer errors</strong>{' '}
            than the previous version, and{' '}
            <strong style={{ color: t.accent }}>33% fewer false claims</strong>.
            This isn't a toy. This is a tool that can reliably handle the kinds
            of tasks that have been piling up on teachers' desks—and their
            kitchen tables at 10pm.
          </p>
        </div>
      </ScrollModule>
    </div>
  </section>
);

export default NumbersSection;
