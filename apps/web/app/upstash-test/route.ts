import { NextResponse } from 'next/server'

export const revalidate = 15

export async function GET() {
  const response = await fetch(
    `${process.env.UPSTASH_REDIS_REST_URL}/set/foo/aaa`,
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
