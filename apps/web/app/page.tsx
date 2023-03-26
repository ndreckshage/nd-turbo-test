import { Suspense } from 'react'
import { Button } from 'ui'
import Header from './header'
import Content from './content'

export const config = { runtime: 'edge' }
export const revalidate = 0

export default function Web() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-purple-700">Web</h1>
      <Button />
      <Suspense fallback={<p>Loading Header...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Header />
      </Suspense>
      <Suspense fallback={<p>Loading Content...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Content />
      </Suspense>
    </div>
  )
}
