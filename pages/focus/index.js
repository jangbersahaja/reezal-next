import styled from "styled-components";

import Image from "next/image";

import Focus from "../../components/home/Focus";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Container = styled.div`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const Hero = styled.div`
  position: relative;
  height: 120vh;
  @media (max-width: 768px) {
    height: 40vh;
  }
`;

const LinearBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(0deg, #f5f5f5, rgba(255, 255, 255, 0.534));
  background-size: cover;
  width: 100%;

  height: 120vh;
  position: absolute;
  top: 0;
  left: 0;

  z-index: 2;

  @media (max-width: 768px) {
    height: 40vh;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: -100vh auto 0 auto;

  width: ${({ theme }) => theme.width.default};
  max-width: ${({ theme }) => theme.width.max};
  padding: ${({ theme }) => theme.padding.default};

  z-index: 3;

  @media (max-width: 768px) {
    width: 100%;
    margin: -25vh auto 0 auto;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0 0 10vh 0;

  width: 720px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 10vh 0 20px 0;
    align-items: center;
  }
`;

const SectionTitleTop = styled.h2`
  padding: 5px 25px;
  text-align: center;
  letter-spacing: 8px;
  text-align: center;
  font-size: 36px;
  color: #fff;
  border-radius: 50px 10px 50px 10px;
  background-color: #d43076;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 18px;
  }
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
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const TitleDesc = styled.p`
  font-size: 18px;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0 3%;
    text-align: justify;
  }
`;

const QuoteLeft = styled(FaQuoteLeft)`
  margin: 0 10px;
  font-size: 20px;
  color: #37517e;
`;

const QuoteRight = styled(FaQuoteRight)`
  margin: 0 10px;
  font-size: 20px;
  color: #37517e;
`;

const HundredDays = () => {
  return (
    <div>
      <Container>
        <Hero>
          <Image
            src={require("/src/img/home/hundreddays/hundredday-bg.jpg")}
            layout="fill"
            objectFit="cover"
          />
          <LinearBg></LinearBg>
        </Hero>
        <Wrapper>
          <TitleWrapper>
            <SectionTitleTop>Aspirasi 100 Hari</SectionTitleTop>
            <SectionTitle>Keluarga Malaysia</SectionTitle>
            <TitleDesc>
              <QuoteLeft />
              Terutama di dalam 100 hari pertama ini, matlamat utama Kementerian
              Perumahan dan Kerajaan Tempatan adalah pertama merawat keresahan
              rakyat dan keduanya mengembalikan keyakinan rakyat bahawa
              kehidupan mereka akan kembali kepada normalcy.
              <QuoteRight />
            </TitleDesc>
          </TitleWrapper>
          <Focus />
        </Wrapper>
      </Container>
    </div>
  );
};

export default HundredDays;
