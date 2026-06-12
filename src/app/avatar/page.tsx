"use client";

import dynamic from "next/dynamic";
import { AnimatedPage } from "@/components/animated-page";
import { PageHeader } from "@/components/page-header";
import { SiteShell } from "@/components/site-shell";
import { Card } from "@/components/ui/card";

const MedicalUniverse = dynamic(() => import("@/components/three/medical-universe").then((m) => m.MedicalUniverse), { ssr: false });

export default function AvatarPage() {
  return (
    <SiteShell>
      <AnimatedPage>
        <section className="mx-auto max-w-7xl px-4 py-10">
          <PageHeader badge="Digital twin" title="AI Health Avatar" text="A living 3D medical twin that changes with sleep, water intake, activity, medical records, and risk signals." />
          <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
            <MedicalUniverse />
            <div className="space-y-4">
              {[
                ["Vitality", 88],
                ["Hydration Aura", 91],
                ["Recovery Glow", 74],
                ["Neural Load", 32],
                ["Activity Charge", 94]
              ].map(([label, value]) => (
                <Card key={label as string}>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white">{label}</span>
                    <span className="text-2xl font-black text-cyan-100">{value}%</span>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-cyan-300" style={{ width: `${value}%` }} />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedPage>
    </SiteShell>
  );
}
