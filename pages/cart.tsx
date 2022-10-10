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
  const { getProduct } = useContext(ShoppingCartContext);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const values = getProduct();
    setProducts(values);
  }, []);

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
                  <button>
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
export default ShoppingCart;
