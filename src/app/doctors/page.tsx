import { CalendarPlus, MapPin, Star } from "lucide-react";
import Image from "next/image";
import { AnimatedPage } from "@/components/animated-page";
import { PageHeader } from "@/components/page-header";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { doctors } from "@/lib/data";

export default function DoctorsPage() {
  return (
    <SiteShell>
      <AnimatedPage>
        <section className="mx-auto max-w-7xl px-4 py-10">
          <PageHeader badge="Marketplace" title="Doctor Marketplace" text="Search doctors, inspect profiles, book appointments, compare ratings, and route AI risks to specialists." />
          <div className="mb-5 grid gap-3 md:grid-cols-3">
            <Input placeholder="Search specialty, doctor, condition..." />
            <Input placeholder="Location" />
            <Button>
              <CalendarPlus size={18} /> Find Care
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {doctors.map((doctor) => (
              <Card key={doctor.name} className="overflow-hidden p-0">
                <Image src={doctor.image} alt={doctor.name} width={900} height={650} className="h-64 w-full object-cover" />
                <div className="p-5">
                  <h2 className="text-xl font-bold text-white">{doctor.name}</h2>
                  <p className="text-cyan-100">{doctor.specialty}</p>
                  <div className="mt-3 flex items-center gap-2 text-sm text-slate-300">
                    <Star size={16} className="fill-cyan-200 text-cyan-200" /> {doctor.rating} rating
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                    <MapPin size={16} /> {doctor.location}
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-bold text-white">Rs. {doctor.fee}</span>
                    <Button size="sm">Book</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </AnimatedPage>
    </SiteShell>
  );
}
