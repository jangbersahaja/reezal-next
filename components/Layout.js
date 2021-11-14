import Head from "next/Head";
import { useRouter } from "next/router";

import Hero from "./home/Hero";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NavMenu from "./NavMenu";

const Layout = ({ children }) => {
  const route = useRouter();

  return (
    <>
      <Head>
        <title>Reezal Merican Official Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Reezal Merican Official Website" />
        <meta property="og:type" content="website" />
        <meta
          name="og:title"
          property="og:title"
          content="Reezal Merican Official Website"
        />
        <meta
          name="og:description"
          property="og:description"
          content="Reezal Merican Official Website"
        />
        <meta property="og:site_name" content="Reezal Merican" />
        <meta property="og:url" content="https://reezalmericanofficial.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Reezal Merican" />
        <meta
          name="twitter:description"
          content="Official Website of Reezal Merican"
        />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="Reezal Merican" />
        <link rel="stylesheet" href="" />
        <meta property="og:image" content="" />
        <meta name="twitter:image" content="" />
        <link rel="canonical" href="" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i|Playfair+Display:400,400i,500,500i,600,600i,700,700i&subset=cyrillic"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <NavMenu />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
