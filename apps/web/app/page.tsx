import { Suspense } from 'react'
// import Header from './_components/header'
// import Content from './_components/content'

export const config = { runtime: 'edge' }
export const revalidate = 0

async function Product({ data }: { data: Promise<Response> }) {
  const product = await data.then((res) => res.json())

  return (
    <p>
      {product.id} - {product.name}
      {/* test to see if we can force flushing... */}
      <span style={{ display: 'none' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus
        nisi quis iaculis tristique. Duis scelerisque sollicitudin erat, vel
        rhoncus quam aliquam eget. Fusce non nisl efficitur, ultricies mi ac,
        dictum tortor. Mauris ullamcorper pretium purus sit amet iaculis.
        Vestibulum quis tincidunt libero. Mauris mollis velit diam, quis
        vulputate nisl aliquam dapibus. Aenean semper augue sit amet vehicula
        ornare. Fusce suscipit, libero eget lacinia sollicitudin, libero enim
        gravida sapien, eu porttitor erat leo quis mi. Phasellus at neque sit
        amet mauris vehicula iaculis non id dui. Suspendisse faucibus vel erat a
        fermentum. Vivamus vitae urna posuere, feugiat libero id, vulputate
        magna. Vestibulum et tempor dui. Nam vulputate varius lectus id
        interdum. Phasellus quis congue nisi. Sed at enim feugiat, pharetra nisi
        vulputate, molestie odio. Quisque scelerisque rhoncus orci, ac eleifend
        est tempus non. Nullam urna ligula, varius et ante fringilla, rutrum
        rhoncus sapien. Sed lorem enim, suscipit id ultrices non, porta sed dui.
        Proin non lacinia augue. Etiam faucibus cursus hendrerit. Cras eleifend
        mauris et sodales mollis. Aliquam laoreet vitae sem eget rutrum. Quisque
        dictum malesuada neque nec venenatis. Nulla non dolor vel lorem finibus
        tincidunt at eget lectus. In eget sapien tempus massa rutrum dignissim
        at vitae nulla. Aenean nec ex vel enim placerat euismod at non lorem.
        Praesent bibendum et dolor eget ornare. Phasellus tincidunt vestibulum
        odio eu interdum. Nunc at orci auctor, vehicula lectus vitae,
        ullamcorper odio. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Donec convallis lacus vel arcu eleifend blandit. Phasellus non
        nisi ut dolor tempus efficitur. Morbi non ex dui. Donec aliquam risus
        non euismod sodales. Quisque blandit ligula quis iaculis faucibus.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Sed faucibus ex vitae ullamcorper sodales.
        Phasellus libero purus, dapibus nec sagittis quis, iaculis et ligula.
        Aenean eros sem, rutrum non interdum eu, fermentum eu augue. In blandit
        nulla vel ipsum scelerisque consequat. Nam gravida dapibus turpis, a
        auctor mauris lacinia vel. In hac habitasse platea dictumst. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Praesent finibus vestibulum est, vitae rhoncus erat egestas eget.
        Donec sodales neque vitae urna rhoncus rhoncus. Praesent pharetra
        porttitor ornare. Nunc quis lacus ut justo viverra vehicula in sit amet
        lorem. Fusce vulputate euismod ultricies.
      </span>
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
      {/* test to see if we can force flushing... */}
      <span style={{ display: 'none' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus
        nisi quis iaculis tristique. Duis scelerisque sollicitudin erat, vel
        rhoncus quam aliquam eget. Fusce non nisl efficitur, ultricies mi ac,
        dictum tortor. Mauris ullamcorper pretium purus sit amet iaculis.
        Vestibulum quis tincidunt libero. Mauris mollis velit diam, quis
        vulputate nisl aliquam dapibus. Aenean semper augue sit amet vehicula
        ornare. Fusce suscipit, libero eget lacinia sollicitudin, libero enim
        gravida sapien, eu porttitor erat leo quis mi. Phasellus at neque sit
        amet mauris vehicula iaculis non id dui. Suspendisse faucibus vel erat a
        fermentum. Vivamus vitae urna posuere, feugiat libero id, vulputate
        magna. Vestibulum et tempor dui. Nam vulputate varius lectus id
        interdum. Phasellus quis congue nisi. Sed at enim feugiat, pharetra nisi
        vulputate, molestie odio. Quisque scelerisque rhoncus orci, ac eleifend
        est tempus non. Nullam urna ligula, varius et ante fringilla, rutrum
        rhoncus sapien. Sed lorem enim, suscipit id ultrices non, porta sed dui.
        Proin non lacinia augue. Etiam faucibus cursus hendrerit. Cras eleifend
        mauris et sodales mollis. Aliquam laoreet vitae sem eget rutrum. Quisque
        dictum malesuada neque nec venenatis. Nulla non dolor vel lorem finibus
        tincidunt at eget lectus. In eget sapien tempus massa rutrum dignissim
        at vitae nulla. Aenean nec ex vel enim placerat euismod at non lorem.
        Praesent bibendum et dolor eget ornare. Phasellus tincidunt vestibulum
        odio eu interdum. Nunc at orci auctor, vehicula lectus vitae,
        ullamcorper odio. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Donec convallis lacus vel arcu eleifend blandit. Phasellus non
        nisi ut dolor tempus efficitur. Morbi non ex dui. Donec aliquam risus
        non euismod sodales. Quisque blandit ligula quis iaculis faucibus.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Sed faucibus ex vitae ullamcorper sodales.
        Phasellus libero purus, dapibus nec sagittis quis, iaculis et ligula.
        Aenean eros sem, rutrum non interdum eu, fermentum eu augue. In blandit
        nulla vel ipsum scelerisque consequat. Nam gravida dapibus turpis, a
        auctor mauris lacinia vel. In hac habitasse platea dictumst. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Praesent finibus vestibulum est, vitae rhoncus erat egestas eget.
        Donec sodales neque vitae urna rhoncus rhoncus. Praesent pharetra
        porttitor ornare. Nunc quis lacus ut justo viverra vehicula in sit amet
        lorem. Fusce vulputate euismod ultricies.
      </span>
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
      {/* test to see if we can force flushing... */}
      <span style={{ display: 'none' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus
        nisi quis iaculis tristique. Duis scelerisque sollicitudin erat, vel
        rhoncus quam aliquam eget. Fusce non nisl efficitur, ultricies mi ac,
        dictum tortor. Mauris ullamcorper pretium purus sit amet iaculis.
        Vestibulum quis tincidunt libero. Mauris mollis velit diam, quis
        vulputate nisl aliquam dapibus. Aenean semper augue sit amet vehicula
        ornare. Fusce suscipit, libero eget lacinia sollicitudin, libero enim
        gravida sapien, eu porttitor erat leo quis mi. Phasellus at neque sit
        amet mauris vehicula iaculis non id dui. Suspendisse faucibus vel erat a
        fermentum. Vivamus vitae urna posuere, feugiat libero id, vulputate
        magna. Vestibulum et tempor dui. Nam vulputate varius lectus id
        interdum. Phasellus quis congue nisi. Sed at enim feugiat, pharetra nisi
        vulputate, molestie odio. Quisque scelerisque rhoncus orci, ac eleifend
        est tempus non. Nullam urna ligula, varius et ante fringilla, rutrum
        rhoncus sapien. Sed lorem enim, suscipit id ultrices non, porta sed dui.
        Proin non lacinia augue. Etiam faucibus cursus hendrerit. Cras eleifend
        mauris et sodales mollis. Aliquam laoreet vitae sem eget rutrum. Quisque
        dictum malesuada neque nec venenatis. Nulla non dolor vel lorem finibus
        tincidunt at eget lectus. In eget sapien tempus massa rutrum dignissim
        at vitae nulla. Aenean nec ex vel enim placerat euismod at non lorem.
        Praesent bibendum et dolor eget ornare. Phasellus tincidunt vestibulum
        odio eu interdum. Nunc at orci auctor, vehicula lectus vitae,
        ullamcorper odio. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Donec convallis lacus vel arcu eleifend blandit. Phasellus non
        nisi ut dolor tempus efficitur. Morbi non ex dui. Donec aliquam risus
        non euismod sodales. Quisque blandit ligula quis iaculis faucibus.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Sed faucibus ex vitae ullamcorper sodales.
        Phasellus libero purus, dapibus nec sagittis quis, iaculis et ligula.
        Aenean eros sem, rutrum non interdum eu, fermentum eu augue. In blandit
        nulla vel ipsum scelerisque consequat. Nam gravida dapibus turpis, a
        auctor mauris lacinia vel. In hac habitasse platea dictumst. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Praesent finibus vestibulum est, vitae rhoncus erat egestas eget.
        Donec sodales neque vitae urna rhoncus rhoncus. Praesent pharetra
        porttitor ornare. Nunc quis lacus ut justo viverra vehicula in sit amet
        lorem. Fusce vulputate euismod ultricies.
      </span>
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
