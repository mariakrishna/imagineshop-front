import type { NextPage, GetServerSideProps } from "next";
import styled from "styled-components";
import Image from "next/image";

import Banner from "../../components/Banner";
import { Container } from "../../styles/utils";
import BannerImage from "../../public/images/BANNER-02.png";

interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
  formattedPrice: string;
  splitedPrice: string;
  fileName: string;
  description: string;
  summary: string;
}

interface ProductsProps {
  product: Product;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const productId = ctx.params?.productId;

  const api = "http://imagineshop.herokuapp.com";
  const results = await fetch(`${api}/products/${productId}`);
  const product: Product = await results.json();
  product.image = `${api}/uploads/${product.fileName}`;
  product.formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);
  product.splitedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price / 10);
  return {
    props: {
      product,
    },
  };
};

const ProductId: NextPage<ProductsProps> = ({ product }) => {
  return (
    <>
      <ProductContainer>
        <Banner image={BannerImage} width={1140} height={145} />
        <ProductDetail>
          <ImageContainer>
            <Image src={product.image} width={200} height={200} />
          </ImageContainer>
          <div>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.formattedPrice}</ProductPrice>
            <ProductSplitPrice>
              10x de {product.splitedPrice} sem juros
            </ProductSplitPrice>
            <Button>Adicionar ao carrinho</Button>
            <ProductDescription>{product.description}</ProductDescription>
          </div>
        </ProductDetail>
        <SummaryTitle>
          <span>Inf</span>ormações do produto
        </SummaryTitle>
        <ProductSummary>{product.summary}</ProductSummary>
      </ProductContainer>
    </>
  );
};

const ProductContainer = styled.main`
  ${Container}
`;

const ProductDetail = styled.div`
  display: grid;
  grid-template-columns: 31.25rem auto;
  gap: 1rem;
  margin: 3.25rem 0;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eaeaea;
`;

const ProductName = styled.p`
  font-size: 1.875rem;
  font-weight: 700;
  margin: 0;
`;

const ProductPrice = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.125rem;
  font-weight: 700;
  margin: 0;
  margin-top: 2.8125rem;
`;

const ProductSplitPrice = styled.small`
  font-size: 0.875rem;
  color: #999;
`;

const Button = styled.button`
  display: block;
  border: unset;
  border-radius: 4px;
  width: 290px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  cursor: pointer;
  margin: 2.25rem 0;
`;

const ProductDescription = styled.small`
  font-size: 0.875rem;
`;

const SummaryTitle = styled.p`
  font-size: 1.875rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 2.8rem;
  span {
    text-decoration: underline ${({ theme }) => theme.colors.primary};
  }
`;

const ProductSummary = styled.div`
  font-size: 0.875rem;
  min-height: 300px;
`;
export default ProductId;
