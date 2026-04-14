'use client';

import Section from '../components/Section';

export default function Contact() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Section
        className="pt-24 text-center"
        heading="Get in Touch"
        subheading="We'd love to hear from you. Whether you're a care home manager, industry advisor, or investor, let's start a conversation."
      >
        <div></div>
      </Section>

      {/* Contact Methods */}
      <Section
        id="contact-methods"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-950 mb-8 text-center">
            Ways to Connect
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-950 mb-2">Email</h3>
              <p className="text-slate-600 text-sm mb-3">
                Direct contact for inquiries
              </p>
              <a
                href="mailto:hello@symplicare.ai"
                className="text-[#77bdda] font-medium hover:text-[#5a9bb3] transition-colors"
              >
                hello@symplicare.ai
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-950 mb-2">LinkedIn</h3>
              <p className="text-slate-600 text-sm mb-3">
                Follow our journey and connect
              </p>
              <a
                href="https://linkedin.com/company/symplicare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#77bdda] font-medium hover:text-[#5a9bb3] transition-colors"
              >
                Visit LinkedIn
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-950 mb-2">Schedule a Call</h3>
              <p className="text-slate-600 text-sm mb-3">
                Book a time to discuss in detail
              </p>
              <a
                href="https://calendly.com/symplicare-ai/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#77bdda] font-medium hover:text-[#5a9bb3] transition-colors"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section
        id="final-cta"
        className="bg-[#77bdda] text-white text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore SympliCare?</h2>
          <p className="text-[#e0f5fb] mb-8 text-lg">
            We're building this with care professionals. Your input shapes our direction.
          </p>
          <a
            href="/"
            className="inline-block bg-white text-[#77bdda] px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </Section>
    </div>
  );
}
