import ContentButton from './contentbutton'

const getData = (ms: number): Promise<{ foo: string }> =>
  new Promise((res) =>
    setTimeout(() => res({ foo: `baz - ${Date.now()}` }), ms)
  )

export default async function Content() {
  const data = await getData(2000)

  return (
    <div>
      <p className="text-cyan-600">Content! {data.foo}</p>
      <ContentButton />
    </div>
  )
}
