'use client';

import { useState } from 'react';
import Section from '../components/Section';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log the form data
    console.log('Form submitted:', formData);
    // You can replace this with an actual API call later
    alert('Thank you for reaching out! We\'ll be in touch soon.');
    setFormData({ name: '', email: '', organisation: '', message: '' });
  };

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

      {/* Contact Form */}
      <Section
        id="contact-form"
      >
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-950 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#77bdda] focus:border-transparent text-slate-950 placeholder-slate-400"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-950 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#77bdda] focus:border-transparent text-slate-950 placeholder-slate-400"
                />
              </div>
            </div>

            {/* Organisation / Role */}
            <div className="mb-6">
              <label
                htmlFor="organisation"
                className="block text-sm font-semibold text-slate-950 mb-2"
              >
                Organisation / Role
              </label>
              <input
                type="text"
                id="organisation"
                name="organisation"
                value={formData.organisation}
                onChange={handleChange}
                placeholder="e.g. Example Care Home / Manager"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#77bdda] focus:border-transparent text-slate-950 placeholder-slate-400"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-slate-950 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell us about your interest in SympliCare. What operational challenges are you facing?"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#77bdda] focus:border-transparent text-slate-950 placeholder-slate-400 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-[#77bdda] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5a9bb3] transition-colors"
              >
                Send Message
              </button>
              <button
                type="reset"
                className="border border-slate-200 text-slate-950 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
              >
                Clear
              </button>
            </div>

            <p className="text-xs text-slate-500 mt-4">
              We typically respond within 1-2 business days.
            </p>
          </form>
        </div>
      </Section>

      {/* Alternative Contact Methods */}
      <Section
        id="other-info"
        className="bg-white"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-slate-950 mb-8 text-center">
            Other Ways to Connect
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
              <h3 className="font-semibold text-slate-950 mb-2">Schedule a Call</h3>
              <p className="text-slate-600 text-sm mb-3">
                Book a time to discuss in detail
              </p>
              <a
                href="#"
                className="text-[#77bdda] font-medium hover:text-[#5a9bb3] transition-colors"
              >
                Book a Call
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-950 mb-2">Updates</h3>
              <p className="text-slate-600 text-sm mb-3">
                Stay informed about our progress
              </p>
              <a
                href="#"
                className="text-[#77bdda] font-medium hover:text-[#5a9bb3] transition-colors"
              >
                Join Newsletter
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
