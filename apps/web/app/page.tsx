import { Suspense } from 'react'
// import Header from './_components/header'
// import Content from './_components/content'

export const config = { runtime: 'edge' }
export const revalidate = 0

async function Product({ data }: { data: Promise<Response> }) {
  const product = await data.then((res) => res.json())

  return (
    <p
      style={{
        background: (() => {
          switch (product.id) {
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
      {product.id} - {product.name} {new Array(2500).fill('.').join('')}
    </p>
  )
}

export default async function Web() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-purple-700">Web</h1>
      {/* @ts-expect-error Async Server Component */}
      <Product
        data={fetch(`https://app-dir.vercel.app/api/products?id=1&delay=400`, {
          cache: 'no-store',
        })}
      />
      <Suspense fallback={<p>Loading Product 2 (1s)...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Product
          data={fetch(
            `https://app-dir.vercel.app/api/products?id=2&delay=1400`,
            {
              cache: 'no-store',
            }
          )}
        />
        {/* <Header /> */}
      </Suspense>
      <Suspense fallback={<p>Loading Product 3 (2s)...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Product
          data={fetch(
            `https://app-dir.vercel.app/api/products?id=3&delay=2400`,
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
