import ContentWrap from './contentwrap'

const getData = (ms: number): Promise<{ foo: string }> =>
  new Promise((res) =>
    setTimeout(() => res({ foo: `baz - ${Date.now()}` }), ms)
  )

export default async function Content() {
  const data = await getData(2000)

  return (
    <ContentWrap>
      <p className="text-cyan-600">Content! {data.foo}</p>
    </ContentWrap>
  )
}
