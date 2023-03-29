import { NextResponse } from 'next/server'
import { get } from '@vercel/edge-config'

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-hello-from-middleware-request', 'hello')

  const response = await (async () => {
    if (request.nextUrl.pathname.startsWith('/api/middleware-test')) {
      const greeting = await get('greeting')
      return NextResponse.json(greeting)
    }

    return NextResponse.next()
  })()

  response.headers.set('x-hello-from-middleware', 'hello')
  return response
}
