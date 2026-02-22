import React from 'react';
import ScrollModule from './components/ScrollModule';
import StoryImage from './components/StoryImage';
import { IMAGES } from './constants';

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-[#f5f4f0] font-sans antialiased"
      style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
      }}
    >
      {/* Hero / Title Module */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pb-16 px-6 sm:px-12 lg:px-24">
        <div className="absolute inset-0 z-0">
          <StoryImage
            src={IMAGES.hero}
            alt="The AI Scare Trade - hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            The AI Scare Trade Is Coming for Schools
            <span className="block text-[#ff6b35] mt-2">
              (and It's Wearing a Lanyard)
            </span>
          </h1>
          <div className="mt-8 space-y-4 text-lg sm:text-xl text-[#d4d2cc] max-w-2xl">
            <p>
              A karaoke company wiped billions off the stock market with a
              single AI‑flavoured press release.
            </p>
            <p>
              The punchline wasn't "AI is magic." The punchline was{' '}
              <strong className="text-white">panic</strong>.
            </p>
            <p>
              Investors saw the words <em>AI can scale without headcount</em> and
              did what humans do best when they're frightened:{' '}
              <strong className="text-[#ff6b35]">
                they panicked loudly, acted quickly, and thought later
              </strong>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Module 2: Schools don't have stock tickers */}
      <section className="py-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <ScrollModule delay={0}>
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl text-[#d4d2cc] leading-relaxed">
                Schools don't have stock tickers. But we absolutely have our own
                version of the "AI scare trade":
              </p>
              <ul className="space-y-3 text-lg text-[#c4c2bc] list-none">
                {[
                  'a headline about cheating',
                  'a parent complaint',
                  'a department memo',
                  'a conference keynote',
                  'a vendor demo with more sparkle than substance',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#ff6b35] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xl text-[#d4d2cc]">
                …and suddenly: emergency meetings, rushed policies, tool buying
                sprees, blanket bans, and teachers quietly absorbing the cost in
                time and cognitive load.
              </p>
              <p className="text-2xl font-semibold text-white">
                So let's talk about how schools can do what most markets can't:{' '}
                <span className="text-[#ff6b35]">be precise</span>.
              </p>
            </div>
          </ScrollModule>
          <ScrollModule delay={150}>
            <StoryImage
              src={IMAGES.module1}
              alt="Schools and the AI scare trade - From Hype to Teacher Burnout"
              className="w-full aspect-[16/9] object-contain bg-neutral-900 border-2 border-neutral-700"
            />
          </ScrollModule>
        </div>
      </section>

      {/* Module 3: Where Is the AI Budget Coming From? */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-[#111111]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <ScrollModule delay={0}>
            <StoryImage
              src={IMAGES.module2}
              alt="The Hidden Price of AI in Schools: Transition vs. Extraction"
              className="w-full aspect-[16/9] object-contain bg-neutral-900 border-2 border-neutral-700 order-2 lg:order-1"
            />
          </ScrollModule>
          <ScrollModule delay={150}>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                The Most Important Question for Schools: Where Is the AI Budget
                Coming From?
              </h2>
              <p className="text-lg text-[#d4d2cc]">
                Schools rarely fund AI implementation with cash alone. The real
                budget is:
              </p>
              <ul className="space-y-2 text-[#c4c2bc]">
                {[
                  'teacher time',
                  'attention',
                  'planning capacity',
                  'PD hours',
                  'cognitive load',
                  'goodwill',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#ff6b35] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xl text-white font-medium">
                So when someone says, "We're implementing AI," ask the honest
                question:{' '}
                <strong className="text-[#ff6b35]">
                  What is this actually costing us?
                </strong>
              </p>
              <div className="space-y-4 pt-4 border-t border-neutral-700">
                <div>
                  <h3 className="text-lg font-semibold text-[#ff6b35] mb-2">
                    Is the investment <em>net new</em>?
                  </h3>
                  <ul className="space-y-1 text-[#c4c2bc]">
                    {[
                      'release time for pilots',
                      'proper training that builds real capability',
                      'shared templates and ongoing support',
                      'clear guardrails agreed upon by staff',
                    ].map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                  <p className="mt-2 text-[#d4d2cc]">
                    That's a genuine transition strategy.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#c41e3a] mb-2">
                    Or is the investment coming out of the core engine room?
                  </h3>
                  <ul className="space-y-1 text-[#c4c2bc]">
                    {[
                      '"Everyone must use this tool" with no time allocated',
                      'extra documentation in the name of "safety"',
                      'new platforms layered on top of old ones',
                      'the same workload, now with AI expectations attached',
                    ].map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                  <p className="mt-2 text-[#c41e3a] font-semibold">
                    That's not transformation. That's extractive change wearing a
                    futuristic mask.
                  </p>
                  <p className="text-[#d4d2cc]">
                    You don't modernise a school by making teachers do unpaid R&D
                    in between playground duty and report writing.
                  </p>
                </div>
              </div>
            </div>
          </ScrollModule>
        </div>
      </section>

      {/* Module 4: What Strategic AI Implementation Actually Looks Like */}
      <section className="py-24 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <ScrollModule delay={0}>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                What Strategic AI Implementation Actually Looks Like
              </h2>
              <p className="text-xl text-[#d4d2cc]">
                A good AI plan is boring in the best way. It targets friction,
                protects teacher time, and avoids theatre.
              </p>
              <div className="space-y-6 pt-4">
                {[
                  {
                    title: 'Step 1: Pick Three High‑Friction Workflows',
                    items: [
                      'Differentiation packs',
                      'Formative checks and misconception spotting',
                      'Feedback drafting aligned to rubrics',
                    ],
                  },
                  {
                    title: 'Step 2: Run AI in Parallel — Not as a Mandate',
                    items: [
                      'Pilot with a small volunteer team for a term',
                      'Use real work, not demos',
                      'Measure minutes saved, effort ratings, quality checks',
                    ],
                  },
                  {
                    title: 'Step 3: Map the Human Checkpoints',
                    items: [
                      'Where must a teacher verify before anything goes to students?',
                      'What can never be automated?',
                      'What needs proper sourcing?',
                    ],
                  },
                ].map((step, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-semibold text-[#ff6b35] mb-2">
                      {step.title}
                    </h3>
                    <ul className="space-y-1 text-[#c4c2bc]">
                      {step.items.map((item, j) => (
                        <li key={j}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </ScrollModule>
          <ScrollModule delay={150}>
            <StoryImage
              src={IMAGES.module3}
              alt="The AI Implementation Roadmap: A Five-Step Framework for Schools"
              className="w-full aspect-[16/9] object-contain bg-neutral-900 border-2 border-neutral-700"
            />
          </ScrollModule>
        </div>
      </section>

      {/* Module 5: A Final Thought */}
      <section className="py-24 px-6 sm:px-12 lg:px-24 bg-[#111111]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <ScrollModule delay={0}>
            <StoryImage
              src={IMAGES.module4}
              alt="From Panic to Precision: Shaping AI Strategy in Schools"
              className="w-full aspect-[16/9] object-contain bg-neutral-900 border-2 border-neutral-700"
            />
          </ScrollModule>
          <ScrollModule delay={150}>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                A Final Thought (Because Schools Deserve Better Than Panic)
              </h2>
              <p className="text-lg text-[#d4d2cc] leading-relaxed">
                The future is being repriced everywhere — in business, in
                government, and in education.
              </p>
              <p className="text-lg text-[#d4d2cc] leading-relaxed">
                We can't stop the noise. But we <em>can</em> decide whether we
                respond to it with fear or with precision.
              </p>
              <p className="text-lg text-[#d4d2cc] leading-relaxed">
                Bad AI strategy is reactive, extractive, and theatrical.
              </p>
              <p className="text-lg text-[#d4d2cc] leading-relaxed">
                Good AI strategy is calm, specific, and measured — and it makes
                time reappear where time used to vanish.
              </p>
              <p className="text-2xl font-semibold text-[#ff6b35] pt-4">
                That's not a tech revolution.
              </p>
              <p className="text-2xl font-semibold text-white">
                That's a human one.
              </p>
            </div>
          </ScrollModule>
        </div>
      </section>

      {/* CTA / Share */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 border-t border-neutral-800">
        <ScrollModule>
          <div className="max-w-2xl mx-auto text-center text-[#c4c2bc]">
            <p className="text-lg italic">
              If you found this useful, share it with a colleague who's
              navigating the AI conversation at their school. The more educators
              who can think clearly about this, the better our schools will be.
            </p>
          </div>
        </ScrollModule>
      </section>
    </div>
  );
}
