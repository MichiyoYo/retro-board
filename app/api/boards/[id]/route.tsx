import { NextRequest, NextResponse } from 'next/server';

interface ParamsProps {
  params: {
    id: number;
  };
}

export function GET(request: NextRequest, { params }: ParamsProps) {
  if (params.id > 10)
    return NextResponse.json({ error: 'Board not found' }, { status: 404 });
  return NextResponse.json({
    id: 1,
    title: 'Cree board',
  });
}
