import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const users = await prisma.user.findMany({
    include: { role: true, status: true },
  })
  return NextResponse.json(users)
}

export async function POST(req: Request) {
  const data = await req.json()
  const user = await prisma.user.create({
    data,
  })
  return NextResponse.json(user)
}