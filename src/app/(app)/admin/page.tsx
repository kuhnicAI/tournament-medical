"use client";

import { useState } from "react";
import {
  MapPin,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Users,
  Calendar,
  Shield,
} from "lucide-react";

const venues = [
  { name: "Melbourne Park Stadium", city: "Melbourne", status: "Active" },
  { name: "Stadium Australia", city: "Sydney", status: "Active" },
  { name: "Brisbane Stadium", city: "Brisbane", status: "Active" },
  { name: "Adelaide Oval", city: "Adelaide", status: "Active" },
  { name: "Perth Stadium", city: "Perth", status: "Active" },
  { name: "Robina Stadium", city: "Gold Coast", status: "Active" },
  { name: "Newcastle Stadium", city: "Newcastle", status: "Pending" },
  { name: "Canberra Stadium", city: "Canberra", status: "Pending" },
];

const users = [
  { name: "Dr. Gytis Kandrotas", role: "Tournament Medical Admin", email: "g.kandrotas@worldrugby.org", lastActive: "Just now" },
  { name: "Dr. Sarah Chen", role: "Tournament Physician", email: "s.chen@worldrugby.org", lastActive: "2 hours ago" },
  { name: "Dr. James Murray", role: "Tournament Physician", email: "j.murray@worldrugby.org", lastActive: "3 hours ago" },
  { name: "Dr. Priya Patel", role: "Tournament Physician", email: "p.patel@worldrugby.org", lastActive: "5 hours ago" },
  { name: "Dr. Tom Richards", role: "Venue Medical Officer", email: "t.richards@worldrugby.org", lastActive: "Yesterday" },
  { name: "Dr. Antoine Dupont", role: "Team Physician", email: "a.dupont@worldrugby.org", lastActive: "Yesterday" },
  { name: "Michelle Torres", role: "Medical Coordinator", email: "m.torres@worldrugby.org", lastActive: "1 hour ago" },
  { name: "Dr. Liam O'Brien", role: "Venue Medical Officer", email: "l.obrien@worldrugby.org", lastActive: "4 hours ago" },
];

const roleStyles: Record<string, string> = {
  "Tournament Physician": "bg-blue-50 text-blue-600",
  "Tournament Medical Admin": "bg-slate-800 text-white",
  "Venue Medical Officer": "bg-violet-50 text-violet-600",
  "Team Physician": "bg-emerald-50 text-emerald-600",
  "Medical Coordinator": "bg-amber-50 text-amber-600",
};

