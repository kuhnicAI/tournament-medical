"use client";

import { useState } from "react";
import {
  MapPin,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
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
  {
    name: "Dr. Sarah Chen",
    role: "Tournament Physician",
    email: "s.chen@worldrugby.org",
    lastActive: "2 hours ago",
  },
  {
    name: "Dr. James Murray",
    role: "Tournament Physician",
    email: "j.murray@worldrugby.org",
    lastActive: "3 hours ago",
  },
  {
    name: "Dr. Priya Patel",
    role: "Tournament Physician",
    email: "p.patel@worldrugby.org",
    lastActive: "5 hours ago",
  },
  {
    name: "Dr. Tom Richards",
    role: "Venue Medical Officer",
    email: "t.richards@worldrugby.org",
    lastActive: "Yesterday",
  },
  {
    name: "Dr. Antoine Dupont",
    role: "Team Physician",
    email: "a.dupont@worldrugby.org",
    lastActive: "Yesterday",
  },
  {
    name: "Dr. Gytis Kandrotas",
    role: "Tournament Medical Admin",
    email: "g.kandrotas@worldrugby.org",
    lastActive: "Just now",
  },
  {
    name: "Michelle Torres",
    role: "Medical Coordinator",
    email: "m.torres@worldrugby.org",
    lastActive: "1 hour ago",
  },
  {
    name: "Dr. Liam O'Brien",
    role: "Venue Medical Officer",
    email: "l.obrien@worldrugby.org",
    lastActive: "4 hours ago",
  },
];

const roleStyles: Record<string, string> = {
  "Tournament Physician": "bg-blue-100 text-blue-700",
  "Tournament Medical Admin": "bg-navy text-white",
  "Venue Medical Officer": "bg-purple-100 text-purple-700",
  "Team Physician": "bg-green-100 text-green-700",
  "Medical Coordinator": "bg-amber-100 text-amber-700",
};

export default function AdminPage() {
  const [showSpinDown, setShowSpinDown] = useState(false);
  const [venuesOpen, setVenuesOpen] = useState(true);
  const [usersOpen, setUsersOpen] = useState(true);

  return (
    <div className="p-4 lg:p-8 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-navy">Tournament Admin</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage tournament settings, venues, and personnel
        </p>
      </div>

      {/* Tournament Details */}
      <div className="bg-white rounded-xl border border-grey-border p-5 mb-4">
        <h2 className="text-sm font-semibold text-gray-900 mb-4">
          Tournament Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-gray-400 mb-1">Tournament Name</p>
            <p className="text-sm font-medium text-gray-900">
              Rugby World Cup Australia 2027
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-1">Dates</p>
            <p className="text-sm font-medium text-gray-900">
              1 Oct — 13 Nov 2027
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-1">Status</p>
            <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Active
            </span>
          </div>
        </div>
      </div>

      {/* Venues */}
      <div className="bg-white rounded-xl border border-grey-border mb-4 overflow-hidden">
        <button
          onClick={() => setVenuesOpen(!venuesOpen)}
          className="w-full px-5 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-gray-400" />
            <h2 className="text-sm font-semibold text-gray-900">
              Venues ({venues.length})
            </h2>
          </div>
          {venuesOpen ? (
            <ChevronUp size={16} className="text-gray-400" />
          ) : (
            <ChevronDown size={16} className="text-gray-400" />
          )}
        </button>
        {venuesOpen && (
          <div className="border-t border-grey-border">
            <table className="w-full">
              <thead>
                <tr className="bg-grey-bg border-b border-grey-border">
                  <th className="text-left text-xs font-medium text-gray-500 px-5 py-2.5">
                    Venue
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 px-5 py-2.5">
                    City
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 px-5 py-2.5">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-grey-border">
                {venues.map((venue, i) => (
                  <tr
                    key={venue.name}
                    className={i % 2 === 1 ? "bg-grey-bg/50" : ""}
                  >
                    <td className="px-5 py-2.5 text-sm text-gray-900">
                      {venue.name}
                    </td>
                    <td className="px-5 py-2.5 text-sm text-gray-500">
                      {venue.city}
                    </td>
                    <td className="px-5 py-2.5">
                      <span
                        className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                          venue.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-100 text-amber-700"
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
      <div className="bg-white rounded-xl border border-grey-border mb-4 overflow-hidden">
        <button
          onClick={() => setUsersOpen(!usersOpen)}
          className="w-full px-5 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <h2 className="text-sm font-semibold text-gray-900">
            Registered Users ({users.length})
          </h2>
          {usersOpen ? (
            <ChevronUp size={16} className="text-gray-400" />
          ) : (
            <ChevronDown size={16} className="text-gray-400" />
          )}
        </button>
        {usersOpen && (
          <div className="border-t border-grey-border overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-grey-bg border-b border-grey-border">
                  <th className="text-left text-xs font-medium text-gray-500 px-5 py-2.5">
                    Name
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 px-5 py-2.5">
                    Role
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 px-5 py-2.5">
                    Email
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 px-5 py-2.5">
                    Last Active
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-grey-border">
                {users.map((user, i) => (
                  <tr
                    key={user.email}
                    className={i % 2 === 1 ? "bg-grey-bg/50" : ""}
                  >
                    <td className="px-5 py-2.5 text-sm font-medium text-gray-900">
                      {user.name}
                    </td>
                    <td className="px-5 py-2.5">
                      <span
                        className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                          roleStyles[user.role] || "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="px-5 py-2.5 text-sm text-gray-500">
                      {user.email}
                    </td>
                    <td className="px-5 py-2.5 text-sm text-gray-400">
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
      <div className="bg-white rounded-xl border border-red-200 p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle
            size={18}
            className="text-red-500 mt-0.5 shrink-0"
          />
          <div className="flex-1">
            <h2 className="text-sm font-semibold text-gray-900">
              Danger Zone
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Spin down this tournament to archive all data and revoke access for
              all personnel. This action cannot be undone.
            </p>
            <button
              onClick={() => setShowSpinDown(!showSpinDown)}
              className="mt-3 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors cursor-pointer"
            >
              Spin Down Tournament
            </button>
            {showSpinDown && (
              <div className="mt-3 p-3 bg-red-50 rounded-lg border border-red-200">
                <p className="text-xs text-red-700">
                  Are you sure? This will archive all tournament data and revoke
                  access for {users.length} registered users across {venues.length}{" "}
                  venues.
                </p>
                <div className="flex gap-2 mt-2">
                  <button className="px-3 py-1.5 bg-red-600 text-white text-xs font-medium rounded-lg hover:bg-red-700 transition-colors cursor-pointer">
                    Confirm Spin Down
                  </button>
                  <button
                    onClick={() => setShowSpinDown(false)}
                    className="px-3 py-1.5 bg-white text-gray-700 text-xs font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer"
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
