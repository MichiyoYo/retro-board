import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';

interface ParamsProps {
  params: {
    id: number;
  };
}

export function GET(request: NextRequest, { params }: ParamsProps) {
  if (params.id > 10)
    return NextResponse.json({ error: 'Board not found' }, { status: 404 });
  return NextResponse.json({
    id: params.id,
    title: 'Cree board',
  });
}

export function DELETE(request: NextRequest, { params }: ParamsProps) {
  if (params.id > 10)
    return NextResponse.json({ error: 'Board not found' }, { status: 404 });
  return NextResponse.json({ status: 200 });
}

export async function PUT(request: NextRequest, { params }: ParamsProps) {
  if (params.id > 10)
    return NextResponse.json({ error: 'Board not found' }, { status: 404 });
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json({
    id: params.id,
    title: body.title,
  });
}
