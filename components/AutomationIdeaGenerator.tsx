"use client";
import { useState } from "react";
import Link from "next/link";

const businessTypes = [
  "Contractor",
  "Medical office",
  "Senior living facility",
  "Real estate agent",
  "Recruiter / staffing company",
  "Restaurant",
  "Local service business",
  "Online business",
];

const problems = [
  "Losing leads",
  "Too many manual emails",
  "Messy spreadsheets",
  "No follow-up system",
  "Hard to track customers",
  "Manual appointment requests",
  "Repetitive admin work",
];

const tools = [
  "Gmail",
  "Google Sheets",
  "Excel",
  "Airtable",
  "Zapier",
  "Make",
  "n8n",
  "Website contact form",
  "None yet",
];

// Logic to generate relevant automation ideas based on selections
function generateIdeas(business: string, problem: string, tool: string): string[] {
  const ideas: string[] = [];

  if (problem === "Losing leads" || problem === "No follow-up system") {
    ideas.push("Lead Capture Form → Google Sheets CRM with auto status tracking");
    ideas.push("Missed Follow-Up Reminder System (daily email digest of open leads)");
    ideas.push("New Lead Alert → Instant Gmail notification with lead details");
  }

  if (problem === "Too many manual emails" || problem === "Repetitive admin work") {
    ideas.push("AI Email Summary → Auto-categorize and tag incoming requests");
    ideas.push("Form Submission → Automated Email Response with next steps");
    ideas.push("Weekly Admin Digest — auto-summary of pending tasks delivered to inbox");
  }

  if (problem === "Messy spreadsheets" || problem === "Hard to track customers") {
    ideas.push("Google Sheets CRM Setup with status columns, notes, and follow-up dates");
    ideas.push("Customer Status Dashboard — see every lead and where they are in one view");
    ideas.push("Airtable Lead Tracker with automated status update reminders");
  }

  if (problem === "Manual appointment requests") {
    ideas.push("Appointment Request Form → Tracker with auto-confirmation email");
    ideas.push("Calendar Link + Intake Form → Automated confirmation and reminder");
    ideas.push("Booking Request → Google Sheet log + team notification");
  }

  // Business-specific overrides / additions
  if (business === "Real estate agent") {
    ideas.unshift("Buyer/Seller Lead Tracker with follow-up date reminders");
  }
  if (business === "Medical office") {
    ideas.unshift("Patient Intake Form → CRM row + intake confirmation email");
  }
  if (business === "Recruiter / staffing company") {
    ideas.unshift("Candidate Pipeline Tracker with stage automation and email drip");
  }
  if (business === "Contractor") {
    ideas.unshift("Job Request Form → Estimate Tracker + Follow-Up Reminder");
  }
  if (business === "Senior living facility") {
    ideas.unshift("Family Inquiry Tracker — capture leads, send welcome packet, track follow-up");
  }

  // Deduplicate and return top 3
  const unique = [...new Set(ideas)];
  return unique.slice(0, 3);
}

export default function AutomationIdeaGenerator() {
  const [business, setBusiness] = useState("");
  const [problem, setProblem] = useState("");
  const [tool, setTool] = useState("");
  const [ideas, setIdeas] = useState<string[]>([]);
  const [generated, setGenerated] = useState(false);

  const generate = () => {
    if (!business || !problem) return;
    const result = generateIdeas(business, problem, tool);
    setIdeas(result);
    setGenerated(true);
  };

  const reset = () => {
    setBusiness("");
    setProblem("");
    setTool("");
    setIdeas([]);
    setGenerated(false);
  };

  const selectClass = "w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <span className="text-4xl">🤖</span>
        <h2 className="text-2xl font-bold text-gray-900 mt-2">Free Automation Idea Generator</h2>
        <p className="text-gray-500 text-sm mt-1">Answer 3 quick questions — get 3 practical automation ideas instantly.</p>
      </div>

      {!generated ? (
        <div className="space-y-4">
          <div>
            <label className={labelClass}>1. What type of business are you?</label>
            <select value={business} onChange={(e) => setBusiness(e.target.value)} className={selectClass}>
              <option value="">Select your business type</option>
              {businessTypes.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClass}>2. What is your biggest problem right now?</label>
            <select value={problem} onChange={(e) => setProblem(e.target.value)} className={selectClass}>
              <option value="">Select your biggest challenge</option>
              {problems.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClass}>3. What tools do you currently use? (optional)</label>
            <select value={tool} onChange={(e) => setTool(e.target.value)} className={selectClass}>
              <option value="">Select a tool</option>
              {tools.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <button
            onClick={generate}
            disabled={!business || !problem}
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-40 mt-2"
          >
            Generate My Automation Ideas →
          </button>
        </div>
      ) : (
        <div>
          <h3 className="font-bold text-gray-900 text-lg mb-4">
            Here are 3 automation ideas for your {business}:
          </h3>
          <ul className="space-y-3 mb-6">
            {ideas.map((idea, i) => (
              <li key={i} className="flex items-start gap-3 bg-blue-50 rounded-lg px-4 py-3">
                <span className="text-blue-600 font-bold text-lg">{i + 1}.</span>
                <span className="text-gray-800 text-sm font-medium">{idea}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="flex-1 bg-blue-600 text-white text-center font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              Get a Free Quote for These →
            </Link>
            <button
              onClick={reset}
              className="flex-1 border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
