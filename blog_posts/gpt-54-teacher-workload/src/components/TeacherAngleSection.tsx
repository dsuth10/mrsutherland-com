import React from 'react';
import ScrollModule from './ScrollModule';
import { theme } from '../theme';

const t = theme.colors;

export const TeacherAngleSection: React.FC = () => (
  <section
    className="py-20 px-6 sm:px-12 lg:px-24"
    style={{ backgroundColor: t.bgElevated }}
  >
    <div className="max-w-4xl mx-auto space-y-16">
      <ScrollModule>
        <h2
          className="font-serif text-3xl sm:text-4xl font-normal mb-6"
          style={{ color: t.text }}
        >
          The Teacher-Specific Angle
        </h2>
        <p
          className="text-lg leading-relaxed"
          style={{ color: t.textMuted }}
        >
          OpenAI has been expanding{' '}
          <strong style={{ color: t.text }}>ChatGPT for Teachers</strong>, a
          dedicated workspace configured for K-12 education. Research from the
          EdWeek Research Center shows that{' '}
          <strong style={{ color: t.accent }}>61% of teachers</strong> were
          using AI-driven tools in their classrooms by mid-2025. The technology
          is already in teachers' hands. The question is whether it's being
          used to reduce workload or add another thing to manage. GPT-5.4's
          improvements tip the balance toward genuine workload reduction.
        </p>
      </ScrollModule>
      <ScrollModule delay={100}>
        <h2
          className="font-serif text-3xl sm:text-4xl font-normal mb-6"
          style={{ color: t.text }}
        >
          The Realistic View
        </h2>
        <p
          className="text-lg leading-relaxed"
          style={{ color: t.textMuted }}
        >
          This isn't a magic solution. Teachers still need to review, approve,
          and adapt AI-generated content. But the trajectory is clear. Each
          version gets better at the tedious tasks that have been accumulating
          on teachers' desks. For the first time, the AI being released isn't
          just impressive in a demo—it's reliable enough to genuinely use in the
          workflows that define a teacher's week. The teachers who figure out
          how to work with these tools thoughtfully will be the ones who reclaim
          their evenings.
        </p>
      </ScrollModule>
    </div>
  </section>
);

export default TeacherAngleSection;
