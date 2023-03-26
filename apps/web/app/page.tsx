import { Button } from 'ui'

export const config = { runtime: 'edge' }

export default function Web() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-purple-700">Web</h1>
      <Button />
    </div>
  )
}
