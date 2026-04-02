import Image from "next/image";
import {
  Users,
  FileUp,
  Stethoscope,
  MapPin,
  Upload,
  ArrowUpRight,
  UserPlus,
  Building2,
} from "lucide-react";

const stats = [
  { label: "Active Referrals", value: "3", change: "+1 this week", icon: Users },
  { label: "Records Uploaded", value: "47", change: "+12 this week", icon: FileUp },
  { label: "Medical Staff", value: "18", change: "+2 registered", icon: Stethoscope },
  { label: "Venues Active", value: "8", change: "All configured", icon: MapPin },
];

const activity = [
  { text: "uploaded imaging for Player #12", person: "Dr. Sarah Chen", initials: "SC", venue: "Melbourne Park Stadium", time: "2h ago", icon: Upload },
  { text: "submitted referral for Player #7 — MRI scan", person: "Dr. James Murray", initials: "JM", venue: "Stadium Australia, Sydney", time: "3h ago", icon: ArrowUpRight },
  { text: "registered as tournament physician", person: "Dr. Liam O'Brien", initials: "LO", venue: "Brisbane Stadium", time: "5h ago", icon: UserPlus },
  { text: "updated treatment notes for Player #3", person: "Dr. Priya Patel", initials: "PP", venue: "Adelaide Oval", time: "6h ago", icon: FileUp },
  { text: "added Royal Melbourne Hospital to directory", person: "Michelle Torres", initials: "MT", venue: "Melbourne", time: "8h ago", icon: Building2 },
  { text: "completed referral for Player #15", person: "Dr. Priya Patel", initials: "PP", venue: "Perth Stadium", time: "Yesterday", icon: ArrowUpRight },
];

export default function DashboardPage() {
  return (
    <div className="p-4 lg:p-8 max-w-[1000px] mx-auto">
      <div className="mb-8 flex items-center gap-3.5">
        <Image
          src="/world-rugby-logo.png"
          alt="World Rugby"
          width={36}
          height={60}
          className="shrink-0"
        />
        <div>
          <h1 className="text-[18px] font-medium text-heading">
            Rugby World Cup Australia 2027
          </h1>
          <p className="text-[13px] text-secondary mt-1">
            Welcome back, Dr. Kandrotas
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-surface rounded-lg shadow-sm p-4">
            <div className="mb-3">
              <stat.icon size={16} className="text-muted" strokeWidth={1.5} />
            </div>
            <p className="text-[24px] font-medium text-heading leading-none">
              {stat.value}
            </p>
            <p className="text-[12px] text-secondary mt-1.5">{stat.label}</p>
            <p className="text-[11px] text-muted mt-1">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Activity */}
      <div className="bg-surface rounded-lg shadow-sm">
        <div className="px-5 py-3.5 border-b border-border">
          <h2 className="text-[13px] font-medium text-heading">Recent Activity</h2>
        </div>
        <div className="divide-y divide-border">
          {activity.map((item, i) => (
            <div key={i} className="px-5 py-3 flex items-center gap-3 hover:bg-bg-hover transition-colors">
              <div className="w-7 h-7 rounded-full bg-[#F1F5F9] flex items-center justify-center shrink-0">
                <span className="text-[10px] font-medium text-secondary">{item.initials}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] text-body">
                  <span className="font-medium">{item.person}</span>{" "}
                  {item.text}
                </p>
                <p className="text-[11px] text-muted mt-0.5">{item.venue}</p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <item.icon size={12} className="text-muted" strokeWidth={1.5} />
                <span className="text-[11px] text-muted">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
