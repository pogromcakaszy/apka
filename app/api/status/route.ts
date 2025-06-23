import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const statuses = await prisma.status.findMany()
  return NextResponse.json(statuses)
}

export async function POST(req: Request) {
  const data = await req.json()
  const status = await prisma.status.create({ data })
  return NextResponse.json(status)
}
