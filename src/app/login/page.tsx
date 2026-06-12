import Link from "next/link";
import { Activity } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <SiteShell>
      <main className="mx-auto grid min-h-[calc(100vh-74px)] max-w-6xl items-center px-4 py-10">
        <Card className="mx-auto w-full max-w-md">
          <Activity className="mb-5 text-cyan-200" size={36} />
          <h1 className="text-3xl font-black text-white">Access MedBrain X</h1>
          <p className="mt-2 text-sm text-slate-400">Login or register for your AI healthcare command center.</p>
          <form className="mt-6 space-y-4">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button className="w-full">Continue</Button>
          </form>
          <p className="mt-5 text-center text-sm text-slate-400">
            Demo mode available from the <Link href="/dashboard" className="text-cyan-100">dashboard</Link>.
          </p>
        </Card>
      </main>
    </SiteShell>
  );
}
