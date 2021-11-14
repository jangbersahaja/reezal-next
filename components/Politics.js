import styled from "styled-components";

import Image from "next/image";

const Container = styled.div`
  background-color: whitesmoke;
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

  width: 60%;
  height: 100%;

  z-index: 2;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const HorizontalLinearBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(270deg, whitesmoke, rgba(209, 36, 78, 0));

  width: 100%;
  height: 100%;

  z-index: 4;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  padding: ${({ theme }) => theme.padding.default};
  width: ${({ theme }) => theme.width.default};
  max-width: ${({ theme }) => theme.width.max};

  margin: 0 auto;

  z-index: 5;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const Date = styled.h2`
  padding: 0 10px;
  font-size: 20px;

  background-color: #d43076;
  color: whitesmoke;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const TimelineCenter = styled.div`
  width: 100%;

  margin: 20px 0;
`;

const TextWrapperCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;
`;

const TitleCenter = styled.h1`
  color: #37517e;

  font-size: 30px;

  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const TitleBot = styled.h2`
  font-size: 18px;

  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Politics = () => {
  return (
    <Container>
      <Hero>
        <Image
          src={require("/src/img/pau2020.jpg")}
          layout="fill"
          objectFit="cover"
        />
        <HorizontalLinearBg></HorizontalLinearBg>
      </Hero>
      <Wrapper>
        <Timeline>
          <TimelineCenter>
            <TextWrapperCenter>
              <Date>2013 - Sekarang</Date>
              <TitleCenter>Ketua UMNO</TitleCenter>
              <TitleBot>Bahagian Kepala Batas</TitleBot>
            </TextWrapperCenter>
          </TimelineCenter>
          <TimelineCenter>
            <TextWrapperCenter>
              <Date>2013 - Sekarang</Date>
              <TitleCenter>Ahli Majlis Kerja Tertinggi UMNO</TitleCenter>
            </TextWrapperCenter>
          </TimelineCenter>
          <TimelineCenter>
            <TextWrapperCenter>
              <Date>2013 - 2018</Date>
              <TitleCenter>Pengerusi</TitleCenter>
              <TitleBot>Pelajar UMNO Luar Negara</TitleBot>
            </TextWrapperCenter>
          </TimelineCenter>
          <TimelineCenter>
            <TextWrapperCenter>
              <Date>2013 - 2018</Date>
              <TitleCenter>Timbalan Pengerusi</TitleCenter>
              <TitleBot>Perhubungan UMNO Pulau Pinang</TitleBot>
            </TextWrapperCenter>
          </TimelineCenter>
          <TimelineCenter>
            <TextWrapperCenter>
              <Date>2009 - 2013</Date>
              <TitleCenter>Ketua Penerangan</TitleCenter>
              <TitleBot>Pergerakan Pemuda UMNO</TitleBot>
            </TextWrapperCenter>
          </TimelineCenter>
          <TimelineCenter>
            <TextWrapperCenter>
              <Date>2004 - 2009</Date>
              <TitleCenter>Ahli Exco UMNO</TitleCenter>
            </TextWrapperCenter>
          </TimelineCenter>
          <TimelineCenter>
            <TextWrapperCenter>
              <Date>1990 - Sekarang</Date>
              <TitleCenter>Ahli UMNO</TitleCenter>
            </TextWrapperCenter>
          </TimelineCenter>
        </Timeline>
      </Wrapper>
    </Container>
  );
};

export default Politics;
