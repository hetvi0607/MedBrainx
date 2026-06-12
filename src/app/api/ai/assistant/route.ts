import { NextResponse } from "next/server";
import { z } from "zod";
import { generateMedicalAssistantReply } from "@/lib/openai";

const requestSchema = z.object({
  message: z.string().min(1).max(4000)
});

export async function POST(request: Request) {
  try {
    const body = requestSchema.parse(await request.json());
    const result = await generateMedicalAssistantReply(body.message);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: "Unable to generate medical assistant response." }, { status: 400 });
  }
}
