import { createContext } from "react";
import { IProduct } from "../types";

interface ShoppingCart {
  addProduct: (product: IProduct) => void;
  getProduct: () => IProduct[];
}

export const ShoppingCartContext = createContext({} as ShoppingCart);

const ShoppingCartProvider = ({ children }: any) => {
  const isBrowser = typeof window !== "undefined";
  const SESSION_STORAGE = "products";

  const addProduct = (product: IProduct) => {
    const products = getProduct();
    products.push(product);
    if (isBrowser) {
      sessionStorage.setItem(SESSION_STORAGE, JSON.stringify(products));
    }
  };

  const getProduct = (): IProduct[] => {
    if (isBrowser) {
      const products = sessionStorage.getItem(SESSION_STORAGE);
      return products ? JSON.parse(products) : [];
    }
    return [];
  };
  return (
    <ShoppingCartContext.Provider value={{ addProduct, getProduct }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
