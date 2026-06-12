import { MessageCircle, ThumbsUp, Users } from "lucide-react";
import { AnimatedPage } from "@/components/animated-page";
import { PageHeader } from "@/components/page-header";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function CommunityPage() {
  const posts = [
    ["Anonymous", "How did you improve sleep consistency?", "Expert session tonight on recovery routines.", 128],
    ["Priya", "Anyone tracking HbA1c with wearables?", "My doctor suggested pairing labs with activity trends.", 76],
    ["Expert Room", "Ask a cardiologist: preventive scans", "Live Q&A opens at 8 PM.", 312]
  ];
  return (
    <SiteShell>
      <AnimatedPage>
        <section className="mx-auto max-w-6xl px-4 py-10">
          <PageHeader badge="Real-time community" title="Health Community" text="Anonymous posting, comments, upvotes, expert sessions, and live health discussions powered by Socket.io-ready architecture." />
          <Card className="mb-4">
            <Textarea placeholder="Start a discussion anonymously or with your profile..." />
            <div className="mt-3 flex justify-end">
              <Button>Post Discussion</Button>
            </div>
          </Card>
          <div className="space-y-4">
            {posts.map(([author, title, content, upvotes]) => (
              <Card key={title as string}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-sm text-cyan-100">
                      <Users size={16} /> {author}
                    </div>
                    <h2 className="text-xl font-bold text-white">{title}</h2>
                    <p className="mt-2 text-slate-300">{content}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-300">
                    <span className="flex items-center gap-1"><ThumbsUp size={16} /> {upvotes}</span>
                    <span className="flex items-center gap-1"><MessageCircle size={16} /> 18</span>
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
