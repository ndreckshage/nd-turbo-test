'use client'

import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'

export default function ContentButton() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  return (
    <button
      onClick={() => {
        startTransition(() => {
          // Refresh the current route and fetch new data from the server without
          // losing client-side browser or React state.
          router.refresh()
        })
      }}
    >
      Refresh (pending: {isPending ? 'yes' : 'no'})
    </button>
  )
}
