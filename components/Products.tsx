import styled from "styled-components";
import Image from "next/image";
import { Container } from "../styles/utils";

interface Product {
  name: string;
}

interface ProductsProps {
  products: any[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <ProductContainer>
      <Title>
        <span>De</span>staques
      </Title>
      <ProductList>
        <ProductItem>
          <a href="">
            <Image src="" width={230} height={230} alt="Product Image" />
            <ProductName>Nome</ProductName>
            <ProductPrice>Preço</ProductPrice>
            <ProductSplitPrice>Preço parcelado</ProductSplitPrice>
          </a>
        </ProductItem>
      </ProductList>
    </ProductContainer>
  );
};

const ProductContainer = styled.section`
  ${Container}
`;

const Title = styled.p`
  font-size: 1.875rem;
  font-weight: 700;
  margin-top: 3.125rem;
  margin-bottom: 2.8rem;
  span {
    text-decoration: underline ${({ theme }) => theme.colors.primary};
  }
`;
const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.875rem;
  margin-bottom: 11.25rem;
`;

const ProductItem = styled.div`
  border: 1px solid #eaeaea;
  height: 23.125rem;
  border-radius: 4px;
  box-shadow: 5px 0px 10px #d9d9d9;
  padding: 1rem;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #000;
  }

  &:hover {
    box-shadow: 5px 10px 10px #d9d9d9;

    p {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const ProductName = styled.p`
  font-size: 0.875rem;
`;

const ProductPrice = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
`;

const ProductSplitPrice = styled.small`
  font-size: 0.75rem;
  font-weight: 700;
  color: #999;
`;
export default Products;
