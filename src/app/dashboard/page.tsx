"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Activity, Bell, Flame, HeartPulse, Trophy } from "lucide-react";
import { AnimatedPage } from "@/components/animated-page";
import { PageHeader } from "@/components/page-header";
import { SiteShell } from "@/components/site-shell";
import { Card } from "@/components/ui/card";
import { dashboardScores, riskPanels, timeline } from "@/lib/data";

const chartData = [
  { day: "Mon", health: 78, sleep: 68, stress: 52 },
  { day: "Tue", health: 82, sleep: 74, stress: 45 },
  { day: "Wed", health: 80, sleep: 70, stress: 48 },
  { day: "Thu", health: 86, sleep: 80, stress: 40 },
  { day: "Fri", health: 88, sleep: 76, stress: 41 },
  { day: "Sat", health: 91, sleep: 84, stress: 32 },
  { day: "Sun", health: 89, sleep: 79, stress: 36 }
];

export default function DashboardPage() {
  return (
    <SiteShell>
      <AnimatedPage>
        <section className="mx-auto max-w-7xl px-4 py-10">
          <PageHeader badge="Command center" title="Health Dashboard" text="Your AI health cockpit with live scores, risk predictions, wellness streaks, notifications, and a timeline of medical context." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {dashboardScores.map((score) => (
              <Card key={score.name}>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm text-slate-400">{score.name} Score</span>
                  <HeartPulse size={18} style={{ color: score.color }} />
                </div>
                <div className="text-4xl font-black text-white">{score.value}</div>
                <div className="mt-4 h-2 rounded-full bg-white/10">
                  <div className="h-2 rounded-full" style={{ width: `${score.value}%`, backgroundColor: score.color }} />
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
            <Card className="min-h-[390px]">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Biometric Analytics</h2>
                <Activity className="text-cyan-200" />
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="health" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.65} />
                      <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(148,210,255,0.1)" />
                  <XAxis dataKey="day" stroke="#8fb3c9" />
                  <YAxis stroke="#8fb3c9" />
                  <Tooltip contentStyle={{ background: "#071225", border: "1px solid rgba(34,211,238,.2)", color: "#fff" }} />
                  <Area type="monotone" dataKey="health" stroke="#22d3ee" fill="url(#health)" strokeWidth={3} />
                  <Area type="monotone" dataKey="sleep" stroke="#60a5fa" fill="transparent" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </Card>
            <Card>
              <h2 className="mb-5 text-xl font-bold text-white">AI Risk Prediction</h2>
              <div className="space-y-4">
                {riskPanels.map((risk) => (
                  <div key={risk.label} className="rounded-md border border-cyan-200/10 bg-white/5 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-semibold text-white">{risk.label}</span>
                      <risk.icon className="text-cyan-200" size={18} />
                    </div>
                    <div className="flex items-end justify-between">
                      <span className="text-3xl font-black text-cyan-100">{risk.value}%</span>
                      <span className="text-sm text-slate-400">{risk.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            <Card>
              <Flame className="mb-4 text-cyan-200" />
              <h3 className="text-xl font-bold text-white">Health Streak</h3>
              <p className="mt-2 text-5xl font-black text-cyan-100">43</p>
              <p className="text-sm text-slate-400">days of hydration, movement, and sleep goals.</p>
            </Card>
            <Card>
              <Trophy className="mb-4 text-cyan-200" />
              <h3 className="text-xl font-bold text-white">Achievement Badges</h3>
              <p className="mt-3 text-sm text-slate-400">Sleep Architect, Cardio Consistency, Report Decoder, Mindful Week.</p>
            </Card>
            <Card>
              <Bell className="mb-4 text-cyan-200" />
              <h3 className="text-xl font-bold text-white">Real-time Notifications</h3>
              <p className="mt-3 text-sm text-slate-400">Next appointment confirmed. Wellness coach updated tomorrow's recovery plan.</p>
            </Card>
          </div>

          <Card className="mt-4">
            <h2 className="mb-5 text-xl font-bold text-white">Medical Timeline</h2>
            <div className="grid gap-3 md:grid-cols-4">
              {timeline.map((event) => (
                <div key={event.title} className="rounded-md border border-cyan-200/10 bg-white/5 p-4">
                  <span className="text-xs font-semibold text-cyan-100">{event.type}</span>
                  <h3 className="mt-2 font-bold text-white">{event.title}</h3>
                  <p className="mt-2 text-xs text-slate-400">{event.date}</p>
                  <p className="mt-3 text-sm text-slate-300">{event.detail}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </AnimatedPage>
    </SiteShell>
  );
}
