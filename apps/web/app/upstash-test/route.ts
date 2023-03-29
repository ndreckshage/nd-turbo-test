import { NextResponse } from 'next/server'

export const revalidate = 15
export const runtime = 'edge'

export async function GET() {
  const response = await fetch(
    `${process.env.UPSTASH_REDIS_REST_URL}/get/foo`,
    {
      headers: {
        Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
      },
    }
  )

  console.log(response.headers)

  const data = await response.json()

  return NextResponse.json({ data })
}
