import { Suspense } from 'react'
import { defer } from '@vercel/remix'
import { Await, useLoaderData } from '@remix-run/react'

export const config = { runtime: 'edge' }

export async function loader({ request }: LoaderArgs) {
  return defer({
    product1: await fetch(
      `https://app-dir.vercel.app/api/products?id=1&delay=400`,
      {
        cache: 'no-store',
      }
    ).then((r) => r.json()),
    product2: fetch(`https://app-dir.vercel.app/api/products?id=2&delay=1400`, {
      cache: 'no-store',
    }).then((r) => r.json()),
    product3: fetch(`https://app-dir.vercel.app/api/products?id=3&delay=2400`, {
      cache: 'no-store',
    }).then((r) => r.json()),
  })
}

const Product = ({ id, name }: { id: string; name: string }) => (
  <p
    style={{
      background: (() => {
        switch (id) {
          case '1':
            return 'lightgreen'
          case '2':
            return 'pink'
          default:
            return 'cyan'
        }
      })(),
    }}
  >
    {id} - {name} {new Array(2500).fill('.').join('')}
  </p>
)

export default function Blog() {
  const { product1, product2, product3 } = useLoaderData<typeof loader>()

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-purple-700">Blog</h1>
      <Product {...product1} />
      <Suspense fallback={<p>Loading Product 2 (1s)...</p>}>
        <Await resolve={product2}>{(p) => <Product {...p} />}</Await>
      </Suspense>
      <Suspense fallback={<p>Loading Product 3 (2s)...</p>}>
        <Await resolve={product3}>{(p) => <Product {...p} />}</Await>
      </Suspense>
    </div>
  )
}
