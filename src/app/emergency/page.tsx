import { AlertTriangle, HeartPulse, Phone, ShieldAlert } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function EmergencyPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-lg border border-red-300/30 bg-red-500/15 p-6">
          <ShieldAlert className="mb-4 text-red-100" size={44} />
          <h1 className="text-5xl font-black text-white">Emergency Mode</h1>
          <p className="mt-3 max-w-3xl text-red-50/85">One-click emergency profile for first responders. Call local emergency services immediately for urgent symptoms.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="danger" size="lg">
              <Phone size={18} /> Call Emergency Contact
            </Button>
            <Button variant="secondary" size="lg">Share Medical Profile</Button>
          </div>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: HeartPulse, title: "Blood Type", text: "O+" },
            { icon: AlertTriangle, title: "Allergies", text: "Penicillin, dust sensitivity" },
            { icon: ShieldAlert, title: "Medications", text: "Vitamin D3, magnesium" },
            { icon: Phone, title: "Contacts", text: "+91 90000 00000" }
          ].map((item) => (
            <Card key={item.title}>
              <item.icon className="mb-4 text-cyan-200" />
              <h2 className="font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-slate-300">{item.text}</p>
            </Card>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
