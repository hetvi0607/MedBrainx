import { UserRound, ShieldPlus, Pill, Phone } from "lucide-react";
import { AnimatedPage } from "@/components/animated-page";
import { PageHeader } from "@/components/page-header";
import { SiteShell } from "@/components/site-shell";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ProfilePage() {
  return (
    <SiteShell>
      <AnimatedPage>
        <section className="mx-auto max-w-5xl px-4 py-10">
          <PageHeader badge="Patient profile" title="Medical Profile" text="Structured demographics, allergies, medicines, contacts, and emergency data for AI workflows and SOS mode." />
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <UserRound className="mb-4 text-cyan-200" />
              <h2 className="mb-4 text-xl font-bold text-white">Identity</h2>
              <div className="space-y-3">
                <Input defaultValue="Hetvi Patel" />
                <Input defaultValue="hetvi@example.com" />
                <Input defaultValue="O+" />
              </div>
            </Card>
            <Card>
              <ShieldPlus className="mb-4 text-cyan-200" />
              <h2 className="mb-4 text-xl font-bold text-white">Allergies</h2>
              <p className="text-slate-300">Penicillin, dust sensitivity</p>
            </Card>
            <Card>
              <Pill className="mb-4 text-cyan-200" />
              <h2 className="mb-4 text-xl font-bold text-white">Medications</h2>
              <p className="text-slate-300">Vitamin D3, magnesium glycinate, clinician-approved supplements.</p>
            </Card>
            <Card>
              <Phone className="mb-4 text-cyan-200" />
              <h2 className="mb-4 text-xl font-bold text-white">Emergency Contacts</h2>
              <p className="text-slate-300">Primary: +91 90000 00000. Secondary: +91 91111 11111.</p>
            </Card>
          </div>
        </section>
      </AnimatedPage>
    </SiteShell>
  );
}
