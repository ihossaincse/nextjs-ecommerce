import { useState } from "react";
import MyAppContext from "../MyAppContext";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  return (
    <MyAppContext.Provider
      value={{
        state: {
          cart: cart,
        },
        setCart: setCart,
      }}
    >
      <Component {...pageProps} />
    </MyAppContext.Provider>
  );
}

export default MyApp
