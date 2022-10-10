import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import type { NextPage } from "next";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import { Container } from "../styles/utils";
import { IProduct } from "../types";

const ShoppingCart: NextPage = () => {
  const {
    getProduct,
    deleteProduct,
    getTotalProducts,
    getTotalValue,
    getShippingValue,
  } = useContext(ShoppingCartContext);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [refresh, setRefresh] = useState<number>(0);

  useEffect(() => {
    const values = getProduct();
    setProducts(values);
  }, [refresh]);

  const handleDeleteProduct = (id: string) => {
    deleteProduct(id);
    setRefresh((oldValue) => refresh + 1);
  };

  return products && products.length > 0 ? (
    <Main>
      <Title>Meu Carrinho</Title>
      <SubTitle>Produtos</SubTitle>
      <ShoppingCartContainer>
        <ShoppingCartProducts>
          <Separator></Separator>
          {products &&
            products.map((product, index) => (
              <div key={index}>
                <ButtonContainer>
                  <button onClick={() => handleDeleteProduct(product._id)}>
                    <DeleteIcon icon={faX} />
                  </button>
                </ButtonContainer>
                <Product>
                  <div>
                    <Image src={product.image} width={200} height={200} />
                  </div>

                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>{product.formattedPrice}</ProductPrice>
                </Product>
                <Separator></Separator>
              </div>
            ))}
        </ShoppingCartProducts>
        <section>
          <ShoppingCartPayment>
            <PaymentTitle>Resumo do Pedido</PaymentTitle>
            <PaymentValue>
              <span>{products.length} Produtos</span>{" "}
              <span>{getTotalProducts()}</span>
            </PaymentValue>
            <PaymentShipping>
              <span>Frete</span> <span>{getShippingValue()}</span>
            </PaymentShipping>
            <PaymentTotal>
              <span>Total</span> <span>{getTotalValue()}</span>
            </PaymentTotal>
            <Separator></Separator>
            <LoginTitle>Login</LoginTitle>
            <InputGroup>
              <span>e-mail:</span>
              <input type="text" />
            </InputGroup>
            <InputGroup>
              <span>senha:</span>
              <input type="password" />
            </InputGroup>
            <Button>Continuar</Button>
          </ShoppingCartPayment>
        </section>
      </ShoppingCartContainer>
    </Main>
  ) : (
    <Main>sem produto</Main>
  );
};

const Main = styled.main`
  ${Container}
`;
const Title = styled.p`
  font-size: 1.875rme;
  font-weight: 700;
  margin: 5.625rem;
`;

const SubTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 1rem;
`;

const ShoppingCartContainer = styled.div`
  display: grid;
  grid-template-columns: 780px auto;
  gap: 1.5rem;
  min-height: 800px;
`;

const ShoppingCartProducts = styled.section``;

const Separator = styled.hr`
  border: 1px solid #c8c9c3;
  border-radius: 0px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0.8rem 0;

  button {
    border: none;
    background: unset;
  }
`;

const DeleteIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
`;

const Product = styled.div`
  display: grid;
  grid-template-columns: auto 350px auto;
`;

const ProductName = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  padding: 1rem;
`;

const ProductPrice = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
  margin-top: 1rem;
  place-self: start end;
`;

const ShoppingCartPayment = styled.div`
  background-color: #f0f1ef;
  border-radius: 4px;
  padding: 1rem;
`;

const PaymentTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
`;

const PaymentValue = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;

  span {
    display: block;
  }
`;

const PaymentShipping = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;

  span {
    display: block;
  }
`;

const PaymentTotal = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 3.125rem 0 5rem 0;
  display: flex;
  justify-content: space-between;

  span {
    display: block;
  }
`;

const LoginTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  margin: 2rem 0;
`;

const InputGroup = styled.div`
  span {
    text-transform: uppercase;
    margin-bottom: 0.625rem;
    display: block;
  }

  input {
    width: 100%;
    height: 1.25rem;
    border: unset;
  }

  margin-bottom: 1.3rem;
`;

const Button = styled.button`
  display: block;
  border: unset;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Montserrat";
  text-transform: uppercase;
  cursor: pointer;
  margin: 0 auto;
  width: 240px;
  height: 60px;
`;

export default ShoppingCart;
