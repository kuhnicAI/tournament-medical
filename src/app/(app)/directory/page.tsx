"use client";

import { useState } from "react";
import {
  Search,
  MapPin,
  Phone,
  Mail,
  Navigation,
} from "lucide-react";

type Provider = {
  name: string;
  type: "Hospital" | "Imaging" | "Emergency" | "Specialist";
  address: string;
  city: string;
  phone: string;
  email: string;
  distance: string;
  venue: string;
};

const providers: Provider[] = [
  { name: "Royal Melbourne Hospital", type: "Hospital", address: "300 Grattan St, Parkville VIC 3050", city: "Melbourne", phone: "+61 3 9342 7000", email: "referrals@rmh.org.au", distance: "3.2 km", venue: "Melbourne Park Stadium" },
  { name: "Sydney Olympic Park Medical Centre", type: "Emergency", address: "8 Australia Ave, Sydney Olympic Park NSW 2127", city: "Sydney", phone: "+61 2 9764 3655", email: "bookings@sopmc.com.au", distance: "0.8 km", venue: "Stadium Australia" },
  { name: "Brisbane Private Hospital", type: "Hospital", address: "259 Wickham Terrace, Brisbane QLD 4000", city: "Brisbane", phone: "+61 7 3258 5200", email: "admin@brisbaneprivate.com.au", distance: "4.1 km", venue: "Brisbane Stadium" },
  { name: "I-MED Radiology — Melbourne", type: "Imaging", address: "100 Victoria Parade, East Melbourne VIC 3002", city: "Melbourne", phone: "+61 3 9667 1667", email: "melbourne@i-med.com.au", distance: "1.5 km", venue: "Melbourne Park Stadium" },
  { name: "St Vincent's Hospital Sydney", type: "Hospital", address: "390 Victoria St, Darlinghurst NSW 2010", city: "Sydney", phone: "+61 2 8382 1111", email: "referrals@svha.org.au", distance: "12.4 km", venue: "Stadium Australia" },
  { name: "Adelaide Sports Medicine Clinic", type: "Specialist", address: "187 Wakefield St, Adelaide SA 5000", city: "Adelaide", phone: "+61 8 8232 4422", email: "intake@asmc.com.au", distance: "2.8 km", venue: "Adelaide Oval" },
  { name: "Perth Radiological Clinic", type: "Imaging", address: "127 Hamersley Rd, Subiaco WA 6008", city: "Perth", phone: "+61 8 9382 1900", email: "subiaco@prc.com.au", distance: "5.6 km", venue: "Perth Stadium" },
  { name: "Royal Brisbane & Women's Hospital", type: "Emergency", address: "Butterfield St, Herston QLD 4029", city: "Brisbane", phone: "+61 7 3646 8111", email: "emergency@rbwh.qld.gov.au", distance: "6.3 km", venue: "Brisbane Stadium" },
  { name: "Concord Orthopaedic & Sports Medicine", type: "Specialist", address: "4 Hospital Rd, Concord West NSW 2138", city: "Sydney", phone: "+61 2 9767 5000", email: "referrals@concordortho.com.au", distance: "9.1 km", venue: "Stadium Australia" },
  { name: "Gold Coast University Hospital", type: "Hospital", address: "1 Hospital Blvd, Southport QLD 4215", city: "Gold Coast", phone: "+61 7 5687 2000", email: "admin@gcuh.health.qld.gov.au", distance: "3.7 km", venue: "Robina Stadium" },
];

const typeConfig: Record<string, { border: string; badge: string; text: string }> = {
  Hospital: { border: "border-l-blue-500", badge: "bg-blue-50 text-blue-600", text: "text-blue-600" },
  Imaging: { border: "border-l-violet-500", badge: "bg-violet-50 text-violet-600", text: "text-violet-600" },
  Emergency: { border: "border-l-red-500", badge: "bg-red-50 text-red-600", text: "text-red-600" },
  Specialist: { border: "border-l-emerald-500", badge: "bg-emerald-50 text-emerald-600", text: "text-emerald-600" },
};

const cities = [...new Set(providers.map((p) => p.city))];
const venues = [...new Set(providers.map((p) => p.venue))];
const types = ["Hospital", "Imaging", "Emergency", "Specialist"];

export default function DirectoryPage() {
  const [search, setSearch] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [filterVenue, setFilterVenue] = useState("");
  const [filterType, setFilterType] = useState("");

  const filtered = providers.filter((p) => {
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
    if (filterCity && p.city !== filterCity) return false;
    if (filterVenue && p.venue !== filterVenue) return false;
    if (filterType && p.type !== filterType) return false;
    return true;
  });

  return (
    <div className="p-4 lg:p-8 max-w-[1100px] mx-auto">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-text">Medical Directory</h1>
        <p className="text-sm text-text-muted mt-0.5">
          {filtered.length} providers across tournament venues
        </p>
      </div>

      {/* Search & Filters */}
      <div className="bg-surface rounded-2xl border border-border shadow-sm p-4 mb-5">
        <div className="relative mb-3">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search providers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-bg border border-border rounded-xl text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all duration-150 shadow-sm"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <select
            value={filterVenue}
            onChange={(e) => setFilterVenue(e.target.value)}
            className="px-3 py-2 bg-bg border border-border rounded-xl text-sm text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all duration-150"
          >
            <option value="">All Venues</option>
            {venues.map((v) => (<option key={v} value={v}>{v}</option>))}
          </select>
          <select
            value={filterCity}
            onChange={(e) => setFilterCity(e.target.value)}
            className="px-3 py-2 bg-bg border border-border rounded-xl text-sm text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all duration-150"
          >
            <option value="">All Cities</option>
            {cities.map((c) => (<option key={c} value={c}>{c}</option>))}
          </select>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-3 py-2 bg-bg border border-border rounded-xl text-sm text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all duration-150"
          >
            <option value="">All Types</option>
            {types.map((t) => (<option key={t} value={t}>{t}</option>))}
          </select>
        </div>
      </div>

      {/* Provider Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {filtered.map((provider) => {
          const config = typeConfig[provider.type];
          return (
            <div
              key={provider.name}
              className={`bg-surface rounded-2xl border border-border border-l-[3px] ${config.border} p-4 lg:p-5 hover:shadow-md hover:-translate-y-[1px] transition-all duration-200 group`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-[14px] font-semibold text-text group-hover:text-accent transition-colors">
                  {provider.name}
                </h3>
                <span className={`text-[11px] font-medium px-2.5 py-1 rounded-lg shrink-0 ml-3 ${config.badge}`}>
                  {provider.type}
                </span>
              </div>

              <div className="space-y-1.5 text-[13px] text-text-secondary">
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-text-muted" />
                  <span>{provider.address}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <Phone size={13} className="shrink-0 text-text-muted" />
                    <a href={`tel:${provider.phone.replace(/\s/g, "")}`} className="text-accent hover:text-accent-hover transition-colors hover:underline">
                      {provider.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mail size={13} className="shrink-0 text-text-muted" />
                    <a href={`mailto:${provider.email}`} className="text-accent hover:text-accent-hover transition-colors hover:underline truncate">
                      {provider.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-3 pt-3 border-t border-border-light">
                <span className="text-[11px] text-text-muted">
                  From {provider.venue}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-medium text-text-secondary bg-bg-subtle px-2 py-0.5 rounded-md">
                  <Navigation size={10} />
                  {provider.distance}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
