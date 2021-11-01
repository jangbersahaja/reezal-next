import App from "next/app";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../components/Layout";

const GlobalStyle = createGlobalStyle`

* {
     margin: 0;
  }
        
body {
 font-family: "Open Sans", sans-serif;
            color: #5a656e;
        }
        
        a,
        button {
            text-decoration: none;
            color: #5a656e;
        }
`;

const theme = {
  width: {
    default: "1280px",
    max: "98%",
  },
  padding: {
    default: "10vh 0",
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}
