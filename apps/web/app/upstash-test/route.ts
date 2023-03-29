import { NextResponse } from 'next/server'

export async function GET() {
  const data = await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/get/foo`, {
    headers: {
      Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
    },
  }).then((response) => response.json())

  return NextResponse.json({ data })
}
