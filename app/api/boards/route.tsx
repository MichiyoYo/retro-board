// Route file to handle HTTP requests

import { NextRequest, NextResponse } from 'next/server';

// if we don't pass the request parameter the endpoint will return cached data
export function GET(request: NextRequest) {
  return NextResponse.json('hello');
}