export default function AdminPage() {
  const [showSpinDown, setShowSpinDown] = useState(false);
  const [venuesOpen, setVenuesOpen] = useState(true);
  const [usersOpen, setUsersOpen] = useState(true);

  return (
    <div className="p-4 lg:p-8 max-w-[1100px] mx-auto">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-text">Tournament Admin</h1>
        <p className="text-sm text-text-muted mt-0.5">
          Manage settings, venues, and personnel
        </p>
      </div>

      {/* Tournament Details */}
      <div className="bg-gradient-to-br from-accent/[0.08] to-blue-400/[0.03] rounded-2xl border border-accent/20 p-5 lg:p-6 mb-4">
        <div className="flex items-center gap-2 mb-4">
          <Shield size={16} className="text-accent" />
          <h2 className="text-sm font-semibold text-text">Tournament Details</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <p className="text-[11px] text-text-muted uppercase tracking-wider mb-1">Tournament</p>
            <p className="text-sm font-medium text-text">
              Rugby World Cup Australia 2027
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <Calendar size={11} className="text-text-muted" />
              <p className="text-[11px] text-text-muted uppercase tracking-wider">Dates</p>
            </div>
            <p className="text-sm font-medium text-text">
              1 Oct — 13 Nov 2027
            </p>
          </div>
          <div>
            <p className="text-[11px] text-text-muted uppercase tracking-wider mb-1">Status</p>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Active
            </span>
          </div>
        </div>
      </div>

      {/* Venues */}
      <div className="bg-surface rounded-2xl border border-border shadow-sm mb-4 overflow-hidden">
        <button
          onClick={() => setVenuesOpen(!venuesOpen)}
          className="w-full px-5 py-4 flex items-center justify-between cursor-pointer hover:bg-bg-subtle/50 transition-all duration-150"
        >
          <div className="flex items-center gap-2.5">
            <MapPin size={16} className="text-text-muted" />
            <h2 className="text-sm font-semibold text-text">
              Venues
            </h2>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-bg-subtle text-text-muted">
              {venues.length}
            </span>
          </div>
          {venuesOpen ? (
            <ChevronUp size={16} className="text-text-muted" />
          ) : (
            <ChevronDown size={16} className="text-text-muted" />
          )}
        </button>
        {venuesOpen && (
          <div className="border-t border-border">
            <table className="w-full">
              <thead>
                <tr className="bg-bg-subtle/50">
                  <th className="text-left text-[11px] font-medium text-text-muted uppercase tracking-wider px-5 py-2.5">
                    Venue
                  </th>
                  <th className="text-left text-[11px] font-medium text-text-muted uppercase tracking-wider px-5 py-2.5">
                    City
                  </th>
                  <th className="text-left text-[11px] font-medium text-text-muted uppercase tracking-wider px-5 py-2.5">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {venues.map((venue, i) => (
                  <tr
                    key={venue.name}
                    className={`${i % 2 === 1 ? "bg-bg-subtle/30" : ""} hover:bg-bg-subtle/50 transition-colors`}
                  >
                    <td className="px-5 py-3 text-[13px] font-medium text-text">
                      {venue.name}
                    </td>
                    <td className="px-5 py-3 text-[13px] text-text-secondary">
                      {venue.city}
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className={`text-[11px] font-medium px-2 py-0.5 rounded-md ${
                          venue.status === "Active"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-amber-50 text-amber-600"
                        }`}
                      >
                        {venue.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Users */}
      <div className="bg-surface rounded-2xl border border-border shadow-sm mb-4 overflow-hidden">
        <button
          onClick={() => setUsersOpen(!usersOpen)}
          className="w-full px-5 py-4 flex items-center justify-between cursor-pointer hover:bg-bg-subtle/50 transition-all duration-150"
        >
          <div className="flex items-center gap-2.5">
            <Users size={16} className="text-text-muted" />
            <h2 className="text-sm font-semibold text-text">
              Registered Users
            </h2>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-bg-subtle text-text-muted">
              {users.length}
            </span>
          </div>
          {usersOpen ? (
            <ChevronUp size={16} className="text-text-muted" />
          ) : (
            <ChevronDown size={16} className="text-text-muted" />
          )}
        </button>
        {usersOpen && (
          <div className="border-t border-border overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="bg-bg-subtle/50">
                  <th className="text-left text-[11px] font-medium text-text-muted uppercase tracking-wider px-5 py-2.5">
                    Name
                  </th>
                  <th className="text-left text-[11px] font-medium text-text-muted uppercase tracking-wider px-5 py-2.5">
                    Role
                  </th>
                  <th className="text-left text-[11px] font-medium text-text-muted uppercase tracking-wider px-5 py-2.5">
                    Email
                  </th>
                  <th className="text-left text-[11px] font-medium text-text-muted uppercase tracking-wider px-5 py-2.5">
                    Last Active
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {users.map((user, i) => (
                  <tr
                    key={user.email}
                    className={`${i % 2 === 1 ? "bg-bg-subtle/30" : ""} hover:bg-bg-subtle/50 transition-colors`}
                  >
                    <td className="px-5 py-3 text-[13px] font-medium text-text">
                      {user.name}
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className={`text-[11px] font-medium px-2 py-0.5 rounded-md ${
                          roleStyles[user.role] || "bg-gray-50 text-gray-600"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-[13px] text-text-secondary">
                      {user.email}
                    </td>
                    <td className="px-5 py-3 text-[13px] text-text-muted">
                      {user.lastActive}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Danger Zone */}
      <div className="bg-surface rounded-2xl border border-red-200 p-5">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
            <AlertTriangle size={17} className="text-red-500" />
          </div>
          <div className="flex-1">
            <h2 className="text-sm font-semibold text-text">Danger Zone</h2>
            <p className="text-[13px] text-text-muted mt-1 leading-relaxed">
              Spin down this tournament to archive all data and revoke access for
              all personnel. This action cannot be undone.
            </p>
            <button
              onClick={() => setShowSpinDown(!showSpinDown)}
              className="mt-3 px-4 py-2 bg-white text-red-600 text-sm font-medium rounded-xl border border-red-300 hover:bg-red-50 transition-all duration-150 cursor-pointer flex items-center gap-2"
            >
              <AlertTriangle size={14} />
              Spin Down Tournament
            </button>
            {showSpinDown && (
              <div className="mt-3 p-4 bg-red-50 rounded-xl border border-red-200">
                <p className="text-[13px] text-red-700 leading-relaxed">
                  Are you sure? This will archive all tournament data and revoke
                  access for {users.length} registered users across {venues.length}{" "}
                  venues.
                </p>
                <div className="flex gap-2 mt-3">
                  <button className="px-3.5 py-1.5 bg-red-600 text-white text-xs font-medium rounded-lg hover:bg-red-700 transition-all duration-150 cursor-pointer">
                    Confirm Spin Down
                  </button>
                  <button
                    onClick={() => setShowSpinDown(false)}
                    className="px-3.5 py-1.5 bg-white text-text-secondary text-xs font-medium rounded-lg border border-border hover:bg-bg-subtle transition-all duration-150 cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
