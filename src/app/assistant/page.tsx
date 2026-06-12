"use client";

import { useState } from "react";
import { Brain, Mic, Send, Volume2 } from "lucide-react";
import { AnimatedPage } from "@/components/animated-page";
import { PageHeader } from "@/components/page-header";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

type Message = { role: "user" | "assistant"; content: string };

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Welcome to MedBrain X. Share symptoms, report findings, medicine questions, or wellness goals and I will help you organize the next steps."
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit() {
    if (!input.trim()) return;
    const userMessage: Message = { role: "user", content: input };
    setMessages((current) => [...current, userMessage]);
    setInput("");
    setLoading(true);
    const response = await fetch("/api/ai/assistant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });
    const data = await response.json();
    setMessages((current) => [...current, { role: "assistant", content: data.content }]);
    setLoading(false);
  }

  return (
    <SiteShell>
      <AnimatedPage>
        <section className="mx-auto max-w-6xl px-4 py-10">
          <PageHeader badge="Clinical copilot" title="AI Health Assistant" text="ChatGPT-style medical guidance for symptoms, reports, medicines, lifestyle plans, and care navigation with voice-ready controls." />
          <Card className="mb-4 border-yellow-200/20 bg-yellow-300/8">
            <p className="text-sm leading-6 text-yellow-50">
              MedBrain X is for education and care preparation only. AI symptom checkers can assist patients and clinicians, but they do not replace doctors, diagnosis, emergency care, or medical judgement.
            </p>
          </Card>
          <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
            <Card className="min-h-[620px]">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-md bg-cyan-300 text-slate-950">
                    <Brain />
                  </span>
                  <div>
                    <h2 className="font-bold text-white">MedBrain Intelligence Core</h2>
                    <p className="text-xs text-slate-400">Conversation stored through AIChat and AIMessage models.</p>
                  </div>
                </div>
                <Button variant="secondary" size="icon" title="Voice mode">
                  <Mic size={18} />
                </Button>
              </div>
              <div className="space-y-3">
                {messages.map((message, index) => (
                  <div key={index} className={message.role === "user" ? "ml-auto max-w-[82%] rounded-md bg-cyan-300 px-4 py-3 text-slate-950" : "max-w-[82%] rounded-md border border-cyan-200/10 bg-white/8 px-4 py-3 text-slate-100"}>
                    {message.content}
                  </div>
                ))}
                {loading && <div className="max-w-[82%] rounded-md border border-cyan-200/10 bg-white/8 px-4 py-3 text-slate-300">Analyzing clinical context...</div>}
              </div>
              <div className="mt-5 flex gap-3">
                <Textarea value={input} onChange={(event) => setInput(event.target.value)} placeholder="Describe symptoms, paste a lab value, or ask for lifestyle guidance..." />
                <Button onClick={submit} className="self-end">
                  <Send size={18} />
                </Button>
              </div>
            </Card>
            <div className="space-y-4">
              {["Symptom analysis", "Report explanation", "Medicine information", "Lifestyle recommendations", "Voice interaction"].map((item) => (
                <Card key={item}>
                  <Volume2 className="mb-3 text-cyan-200" size={20} />
                  <h3 className="font-bold text-white">{item}</h3>
                  <p className="mt-2 text-sm text-slate-400">Prepared for AI-safe, doctor-aware health guidance.</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedPage>
    </SiteShell>
  );
}
