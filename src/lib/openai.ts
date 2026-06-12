import OpenAI from "openai";

export const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

export async function generateMedicalAssistantReply(prompt: string) {
  if (!openai) {
    return {
      content:
        "Demo AI insight: your symptoms deserve a structured review. Track onset, severity, fever, medications, hydration, and red flags, then contact a licensed clinician for diagnosis."
    };
  }

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are MedBrain X, an AI health assistant. Provide concise, careful health education, risk flags, and next steps. Never diagnose. Always recommend emergency care for severe symptoms and doctor review for medical decisions."
      },
      { role: "user", content: prompt }
    ],
    temperature: 0.4
  });

  return { content: completion.choices[0]?.message.content ?? "I could not generate a response." };
}
