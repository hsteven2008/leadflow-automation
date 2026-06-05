"use client";
import { useState } from "react";

// ─── HOW TO CONNECT THIS FORM ──────────────────────────────────────────────
// Option 1 — Formspree: set FORMSPREE_ENDPOINT in .env and POST to that URL
// Option 2 — Resend: create an API route at /app/api/contact/route.ts and POST there
// Option 3 — Zapier: POST to NEXT_PUBLIC_ZAPIER_WEBHOOK_URL
// Option 4 — Make: POST to NEXT_PUBLIC_MAKE_WEBHOOK_URL
// Option 5 — n8n: POST to NEXT_PUBLIC_N8N_WEBHOOK_URL
// Option 6 — Supabase: insert row into a "leads" table via supabase-js client
// Currently: form is frontend-only and shows a success message after submit.
// ────────────────────────────────────────────────────────────────────────────

const budgetOptions = [
  "Under $300",
  "$300–$799",
  "$800–$1,500",
  "$1,500+",
  "Not sure yet",
];

const timelineOptions = ["ASAP", "This week", "This month", "Just researching"];

const businessTypes = [
  "Contractor",
  "Medical office",
  "Senior living facility",
  "Real estate agent",
  "Recruiter / staffing company",
  "Restaurant",
  "Local service business",
  "Online business",
  "Other",
];

interface FormData {
  name: string;
  email: string;
  businessType: string;
  automationGoal: string;
  currentTools: string;
  budget: string;
  timeline: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    businessType: "",
    automationGoal: "",
    currentTools: "",
    budget: "",
    timeline: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // ── CONNECT YOUR BACKEND HERE ──────────────────────────────────────────
    // Example Formspree:
    // const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    // await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    //
    // Example webhook:
    // const webhookUrl = process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL;
    // await fetch(webhookUrl, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    // ──────────────────────────────────────────────────────────────────────

    await new Promise((r) => setTimeout(r, 800)); // simulate network
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">You&apos;re all set!</h3>
        <p className="text-gray-600">
          Thanks for reaching out. I&apos;ll review your request and get back to you within 1 business day
          with automation ideas for your business.
        </p>
      </div>
    );
  }

  const inputClass = "w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Your Name *</label>
          <input name="name" required value={form.name} onChange={handle} className={inputClass} placeholder="Jane Smith" />
        </div>
        <div>
          <label className={labelClass}>Email Address *</label>
          <input name="email" type="email" required value={form.email} onChange={handle} className={inputClass} placeholder="jane@yourbusiness.com" />
        </div>
      </div>

      <div>
        <label className={labelClass}>Business Type</label>
        <select name="businessType" value={form.businessType} onChange={handle} className={inputClass}>
          <option value="">Select your business type</option>
          {businessTypes.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div>
        <label className={labelClass}>What do you want to automate? *</label>
        <textarea
          name="automationGoal"
          required
          value={form.automationGoal}
          onChange={handle}
          className={`${inputClass} h-28 resize-none`}
          placeholder="Describe the problem — e.g. 'We lose leads from our contact form' or 'We manually email every new customer'"
        />
      </div>

      <div>
        <label className={labelClass}>Current Tools (optional)</label>
        <input name="currentTools" value={form.currentTools} onChange={handle} className={inputClass} placeholder="Gmail, Google Sheets, Zapier, etc." />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Budget Range</label>
          <select name="budget" value={form.budget} onChange={handle} className={inputClass}>
            <option value="">Select budget</option>
            {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass}>Timeline</label>
          <select name="timeline" value={form.timeline} onChange={handle} className={inputClass}>
            <option value="">When do you need this?</option>
            {timelineOptions.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60 text-base"
      >
        {loading ? "Sending..." : "Send My Request →"}
      </button>

      <p className="text-xs text-gray-500 text-center">
        No spam. I&apos;ll reply within 1 business day with practical ideas for your business.
      </p>
    </form>
  );
}
