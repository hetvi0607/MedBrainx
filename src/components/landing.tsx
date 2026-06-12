"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Brain, ShieldCheck, Sparkles } from "lucide-react";
import { featureCards } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MedicalUniverse = dynamic(() => import("@/components/three/medical-universe").then((m) => m.MedicalUniverse), {
  ssr: false,
  loading: () => <div className="h-[520px] rounded-lg border border-cyan-200/10 bg-cyan-300/5" />
});

export function Landing() {
  return (
    <main>
      <section className="relative overflow-hidden px-4 py-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-7">
            <Badge>AI-first healthcare operating system</Badge>
            <div className="space-y-5">
              <h1 className="text-glow max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                MedBrain X
              </h1>
              <p className="max-w-2xl text-xl leading-8 text-slate-300">
                A cinematic medical intelligence platform with 3D health twins, AI report analysis, doctor booking, real-time community care, and emergency-grade patient context.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/dashboard">
                  Enter Platform <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/assistant">Ask AI Assistant</Link>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-4">
              {[
                ["99.9%", "care uptime"],
                ["24/7", "AI triage"],
                ["3D", "health twin"]
              ].map(([value, label]) => (
                <div key={label} className="glass rounded-lg p-4">
                  <div className="text-2xl font-black text-cyan-100">{value}</div>
                  <div className="text-xs text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="relative">
            <MedicalUniverse />
            <div className="pointer-events-none absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-3">
              {["Vitals streaming", "Neural risk map", "Organ telemetry"].map((item) => (
                <div key={item} className="rounded-md border border-cyan-200/15 bg-slate-950/55 px-4 py-3 text-sm text-cyan-100 backdrop-blur-xl">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <Badge>2035 care stack</Badge>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">One ecosystem for modern health.</h2>
            </div>
            <div className="hidden max-w-sm text-sm text-slate-400 md:block">
              Designed like a funded healthcare startup: dense, polished, animated, responsive, and AI-native.
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}>
                <Card className="h-full">
                  <feature.icon className="mb-5 text-cyan-200" size={30} />
                  <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-sm leading-6 text-slate-400">{feature.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
          {[
            { icon: Brain, title: "AI triage brain", text: "Explains symptoms, reports, medicines, lifestyle signals, and next-best specialist." },
            { icon: ShieldCheck, title: "Doctor-first safety", text: "Every assistant flow keeps medical decisions with licensed clinicians." },
            { icon: Sparkles, title: "Avatar intelligence", text: "A living visual model that reacts to recovery, hydration, activity, and records." }
          ].map((item) => (
            <Card key={item.title} className="h-full">
              <item.icon className="mb-4 text-cyan-200" />
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
