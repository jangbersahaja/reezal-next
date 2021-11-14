import { useState, useEffect } from "react";
import styled from "styled-components";

import Link from "next/link";
import Image from "next/image";

import Articles from "../../src/article/article";

import gql from "graphql-tag";
import client from "../../apolloClient";
import Moment from "react-moment";

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
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

  margin: -100vh auto 0 auto;
  padding: 30px 0;

  z-index: 3;

  @media (max-width: 992px) {
    width: 100%;
    margin: -50vh auto 0 auto;
  }
`;

const TitleWrapper = styled.div`
  height: 50vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 992px) {
    margin-top: -20vh;
  }
`;

const SectionTitle = styled.h1`
  font-size: 60px;
  font-weight: bold;
  line-height: 1;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #37517e;
  text-align: center;
  border-bottom: 7px solid #d43076;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
`;

const Post = styled.div`
  cursor: pointer;
  display: flex;
  margin: 1%;

  overflow: hidden;
  background-color: #fff;
  border-radius: 10px;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: #efefef;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: 300px;
  }
`;

const ImgWrapper = styled.div`
  width: 40%;
  height: 260px;
  position: relative;

  display: flex;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: end;
  width: 60%;
  padding: 2%;
  overflow: hidden;

  @media (max-width: 992px) {
    width: 96%;
  }
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

const Title = styled.h1`
  margin: 5px 0;
  font-size: 22px;
`;

const Desc = styled.p`
  text-align: justify;
  white-space: pre-line;

  font-size: 14px;
  line-height: 1.5;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ShowMore = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0 50px 0;
`;

const ShowMoreButton = styled.button`
  cursor: pointer;
  height: 120px;
  width: 120px;
  margin: 15px;
  padding: 10px;

  font-size: 14px;
  font-weight: 900;

  display: ${(props) => props.display};

  border: none;
  color: #fff;
  background: #d43076;
  border-radius: 60px;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);

  transition: all 0.4s;

  &:hover {
    width: 100%;
    border-radius: 10px;
  }
`;

const LineBreak = styled.hr`
  margin: 10px 0;
  border: 0;
  height: 0;
  border-top: 0.8px solid rgba(0, 0, 0, 0.1);
`;

const blog = ({ articles }) => {
  const [visible, setVisible] = useState(null);

  useEffect(() => {
    const blogCount = window.sessionStorage.getItem("blog");
    blogCount ? setVisible(parseInt(blogCount)) : setVisible(5);
  }, []);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
    const count = visible + 3;
    window.sessionStorage.setItem("blog", count);
  };
  return (
    <>
      <Container>
        <Hero>
          <Image
            src={require("/src/img/blog-hero.jpg")}
            layout="fill"
            objectFit="cover"
          />
          <LinearBg></LinearBg>
        </Hero>
        <Wrapper>
          <TitleWrapper>
            <SectionTitle>Artikel</SectionTitle>
          </TitleWrapper>
          <Posts>
            {articles.slice(0, visible).map((article) => {
              return (
                <Link key={article.id} href={`/blog/${article.slug}`} passHref>
                  <Post>
                    <ImgWrapper>
                      <Image
                        src={article.coverImage.url}
                        layout="fill"
                        objectFit="cover"
                      />
                    </ImgWrapper>
                    <TextWrapper>
                      <Detail>
                        <Date>
                          <Moment format="dddd, DD MMM YYYY">
                            {article.date}
                          </Moment>
                        </Date>
                      </Detail>
                      <LineBreak />
                      <Title>{article.title}</Title>
                      <Desc>{article.lead}</Desc>
                    </TextWrapper>
                  </Post>
                </Link>
              );
            })}
            <ShowMore>
              <ShowMoreButton
                onClick={showMoreItems}
                display={visible >= articles.length ? "none" : ""}
              >
                Show More
              </ShowMoreButton>
            </ShowMore>
          </Posts>
        </Wrapper>
      </Container>
    </>
  );
};

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

export default blog;
