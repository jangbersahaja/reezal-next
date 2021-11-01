import styled from "styled-components";

import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: ${({ theme }) => theme.width.default};
  max-width: ${({ theme }) => theme.width.max};
  min-height: 100vh;

  margin: 30px auto;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const ImgWrapper = styled.div`
  height: 600px;
  width: 47%;
  position: relative;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

const LinearBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 600px;
  width: 100%;

  background: linear-gradient(
    rgba(44, 73, 100, 0),
    rgba(44, 73, 100, 0),
    rgba(44, 73, 100, 0.25),
    rgba(44, 73, 100, 0.5),
    rgba(44, 73, 100, 0.75),
    rgba(44, 73, 100, 1)
  );
`;

const TextWrapper = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 1%;

  @media (max-width: 960px) {
    width: 96%;
  }
`;

const Title = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 48px;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 30px;
  color: #37517e;
  text-align: center;
  border-bottom: 7px solid #d43076;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const Text = styled.p`
  white-space: pre-line;
  text-align: justify;
`;

const about = () => {
  return (
    <Container>
      <Wrapper>
        <ImgWrapper>
          <LinearBg></LinearBg>
          <Image
            src={require("/src/img/profile.png")}
            layout="fill"
            objectFit="cover"
          />
        </ImgWrapper>
        <TextWrapper>
          <Title>
            About <br /> Reezal Merican
          </Title>
          <Text>
            Politician, Member of Parliament for Kepala Batas, and serves the
            Malaysian Government. Reezal Merican Naina Merican is the current
            Minister of Housing and Local Government.
            {"\n"} {"\n"}
            During his tenure as the Minister of Youth and Sports, Reezal has
            devoted his career to focus on strengthening Youth and Malaysian
            Athletes. He has led the Malaysian Contingent during the Tokyo 2020
            Olympics where the athletes successfully brought home one silver and
            one bronze medal.
            {"\n"} {"\n"}
            He is involved in various initiatives under both state and national
            programmes advocating for the long-term benefit of Malaysian society
            and the world community.
            {"\n"} {"\n"}
            His past experience also includes a strong portfolio serving in both
            policy-making and foreign affairs throughout his career.
          </Text>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
};

export default about;
