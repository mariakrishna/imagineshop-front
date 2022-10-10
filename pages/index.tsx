import type { GetServerSideProps, NextPage } from "next";
import styled from "styled-components";
import Banner from "../components/Banner";
import Products from "../components/Products";
import BannerImage from "../public/images/BANNER-01.png";

export const getServerSideProps: GetServerSideProps = async () => {
  const api = "http://imagineshop.herokuapp.com";
  const results = await fetch(`${api}/products`);
  const data = await results.json();
  data.forEach((product: any) => {
    product.image = `${api}/uploads/${product.fileName}`;
    product.formattedPrice = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(product.price);
    product.splitedPrice = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(product.price / 10);
  });
  return {
    props: {
      apiProducts: data,
    },
  };
};

const Home: NextPage = ({ apiProducts }: any) => {
  return (
    <Main>
      <Banner image={BannerImage} width={1140} height={325} />
      <Products products={apiProducts} />
    </Main>
  );
};

const Main = styled.main`
  min-height: 30vw;
`;

export default Home;
