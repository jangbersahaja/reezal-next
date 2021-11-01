import styled from "styled-components";

import Image from "next/image";

import KPILiveable from "./KPILiveable";
import KPICard from "./KPICard";

const Container = styled.div`
  background: linear-gradient(180deg, #f2f6f9 0%, #fff 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const Hero = styled.div`
  position: relative;
  height: 100vh;
  @media (max-width: 768px) {
    display: none;
  }
`;

const LinearBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(0deg, #ffffff, rgba(255, 255, 255, 0.534));
  background-size: cover;
  width: 100%;

  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  z-index: 2;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: -100vh auto 0 auto;

  width: ${({ theme }) => theme.width.default};
  max-width: ${({ theme }) => theme.width.max};
  padding: ${({ theme }) => theme.padding.default};

  z-index: 3;

  @media (max-width: 768px) {
    width: 100%;
    margin: auto;
  }
`;

const SectionTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 60px;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;

  color: #37517e;
  text-align: center;
  border-bottom: 7px solid #d43076;

  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const HundredDays = () => {
  return (
    <div>
      <Container>
        <Hero>
          <Image src={require("/src/img/home/hundreddays/hundredday-bg.jpg")} layout="fill" objectFit="cover"/>
          <LinearBg></LinearBg>
        </Hero>
        <Wrapper>
          <SectionTitle>Fokus 100 Hari di KPKT</SectionTitle>
          <KPILiveable />
          <KPICard />
        </Wrapper>
      </Container>
    </div>
  );
};

export default HundredDays;
