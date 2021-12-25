import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>Next.js Ecommerce - {title}</title>
        <meta name="description" content="Next.js Ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className="min-h-screen bg-gray-100">
            <div className="px-2 py-5 mx-auto max-w-7xl">
              {children}
            </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default Layout
