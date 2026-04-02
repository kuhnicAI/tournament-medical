"use client";

import { useState } from "react";
import { Plus, Filter } from "lucide-react";

type Referral = {
  id: string;
  player: string;
  team: string;
  referringDoctor: string;
  facility: string;
  type: string;
  date: string;
  status: "Submitted" | "In Progress" | "Completed";
};

const referrals: Referral[] = [
  {
    id: "REF-001",
    player: "Player #7",
    team: "England",
    referringDoctor: "Dr. Sarah Chen",
    facility: "I-MED Radiology — Melbourne",
    type: "MRI",
    date: "15 Oct 2027",
    status: "In Progress",
  },
  {
    id: "REF-002",
    player: "Player #12",
    team: "South Africa",
    referringDoctor: "Dr. James Murray",
    facility: "St Vincent's Hospital Sydney",
    type: "CT Scan",
    date: "15 Oct 2027",
    status: "Completed",
  },
  {
    id: "REF-003",
    player: "Player #3",
    team: "New Zealand",
    referringDoctor: "Dr. Priya Patel",
    facility: "Adelaide Sports Medicine Clinic",
    type: "Consultation",
    date: "14 Oct 2027",
    status: "Completed",
  },
  {
    id: "REF-004",
    player: "Player #9",
    team: "Australia",
    referringDoctor: "Dr. Tom Richards",
    facility: "Perth Radiological Clinic",
    type: "X-Ray",
    date: "16 Oct 2027",
    status: "Submitted",
  },
  {
    id: "REF-005",
    player: "Player #15",
    team: "Ireland",
    referringDoctor: "Dr. Sarah Chen",
    facility: "Brisbane Private Hospital",
    type: "MRI",
    date: "17 Oct 2027",
    status: "In Progress",
  },
  {
    id: "REF-006",
    player: "Player #1",
    team: "France",
    referringDoctor: "Dr. Antoine Dupont",
    facility: "Royal Melbourne Hospital",
    type: "Consultation",
    date: "18 Oct 2027",
    status: "Submitted",
  },
];

const statusStyles: Record<string, string> = {
  Submitted: "bg-blue-100 text-blue-700",
  "In Progress": "bg-amber-100 text-amber-700",
  Completed: "bg-green-100 text-green-700",
};

const statuses = ["All", "Submitted", "In Progress", "Completed"] as const;

export default function ReferralsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered =
    activeFilter === "All"
      ? referrals
      : referrals.filter((r) => r.status === activeFilter);

  return (
    <div className="p-4 lg:p-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-xl font-bold text-navy">Referrals</h1>
          <p className="text-sm text-gray-500 mt-1">
            Track and manage medical referrals
          </p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-navy text-white rounded-lg text-sm font-medium hover:bg-navy-light transition-colors cursor-pointer">
          <Plus size={16} />
          New Referral
        </button>
      </div>

      {/* Status Filters */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <Filter size={15} className="text-gray-400" />
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setActiveFilter(status)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              activeFilter === status
                ? "bg-navy text-white"
                : "bg-white text-gray-600 border border-grey-border hover:bg-gray-50"
            }`}
          >
            {status}
            {status !== "All" && (
              <span className="ml-1.5 opacity-60">
                ({referrals.filter((r) => r.status === status).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Table — Desktop */}
      <div className="hidden lg:block bg-white rounded-xl border border-grey-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-grey-border bg-grey-bg">
              <th className="text-left text-xs font-medium text-gray-500 px-5 py-3">
                Ref
              </th>
              <th className="text-left text-xs font-medium text-gray-500 px-5 py-3">
                Player
              </th>
              <th className="text-left text-xs font-medium text-gray-500 px-5 py-3">
                Referring Doctor
              </th>
              <th className="text-left text-xs font-medium text-gray-500 px-5 py-3">
                Facility
              </th>
              <th className="text-left text-xs font-medium text-gray-500 px-5 py-3">
                Type
              </th>
              <th className="text-left text-xs font-medium text-gray-500 px-5 py-3">
                Date
              </th>
              <th className="text-left text-xs font-medium text-gray-500 px-5 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-grey-border">
            {filtered.map((ref, i) => (
              <tr
                key={ref.id}
                className={`hover:bg-gray-50 transition-colors ${
                  i % 2 === 1 ? "bg-grey-bg/50" : ""
                }`}
              >
                <td className="px-5 py-3 text-xs font-mono text-gray-400">
                  {ref.id}
                </td>
                <td className="px-5 py-3">
                  <p className="text-sm font-medium text-gray-900">
                    {ref.player}
                  </p>
                  <p className="text-xs text-gray-400">{ref.team}</p>
                </td>
                <td className="px-5 py-3 text-sm text-gray-700">
                  {ref.referringDoctor}
                </td>
                <td className="px-5 py-3 text-sm text-gray-700">
                  {ref.facility}
                </td>
                <td className="px-5 py-3 text-sm text-gray-700">{ref.type}</td>
                <td className="px-5 py-3 text-sm text-gray-500">{ref.date}</td>
                <td className="px-5 py-3">
                  <span
                    className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${statusStyles[ref.status]}`}
                  >
                    {ref.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards — Mobile */}
      <div className="lg:hidden space-y-3">
        {filtered.map((ref) => (
          <div
            key={ref.id}
            className="bg-white rounded-xl border border-grey-border p-4"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {ref.player} — {ref.team}
                </p>
                <p className="text-xs text-gray-400 font-mono">{ref.id}</p>
              </div>
              <span
                className={`text-[11px] font-medium px-2 py-0.5 rounded-full shrink-0 ${statusStyles[ref.status]}`}
              >
                {ref.status}
              </span>
            </div>
            <div className="space-y-1 text-xs text-gray-500">
              <p>
                <span className="text-gray-400">Doctor:</span>{" "}
                {ref.referringDoctor}
              </p>
              <p>
                <span className="text-gray-400">Facility:</span> {ref.facility}
              </p>
              <p>
                <span className="text-gray-400">Type:</span> {ref.type} ·{" "}
                {ref.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
