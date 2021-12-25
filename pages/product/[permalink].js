import Layout from "../../components/Layout";
import ProductDetail from "../../components/ProductDetail";
import { commerce } from '../../lib/commerce';

export default function Detail({ product }) {
    return (
        <Layout title={product.name}>
          <ProductDetail product={product} />
        </Layout>
    )
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })), 
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink, {
    // Must include a type value
    type: 'permalink'
  });

  return {
    props: {
      product,
    },

    revalidate: 60,
  }
}