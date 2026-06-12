import { NextResponse } from "next/server";
import { z } from "zod";

const postSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(3),
  anonymous: z.boolean().default(false)
});

export async function POST(request: Request) {
  const body = postSchema.safeParse(await request.json());
  if (!body.success) {
    return NextResponse.json({ error: "Invalid post payload." }, { status: 400 });
  }
  return NextResponse.json({ id: crypto.randomUUID(), ...body.data, upvotes: 0, comments: [] }, { status: 201 });
}
