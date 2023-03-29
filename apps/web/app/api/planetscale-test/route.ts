import { NextResponse } from 'next/server'
import { Client } from '@planetscale/database'

export const revalidate = 15
export const runtime = 'edge'

const db = new Client({
  host: process.env.PLANETSCALE_DATABASE_HOST,
  username: process.env.PLANETSCALE_DATABASE_USERNAME,
  password: process.env.PLANETSCALE_DATABASE_PASSWORD,
})

export async function GET() {
  const conn = db.connection()
  const response = await conn.execute('SELECT * from categories LIMIT 10')
  const data = response.rows

  return NextResponse.json({ data })
}
