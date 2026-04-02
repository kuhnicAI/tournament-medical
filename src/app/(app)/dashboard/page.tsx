import Image from "next/image";
import {
  Users,
  FileUp,
  Stethoscope,
  MapPin,
  Clock,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  Upload,
  UserPlus,
  Building2,
} from "lucide-react";

const stats = [
  {
    label: "Active Referrals",
    value: "3",
    change: "+1 this week",
    trend: "up",
    icon: Users,
    gradient: "from-blue-500/10 to-blue-500/[0.02]",
    iconColor: "text-blue-500",
    borderColor: "border-blue-500/20",
  },
  {
    label: "Records Uploaded",
    value: "47",
    change: "+12 this week",
    trend: "up",
    icon: FileUp,
    gradient: "from-emerald-500/10 to-emerald-500/[0.02]",
    iconColor: "text-emerald-500",
    borderColor: "border-emerald-500/20",
  },
  {
    label: "Medical Staff",
    value: "18",
    change: "+2 registered",
    trend: "up",
    icon: Stethoscope,
    gradient: "from-amber-500/10 to-amber-500/[0.02]",
    iconColor: "text-amber-500",
    borderColor: "border-amber-500/20",
  },
  {
    label: "Venues Active",
    value: "8",
    change: "All configured",
    trend: "neutral",
    icon: MapPin,
    gradient: "from-violet-500/10 to-violet-500/[0.02]",
    iconColor: "text-violet-500",
    borderColor: "border-violet-500/20",
  },
];

type ActivityType = "upload" | "referral" | "registration" | "update" | "directory";

const activityConfig: Record<ActivityType, { color: string; icon: typeof Upload }> = {
  upload: { color: "border-l-blue-500", icon: Upload },
  referral: { color: "border-l-amber-500", icon: ArrowUpRight },
  registration: { color: "border-l-emerald-500", icon: UserPlus },
  update: { color: "border-l-violet-500", icon: FileUp },
  directory: { color: "border-l-slate-400", icon: Building2 },
};

const activity: {
  text: string;
  person: string;
  initials: string;
  venue: string;
  time: string;
  type: ActivityType;
}[] = [
  {
    text: "Uploaded imaging for Player #12",
    person: "Dr. Sarah Chen",
    initials: "SC",
    venue: "Melbourne Park Stadium",
    time: "2h ago",
    type: "upload",
  },
  {
    text: "Submitted referral for Player #7 — MRI scan",
    person: "Dr. James Murray",
    initials: "JM",
    venue: "Stadium Australia, Sydney",
    time: "3h ago",
    type: "referral",
  },
  {
    text: "Registered as tournament physician",
    person: "Dr. Liam O'Brien",
    initials: "LO",
    venue: "Brisbane Stadium",
    time: "5h ago",
    type: "registration",
  },
  {
    text: "Updated treatment notes for Player #3",
    person: "Dr. Priya Patel",
    initials: "PP",
    venue: "Adelaide Oval",
    time: "6h ago",
    type: "update",
  },
  {
    text: "Added Royal Melbourne Hospital to directory",
    person: "Michelle Torres",
    initials: "MT",
    venue: "Melbourne",
    time: "8h ago",
    type: "directory",
  },
  {
    text: "Completed referral for Player #15",
    person: "Dr. Priya Patel",
    initials: "PP",
    venue: "Perth Stadium",
    time: "Yesterday",
    type: "referral",
  },
];

// Tiny inline sparkline SVG
function Sparkline({ trend }: { trend: string }) {
  if (trend === "neutral") return null;
  return (
    <svg width="48" height="20" viewBox="0 0 48 20" fill="none" className="opacity-60">
      <path
        d={trend === "up" ? "M2 16 L10 12 L18 14 L26 8 L34 10 L42 4 L46 2" : "M2 4 L10 8 L18 6 L26 12 L34 10 L42 16 L46 18"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DashboardPage() {
  return (
    <div className="p-4 lg:p-8 max-w-[1100px] mx-auto">
      {/* Welcome */}
      <div className="mb-8 flex items-center gap-4">
        <Image
          src="/world-rugby-logo.png"
          alt="World Rugby"
          width={44}
          height={73}
          className="shrink-0"
        />
        <div>
          <h1 className="text-xl font-semibold text-text">
            Rugby World Cup Australia 2027
          </h1>
          <p className="text-sm text-text-muted mt-0.5">
            Welcome back, Dr. Kandrotas
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`bg-gradient-to-br ${stat.gradient} backdrop-blur-sm rounded-2xl border ${stat.borderColor} p-4 lg:p-5 group hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-200`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-9 h-9 rounded-xl bg-white/80 flex items-center justify-center shadow-sm`}>
                <stat.icon size={17} className={stat.iconColor} />
              </div>
              <div className={stat.iconColor}>
                <Sparkline trend={stat.trend} />
              </div>
            </div>
            <p className="text-2xl lg:text-[28px] font-semibold text-text tracking-tight">
              {stat.value}
            </p>
            <p className="text-xs text-text-muted mt-1">{stat.label}</p>
            <div className="flex items-center gap-1 mt-2">
              {stat.trend === "up" ? (
                <TrendingUp size={12} className="text-emerald-500" />
              ) : stat.trend === "down" ? (
                <TrendingDown size={12} className="text-red-500" />
              ) : null}
              <span className="text-[11px] text-text-muted">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-surface rounded-2xl border border-border shadow-sm">
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <h2 className="text-sm font-semibold text-text">Recent Activity</h2>
          <button className="text-xs text-accent hover:text-accent-hover font-medium transition-colors cursor-pointer">
            View all
          </button>
        </div>
        <div className="divide-y divide-border">
          {activity.map((item, i) => {
            const config = activityConfig[item.type];
            const Icon = config.icon;
            return (
              <div
                key={i}
                className={`px-5 py-3.5 flex items-center gap-3.5 hover:bg-bg-subtle/50 transition-all duration-150 border-l-2 ${config.color}`}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center shrink-0 text-[11px] font-semibold text-text-secondary">
                  {item.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] text-text">
                    <span className="font-medium">{item.person}</span>{" "}
                    <span className="text-text-secondary">{item.text.toLowerCase()}</span>
                  </p>
                  <p className="text-[11px] text-text-muted mt-0.5">
                    {item.venue}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Icon size={13} className="text-text-faint" />
                  <span className="text-[11px] text-text-muted whitespace-nowrap">
                    {item.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
