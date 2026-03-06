import React from 'react';
import ScrollModule from './ScrollModule';
import { theme } from '../theme';

const t = theme.colors;

export const ArticleFooter: React.FC = () => (
  <footer
    className="py-16 px-6 sm:px-12 lg:px-24 border-t"
    style={{ borderColor: t.border, backgroundColor: t.bgElevated }}
  >
    <ScrollModule>
      <div className="max-w-2xl mx-auto text-center">
        <p
          className="text-sm uppercase tracking-wider mb-2"
          style={{ color: t.accent }}
        >
          Sources
        </p>
        <p
          className="text-sm italic"
          style={{ color: t.textMuted }}
        >
          This analysis draws on OpenAI's GPT-5.4 release documentation,
          TechCrunch reporting, EdWeek Research Center data, and the GDPval
          benchmark methodology.
        </p>
        <p
          className="mt-6 text-sm"
          style={{ color: t.textMuted }}
        >
          Category: AI in Education · Tags: GPT5, teacher workload, edtech,
          AI, OpenAI
        </p>
      </div>
    </ScrollModule>
  </footer>
);

export default ArticleFooter;
