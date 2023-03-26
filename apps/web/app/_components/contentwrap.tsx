'use client'

import { useRouter } from 'next/navigation'
import React, { useTransition } from 'react'

export default function ContentWrap({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  return (
    <div>
      {isPending ? <p>loading content...</p> : null}
      {children}
      <button
        style={{ border: '1px solid blue' }}
        onClick={() => {
          startTransition(() => {
            // Refresh the current route and fetch new data from the server without
            // losing client-side browser or React state.
            // router.refresh()
            // router.replace('/')
            router.refresh()
          })
        }}
      >
        Refresh / example mutation (pending: {isPending ? 'yes' : 'no'})
      </button>
    </div>
  )
}
