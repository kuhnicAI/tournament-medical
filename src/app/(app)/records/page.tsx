"use client";

import { useState } from "react";
import {
  Upload,
  Share2,
  FileText,
  Image as ImageIcon,
  File,
  Search,
  Info,
} from "lucide-react";

type Patient = {
  id: string;
  label: string;
  team: string;
  files: {
    name: string;
    uploadedBy: string;
    date: string;
    type: "PDF" | "JPEG" | "DICOM" | "PNG";
  }[];
};

const patients: Patient[] = [
  {
    id: "p1",
    label: "Player #7",
    team: "England",
    files: [
      {
        name: "Left ankle X-ray",
        uploadedBy: "Dr. Sarah Chen",
        date: "14 Oct 2027",
        type: "JPEG",
      },
      {
        name: "Pre-tournament medical clearance",
        uploadedBy: "Dr. James Murray",
        date: "10 Oct 2027",
        type: "PDF",
      },
      {
        name: "MRI — left knee",
        uploadedBy: "I-MED Radiology",
        date: "12 Oct 2027",
        type: "DICOM",
      },
    ],
  },
  {
    id: "p2",
    label: "Player #3",
    team: "New Zealand",
    files: [
      {
        name: "Shoulder ultrasound",
        uploadedBy: "Dr. Priya Patel",
        date: "13 Oct 2027",
        type: "JPEG",
      },
      {
        name: "Blood panel results",
        uploadedBy: "Royal Melbourne Hospital",
        date: "11 Oct 2027",
        type: "PDF",
      },
    ],
  },
  {
    id: "p3",
    label: "Player #12",
    team: "South Africa",
    files: [
      {
        name: "Concussion assessment — Game 3",
        uploadedBy: "Dr. Sarah Chen",
        date: "15 Oct 2027",
        type: "PDF",
      },
      {
        name: "Head CT scan",
        uploadedBy: "St Vincent's Hospital",
        date: "15 Oct 2027",
        type: "DICOM",
      },
      {
        name: "Return-to-play clearance",
        uploadedBy: "Dr. James Murray",
        date: "18 Oct 2027",
        type: "PDF",
      },
      {
        name: "Follow-up cognitive test",
        uploadedBy: "Dr. Priya Patel",
        date: "20 Oct 2027",
        type: "PDF",
      },
    ],
  },
  {
    id: "p4",
    label: "Player #9",
    team: "Australia",
    files: [
      {
        name: "Right hamstring MRI",
        uploadedBy: "Perth Radiological Clinic",
        date: "16 Oct 2027",
        type: "DICOM",
      },
      {
        name: "Physiotherapy notes",
        uploadedBy: "Dr. Tom Richards",
        date: "17 Oct 2027",
        type: "PDF",
      },
    ],
  },
  {
    id: "p5",
    label: "Player #1",
    team: "France",
    files: [
      {
        name: "Pre-tournament medical clearance",
        uploadedBy: "Dr. Antoine Dupont",
        date: "9 Oct 2027",
        type: "PDF",
      },
    ],
  },
  {
    id: "p6",
    label: "Player #15",
    team: "Ireland",
    files: [
      {
        name: "Ankle X-ray — right",
        uploadedBy: "Brisbane Private Hospital",
        date: "14 Oct 2027",
        type: "JPEG",
      },
      {
        name: "Orthopaedic consultation notes",
        uploadedBy: "Dr. Sarah Chen",
        date: "15 Oct 2027",
        type: "PDF",
      },
    ],
  },
];

const fileTypeStyles: Record<string, { bg: string; icon: typeof FileText }> = {
  PDF: { bg: "bg-red-100 text-red-600", icon: FileText },
  JPEG: { bg: "bg-blue-100 text-blue-600", icon: ImageIcon },
  DICOM: { bg: "bg-purple-100 text-purple-600", icon: File },
  PNG: { bg: "bg-green-100 text-green-600", icon: ImageIcon },
};

export default function RecordsPage() {
  const [selectedId, setSelectedId] = useState("p1");
  const [showTooltip, setShowTooltip] = useState(false);
  const selected = patients.find((p) => p.id === selectedId)!;

  return (
    <div className="p-4 lg:p-8 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-navy">Medical Records</h1>
        <p className="text-sm text-gray-500 mt-1">
          Secure player medical record management
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Patient List */}
        <div className="lg:w-72 shrink-0">
          <div className="bg-white rounded-xl border border-grey-border overflow-hidden">
            <div className="p-3 border-b border-grey-border">
              <div className="relative">
                <Search
                  size={14}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search players..."
                  className="w-full pl-8 pr-3 py-1.5 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-accent focus:border-transparent"
                />
              </div>
            </div>
            <div className="divide-y divide-grey-border max-h-[calc(100vh-280px)] overflow-auto">
              {patients.map((patient) => (
                <button
                  key={patient.id}
                  onClick={() => setSelectedId(patient.id)}
                  className={`w-full text-left px-4 py-3 transition-colors cursor-pointer ${
                    selectedId === patient.id
                      ? "bg-navy text-white"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <p
                    className={`text-sm font-medium ${
                      selectedId === patient.id
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    {patient.label} — {patient.team}
                  </p>
                  <p
                    className={`text-xs mt-0.5 ${
                      selectedId === patient.id
                        ? "text-blue-200"
                        : "text-gray-400"
                    }`}
                  >
                    {patient.files.length} file
                    {patient.files.length !== 1 ? "s" : ""}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* File Grid */}
        <div className="flex-1">
          <div className="bg-white rounded-xl border border-grey-border">
            <div className="px-5 py-4 border-b border-grey-border flex items-center justify-between flex-wrap gap-3">
              <div>
                <h2 className="text-sm font-semibold text-gray-900">
                  {selected.label} — {selected.team}
                </h2>
                <p className="text-xs text-gray-400">
                  {selected.files.length} records on file
                </p>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <button
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded-lg text-xs text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <Share2 size={13} />
                    Share Securely
                  </button>
                  {showTooltip && (
                    <div className="absolute right-0 top-full mt-1.5 w-52 bg-navy text-white text-[11px] rounded-lg px-3 py-2 shadow-lg z-10">
                      <div className="flex items-start gap-1.5">
                        <Info size={12} className="mt-0.5 shrink-0" />
                        <span>
                          Generates a time-limited secure link for sharing with
                          authorised personnel.
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-navy text-white rounded-lg text-xs hover:bg-navy-light transition-colors cursor-pointer">
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
                    className="border border-grey-border rounded-lg p-4 hover:shadow-sm transition-shadow"
                  >
                    {/* Thumbnail placeholder */}
                    <div className="w-full h-24 bg-grey-bg rounded-lg flex items-center justify-center mb-3">
                      <Icon size={28} className="text-gray-300" />
                    </div>
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {file.date}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-[11px] text-gray-400 truncate">
                        {file.uploadedBy}
                      </p>
                      <span
                        className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${style.bg}`}
                      >
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
