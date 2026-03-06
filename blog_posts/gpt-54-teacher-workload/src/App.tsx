import React from 'react';
import { theme } from './theme';
import Hero from './components/Hero';
import NumbersSection from './components/NumbersSection';
import WhatChangesSection from './components/WhatChangesSection';
import BusyWorkSection from './components/BusyWorkSection';
import BeyondHypeSection from './components/BeyondHypeSection';
import TeacherAngleSection from './components/TeacherAngleSection';
import PracticalStepsSection from './components/PracticalStepsSection';
import ArticleFooter from './components/ArticleFooter';

const t = theme.colors;

export default function App() {
  return (
    <div
      className="min-h-screen font-sans antialiased"
      style={{
        backgroundColor: t.bg,
        color: t.text,
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
      }}
    >
      <main>
        <Hero />
        <NumbersSection />
        <WhatChangesSection />
        <BusyWorkSection />
        <BeyondHypeSection />
        <TeacherAngleSection />
        <PracticalStepsSection />
        <ArticleFooter />
      </main>
    </div>
  );
}
