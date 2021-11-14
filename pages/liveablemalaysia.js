import styled from "styled-components";

import Image from "next/image";
import NavButton from "../components/NavButton";

import { FaQuoteLeft, FaQuoteRight, FaPeopleCarry } from "react-icons/fa";
import {
  MdOutlineHomeWork,
  MdSecurity,
  MdOutlineDirectionsBusFilled,
} from "react-icons/md";
import { GiKidSlide, GiGreenhouse } from "react-icons/gi";

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

  top: 10vh;
  left: -10vw;

  z-index: 3;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Element = styled.div`
  display: flex;

  width: 49%;

  margin: 30px 0;

  @media (max-width: 992px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: ${(props) =>
      props.flex === "reverse" ? "column-reverse" : "column"};
    width: 100%;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30%;
  height: 180px;

  background-color: #0f75bb;

  @media (max-width: 768px) {
    width: 100%;
    height: 360px;
  }
`;

const NumWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;
  background-color: #ffde17;

  z-index: 4;

  @media (max-width: 768px) {
    margin-top: -80px;
  }
`;

const Number = styled.h2`
  font-size: 40px;
  color: #555;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.flex === "reverse" ? "flex-end" : "flex-start"};
  justify-content: flex-end;

  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  color: #fff;
  background-color: #4aa046;
  padding: 5px 10px;
`;

const Desc = styled.p`
  font-size: 14px;
  text-align: justify;
  padding: 10px;
`;

const House = styled(MdOutlineHomeWork)`
  width: 150px;
  height: 150px;
  color: #fff;
`;

const Security = styled(MdSecurity)`
  width: 150px;
  height: 150px;
  color: #fff;
`;

const Infra = styled(GiKidSlide)`
  width: 150px;
  height: 150px;
  color: #fff;
`;

const Transport = styled(MdOutlineDirectionsBusFilled)`
  width: 150px;
  height: 150px;
  color: #fff;
`;

const Nature = styled(GiGreenhouse)`
  width: 150px;
  height: 150px;
  color: #fff;
`;

const People = styled(FaPeopleCarry)`
  width: 150px;
  height: 150px;
  color: #fff;
`;

const elements = [
  {
    id: 1,
    title: "Perumahan Mampu Milik",
    desc: "Malaysia Yang Berdaya Huni ini meliputi aspek persekitaran kediaman dan pembangunan yang bukan sahaja berkualiti malah ada last-miles connectivity, lengkap dengan infrastruktur asas yang selesa, akses internet meluas, akses kepada fasiliti kesihatan dan pendidikan serta disokong dengan dasar-dasar operasi Kerajaan Tempatan yang berkesan (effective) dan memberi kesan (impactful) kepada livelihood rakyat.",
    icon: <House />,
  },
  {
    id: 2,
    title: "Keselamatan",
    desc: "Malaysia Yang Berdaya Huni ini meliputi aspek persekitaran kediaman dan pembangunan yang bukan sahaja berkualiti malah ada last-miles connectivity, lengkap dengan infrastruktur asas yang selesa, akses internet meluas, akses kepada fasiliti kesihatan dan pendidikan serta disokong dengan dasar-dasar operasi Kerajaan Tempatan yang berkesan (effective) dan memberi kesan (impactful) kepada livelihood rakyat.",
    icon: <Security />,
  },
  {
    id: 3,
    title: "Infrastruktur",
    desc: "Malaysia Yang Berdaya Huni ini meliputi aspek persekitaran kediaman dan pembangunan yang bukan sahaja berkualiti malah ada last-miles connectivity, lengkap dengan infrastruktur asas yang selesa, akses internet meluas, akses kepada fasiliti kesihatan dan pendidikan serta disokong dengan dasar-dasar operasi Kerajaan Tempatan yang berkesan (effective) dan memberi kesan (impactful) kepada livelihood rakyat.",
    icon: <Infra />,
  },
  {
    id: 4,
    title: "Kemudahan Awam",
    desc: "Malaysia Yang Berdaya Huni ini meliputi aspek persekitaran kediaman dan pembangunan yang bukan sahaja berkualiti malah ada last-miles connectivity, lengkap dengan infrastruktur asas yang selesa, akses internet meluas, akses kepada fasiliti kesihatan dan pendidikan serta disokong dengan dasar-dasar operasi Kerajaan Tempatan yang berkesan (effective) dan memberi kesan (impactful) kepada livelihood rakyat.",
    icon: <Transport />,
  },
  {
    id: 5,
    title: "Alam Sekitar & Kemampanan",
    desc: "Malaysia Yang Berdaya Huni ini meliputi aspek persekitaran kediaman dan pembangunan yang bukan sahaja berkualiti malah ada last-miles connectivity, lengkap dengan infrastruktur asas yang selesa, akses internet meluas, akses kepada fasiliti kesihatan dan pendidikan serta disokong dengan dasar-dasar operasi Kerajaan Tempatan yang berkesan (effective) dan memberi kesan (impactful) kepada livelihood rakyat.",
    icon: <Nature />,
  },
  {
    id: 6,
    title: "Integrasi Sosial",
    desc: "Malaysia Yang Berdaya Huni ini meliputi aspek persekitaran kediaman dan pembangunan yang bukan sahaja berkualiti malah ada last-miles connectivity, lengkap dengan infrastruktur asas yang selesa, akses internet meluas, akses kepada fasiliti kesihatan dan pendidikan serta disokong dengan dasar-dasar operasi Kerajaan Tempatan yang berkesan (effective) dan memberi kesan (impactful) kepada livelihood rakyat.",
    icon: <People />,
  },
];

const LiveableMalaysia = () => {
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
        </Definition>
        <Content>
          {elements.map((element) =>
            element.id % 2 === 1 ? (
              <>
                <Element key={element.id} flex="reverse">
                  <TextWrapper flex="reverse">
                    <NumWrapper>
                      <Number>{element.id}</Number>
                    </NumWrapper>
                    <Title>{element.title}</Title>
                  </TextWrapper>
                  <ImgWrapper>{element.icon}</ImgWrapper>
                </Element>
              </>
            ) : (
              <>
                <Element key={element.id}>
                  <ImgWrapper>{element.icon}</ImgWrapper>
                  <TextWrapper>
                    <NumWrapper>
                      <Number>{element.id}</Number>
                    </NumWrapper>
                    <Title>{element.title}</Title>
                  </TextWrapper>
                </Element>
              </>
            )
          )}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default LiveableMalaysia;
