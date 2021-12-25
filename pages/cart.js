import { useContext } from 'react';
import CartRow from '../components/CartRow';
import Layout from '../components/Layout';
import TotalPrice from '../components/TotalPrice';
import MyAppContext from "../MyAppContext";

export default function CartPage() {
  const value = useContext(MyAppContext);
  const cartValue = value.state.cart;
  console.log(value);
  
  return (
    <Layout title="Cart">
      {cartValue.map(data => (
         <CartRow data={data} key={Math.random()} />   
      ))}
      <TotalPrice data={cartValue} />
    </Layout>
  )
}