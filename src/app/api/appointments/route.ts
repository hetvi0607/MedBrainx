import { NextResponse } from "next/server";
import { z } from "zod";

const appointmentSchema = z.object({
  doctorId: z.string().min(1),
  startsAt: z.string().datetime(),
  reason: z.string().min(3)
});

export async function POST(request: Request) {
  const body = appointmentSchema.safeParse(await request.json());
  if (!body.success) {
    return NextResponse.json({ error: "Invalid appointment request." }, { status: 400 });
  }
  return NextResponse.json({ id: crypto.randomUUID(), status: "REQUESTED", ...body.data }, { status: 201 });
}
