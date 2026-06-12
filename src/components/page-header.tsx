import { Badge } from "@/components/ui/badge";

export function PageHeader({ badge, title, text }: { badge: string; title: string; text: string }) {
  return (
    <div className="mb-8">
      <Badge>{badge}</Badge>
      <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">{title}</h1>
      <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-300">{text}</p>
    </div>
  );
}
