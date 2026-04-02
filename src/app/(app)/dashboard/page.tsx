import Image from "next/image";
import {
  Users,
  FileUp,
  Stethoscope,
  MapPin,
  Clock,
} from "lucide-react";

const stats = [
  { label: "Active Referrals", value: "3", icon: Users, color: "text-blue-accent" },
  { label: "Records Uploaded", value: "47", icon: FileUp, color: "text-green-badge" },
  { label: "Medical Staff Registered", value: "18", icon: Stethoscope, color: "text-amber-badge" },
  { label: "Venues Configured", value: "8", icon: MapPin, color: "text-navy" },
];

const activity = [
  {
    text: "Dr. Sarah Chen uploaded imaging for Player #12",
    venue: "Melbourne Park Stadium",
    time: "2 hours ago",
  },
  {
    text: "Referral submitted for Player #7 — MRI scan",
    venue: "Stadium Australia, Sydney",
    time: "3 hours ago",
  },
  {
    text: "Dr. James Murray registered as tournament physician",
    venue: "Brisbane Stadium",
    time: "5 hours ago",
  },
  {
    text: "Player #3 medical record updated — treatment notes added",
    venue: "Adelaide Oval",
    time: "6 hours ago",
  },
  {
    text: "Royal Melbourne Hospital added to medical directory",
    venue: "Melbourne",
    time: "8 hours ago",
  },
  {
    text: "Dr. Priya Patel completed referral for Player #15",
    venue: "Perth Stadium",
    time: "Yesterday",
  },
];

export default function DashboardPage() {
  return (
    <div className="p-4 lg:p-8 max-w-6xl mx-auto">
      {/* Welcome */}
      <div className="mb-8 flex items-center gap-4">
        <Image
          src="/world-rugby-logo.png"
          alt="World Rugby"
          width={48}
          height={80}
          className="shrink-0"
        />
        <div>
          <h1 className="text-2xl font-bold text-navy">
            Rugby World Cup Australia 2027
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Welcome back, Dr. Kandrotas. Here&apos;s your tournament overview.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border border-grey-border p-4 lg:p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <stat.icon size={20} className={stat.color} />
            </div>
            <p className="text-2xl lg:text-3xl font-bold text-gray-900">
              {stat.value}
            </p>
            <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl border border-grey-border">
        <div className="px-5 py-4 border-b border-grey-border">
          <h2 className="text-sm font-semibold text-gray-900">
            Recent Activity
          </h2>
        </div>
        <div className="divide-y divide-grey-border">
          {activity.map((item, i) => (
            <div
              key={i}
              className="px-5 py-3.5 flex items-start gap-3 hover:bg-gray-50 transition-colors"
            >
              <div className="mt-0.5 w-7 h-7 rounded-full bg-grey-bg flex items-center justify-center shrink-0">
                <Clock size={14} className="text-gray-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">{item.text}</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {item.venue} · {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
