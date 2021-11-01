import styled from "styled-components";

import Image from "next/image";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import MediaNews from "../../components/media/MediaNews";
import MediaStatement from "../../components/media/MediaStatement";
import MediaParliament from "../../components/media/MediaParliament";
import { useState } from "react";

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const Hero = styled.div`
  position: relative;
  height: 70vh;

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

  height: 70vh;
  position: absolute;
  top: 0;
  left: 0;

  z-index: 2;

  @media (max-width: 992px) {
    height: 50vh;
  }
`;

const Wrapper = styled.div`
  width: ${({ theme }) => theme.width.default};
  max-width: ${({ theme }) => theme.width.max};

  margin: -20vh auto 0 auto;
  padding: 30px 0;

  z-index: 3;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  height: 100px;
`;

const SectionTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 48px;
  font-weight: bold;
  line-height: 1;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #37517e;
  text-align: center;
  border-bottom: 7px solid #d43076;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SwitchSection = styled.div`
  display: flex;
  justify-content: center;

  cursor: pointer;
  width: 33%;
`;

const Left = styled(FaArrowLeft)`
  font-family: "Playfair Display", serif;
  font-size: 60px;
  font-weight: bold;
  line-height: 1;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #37517e;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const Right = styled(FaArrowRight)`
  font-family: "Playfair Display", serif;
  font-size: 60px;
  font-weight: bold;
  line-height: 1;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #37517e;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const AnotherSectionTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 42px;
  font-weight: bold;
  line-height: 1;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #37517e;
  opacity: 0.5;
  text-align: center;
  margin-bottom: 10px;
  transition: all 0.3s ease-in;
  border-bottom: 7px solid #d43076;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  &:hover {
    opacity: 0.8;
    font-size: 48px;
  }
`;

const Tab = [
  {
    id: 0,
    title: "Sidang Parlimen",
    section: <MediaParliament />,
  },
  {
    id: 1,
    title: "Berita Terkini",
    section: <MediaNews />,
  },
  {
    id: 2,
    title: "Kenyataan Media",
    section: <MediaStatement />,
  },
];

const media = () => {
  const [selectTab, setSelectTab] = useState(1);

  return (
    <>
      <Container>
        <Hero>
          <Image
            src={
              "https://drive.google.com/uc?id=1QGhSm3OvY2IgGta9ipxdMpfJdumUcz54"
            }
            layout="fill"
            objectFit="cover"
          />
          <LinearBg></LinearBg>
        </Hero>
        <Wrapper>
          <TitleWrapper>
            {Tab.map((t) => (
              <SwitchSection key={t.id} onClick={() => setSelectTab(t.id)}>
                {t.id === selectTab ? (
                  <>
                    <SectionTitle>{t.title}</SectionTitle>
                  </>
                ) : (
                  <AnotherSectionTitle>{t.title}</AnotherSectionTitle>
                )}
              </SwitchSection>
            ))}
          </TitleWrapper>
          {Tab[selectTab].section}
        </Wrapper>
      </Container>
    </>
  );
};
export default media;
