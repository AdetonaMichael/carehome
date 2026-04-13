import Hero from '../components/Hero';
import Section from '../components/Section';

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Section
        className="pt-24"
        heading="About SympliCare AI"
        subheading="Understanding care home operations. Building practical solutions."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-base text-slate-700 leading-relaxed mb-6">
              SympliCare AI was founded to address real operational challenges in care homes.
            </p>
            <p className="text-slate-700 text-sm leading-relaxed mb-6">
              We've worked with care home teams, operational leaders, and compliance professionals to understand the true pain points of daily operations. What we discovered was clear:
            </p>
            <ul className="space-y-3 text-slate-700 text-sm">
              <li className="flex gap-3">
                <span className="text-blue-700 font-semibold">•</span>
                <span>Existing systems often add complexity rather than reduce it</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-700 font-semibold">•</span>
                <span>Teams need structured, practical tools that fit into their workflows</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-700 font-semibold">•</span>
                <span>Focus must be on usability and clarity, not feature bloat</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-950 mb-2">Our Mission</h4>
                <p className="text-slate-600 text-sm">
                  "To support care teams with simple, reliable, and practical systems that improve operations without adding unnecessary complexity."
                </p>
              </div>
              <div className="border-t border-slate-300 pt-6">
                <h4 className="font-semibold text-slate-950 mb-2">Our Values</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2"><span className="text-blue-700">✓</span> <span><strong>Practical:</strong> Solutions that work in real care settings</span></li>
                  <li className="flex gap-2"><span className="text-blue-700">✓</span> <span><strong>Clear:</strong> No jargon. Simple, obvious design.</span></li>
                  <li className="flex gap-2"><span className="text-blue-700">✓</span> <span><strong>Trustworthy:</strong> Honest about capabilities and limitations</span></li>
                  <li className="flex gap-2"><span className="text-blue-700">✓</span> <span><strong>Respectful:</strong> Built with care home professionals, not for them</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Founder Note */}
      <Section
        id="founder-note"
        className="bg-white"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-950 mb-8">Founder's Note</h2>
          
          <div className="bg-slate-50 border-l-4 border-blue-700 rounded-r-xl p-8 space-y-6 text-slate-600 text-sm leading-relaxed">
            <p>
              I started SympliCare after spending time in care homes, watching dedicated teams struggle with fragmented systems that made their jobs harder, not easier.
            </p>
            
            <p>
              These professionals are already stretched thin. They don't need more apps, more dashboards, or more complexity. They need systems that understand their world and fit into it.
            </p>
            
            <p>
              What struck me most wasn't the technology gaps—it was how much institutional knowledge and context gets lost between shifts, between systems, and between departments. A fall that occurs at night gets documented hours later. Training gets entered manually into three separate systems. Inspection preparation becomes a week of manual file organization.
            </p>
            
            <p>
              None of these problems exist because of laziness or incompetence. They exist because the tools weren't designed by people who understand the actual operational reality of care homes.
            </p>
            
            <p>
              SympliCare is being built differently. We're not coming with preconceived solutions. We're listening first. We're learning what actually works in practice. And we're committing to building only what's truly needed.
            </p>
            
            <p>
              I believe that care home operations can be simpler, clearer, and more reliable—not through complexity, but through genuine understanding of what your teams face every day.
            </p>
            
            <p className="font-semibold text-slate-950 pt-4">
              That's what we're building.
            </p>
          </div>
        </div>
      </Section>

      {/* Why It Matters */}
      <Section
        heading="Why This Matters"
        subheading="The stakes are high for care home operations"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-slate-200 rounded-lg p-6">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-slate-900 mb-3">Better Outcomes</h3>
            <p className="text-slate-700 text-sm">
              When systems are clear and processes are simple, teams can focus on what matters: quality care.
            </p>
          </div>
          <div className="border border-slate-200 rounded-lg p-6">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-semibold text-slate-900 mb-3">Reduced Burden</h3>
            <p className="text-slate-700 text-sm">
              Less time on administrative complexity means more time and energy for the people under their care.
            </p>
          </div>
          <div className="border border-slate-200 rounded-lg p-6">
            <div className="text-3xl mb-3">🏆</div>
            <h3 className="font-semibold text-slate-900 mb-3">Confidence</h3>
            <p className="text-slate-700 text-sm">
              Clear systems and organized information mean teams are prepared and confident, always.
            </p>
          </div>
        </div>
      </Section>

      {/* Current Stage */}
      <Section
        id="current-stage"
        className="bg-blue-50"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Where We Are Now</h2>
          <div className="bg-white rounded-lg p-8 space-y-4 text-left max-w-2xl mx-auto">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Actively Learning</h4>
                <p className="text-slate-700 text-sm">Working with care professionals to understand real-world operations in depth</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Building Core MVP</h4>
                <p className="text-slate-700 text-sm">Creating the foundation that addresses the most pressing operational challenges</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Preparing Pilot</h4>
                <p className="text-slate-700 text-sm">Getting ready to work with early adopter homes to test and refine</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section
        id="cta"
        className="bg-gradient-to-br from-blue-600 to-blue-700 text-white text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Interested in Being Part of This?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            We're actively seeking care professionals, operational leaders, and advisors to shape SympliCare alongside us.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </Section>
    </div>
  );
}
