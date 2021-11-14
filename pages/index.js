import Liveable from "../components/home/Liveable";
import FeaturedArticle from "../components/home/FeaturedArticle";
import FeaturedVideo from "../components/home/FeaturedVideo";
import HundredDays from "../pages/focus";
import Quote from "../components/home/Quote";
import Contact from "../pages/Contact";

import gql from "graphql-tag";
import client from "../apolloClient";

export default function Home({ articles }) {
  return (
    <>
      <HundredDays />
      <Liveable />
      <FeaturedArticle articles={articles} />
      <Quote />
      <FeaturedVideo />
      <Quote />
      <Contact />
    </>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        articles(orderBy: date_DESC) {
          id
          slug
          title
          date
          coverImage {
            url
          }
          lead
          content {
            html
          }
        }
      }
    `,
  });
  const { articles } = data;
  return {
    props: {
      articles,
    },
  };
};
