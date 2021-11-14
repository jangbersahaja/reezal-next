import styled from "styled-components";

import Image from "next/image";
import Link from "next/link";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Container = styled.div`
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-content: center;

  position: relative;

  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${({ theme }) => theme.width.default};
  max-width: ${({ theme }) => theme.width.max};
  padding: ${({ theme }) => theme.padding.default};

  margin: 0 auto 0 auto;

  z-index: 3;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TopTitle = styled.h2`
  font-size: 60px;
  color: #fff;
  background-color: #0f75bb;
  padding: 5px 30px;

  border-radius: 0 10px 10px 0;

  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

const BotTitle = styled.h2`
  font-size: 60px;
  color: #555;
  background-color: #ffde17;
  padding: 5px 30px;

  border-radius: 0 10px 10px 0;

  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 42px;
  }
`;

const Logo = styled.div`
  position: relative;
  height: 345px;
  width: 345px;

  border-radius: 50% 50% 0 50%;
  background-color: #fff;

  margin-bottom: 10px;
`;

const Definition = styled.div`
  width: 770px;
  max-width: 85%;
  padding: 20px;

  border-radius: 10px;
  background-color: whitesmoke;
`;

const Quote = styled.p`
  font-size: 16px;
  line-height: 1.8;
  text-align: justify;
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

const BlueCircle = styled.div`
  width: 500px;
  height: 500px;

  opacity: 0.6;

  border-radius: 50%;
  border: solid 100px #0f75bb;

  position: absolute;
  overflow: hidden;

  bottom: 0;
  right: -10vw;

  z-index: 3;
`;

const YellowCircle = styled.div`
  width: 500px;
  height: 500px;

  opacity: 0.6;

  border-radius: 50%;
  border: solid 100px #ffde17;

  position: absolute;
  overflow: hidden;

  top: -20vh;
  left: -10vw;

  z-index: 3;
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

const Liveable = () => {
  return (
    <Container>
      <YellowCircle>
        <Image src={require("/src/img/klcity.jpg")} layout="fill" />
      </YellowCircle>
      <BlueCircle>
        <Image src={require("/src/img/kuala-lumpur.jpg")} layout="fill" />
      </BlueCircle>
      <Wrapper>
        <LogoWrapper>
          <Logo>
            <Image
              src={require("/src/img/Official Logo Liveable Malaysia - Color-01.png")}
              layout="fill"
              objectFit="cover"
            />
          </Logo>
          <TitleWrapper>
            <TopTitle>Aspirasi</TopTitle>
            <BotTitle>Berdaya Huni</BotTitle>
          </TitleWrapper>
        </LogoWrapper>
        <Definition>
          <Quote>
            <QuoteLeft />
            Malaysia Yang Berdaya Huni ini meliputi aspek persekitaran kediaman
            dan pembangunan yang bukan sahaja berkualiti malah ada last-miles
            connectivity, lengkap dengan infrastruktur asas yang selesa, akses
            internet meluas, akses kepada fasiliti kesihatan dan pendidikan
            serta disokong dengan dasar-dasar operasi Kerajaan Tempatan yang
            berkesan (effective) dan memberi kesan (impactful) kepada livelihood
            rakyat.
            <QuoteRight />
          </Quote>
          <LineBreak />
          <Link href="/liveablemalaysia" passHref>
            <ReadMore>Click to read</ReadMore>
          </Link>
        </Definition>
      </Wrapper>
    </Container>
  );
};

export default Liveable;
