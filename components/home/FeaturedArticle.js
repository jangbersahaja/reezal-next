import { useState } from "react";
import styled from "styled-components";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Articles from "../../src/article/article";

import Link from "next/link";
import Image from "next/image";
import Moment from "react-moment";

const Container = styled.div`
  background: linear-gradient(180deg, #f2f6f9 0%, #fff 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${({ theme }) => theme.width.default};
  max-width: ${({ theme }) => theme.width.max};
  padding: ${({ theme }) => theme.padding.default};

  @media (max-width: 992px) {
    width: 100%;
  }
`;

const TitleWrapper = styled.div`
  margin-bottom: 20px;
`;

const SectionTitleTop = styled.h3`
  font-family: sans-serif;
  line-height: 0.2;
  letter-spacing: 8px;
  text-align: center;
  color: #d43076;
  text-transform: uppercase;
`;

const SectionTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 60px;
  font-weight: bold;
  line-height: 1;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #37517e;
  text-align: center;
  border-bottom: 7px solid #d43076;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const Post = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;

  background-color: #fff;
  padding: 1%;
  border-radius: 10px;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImgWrapper = styled.div`
  width: 66%;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  position: relative;
  height: 500px;
  overflow: hidden;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 992px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    height: 240px;
  }
`;

const TextWrapper = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;

  @media (max-width: 992px) {
    width: 49%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  @media (max-width: 768px) {
    padding: 10px 2%;
  }
`;

const Date = styled.span`
  font-size: 12px;
  margin: auto 0;
  font-weight: bold;
`;

const Title = styled.h2`
  font-size: 24px;
  line-height: 1;
`;

const PostText = styled.div`
  p {
    font-size: 14px;
    line-height: 1.5;

    text-align: justify;
    white-space: pre-line;
    margin-bottom: 15px;
  }

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 13;
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    height: 250px;
    -webkit-line-clamp: 12;
  }
`;

const ReadMore = styled.a`
  text-align: center;
  font-size: 14px;
  display: block;
  transition: all 0.3s ease-in;
  cursor: pointer;
  font-weight: 900;
  &:hover {
    color: #d43076;
  }
`;

const LineBreak = styled.hr`
  margin: 10px 0;
  border: 0;
  height: 0;
  border-top: 0.8px solid rgba(0, 0, 0, 0.1);
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 20px;
  width: 120px;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  background: #d43076;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.4s;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  background: #d43076;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.4s;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
`;

const ArrowLeft = styled(FaArrowLeft)`
  color: #fff;
`;

const ArrowRight = styled(FaArrowRight)`
  color: #fff;
`;

const FeaturedArticle = ({ articles }) => {
  const [featured, setFeatured] = useState(0);

  const nextArticle = () => {
    if (featured === 4) {
      setFeatured(1);
    } else {
      setFeatured(featured + 1);
    }
  };

  const prevArticle = () => {
    if (featured === 1) {
      setFeatured(4);
    } else {
      setFeatured(featured - 1);
    }
  };

  const article = articles[featured];

  const post = (
    <Post key={article.id}>
      <ImgWrapper>
        <Image src={article.coverImage.url} layout="fill" objectFit="cover" />
      </ImgWrapper>
      <TextWrapper>
        <Desc>
          <Date>
            <Moment format="dddd, DD MMM YYYY">{article.date}</Moment>
          </Date>
          <LineBreak />
          <Title>{article.title}</Title>
          <LineBreak />
          <PostText
            className="text"
            dangerouslySetInnerHTML={{ __html: article.content.html }}
          />
          <LineBreak />
          <Link href={`/blog/${article.slug}`} passHref>
            <ReadMore>Click to read</ReadMore>
          </Link>
        </Desc>
      </TextWrapper>
    </Post>
  );

  return (
    <Container>
      <Wrapper>
        <TitleWrapper>
          <SectionTitleTop>Pilihan</SectionTitleTop>
          <SectionTitle>Artikel</SectionTitle>
        </TitleWrapper>
        {post}
        <ButtonDiv>
          <Left onClick={prevArticle} aria-label="previous">
            <ArrowLeft />
          </Left>
          <Right onClick={nextArticle} aria-label="next">
            <ArrowRight />
          </Right>
        </ButtonDiv>
      </Wrapper>
    </Container>
  );
};

export default FeaturedArticle;
