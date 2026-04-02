"use client";

import { Plus } from "lucide-react";

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
  { id: "REF-001", player: "Player #7", team: "England", referringDoctor: "Dr. Sarah Chen", facility: "I-MED Radiology — Melbourne", type: "MRI", date: "15 Oct 2027", status: "In Progress" },
  { id: "REF-002", player: "Player #12", team: "South Africa", referringDoctor: "Dr. James Murray", facility: "St Vincent's Hospital Sydney", type: "CT Scan", date: "15 Oct 2027", status: "Completed" },
  { id: "REF-003", player: "Player #3", team: "New Zealand", referringDoctor: "Dr. Priya Patel", facility: "Adelaide Sports Medicine Clinic", type: "Consultation", date: "14 Oct 2027", status: "Completed" },
  { id: "REF-004", player: "Player #9", team: "Australia", referringDoctor: "Dr. Tom Richards", facility: "Perth Radiological Clinic", type: "X-Ray", date: "16 Oct 2027", status: "Submitted" },
  { id: "REF-005", player: "Player #15", team: "Ireland", referringDoctor: "Dr. Sarah Chen", facility: "Brisbane Private Hospital", type: "MRI", date: "17 Oct 2027", status: "In Progress" },
  { id: "REF-006", player: "Player #1", team: "France", referringDoctor: "Dr. Antoine Dupont", facility: "Royal Melbourne Hospital", type: "Consultation", date: "18 Oct 2027", status: "Submitted" },
];

const columns: { status: Referral["status"]; label: string; color: string; headerBg: string; dotColor: string }[] = [
  { status: "Submitted", label: "Submitted", color: "border-t-blue-500", headerBg: "bg-blue-50 text-blue-700", dotColor: "bg-blue-500" },
  { status: "In Progress", label: "In Progress", color: "border-t-amber-500", headerBg: "bg-amber-50 text-amber-700", dotColor: "bg-amber-500" },
  { status: "Completed", label: "Completed", color: "border-t-emerald-500", headerBg: "bg-emerald-50 text-emerald-700", dotColor: "bg-emerald-500" },
];

const typeBadge: Record<string, string> = {
  MRI: "bg-violet-50 text-violet-600",
  "CT Scan": "bg-blue-50 text-blue-600",
  "X-Ray": "bg-amber-50 text-amber-600",
  Consultation: "bg-emerald-50 text-emerald-600",
};

export default function ReferralsPage() {
  return (
    <div className="p-4 lg:p-8 max-w-[1100px] mx-auto">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-xl font-semibold text-text">Referrals</h1>
          <p className="text-sm text-text-muted mt-0.5">
            Track and manage medical referrals
          </p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-accent text-white rounded-xl text-sm font-medium hover:bg-accent-hover transition-all duration-150 cursor-pointer shadow-lg shadow-accent/20 active:scale-[0.98]">
          <Plus size={16} />
          New Referral
        </button>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {columns.map((col) => {
          const items = referrals.filter((r) => r.status === col.status);
          return (
            <div key={col.status} className={`bg-bg-subtle rounded-2xl border-t-[3px] ${col.color}`}>
              {/* Column Header */}
              <div className="px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${col.dotColor}`} />
                  <h3 className="text-[13px] font-semibold text-text">
                    {col.label}
                  </h3>
                </div>
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${col.headerBg}`}>
                  {items.length}
                </span>
              </div>

              {/* Cards */}
              <div className="px-3 pb-3 space-y-2.5 kanban-scroll max-h-[calc(100vh-260px)] overflow-auto">
                {items.map((ref) => (
                  <div
                    key={ref.id}
                    className="bg-surface rounded-xl border border-border p-4 hover:shadow-md hover:-translate-y-[1px] transition-all duration-200 cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-[13px] font-semibold text-text group-hover:text-accent transition-colors">
                        {ref.player}
                      </p>
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-md ${typeBadge[ref.type] || "bg-gray-50 text-gray-600"}`}>
                        {ref.type}
                      </span>
                    </div>
                    <p className="text-[11px] text-text-muted mb-0.5">{ref.team}</p>
                    <div className="mt-3 space-y-1.5 text-[12px] text-text-secondary">
                      <p>
                        <span className="text-text-muted">From:</span> {ref.referringDoctor}
                      </p>
                      <p>
                        <span className="text-text-muted">To:</span> {ref.facility}
                      </p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-border-light flex items-center justify-between">
                      <span className="text-[11px] text-text-muted">{ref.date}</span>
                      <span className="text-[10px] text-text-faint font-mono">{ref.id}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
