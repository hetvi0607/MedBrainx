"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, Menu, ShieldAlert } from "lucide-react";
import { navItems } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen">
      <div className="noise" />
      <header className="sticky top-0 z-40 border-b border-cyan-200/10 bg-slate-950/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-cyan-300 text-slate-950 shadow-[0_0_34px_rgba(34,211,238,0.45)]">
              <Activity size={22} />
            </span>
            <span>
              <span className="block text-sm font-black tracking-[0.28em] text-white">MEDBRAIN X</span>
              <span className="text-xs text-cyan-100/70">AI healthcare ecosystem</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white",
                  pathname === item.href && "bg-cyan-300/10 text-cyan-100"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="danger" size="sm">
              <Link href="/emergency">
                <ShieldAlert size={16} /> SOS
              </Link>
            </Button>
            <Button asChild variant="secondary" size="sm" className="hidden sm:inline-flex">
              <Link href="/login">Login</Link>
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu size={20} />
            </Button>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
