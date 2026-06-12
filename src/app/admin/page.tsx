import { Database, ShieldCheck, UsersRound, WandSparkles } from "lucide-react";
import { AnimatedPage } from "@/components/animated-page";
import { PageHeader } from "@/components/page-header";
import { SiteShell } from "@/components/site-shell";
import { Card } from "@/components/ui/card";

export default function AdminPage() {
  return (
    <SiteShell>
      <AnimatedPage>
        <section className="mx-auto max-w-6xl px-4 py-10">
          <PageHeader badge="Enterprise controls" title="Admin Panel" text="Operational command layer for doctors, users, reports, safety events, community moderation, and AI system health." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: UsersRound, label: "Users", value: "18,420" },
              { icon: Database, label: "Reports", value: "92,118" },
              { icon: ShieldCheck, label: "Safety Reviews", value: "128" },
              { icon: WandSparkles, label: "AI Jobs", value: "4,812" }
            ].map((metric) => (
              <Card key={metric.label}>
                <metric.icon className="mb-4 text-cyan-200" />
                <p className="text-sm text-slate-400">{metric.label}</p>
                <p className="mt-2 text-3xl font-black text-white">{metric.value}</p>
              </Card>
            ))}
          </div>
          <Card className="mt-4">
            <h2 className="mb-4 text-xl font-bold text-white">System Health</h2>
            <div className="grid gap-3 md:grid-cols-3">
              {["OpenAI latency healthy", "PostgreSQL replicas synced", "Socket.io community online"].map((item) => (
                <div key={item} className="rounded-md bg-cyan-300/10 p-4 text-cyan-50">{item}</div>
              ))}
            </div>
          </Card>
        </section>
      </AnimatedPage>
    </SiteShell>
  );
}
