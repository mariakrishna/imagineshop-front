import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import GlobalStyle from "../components/globalstyles";
import Layout from "../components/Layout";

const theme: DefaultTheme = {
  colors: {
    primary: "#f73f01",
    secondary: "#777777",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
