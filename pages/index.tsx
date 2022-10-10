import type { NextPage } from "next";
import styled from "styled-components";
import Banner from "../components/Banner";
import BannerImage from "../public/images/BANNER-01.png";

const Home: NextPage = () => {
  return (
    <Main>
      <Banner image={BannerImage} width={1140} height={325} />
    </Main>
  );
};

const Main = styled.main`
  min-height: 30vw;
`;

export default Home;
