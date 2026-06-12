"use client";

import { useState } from "react";
import { FileUp, ScanSearch, ShieldAlert } from "lucide-react";
import { AnimatedPage } from "@/components/animated-page";
import { PageHeader } from "@/components/page-header";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ReportsPage() {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function analyze() {
    setLoading(true);
    const response = await fetch("/api/reports/analyze", { method: "POST" });
    const data = await response.json();
    setAnalysis(data.summary);
    setLoading(false);
  }

  return (
    <SiteShell>
      <AnimatedPage>
        <section className="mx-auto max-w-6xl px-4 py-10">
          <PageHeader badge="Document intelligence" title="AI Report Analyzer" text="Upload PDFs, blood reports, clinical documents, or images. MedBrain X extracts meaning, flags risks, and suggests the right specialist." />
          <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
            <Card>
              <FileUp className="mb-5 text-cyan-200" size={34} />
              <h2 className="text-xl font-bold text-white">Upload Medical File</h2>
              <p className="mt-2 text-sm text-slate-400">Cloudinary-ready file flow with Prisma report persistence.</p>
              <div className="mt-5 space-y-4">
                <Input type="file" accept=".pdf,image/*" />
                <Input placeholder="Report title" />
                <Textarea placeholder="Optional notes or visible lab values..." />
                <Button onClick={analyze} disabled={loading}>
                  <ScanSearch size={18} /> {loading ? "Analyzing..." : "Analyze Report"}
                </Button>
              </div>
            </Card>
            <Card>
              <h2 className="mb-5 text-xl font-bold text-white">AI Analysis Output</h2>
              {analysis ? (
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-md bg-cyan-300/10 p-4">
                    <h3 className="font-bold text-cyan-100">Simplified Explanation</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{analysis}</p>
                  </div>
                  <div className="rounded-md bg-white/5 p-4">
                    <h3 className="font-bold text-white">Suggested Specialist</h3>
                    <p className="mt-2 text-sm text-slate-300">Preventive cardiologist or internal medicine physician.</p>
                  </div>
                  <div className="rounded-md bg-white/5 p-4">
                    <h3 className="font-bold text-white">Health Summary</h3>
                    <p className="mt-2 text-sm text-slate-300">Most biomarkers look stable with a few lifestyle-sensitive signals.</p>
                  </div>
                  <div className="rounded-md border border-yellow-200/20 bg-yellow-300/8 p-4">
                    <ShieldAlert className="mb-2 text-yellow-100" />
                    <h3 className="font-bold text-yellow-50">Risk Indicators</h3>
                    <p className="mt-2 text-sm text-yellow-50/80">Borderline LDL and stress markers require clinician review.</p>
                  </div>
                </div>
              ) : (
                <div className="grid min-h-[320px] place-items-center rounded-lg border border-dashed border-cyan-200/20 text-center text-slate-400">
                  Upload a document to generate summary, risks, and specialist routing.
                </div>
              )}
            </Card>
          </div>
        </section>
      </AnimatedPage>
    </SiteShell>
  );
}
