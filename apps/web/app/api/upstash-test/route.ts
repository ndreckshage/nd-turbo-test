import { NextResponse } from 'next/server'

export const revalidate = 5
export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const newValue = searchParams.get('set');

  const action = newValue ? `/set/foo/${newValue}` : '/get/foo';

  const response = await fetch(
    `${process.env.UPSTASH_REDIS_REST_URL}${action}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
      },
    }
  )

  const data = await response.json()

  return NextResponse.json({ data })
}
