import styled from "styled-components";

import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: center;

  font-family: "Open Sans", sans-serif;

  position: relative;
  height: 93vh;
  width: 100%;
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: center;
  background: linear-gradient(rgba(44, 73, 100, 0.5), rgba(44, 73, 100, 1));
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  height: 93vh;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 36px;
  margin: 0 auto 50px auto;
  padding: 0;
  line-height: 1;
  font-weight: 700;
  color: #fff;
  font-family: "Poppins", sans-serif;
  text-align: center;
  white-space: pre-wrap;
`;

const ScrollUp = styled.span`
  font-size: 18px;
  margin: 0 auto 50px auto;
  padding: 10px 20px;
  border-radius: 30px;
  line-height: 1;
  opacity: 0.5;
  border: 2px solid #fff;

  color: #fff;

  animation: text-shadow 1.5s ease-in-out infinite;

  @keyframes text-shadow {
    0% {
      transform: translateY(0);
      text-shadow: 0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b, 0 0 0 #fefc4b;
    }

    20% {
      transform: translateY(-1em);
      text-shadow: 0 0.125em 0 #0c2ffb, 0 0.25em 0 #2cfcfd, 0 -0.125em 0 #fb203b,
        0 -0.25em 0 #fefc4b;
    }

    40% {
      transform: translateY(0.5em);
      text-shadow: 0 -0.0625em 0 #0c2ffb, 0 -0.125em 0 #2cfcfd,
        0 0.0625em 0 #fb203b, 0 0.125em 0 #fefc4b;
    }

    60% {
      transform: translateY(-0.25em);
      text-shadow: 0 0.03125em 0 #0c2ffb, 0 0.0625em 0 #2cfcfd,
        0 -0.03125em 0 #fb203b, 0 -0.0625em 0 #fefc4b;
    }

    80% {
      transform: translateY(0);
      text-shadow: 0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b, 0 0 0 #fefc4b;
    }
  }
`;

const Hero = () => {
  return (
    <Container>
      <Image
        src="https://drive.google.com/uc?id=14I9bwu1XUpqCoYFQZ6ImMBheerlyqD1B"
        layout="fill"
        objectFit="cover"
      />
      <HeroText>
        <Title>
          Selamat Datang
          <br />
          #KeluargaMalaysia
        </Title>
        <ScrollUp>Scroll Up</ScrollUp>
      </HeroText>
    </Container>
  );
};

export default Hero;
