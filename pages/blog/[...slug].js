import styled from "styled-components";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import Articles from "../../src/article/article";

import gql from "graphql-tag";
import client from "../../apolloClient";

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const Hero = styled.div`
  position: relative;
  height: 100vh;

  @media (max-width: 992px) {
    height: 50vh;
  }
`;

const LinearBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(0deg, #ffffff, rgba(255, 255, 255, 0));
  background-size: cover;
  width: 100%;

  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  z-index: 2;

  @media (max-width: 992px) {
    height: 50vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${({ theme }) => theme.width.default};
  max-width: ${({ theme }) => theme.width.max};

  margin: -80vh auto 0 auto;
  padding: 30px 0;

  z-index: 3;

  @media (max-width: 992px) {
    width: 100%;
    margin: -40vh auto 0 auto;
  }
`;

const TitleWrapper = styled.div`
  height: 50vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  z-index: 3;
`;

const SectionTitle = styled.h1`
  margin: 0 auto;

  font-family: "Playfair Display", serif;
  font-size: 48px;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 30px;
  color: #37517e;
  text-align: center;

  z-index: 3;

  @media (max-width: 992px) {
    font-size: 32px;
  }
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
`;

const Paper = styled.div`
  display: flex;

  margin-bottom: 30px;

  border-radius: 10px;
  background-color: #fff;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const TextWrapper = styled.div`
  padding: 2%;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const Category = styled.a`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  padding: 5px 10px;
  color: #fff;
  background-color: #2c4964;
  margin: auto 0;
  border-radius: 10px;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: bold;
  margin: auto 0;
`;

const Desc = styled.div`
  p {
    font-size: 14px;
    line-height: 1.5;

    text-align: justify;
    white-space: pre-line;
    margin-bottom: 15px;
  }
`;

const BackBtn = styled.div`
  cursor: pointer;
  position: fixed;

  top: 10vh;
  left: 5vh;
  z-index: 99;

  background: #d43076;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.4s;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    top: 82vh;
    left: 77vw;
  }
`;

const HomeBtn = styled.div`
  cursor: pointer;
  position: fixed;

  top: 10vh;
  left: 11vh;
  z-index: 99;
  background: #d43076;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.4s;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    top: 82vh;
    left: 88vw;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ArrowBackIcon = styled(FaArrowLeft)`
  color: #fff;
`;

const HomeIcon = styled(AiOutlineHome)`
  color: #fff;
`;

const Author = styled.div`
  display: flex;
`;

const AuthorImg = styled.div`
  position: relative;
  width: 60px;
  height: 60px;

  overflow: hidden;

  border-radius: 50%;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);
`;

const AuthorDetail = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

padding: 10px;
`;

const AuthorName = styled.h2`
  font-size: 15px;
`;

const AuthorTitle = styled.span`
  font-size: 14px;
`;

const LineBreak = styled.hr`
  margin: 10px 0;
  border: 0;
  height: 0;
  border-top: 0.8px solid rgba(0, 0, 0, 0.1);
`;

const post = ({ article }) => {
  return (
    <Container key={article.id}>
      <Link href="/blog">
        <BackBtn>
          <ArrowBackIcon />
        </BackBtn>
      </Link>
      <Link href="/">
        <HomeBtn>
          <HomeIcon />
        </HomeBtn>
      </Link>
      <Hero>
        <Image src={article.coverImage.url} layout="fill" objectFit="cover" />
        <LinearBg></LinearBg>
      </Hero>
      <Wrapper>
        <TitleWrapper>
          <SectionTitle>{article.title}</SectionTitle>
        </TitleWrapper>
        <Posts>
          <Paper>
            <TextWrapper>
              <Detail>
                <Date>{article.date}</Date>
              </Detail>
              <LineBreak />
              <Desc
                className="text"
                dangerouslySetInnerHTML={{ __html: article.content.html }}
              />
              <LineBreak />
              <Author>
                <AuthorImg>
                  <Image
                    src={require("/src/img/profilePic.jpg")}
                    layout="fill"
                    objectFit="cover"
                  />
                </AuthorImg>
                <AuthorDetail>
                  <AuthorName>Dato' Sri Reezal Merican Naina Merican</AuthorName>
                  <AuthorTitle>Menteri Perumahan dan Kerajaan Tempatan</AuthorTitle>
                </AuthorDetail>
              </Author>
            </TextWrapper>
          </Paper>
        </Posts>
      </Wrapper>
    </Container>
  );
};

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        articles {
          slug
        }
      }
    `,
  });
  const { articles } = data;
  const paths = articles.map((article) => ({
    params: { slug: [article.slug] },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.slug[0];
  const { data } = await client.query({
    query: gql`
      query ArticleBySlug($slug: String!) {
        articles(where: { slug: $slug }) {
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
    variables: { slug },
  });
  const { articles } = data;
  const article = articles[0];
  return {
    props: {
      article,
    },
  };
};

export default post;
