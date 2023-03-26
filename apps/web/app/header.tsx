const getData = (ms: number): Promise<{ foo: string }> =>
  new Promise((res) => setTimeout(() => res({ foo: 'bar' }), ms))

export default async function Header() {
  const data = await getData(1000)

  return (
    <div>
      <p className="text-green-600">Header! {data.foo}</p>
    </div>
  )
}
