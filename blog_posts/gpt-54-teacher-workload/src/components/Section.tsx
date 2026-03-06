import React from 'react';
import ScrollModule from './ScrollModule';
import { theme } from '../theme';

const t = theme.colors;

interface SectionProps {
  children: React.ReactNode;
  /** Background: 'bg' | 'elevated' */
  variant?: 'bg' | 'elevated';
  className?: string;
  /** Optional section title (wrapped in ScrollModule) */
  title?: string;
  /** If set, title is rendered with ScrollModule and delay for rest */
  titleOnly?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  variant = 'bg',
  className = '',
  title,
  titleOnly = false,
}) => {
  const bg = variant === 'elevated' ? t.bgElevated : t.bg;
  return (
    <section
      className={`py-20 px-6 sm:px-12 lg:px-24 ${className}`}
      style={{ backgroundColor: bg }}
    >
      <div className={`mx-auto ${theme.layout.contentMax}`}>
        {title && (
          <ScrollModule>
            <h2
              className="font-serif text-3xl sm:text-4xl font-normal mb-8"
              style={{ color: t.text }}
            >
              {title}
            </h2>
          </ScrollModule>
        )}
        {titleOnly ? null : (
          <ScrollModule delay={100}>{children}</ScrollModule>
        )}
      </div>
    </section>
  );
};

export default Section;
