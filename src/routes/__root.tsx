import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Passagesport — Football Analysis & Transfer Intelligence' },
      { name: 'description', content: 'Cutting-edge football analysis, transfer intelligence, and live tactical breakdowns from across the globe.' },
      { name: 'theme-color', content: '#07090f' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: '' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Exo+2:ital,wght@0,300;0,400;0,500;0,600;1,300&family=Share+Tech+Mono&display=swap',
      },
    ],
  }),
  component: RootComponent,
  shellComponent: RootDocument,
})

function RootComponent() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '66px' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
