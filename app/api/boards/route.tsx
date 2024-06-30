// Route file to handle HTTP requests
import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';

export async function GET(request: NextRequest) {
  const boards = await prisma.board.findMany();
  return NextResponse.json(boards);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, {
      status: 400,
    });
  const board = await prisma.board.create({
    data: {
      title: body.title,
      userId: body.userId,
    },
  });
  return NextResponse.json(board, { status: 201 });
}
