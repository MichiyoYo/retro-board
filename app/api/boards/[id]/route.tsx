import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';
import prisma from '@/prisma/client';

interface ParamsProps {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: ParamsProps) {
  const board = await prisma.board.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!board)
    return NextResponse.json({ error: 'Board not found' }, { status: 404 });
  return NextResponse.json(board);
}

export async function DELETE(request: NextRequest, { params }: ParamsProps) {
  const board = await prisma.board.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!board)
    return NextResponse.json({ error: 'Board not found' }, { status: 404 });
  else {
    await prisma.board.delete({
      where: { id: parseInt(params.id) },
    });
    return NextResponse.json({ message: 'Board deleted' });
  }
}

export async function PUT(request: NextRequest, { params }: ParamsProps) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  await prisma.board.update({
    where: {
      id: parseInt(params.id),
    },
    data: {
      title: body.title,
      lists: body.lists,
    },
  });
}
