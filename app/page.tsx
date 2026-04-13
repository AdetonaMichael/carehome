import Hero from './components/Hero';
import Section from './components/Section';
import Card from './components/Card';

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* SECTION 1: HERO */}
      <Hero
        headline="Simplifying Care Home Operations Built for Real-World Use"
        subtext="We are developing a platform to support care home teams in managing documentation, workflows, and day-to-day operations in a more structured and practical way."
        primaryCTA={{
          label: 'Join Early Access',
          href: '/contact',
        }}
        secondaryCTA={{
          label: 'Book a Call',
          href: '/contact',
        }}
      />

      {/* SECTION 2: REAL-WORLD CHALLENGES */}
      <Section
        id="challenges"
        heading="Real-World Challenges Care Teams Face"
        subheading="These challenges are not due to lack of effort — they are often a result of fragmented systems and processes."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-blue-50 rounded-xl overflow-hidden border border-blue-100">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
              alt="Care home team working together"
              className="w-full h-64 object-cover"
            />
          </div>
          <div>
            <div className="grid grid-cols-1 gap-6">
              <Card
                title="Delayed Documentation"
                description="A fall occurs during the night shift, but documentation is completed hours later due to workload and system limitations."
              />
              <Card
                title="Duplicate Data Entry"
                description="Staff complete training, but the same information must be recorded across multiple systems."
              />
              <Card
                title="Inspection Stress"
                description="Before inspections, teams manually organise documentation, creating stress and delays."
              />
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 3: WHAT WE ARE BUILDING */}
      <Section
        id="building"
        heading="A Platform Designed to Support Everyday Care Operations"
        className="bg-blue-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="bg-white border border-blue-100 rounded-xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=800&h=600&fit=crop"
              alt="Healthcare worker managing patient care"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="bg-white border border-blue-100 rounded-xl p-8">
            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-700 flex-shrink-0 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">✓</span>
                </div>
                <div>
                  <p className="text-slate-950 font-semibold text-sm">Supports structured documentation</p>
                  <p className="text-slate-600 text-sm mt-1">Clear templates and workflows that teams understand</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-700 flex-shrink-0 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">✓</span>
                </div>
                <div>
                  <p className="text-slate-950 font-semibold text-sm">Provides simple workflows</p>
                  <p className="text-slate-600 text-sm mt-1">Processes that fit into daily routines, not against them</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-700 flex-shrink-0 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">✓</span>
                </div>
                <div>
                  <p className="text-slate-950 font-semibold text-sm">Helps organize information in one place</p>
                  <p className="text-slate-600 text-sm mt-1">Eliminate data fragmentation across systems</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-blue-700 flex-shrink-0 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">✓</span>
                </div>
                <div>
                  <p className="text-slate-950 font-semibold text-sm">Improves visibility across care activities</p>
                  <p className="text-slate-600 text-sm mt-1">Managers get a clear picture of operations without extra work</p>
                </div>
              </li>
            </ul>
            <p className="text-slate-600 italic mt-8 pt-8 border-t border-blue-100 text-sm">
              "Designed to make everyday tasks easier to manage — without adding complexity."
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION 4: HOW IT WORKS */}
      <Section
        id="how-it-works"
        heading="How It Works"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              number: '1',
              title: 'Staff Record Information',
              description: 'In a structured way that takes just minutes to complete',
            },
            {
              number: '2',
              title: 'Information Organized',
              description: 'All data is stored in one place and easily accessible',
            },
            {
              number: '3',
              title: 'Managers Gain Visibility',
              description: 'Via dashboard and clear reporting of key operations',
            },
            {
              number: '4',
              title: 'Better Preparedness',
              description: 'Teams are ready for operational and regulatory requirements',
            },
          ].map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Connector Line (hidden on mobile) */}
              {index < 3 && (
                <div className="hidden md:block absolute top-12 -right-3 w-6 h-0.5 bg-slate-200"></div>
              )}

              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center h-full hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-700 text-white rounded-full font-semibold mb-4">
                  {step.number}
                </div>
                <h3 className="text-base font-semibold text-slate-950 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION 5: BUILT WITH INDUSTRY INPUT */}
      <Section
        id="industry-input"
        className="bg-blue-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden border border-blue-100 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
              alt="Care professionals collaborating"
              className="w-full h-64 object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-950 mb-4">
              Built With Industry Input
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We are working closely with care home professionals, operational leaders, and compliance-focused advisors to ensure the platform reflects real-world needs.
            </p>
          </div>
        </div>
      </Section>

      {/* SECTION 6: OUR APPROACH */}
      <Section
        id="approach"
        heading="Our Approach"
        subheading="Focused on Simplicity and Practical Use"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="inline-block bg-blue-700 text-white rounded-full p-4 mb-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-slate-950 mb-2">Easy to Use</h3>
            <p className="text-slate-600 text-sm">Designed for busy teams. Minimal training. Maximum clarity.</p>
          </div>
          <div className="text-center">
            <div className="inline-block bg-blue-700 text-white rounded-full p-4 mb-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-slate-950 mb-2">Supports Existing Workflows</h3>
            <p className="text-slate-600 text-sm">Works alongside your current processes, not against them.</p>
          </div>
          <div className="text-center">
            <div className="inline-block bg-blue-700 text-white rounded-full p-4 mb-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-slate-950 mb-2">Reduces Complexity</h3>
            <p className="text-slate-600 text-sm">Simplifies operations without adding unnecessary features.</p>
          </div>
        </div>
      </Section>

      {/* SECTION 7: EARLY-STAGE NOTE */}
      {/* <Section
        id="early-stage"
        className="bg-white"
      >
        <div className="max-w-3xl mx-auto">
          <div className="border-l-4 border-blue-700 pl-6 bg-slate-50 p-6 rounded-r-xl">
            <h3 className="text-xl font-semibold text-slate-950 mb-4">We're Early-Stage</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex gap-3">
                <span className="text-blue-700 font-semibold text-lg">•</span>
                <span className="text-sm">Currently in development</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-700 font-semibold text-lg">•</span>
                <span className="text-sm">Being shaped with care professionals</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-700 font-semibold text-lg">•</span>
                <span className="text-sm">Preparing for pilot phase</span>
              </li>
            </ul>
          </div>
        </div>
      </Section> */}

      {/* SECTION 8: FINAL CTA */}
      <Section
        id="cta"
        className="bg-blue-700 text-white"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Early Access
          </h2>
          <p className="text-lg text-blue-50 mb-8 leading-relaxed">
            If you are interested in learning more or participating in early discussions, we would be happy to connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
            >
              Join Early Access
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
