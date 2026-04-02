"use client";

import { useState } from "react";
import { Upload, Lock, FileText, Image as ImageIcon, File, Search } from "lucide-react";

type Patient = {
  id: string;
  label: string;
  team: string;
  files: { name: string; uploadedBy: string; date: string; type: "PDF" | "JPEG" | "DICOM" | "PNG" }[];
};

const patients: Patient[] = [
  { id: "p1", label: "Player #7", team: "England", files: [
    { name: "Left ankle X-ray", uploadedBy: "Dr. Sarah Chen", date: "14 Oct 2027", type: "JPEG" },
    { name: "Pre-tournament medical clearance", uploadedBy: "Dr. James Murray", date: "10 Oct 2027", type: "PDF" },
    { name: "MRI — left knee", uploadedBy: "I-MED Radiology", date: "12 Oct 2027", type: "DICOM" },
  ]},
  { id: "p2", label: "Player #3", team: "New Zealand", files: [
    { name: "Shoulder ultrasound", uploadedBy: "Dr. Priya Patel", date: "13 Oct 2027", type: "JPEG" },
    { name: "Blood panel results", uploadedBy: "Royal Melbourne Hospital", date: "11 Oct 2027", type: "PDF" },
  ]},
  { id: "p3", label: "Player #12", team: "South Africa", files: [
    { name: "Concussion assessment — Game 3", uploadedBy: "Dr. Sarah Chen", date: "15 Oct 2027", type: "PDF" },
    { name: "Head CT scan", uploadedBy: "St Vincent's Hospital", date: "15 Oct 2027", type: "DICOM" },
    { name: "Return-to-play clearance", uploadedBy: "Dr. James Murray", date: "18 Oct 2027", type: "PDF" },
    { name: "Follow-up cognitive test", uploadedBy: "Dr. Priya Patel", date: "20 Oct 2027", type: "PDF" },
  ]},
  { id: "p4", label: "Player #9", team: "Australia", files: [
    { name: "Right hamstring MRI", uploadedBy: "Perth Radiological Clinic", date: "16 Oct 2027", type: "DICOM" },
    { name: "Physiotherapy notes", uploadedBy: "Dr. Tom Richards", date: "17 Oct 2027", type: "PDF" },
  ]},
  { id: "p5", label: "Player #1", team: "France", files: [
    { name: "Pre-tournament medical clearance", uploadedBy: "Dr. Antoine Dupont", date: "9 Oct 2027", type: "PDF" },
  ]},
  { id: "p6", label: "Player #15", team: "Ireland", files: [
    { name: "Ankle X-ray — right", uploadedBy: "Brisbane Private Hospital", date: "14 Oct 2027", type: "JPEG" },
    { name: "Orthopaedic consultation notes", uploadedBy: "Dr. Sarah Chen", date: "15 Oct 2027", type: "PDF" },
  ]},
];

const fileIcon: Record<string, typeof FileText> = {
  PDF: FileText, JPEG: ImageIcon, DICOM: File, PNG: ImageIcon,
};

export default function RecordsPage() {
  const [selectedId, setSelectedId] = useState("p1");
  const [showTooltip, setShowTooltip] = useState(false);
  const selected = patients.find((p) => p.id === selectedId)!;

  return (
    <div className="p-4 lg:p-8 max-w-[1000px] mx-auto">
      <div className="mb-6">
        <h1 className="text-[18px] font-medium text-heading">Medical Records</h1>
        <p className="text-[13px] text-secondary mt-1">Secure player medical record management</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Patient List */}
        <div className="lg:w-64 shrink-0">
          <div className="bg-surface rounded-lg shadow-sm overflow-hidden">
            <div className="p-3 border-b border-border">
              <div className="relative">
                <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type="text"
                  placeholder="Search players..."
                  className="w-full pl-8 pr-3 py-2 text-[12px] text-heading placeholder:text-muted border-b border-border focus:outline-none bg-transparent"
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
                    className={`w-full text-left px-4 py-3 transition-colors cursor-pointer ${
                      isSelected ? "bg-accent text-white" : "hover:bg-bg-hover"
                    }`}
                  >
                    <p className={`text-[13px] font-medium ${isSelected ? "text-white" : "text-heading"}`}>
                      {patient.label}
                    </p>
                    <div className="flex items-center justify-between mt-0.5">
                      <p className={`text-[11px] ${isSelected ? "text-white/60" : "text-muted"}`}>
                        {patient.team}
                      </p>
                      <span className={`text-[10px] ${isSelected ? "text-white/60" : "text-muted"}`}>
                        {patient.files.length} file{patient.files.length !== 1 ? "s" : ""}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Files */}
        <div className="flex-1">
          <div className="bg-surface rounded-lg shadow-sm">
            <div className="px-5 py-3.5 border-b border-border flex items-center justify-between flex-wrap gap-3">
              <div>
                <h2 className="text-[14px] font-medium text-heading">
                  {selected.label} — {selected.team}
                </h2>
                <p className="text-[11px] text-muted">{selected.files.length} records on file</p>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <button
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    className="flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-lg text-[12px] text-secondary hover:bg-bg-hover transition-colors cursor-pointer"
                  >
                    <Lock size={12} />
                    Share Securely
                  </button>
                  {showTooltip && (
                    <div className="absolute right-0 top-full mt-1.5 w-52 bg-sidebar text-white text-[11px] rounded-lg px-3 py-2 shadow-lg z-10 leading-relaxed">
                      Generates a time-limited secure link for sharing with authorised personnel.
                    </div>
                  )}
                </div>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-accent text-white rounded-lg text-[12px] font-medium hover:bg-accent-hover transition-colors cursor-pointer">
                  <Upload size={12} />
                  Upload File
                </button>
              </div>
            </div>

            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selected.files.map((file, i) => {
                const Icon = fileIcon[file.type];
                return (
                  <div key={i} className="border border-border rounded-lg p-4 hover:bg-bg-hover transition-colors cursor-pointer">
                    <div className="w-full h-16 bg-[#F1F5F9] rounded-md flex items-center justify-center mb-3">
                      <Icon size={20} className="text-muted" strokeWidth={1.5} />
                    </div>
                    <p className="text-[13px] font-medium text-heading truncate">{file.name}</p>
                    <p className="text-[11px] text-muted mt-1">{file.date}</p>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-border">
                      <p className="text-[11px] text-muted truncate pr-2">{file.uploadedBy}</p>
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-[#F1F5F9] text-secondary">
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
