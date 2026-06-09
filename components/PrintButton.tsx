"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="bg-white text-blue-700 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
    >
      Print / Save as PDF
    </button>
  );
}
