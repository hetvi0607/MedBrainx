import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    summary:
      "Your uploaded report appears mostly stable. The AI summary highlights cardiovascular prevention, hydration, sleep, and follow-up lab review as the main action areas.",
    riskIndicators: [
      { label: "LDL cholesterol", level: "moderate" },
      { label: "Stress inflammation marker", level: "watch" }
    ],
    suggestedSpecialist: "Internal medicine or preventive cardiology"
  });
}
