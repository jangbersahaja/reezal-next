import styled from "styled-components";

import Image from "next/image";

import { MdOutlineVideoLibrary, MdPeopleAlt } from "react-icons/md";

import { AiOutlinePicture } from "react-icons/ai";
import { useState } from "react";

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  position: relative;
`;

const Hero = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 70vh;

  z-index: 2;
`;

const LinearBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(0deg, #ffffff, rgba(255, 255, 255, 0));

  width: 100%;
  height: 70vh;

  z-index: 3;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: ${({ theme }) => theme.padding.default};

  width: ${({ theme }) => theme.width.default};
  max-width: ${({ theme }) => theme.width.max};

  margin: 40vh auto 0 auto;

  z-index: 4;
`;

const Section = styled.div`
  position: relative;

  width: 30%;
  height: 240px;

  display: flex;
  align-items: center;

  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);

  transition: all 0.4s;
`;

const UpperDiv = styled.div`
  position: absolute;
  top: 0;

  width: 100%;

  background-color: ${(props) => props.bg};

  height: 240px;

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const IconDiv = styled.div`
  flex: 2;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  flex: 3;
  font-size: 54px;
  color: #fff;
`;

const VideoIcon = styled(MdOutlineVideoLibrary)`
  color: #fff;
  width: 70px;
  height: 70px;
`;

const ParliamentIcon = styled(MdPeopleAlt)`
  color: #fff;
  width: 70px;
  height: 70px;
`;

const GalleryIcon = styled(AiOutlinePicture)`
  color: #fff;
  width: 70px;
  height: 70px;
`;

const sections = [
  {
    id: 1,
    name: "Video",
    icon: <VideoIcon />,
    img: "https://lh3.googleusercontent.com/C3beN0EzsDMdb_MJt49TJ2XIHvg1hMeoDufn_mnCtjzsYSnFhMuFW5aDYmMCWCU-wI3hSWzxSvu83GNWrjXGCbwxlSW9WA4vH43q5vkg7xnAudRtpGLRpnZrXY6OLG05bEUXCpq1MXg=w2400",
    bg: "#37517e",
  },
  {
    id: 2,
    name: "Sidang Parlimen",
    icon: <ParliamentIcon />,
    img: "https://lh3.googleusercontent.com/9Ou6HYBXieHIMmb7k-oRvKDsmOM45OslKiILNBMFBy-DsJYS52zJJ7_QVoEHFNySfGihkYVk5eks7ZgDkM58BzLz3-f-p8A7zVztS2K2nh5D5WiOfUPG2JAIE3Mjm-_BNyMdjs54eaM=w2400",
    bg: "#d43076",
  },
  {
    id: 3,
    name: "Galeri",
    icon: <GalleryIcon />,
    img: "https://lh3.googleusercontent.com/e-BIXFDKF3dIcQcryHEwgdKx392OK0ldw5OiuTji52C4FNo0-lrr8v4YWRHkquoGlolJxS_6BBLpgBEQaPcvmeO_qD8ZlLLYLfyjzZqRJgw5LqO0vbmsC2OFtnHI5dJeImjMz0f7CC0=w2400",
    bg: "#4aa046",
  },
];

const Medias = () => {
  const [background, setBackground] = useState(
    "https://lh3.googleusercontent.com/C3beN0EzsDMdb_MJt49TJ2XIHvg1hMeoDufn_mnCtjzsYSnFhMuFW5aDYmMCWCU-wI3hSWzxSvu83GNWrjXGCbwxlSW9WA4vH43q5vkg7xnAudRtpGLRpnZrXY6OLG05bEUXCpq1MXg=w2400"
  );

  return (
    <Container>
      <Hero>
        <Image src={background} layout="fill" objectFit="cover" />
        <LinearBg></LinearBg>
      </Hero>
      <Wrapper>
        {sections.map((section) => (
          <Section
            key={section.id}
            onMouseOver={() => setBackground(section.img)}
          >
            <Image src={section.img} layout="fill" objectFit="cover" />
            <UpperDiv bg={section.bg}>
              <IconDiv>{section.icon}</IconDiv>
              <Title>{section.name}</Title>
            </UpperDiv>
          </Section>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Medias;
