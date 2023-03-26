import { Suspense } from 'react'
// import Header from './_components/header'
// import Content from './_components/content'

export const config = { runtime: 'edge' }
export const revalidate = 0

// test to see if we can force flushing on Vercel...
const Fill = () => (
  <span style={{ display: 'none' }}>{new Array(1000).fill('a').join('')}</span>
)

async function Product({ data }: { data: Promise<Response> }) {
  const product = await data.then((res) => res.json())

  return (
    <p>
      {product.id} - {product.name}
      <Fill />
    </p>
  )
}

export default async function Web() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-purple-700">Web</h1>
      {/* @ts-expect-error Async Server Component */}
      <Product
        data={fetch(`https://app-dir.vercel.app/api/products?id=1&delay=200`, {
          cache: 'no-store',
        })}
      />
      <Fill />
      <Suspense fallback={<p>Loading Product 2 (1s)...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Product
          data={fetch(
            `https://app-dir.vercel.app/api/products?id=2&delay=1000`,
            {
              cache: 'no-store',
            }
          )}
        />
        {/* <Header /> */}
      </Suspense>
      <Fill />
      <Suspense fallback={<p>Loading Product 3 (4s)...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Product
          data={fetch(
            `https://app-dir.vercel.app/api/products?id=3&delay=4000`,
            {
              cache: 'no-store',
            }
          )}
        />
        {/* <Content /> */}
      </Suspense>
    </div>
  )
}
