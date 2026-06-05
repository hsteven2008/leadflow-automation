"use client";
import { useState } from "react";
import Link from "next/link";

export default function ROICalculator() {
  const [leads, setLeads] = useState(50);
  const [value, setValue] = useState(500);
  const [missRate, setMissRate] = useState(30);

  const missedLeads = Math.round((leads * missRate) / 100);
  const revenueAtRisk = missedLeads * value;

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  const sliderClass = "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-2";

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-xl mx-auto">
      <div className="text-center mb-6">
        <span className="text-4xl">📊</span>
        <h2 className="text-2xl font-bold text-gray-900 mt-2">Missed Lead Calculator</h2>
        <p className="text-gray-500 text-sm mt-1">Estimate how much revenue your business may be leaving on the table.</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className={labelClass}>
            Leads per month: <span className="text-blue-600">{leads}</span>
          </label>
          <input type="range" min={5} max={500} step={5} value={leads}
            onChange={(e) => setLeads(Number(e.target.value))} className={sliderClass} />
          <div className="flex justify-between text-xs text-gray-400 mt-1"><span>5</span><span>500</span></div>
        </div>

        <div>
          <label className={labelClass}>
            Average customer value: <span className="text-blue-600">{fmt(value)}</span>
          </label>
          <input type="range" min={100} max={10000} step={100} value={value}
            onChange={(e) => setValue(Number(e.target.value))} className={sliderClass} />
          <div className="flex justify-between text-xs text-gray-400 mt-1"><span>$100</span><span>$10,000</span></div>
        </div>

        <div>
          <label className={labelClass}>
            Estimated missed follow-up rate: <span className="text-blue-600">{missRate}%</span>
          </label>
          <input type="range" min={5} max={80} step={5} value={missRate}
            onChange={(e) => setMissRate(Number(e.target.value))} className={sliderClass} />
          <div className="flex justify-between text-xs text-gray-400 mt-1"><span>5%</span><span>80%</span></div>
        </div>
      </div>

      <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-5 text-center">
        <p className="text-sm text-gray-600 mb-1">Estimated revenue at risk every month</p>
        <p className="text-4xl font-extrabold text-red-600">{fmt(revenueAtRisk)}</p>
        <p className="text-xs text-gray-400 mt-1">{missedLeads} missed leads × {fmt(value)} avg value</p>
      </div>

      <div className="mt-4 text-center">
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm"
        >
          Fix This With Automation →
        </Link>
        <p className="text-xs text-gray-400 mt-3">*This is only an estimate for illustration purposes.</p>
      </div>
    </div>
  );
}
