"use client";

import { useState } from "react";
import { MapPin, AlertTriangle, ChevronDown, ChevronUp, Users } from "lucide-react";

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

export default function AdminPage() {
  const [showSpinDown, setShowSpinDown] = useState(false);
  const [venuesOpen, setVenuesOpen] = useState(true);
  const [usersOpen, setUsersOpen] = useState(true);

  return (
    <div className="p-4 lg:p-8 max-w-[1000px] mx-auto">
      <div className="mb-6">
        <h1 className="text-[18px] font-medium text-heading">Tournament Admin</h1>
        <p className="text-[13px] text-secondary mt-1">Manage settings, venues, and personnel</p>
      </div>

      {/* Tournament Details */}
      <div className="bg-surface rounded-lg shadow-sm p-5 mb-4">
        <h2 className="text-[13px] font-medium text-heading mb-4">Tournament Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <p className="text-[11px] text-muted mb-1">Tournament</p>
            <p className="text-[13px] font-medium text-heading">Rugby World Cup Australia 2027</p>
          </div>
          <div>
            <p className="text-[11px] text-muted mb-1">Dates</p>
            <p className="text-[13px] font-medium text-heading">1 Oct — 13 Nov 2027</p>
          </div>
          <div>
            <p className="text-[11px] text-muted mb-1">Status</p>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#F1F5F9] text-secondary">
              Active
            </span>
          </div>
        </div>
      </div>

      {/* Venues */}
      <div className="bg-surface rounded-lg shadow-sm mb-4 overflow-hidden">
        <button
          onClick={() => setVenuesOpen(!venuesOpen)}
          className="w-full px-5 py-3.5 flex items-center justify-between cursor-pointer hover:bg-bg-hover transition-colors"
        >
          <div className="flex items-center gap-2">
            <MapPin size={15} className="text-muted" strokeWidth={1.5} />
            <h2 className="text-[13px] font-medium text-heading">Venues</h2>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#F1F5F9] text-secondary">
              {venues.length}
            </span>
          </div>
          {venuesOpen ? <ChevronUp size={15} className="text-muted" /> : <ChevronDown size={15} className="text-muted" />}
        </button>
        {venuesOpen && (
          <div className="border-t border-border">
            <table className="w-full">
              <thead>
                <tr className="bg-[#F8FAFC]">
                  <th className="text-left text-[11px] font-medium text-muted px-5 py-2">Venue</th>
                  <th className="text-left text-[11px] font-medium text-muted px-5 py-2">City</th>
                  <th className="text-left text-[11px] font-medium text-muted px-5 py-2">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {venues.map((venue, i) => (
                  <tr key={venue.name} className={i % 2 === 1 ? "bg-[#FAFBFC]" : ""}>
                    <td className="px-5 py-2.5 text-[13px] font-medium text-heading">{venue.name}</td>
                    <td className="px-5 py-2.5 text-[13px] text-secondary">{venue.city}</td>
                    <td className="px-5 py-2.5">
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#F1F5F9] text-secondary">
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
      <div className="bg-surface rounded-lg shadow-sm mb-4 overflow-hidden">
        <button
          onClick={() => setUsersOpen(!usersOpen)}
          className="w-full px-5 py-3.5 flex items-center justify-between cursor-pointer hover:bg-bg-hover transition-colors"
        >
          <div className="flex items-center gap-2">
            <Users size={15} className="text-muted" strokeWidth={1.5} />
            <h2 className="text-[13px] font-medium text-heading">Registered Users</h2>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#F1F5F9] text-secondary">
              {users.length}
            </span>
          </div>
          {usersOpen ? <ChevronUp size={15} className="text-muted" /> : <ChevronDown size={15} className="text-muted" />}
        </button>
        {usersOpen && (
          <div className="border-t border-border overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-[#F8FAFC]">
                  <th className="text-left text-[11px] font-medium text-muted px-5 py-2">Name</th>
                  <th className="text-left text-[11px] font-medium text-muted px-5 py-2">Role</th>
                  <th className="text-left text-[11px] font-medium text-muted px-5 py-2">Email</th>
                  <th className="text-left text-[11px] font-medium text-muted px-5 py-2">Last Active</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {users.map((user, i) => (
                  <tr key={user.email} className={i % 2 === 1 ? "bg-[#FAFBFC]" : ""}>
                    <td className="px-5 py-2.5 text-[13px] font-medium text-heading">{user.name}</td>
                    <td className="px-5 py-2.5">
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#F1F5F9] text-secondary">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-5 py-2.5 text-[13px] text-secondary">{user.email}</td>
                    <td className="px-5 py-2.5 text-[13px] text-muted">{user.lastActive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Danger Zone */}
      <div className="bg-surface rounded-lg border border-border p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle size={16} className="text-muted mt-0.5 shrink-0" strokeWidth={1.5} />
          <div className="flex-1">
            <h2 className="text-[13px] font-medium text-heading">Danger Zone</h2>
            <p className="text-[12px] text-secondary mt-1 leading-relaxed">
              Spin down this tournament to archive all data and revoke access for all personnel. This action cannot be undone.
            </p>
            <button
              onClick={() => setShowSpinDown(!showSpinDown)}
              className="mt-3 px-3.5 py-1.5 text-[12px] font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <AlertTriangle size={12} />
              Spin Down Tournament
            </button>
            {showSpinDown && (
              <div className="mt-3 p-3.5 bg-[#FEF2F2] rounded-lg border border-red-200">
                <p className="text-[12px] text-red-700 leading-relaxed">
                  Are you sure? This will archive all data and revoke access for {users.length} users across {venues.length} venues.
                </p>
                <div className="flex gap-2 mt-2.5">
                  <button className="px-3 py-1.5 bg-red-600 text-white text-[12px] font-medium rounded-lg hover:bg-red-700 transition-colors cursor-pointer">
                    Confirm
                  </button>
                  <button
                    onClick={() => setShowSpinDown(false)}
                    className="px-3 py-1.5 text-[12px] text-secondary border border-border rounded-lg hover:bg-bg-hover transition-colors cursor-pointer"
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
