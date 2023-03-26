'use client'

import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'

export default function ContentButton() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  return (
    <button
      style={{ border: '1px solid blue' }}
      onClick={() => {
        startTransition(() => {
          // Refresh the current route and fetch new data from the server without
          // losing client-side browser or React state.
          // router.refresh()
          router.replace('/')
          router.refresh()
        })
      }}
    >
      Refresh / example mutation (pending: {isPending ? 'yes' : 'no'})
    </button>
  )
}
