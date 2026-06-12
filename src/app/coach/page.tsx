import { Dumbbell, Moon, Salad, Sparkles } from "lucide-react";
import { AnimatedPage } from "@/components/animated-page";
import { PageHeader } from "@/components/page-header";
import { SiteShell } from "@/components/site-shell";
import { Card } from "@/components/ui/card";

export default function CoachPage() {
  const plans = [
    { icon: Salad, title: "Diet Plan", text: "High-protein vegetarian breakfast, low-glycemic lunch, omega-rich dinner, hydration reminders." },
    { icon: Dumbbell, title: "Exercise Plan", text: "Zone 2 cardio, mobility primer, strength split, recovery day based on sleep score." },
    { icon: Moon, title: "Sleep Plan", text: "Light cutoff, breathing routine, caffeine boundary, temperature optimization." },
    { icon: Sparkles, title: "Habit Plan", text: "Tiny habit loops, streaks, badges, and notification timing personalized by behavior." }
  ];
  return (
    <SiteShell>
      <AnimatedPage>
        <section className="mx-auto max-w-6xl px-4 py-10">
          <PageHeader badge="Wellness AI" title="Wellness Coach" text="AI-generated diet, exercise, sleep, and habit plans shaped by your health avatar and clinical history." />
          <div className="grid gap-4 md:grid-cols-2">
            {plans.map((plan) => (
              <Card key={plan.title}>
                <plan.icon className="mb-5 text-cyan-200" size={32} />
                <h2 className="text-xl font-bold text-white">{plan.title}</h2>
                <p className="mt-3 leading-7 text-slate-300">{plan.text}</p>
              </Card>
            ))}
          </div>
        </section>
      </AnimatedPage>
    </SiteShell>
  );
}
