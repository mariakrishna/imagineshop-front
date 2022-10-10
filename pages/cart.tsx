import type { NextPage } from "next";
import { useContext, useEffect } from "react";

import { ShoppingCartContext } from "../contexts/ShoppingCartContext";

const ShoppingCart: NextPage = () => {
  const { getProduct } = useContext(ShoppingCartContext);

  useEffect(() => {
    const products = getProduct();
    console.log(products);
  }, []);

  return (
    <>
      <h1>Shopping Cart</h1>
    </>
  );
};

export default ShoppingCart;
