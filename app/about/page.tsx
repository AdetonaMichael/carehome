import Hero from '../components/Hero';
import Section from '../components/Section';

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Section
        className="pt-16 md:pt-20 pb-10 md:pb-12"
        heading="About SympliCare AI"
        subheading="Understanding care home operations. Building practical solutions."
      >
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
          <div className="max-w-2xl">
            <p className="mb-4 text-base leading-7 text-slate-700">
              SympliCare AI was founded to address real operational challenges in care homes.
            </p>

            <p className="mb-6 text-sm leading-7 text-slate-700">
              We've worked with care home teams, operational leaders, and compliance professionals to understand the true pain points of daily operations. What we discovered was clear:
            </p>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="text-[#77bdda] font-semibold">•</span>
                <span>Existing systems often add complexity rather than reduce it</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#77bdda] font-semibold">•</span>
                <span>Teams need structured, practical tools that fit into their workflows</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#77bdda] font-semibold">•</span>
                <span>Focus must be on usability and clarity, not feature bloat</span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-7">
            <div className="space-y-6">
              <div>
                <h4 className="mb-2 font-semibold text-slate-950">Our Mission</h4>
                <p className="text-sm text-slate-600 leading-7">
                  "To support care teams with simple, reliable, and practical systems that improve operations without adding unnecessary complexity."
                </p>
              </div>

              <div className="border-t border-slate-200 pt-5">
                <h4 className="mb-2 font-semibold text-slate-950">Our Values</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex gap-2"><span className="text-[#77bdda]">✓</span> <span><strong>Practical:</strong> Solutions that work in real care settings</span></li>
                  <li className="flex gap-2"><span className="text-[#77bdda]">✓</span> <span><strong>Clear:</strong> No jargon. Simple, obvious design.</span></li>
                  <li className="flex gap-2"><span className="text-[#77bdda]">✓</span> <span><strong>Trustworthy:</strong> Honest about capabilities and limitations</span></li>
                  <li className="flex gap-2"><span className="text-[#77bdda]">✓</span> <span><strong>Respectful:</strong> Built with care home professionals, not for them</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Founder Note */}
      <Section id="founder-note" className="py-10 md:py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-950 mb-6">Founder's Note</h2>

          <div className="bg-gradient-to-br from-[#f0f9fc] to-white border border-[#c8e7f0] rounded-2xl p-6 md:p-8 space-y-5 text-slate-700 text-base leading-7">
            <p>I started SympliCare after spending time in care homes, watching dedicated teams struggle with fragmented systems that made their jobs harder, not easier.</p>

            <p>These professionals are already stretched thin. They don't need more apps, more dashboards, or more complexity. They need systems that understand their world and fit into it.</p>

            <p className="text-slate-600 italic border-l-4 border-[#77bdda] pl-4">
              What struck me most wasn't the technology gaps—it was how much institutional knowledge and context gets lost between shifts, between systems, and between departments.
            </p>

            <p>A fall that occurs at night gets documented hours later. Training gets entered manually into three separate systems. Inspection preparation becomes a week of manual file organization.</p>

            <p>None of these problems exist because of laziness or incompetence. They exist because the tools weren't designed by people who understand the actual operational reality of care homes.</p>

            <p>SympliCare is being built differently. We're not coming with preconceived solutions. We're listening first. We're learning what actually works in practice. And we're committing to building only what's truly needed.</p>

            <p>I believe that care home operations can be simpler, clearer, and more reliable—not through complexity, but through genuine understanding of what your teams face every day.</p>

            <p className="font-semibold text-slate-950 pt-2">That's what we're building.</p>
          </div>
        </div>
      </Section>

      {/* Why It Matters */}
      <Section className="py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          <div className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Better Outcomes</h3>
            <p className="text-slate-700 text-sm leading-6">
              When systems are clear and processes are simple, teams can focus on what matters: quality care.
            </p>
          </div>

          <div className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Reduced Burden</h3>
            <p className="text-slate-700 text-sm leading-6">
              Less time on administrative complexity means more time and energy for the people under their care.
            </p>
          </div>

          <div className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-semibold text-slate-900 mb-2">Confidence</h3>
            <p className="text-slate-700 text-sm leading-6">
              Clear systems and organized information mean teams are prepared and confident, always.
            </p>
          </div>
        </div>
      </Section>

      {/* Current Stage */}
      <Section className="bg-[#f0f9fc] py-12 md:py-14">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h2 className="text-3xl font-bold text-slate-900">Where We Are Now</h2>
        </div>

        <div className="bg-white rounded-lg p-6 md:p-8 space-y-5 max-w-2xl mx-auto">
          {[1, 2, 3].map((step, i) => {
            const data = [
              {
                title: "Actively Learning",
                text: "Working with care professionals to understand real-world operations in depth"
              },
              {
                title: "Building Core MVP",
                text: "Creating the foundation that addresses the most pressing operational challenges"
              },
              {
                title: "Preparing Pilot",
                text: "Getting ready to work with early adopter homes to test and refine"
              }
            ][i];

            return (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-[#77bdda] rounded-full flex items-center justify-center text-white font-bold">
                  {step}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{data.title}</h4>
                  <p className="text-slate-700 text-sm leading-6">{data.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-12 md:py-14 bg-gradient-to-br from-[#77bdda] to-[#5a9bb3] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">Interested in Being Part of This?</h2>
          <p className="text-[#e0f5fb] mb-6 text-lg">
            We're actively seeking care professionals, operational leaders, and advisors to shape SympliCare alongside us.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#77bdda] px-7 py-3 rounded-lg font-semibold"
          >
            Get in Touch
          </a>
        </div>
      </Section>
    </div>
  );
}