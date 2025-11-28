"use client";

import { BarChart3, Users, TrendingUp, CheckCircle2 } from "lucide-react";

export default function DashboardPreview() {
  const analytics = [
    { label: "Completed Tasks", value: "24", icon: CheckCircle2 },
    { label: "Active Projects", value: "3", icon: TrendingUp },
    { label: "Team Members", value: "12", icon: Users },
    { label: "Completion Rate", value: "68%", icon: BarChart3 },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-xl shadow-sky-900/40 backdrop-blur-lg">
      <h3 className="text-lg font-semibold mb-4 text-white">Project Analytics</h3>

      <div className="grid grid-cols-2 gap-4">
        {analytics.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex flex-col p-3 bg-white/5 rounded-xl border border-white/10"
            >
              <div className="flex items-center gap-2">
                <Icon className="w-5 h-5 text-sky-400" />
                <span className="text-xs text-gray-300">{item.label}</span>
              </div>
              <p className="text-xl font-bold text-white mt-1">{item.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
