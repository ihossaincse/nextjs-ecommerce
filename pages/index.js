import Layout from '../components/Layout';
import Products from '../components/Products';
import { commerce } from '../lib/commerce';

export default function Home({ merchant, products }) {
  return (
    <Layout title="Home">
      <Products products={products} />
    </Layout>
  )
}

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      products,
    },
  }
}

