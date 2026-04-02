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

const columns: { status: Referral["status"]; label: string }[] = [
  { status: "Submitted", label: "Submitted" },
  { status: "In Progress", label: "In Progress" },
  { status: "Completed", label: "Completed" },
];

export default function ReferralsPage() {
  return (
    <div className="p-4 lg:p-8 max-w-[1000px] mx-auto">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="text-[18px] font-medium text-heading">Referrals</h1>
          <p className="text-[13px] text-secondary mt-1">Track and manage medical referrals</p>
        </div>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-accent text-white rounded-lg text-[13px] font-medium hover:bg-accent-hover transition-colors cursor-pointer">
          <Plus size={15} />
          New Referral
        </button>
      </div>

      {/* Kanban */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {columns.map((col) => {
          const items = referrals.filter((r) => r.status === col.status);
          return (
            <div key={col.status} className="bg-[#F1F5F9] rounded-lg">
              <div className="px-4 py-3 flex items-center justify-between">
                <h3 className="text-[12px] font-medium text-secondary">{col.label}</h3>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white text-secondary">
                  {items.length}
                </span>
              </div>

              <div className="px-2.5 pb-2.5 space-y-2">
                {items.map((ref) => (
                  <div
                    key={ref.id}
                    className="bg-surface rounded-lg border border-border p-3.5 hover:bg-bg-hover transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-1">
                      <p className="text-[13px] font-medium text-heading">{ref.player}</p>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#F1F5F9] text-secondary">
                        {ref.type}
                      </span>
                    </div>
                    <p className="text-[11px] text-muted mb-2.5">{ref.team}</p>
                    <div className="space-y-1 text-[12px] text-secondary">
                      <p><span className="text-muted">From:</span> {ref.referringDoctor}</p>
                      <p><span className="text-muted">To:</span> {ref.facility}</p>
                    </div>
                    <div className="mt-2.5 pt-2.5 border-t border-border flex items-center justify-between">
                      <span className="text-[11px] text-muted">{ref.date}</span>
                      <span className="text-[10px] text-muted font-mono">{ref.id}</span>
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
