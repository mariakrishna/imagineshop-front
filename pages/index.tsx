import type { NextPage } from "next";

import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <h1>Home</h1>
      <Footer />
    </>
  );
};

export default Home;
