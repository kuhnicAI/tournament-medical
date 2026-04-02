"use client";

import { useState } from "react";
import {
  Upload,
  Lock,
  FileText,
  Image as ImageIcon,
  File,
  Search,
} from "lucide-react";

type Patient = {
  id: string;
  label: string;
  team: string;
  color: string;
  files: {
    name: string;
    uploadedBy: string;
    date: string;
    type: "PDF" | "JPEG" | "DICOM" | "PNG";
  }[];
};

const patients: Patient[] = [
  {
    id: "p1", label: "Player #7", team: "England", color: "bg-red-500",
    files: [
      { name: "Left ankle X-ray", uploadedBy: "Dr. Sarah Chen", date: "14 Oct 2027", type: "JPEG" },
      { name: "Pre-tournament medical clearance", uploadedBy: "Dr. James Murray", date: "10 Oct 2027", type: "PDF" },
      { name: "MRI — left knee", uploadedBy: "I-MED Radiology", date: "12 Oct 2027", type: "DICOM" },
    ],
  },
  {
    id: "p2", label: "Player #3", team: "New Zealand", color: "bg-black",
    files: [
      { name: "Shoulder ultrasound", uploadedBy: "Dr. Priya Patel", date: "13 Oct 2027", type: "JPEG" },
      { name: "Blood panel results", uploadedBy: "Royal Melbourne Hospital", date: "11 Oct 2027", type: "PDF" },
    ],
  },
  {
    id: "p3", label: "Player #12", team: "South Africa", color: "bg-emerald-600",
    files: [
      { name: "Concussion assessment — Game 3", uploadedBy: "Dr. Sarah Chen", date: "15 Oct 2027", type: "PDF" },
      { name: "Head CT scan", uploadedBy: "St Vincent's Hospital", date: "15 Oct 2027", type: "DICOM" },
      { name: "Return-to-play clearance", uploadedBy: "Dr. James Murray", date: "18 Oct 2027", type: "PDF" },
      { name: "Follow-up cognitive test", uploadedBy: "Dr. Priya Patel", date: "20 Oct 2027", type: "PDF" },
    ],
  },
  {
    id: "p4", label: "Player #9", team: "Australia", color: "bg-amber-500",
    files: [
      { name: "Right hamstring MRI", uploadedBy: "Perth Radiological Clinic", date: "16 Oct 2027", type: "DICOM" },
      { name: "Physiotherapy notes", uploadedBy: "Dr. Tom Richards", date: "17 Oct 2027", type: "PDF" },
    ],
  },
  {
    id: "p5", label: "Player #1", team: "France", color: "bg-blue-600",
    files: [
      { name: "Pre-tournament medical clearance", uploadedBy: "Dr. Antoine Dupont", date: "9 Oct 2027", type: "PDF" },
    ],
  },
  {
    id: "p6", label: "Player #15", team: "Ireland", color: "bg-green-600",
    files: [
      { name: "Ankle X-ray — right", uploadedBy: "Brisbane Private Hospital", date: "14 Oct 2027", type: "JPEG" },
      { name: "Orthopaedic consultation notes", uploadedBy: "Dr. Sarah Chen", date: "15 Oct 2027", type: "PDF" },
    ],
  },
];

const fileTypeStyles: Record<string, { bg: string; iconColor: string; icon: typeof FileText }> = {
  PDF: { bg: "bg-red-50", iconColor: "text-red-500", icon: FileText },
  JPEG: { bg: "bg-blue-50", iconColor: "text-blue-500", icon: ImageIcon },
  DICOM: { bg: "bg-violet-50", iconColor: "text-violet-500", icon: File },
  PNG: { bg: "bg-emerald-50", iconColor: "text-emerald-500", icon: ImageIcon },
};

