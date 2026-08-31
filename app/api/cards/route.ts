import { NextResponse } from "next/server";
import { prisma } from "@/lib/lib/prisma";

export async function GET() {
  const cards = await prisma.card.findMany();
  return NextResponse.json(cards);
}