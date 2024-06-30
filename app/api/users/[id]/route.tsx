import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';
import prisma from '@/prisma/client';

interface ParamProps {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: ParamProps) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!user) {
    return NextResponse.json({ error: 'No user found' }, { status: 404 });
  }
  return NextResponse.json(user, { status: 200 });
}

export async function PUT(request: NextRequest, { params }: ParamProps) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!user) {
    return NextResponse.json({ error: 'No user found' }, { status: 404 });
  }
  const updatedUser = await prisma.user.update({
    where: {
      id: parseInt(params.id),
    },
    data: {
      name: body.name || undefined,
      email: body.email || undefined,
      password: body.password || undefined,
    },
  });
  return NextResponse.json(updatedUser, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: ParamProps) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!user)
    return NextResponse.json({ error: 'No user found' }, { status: 404 });
  const deleted = await prisma.user.delete({
    where: {
      id: parseInt(params.id),
    },
  });
  return NextResponse.json(deleted, { status: 200 });
}