export default function RecordsPage() {
  const [selectedId, setSelectedId] = useState("p1");
  const [showTooltip, setShowTooltip] = useState(false);
  const selected = patients.find((p) => p.id === selectedId)!;

  return (
    <div className="p-4 lg:p-8 max-w-[1100px] mx-auto">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-text">Medical Records</h1>
        <p className="text-sm text-text-muted mt-0.5">
          Secure player medical record management
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Patient List */}
        <div className="lg:w-72 shrink-0">
          <div className="bg-surface rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-3 border-b border-border">
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                <input
                  type="text"
                  placeholder="Search players..."
                  className="w-full pl-8 pr-3 py-2 bg-bg border border-border rounded-xl text-xs text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all duration-150"
                />
              </div>
            </div>
            <div className="divide-y divide-border max-h-[calc(100vh-280px)] overflow-auto">
              {patients.map((patient) => {
                const isSelected = selectedId === patient.id;
                return (
                  <button
                    key={patient.id}
                    onClick={() => setSelectedId(patient.id)}
                    className={`w-full text-left px-4 py-3 transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? "bg-accent text-white"
                        : "hover:bg-bg-subtle"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-2 h-2 rounded-full shrink-0 ${patient.color}`} />
                      <div className="flex-1 min-w-0">
                        <p className={`text-[13px] font-medium ${isSelected ? "text-white" : "text-text"}`}>
                          {patient.label}
                        </p>
                        <div className="flex items-center justify-between mt-0.5">
                          <p className={`text-[11px] ${isSelected ? "text-blue-100" : "text-text-muted"}`}>
                            {patient.team}
                          </p>
                          <span className={`text-[10px] font-medium ${isSelected ? "text-blue-100" : "text-text-muted"}`}>
                            {patient.files.length} file{patient.files.length !== 1 ? "s" : ""}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* File Grid */}
        <div className="flex-1">
          <div className="bg-surface rounded-2xl border border-border shadow-sm">
            <div className="px-5 py-4 border-b border-border flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2.5">
                <div className={`w-3 h-3 rounded-full ${selected.color}`} />
                <div>
                  <h2 className="text-[14px] font-semibold text-text">
                    {selected.label} — {selected.team}
                  </h2>
                  <p className="text-[11px] text-text-muted">
                    {selected.files.length} records on file
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <button
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    className="flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-xl text-xs font-medium hover:from-slate-700 hover:to-slate-600 transition-all duration-150 cursor-pointer shadow-sm"
                  >
                    <Lock size={13} />
                    Share Securely
                  </button>
                  {showTooltip && (
                    <div className="absolute right-0 top-full mt-2 w-56 bg-sidebar text-white text-[11px] rounded-xl px-3.5 py-2.5 shadow-xl z-10 leading-relaxed">
                      Generates a time-limited secure link for sharing with authorised personnel.
                    </div>
                  )}
                </div>
                <button className="flex items-center gap-1.5 px-3.5 py-2 bg-accent text-white rounded-xl text-xs font-medium hover:bg-accent-hover transition-all duration-150 cursor-pointer shadow-lg shadow-accent/20">
                  <Upload size={13} />
                  Upload File
                </button>
              </div>
            </div>

            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selected.files.map((file, i) => {
                const style = fileTypeStyles[file.type];
                const Icon = style.icon;
                return (
                  <div
                    key={i}
                    className="border border-border rounded-xl p-4 hover:shadow-md hover:-translate-y-[1px] transition-all duration-200 group cursor-pointer"
                  >
                    <div className={`w-full h-20 ${style.bg} rounded-lg flex items-center justify-center mb-3`}>
                      <Icon size={24} className={style.iconColor} />
                    </div>
                    <p className="text-[13px] font-medium text-text truncate group-hover:text-accent transition-colors">
                      {file.name}
                    </p>
                    <p className="text-[11px] text-text-muted mt-1">{file.date}</p>
                    <div className="flex items-center justify-between mt-2.5 pt-2.5 border-t border-border-light">
                      <p className="text-[11px] text-text-muted truncate pr-2">
                        {file.uploadedBy}
                      </p>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${style.bg} ${style.iconColor}`}>
                        {file.type}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
