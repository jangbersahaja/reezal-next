import styled from "styled-components";

import Image from "next/image";
import Politics from "../components/Politics";

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

  width: 100%;
  height: 90vh;

  z-index: 2;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const LinearBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(0deg, whitesmoke, rgba(255, 255, 255, 0));

  width: 100%;
  height: 90vh;

  z-index: 3;

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

const HorizontalLinearBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(90deg, whitesmoke, rgba(255, 255, 255, 0));

  width: 60%;
  height: 100vh;

  z-index: 4;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: ${({ theme }) => theme.padding.default};
  width: ${({ theme }) => theme.width.default};
  max-width: ${({ theme }) => theme.width.max};

  margin: 0 auto;

  z-index: 5;
`;

const AboutMe = styled.div`
  display: flex;
  align-items: flex-end;

  margin-top: 20vh;
  margin-bottom: 10vh;
`;

const AboutText = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Career = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;

    justify-content: center;
  }
`;

const Timeline = styled.div`
  width: 67%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AnotherTimeline = styled.div`
  width: 30%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TimelineLeft = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  z-index: 5;

  margin: 10px 0;

  @media (max-width: 768px) {
    flex-direction: column-reverse;

    justify-content: center;
    align-items: flex-start;
  }
`;

const ImgWrapper = styled.div`
  width: 360px;
  height: 360px;

  overflow: hidden;

  margin: 10px 0;

  border-radius: 10px;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);

  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 20px;

  width: 55%;

  @media (max-width: 768px) {
    width: 100%;

    padding: 0;
  }
`;

const Date = styled.h2`
  padding: 0 10px;
  font-size: 20px;

  background-color: #37517e;
  color: whitesmoke;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Title = styled.h1`
  color: #d43076;

  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Desc = styled.p`
  font-size: 16px;

  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TimelineCenter = styled.div`
  margin: 20px 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextWrapperCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;

    padding: 0;
  }
`;

const TitleCenter = styled.h1`
  color: #d43076;

  font-size: 32px;

  text-align: end;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const TitleBot = styled.h2`
  font-size: 18px;

  text-align: end;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const About = () => {
  return (
    <div>
      <Container>
        <Hero>
          <Image
            src="https://lh3.googleusercontent.com/szKt2AV1hUfcnJF4aoExpekr9Db1mhB2SGk3z2YTcsd-8IzWvQlBRXc1hVA-zP_LBA5LAV_LKJqXoxTIVGARuPO1SWQQcGd8agbSkulSZ_CTMLLFAi-xn3tHZ28vHgrJ0iqpJtau2tk=w2400"
            layout="fill"
            objectFit="cover"
          />
          <LinearBg></LinearBg>
          <HorizontalLinearBg></HorizontalLinearBg>
        </Hero>
        <Wrapper>
          <AboutMe>
            <AboutText>
              <Date>YB Dato' Sri</Date>
              <Title>Reezal Merican Naina Merican</Title>
              <Desc>
                Ahli politik yang berasal dari Kepala Batas Pulau Pinang. Beliau
                merupakan Ahli Parlimen Kepala Batas menggantikan tempat yang
                sebelum ini disandang, bekas Perdana Menteri Ke-5, Tun Abdullah
                Hj Ahmad Badawi.
                <br />
                <br />
                Terbaharu, Dato’ Sri Reezal Merican Naina Merican sekarang
                menjawat jawatan dalam Kerajaan Malaysia sebagai Menteri
                Perumahan dan Kerajaan Tempatan. Beliau memulakan tugas secara
                rasmi di Kementerian Perumahan dan Kerajaan Tempatan pada 1
                September 2021.
                <br />
                <br />
                Sebelum ini, beliau telah diberi kepercayaan untuk mengemudi
                Kementerian Belia dan Sukan selama 21 bulan. Semasa di KBS,
                beliau komited membawa agenda pembangunan belia dan sukan dalam
                keadaan negara sedang mengharungi wabak Covid-19. Beliau juga
                telah mengetuai Kontinjen Malaysia ke Temasya Sukan Olimpik
                Tokyo 2020.
              </Desc>
            </AboutText>
          </AboutMe>
          <Career>
            <Timeline>
              <TimelineLeft>
                <ImgWrapper>
                  <Image
                    src="https://lh3.googleusercontent.com/wBr7dTugwDrl8QMOAg5U1Bd2_WmYw6sfD5Oug8TStZ0lDX-QkZDyUtssXMunuUDIJQty2YjleDuSCvm5Nnxz3x9irDYSuvw1NoLHMOiphXequELAp6BaOtjYhn7zKPLz98IolCROqnY=w2400"
                    layout="fill"
                    objectFit="cover"
                  />
                </ImgWrapper>
                <TextWrapper>
                  <Date>September 2021 - Sekarang</Date>
                  <Title>Menteri Perumahan dan Kerajaan Tempatan</Title>
                  <Desc>
                    Dato' Sri Reezal Merican Naina Merican memulakan tugas
                    secara rasmi sebagai Menteri Perumahan dan Kerajaan Tempatan
                    di Kementerian Perumahan dan Kerajaan Tempatan (KPKT) pada 1
                    September 2021
                  </Desc>
                </TextWrapper>
              </TimelineLeft>
              <TimelineLeft>
                <ImgWrapper>
                  <Image
                    src="https://lh3.googleusercontent.com/2kKl4qTbeUgt0iOuw5Iy18ktSVuRkpQXK2kQ17Y_9E5OSwiuDF7WKEfOkEc2aScNrg9kw2j3nuIHa43Y5yNYKXIuvmaa5keJjQlkqFm1vzu_6e1QAKKBw_zR94zfeHBSoYBtafEAUHc=w2400"
                    layout="fill"
                    objectFit="cover"
                  />
                </ImgWrapper>
                <TextWrapper>
                  <Date>Mac 2020 - September 2021</Date>
                  <Title>Menteri Belia dan Sukan</Title>
                  <Desc>
                    Dato' Sri Reezal Merican Naina Merican meraikan kejayaan
                    jaguh berbasikal trek negara, Datuk Azizulhasni Awang yang
                    meraih pingat Perak di Kejohanan Sukan Olimpik Tokyo 2020.
                  </Desc>
                </TextWrapper>
              </TimelineLeft>
              <TimelineLeft>
                <ImgWrapper>
                  <Image
                    src={require("/src/img/timbalan-menteri-luar.jpg")}
                    layout="fill"
                    objectFit="cover"
                  />
                </ImgWrapper>
                <TextWrapper>
                  <Date>2015 - 2018</Date>
                  <Title>Timbalan Menteri Luar Negeri</Title>
                  <Desc>
                    Dato' Sri Reezal Merican Naina Merican menyambut ketibaan
                    Setiausaha Negara Amerika Syarikat (AS), Rex Tillerson di
                    Pangkalan TUDM Subang dalam rangka lawatan kerja dua hari
                    beliau di Malaysia.
                  </Desc>
                </TextWrapper>
              </TimelineLeft>
            </Timeline>
            <AnotherTimeline>
              <TimelineCenter>
                <TextWrapperCenter>
                  <Date>2020 - Sekarang</Date>
                  <TitleCenter>Pengerusi</TitleCenter>
                  <TitleBot>
                    Majlis Tindakan Pembangunan Negeri Pulau Pinang (MTPNg)
                  </TitleBot>
                </TextWrapperCenter>
              </TimelineCenter>
              <TimelineCenter>
                <TextWrapperCenter>
                  <Date>2014 - 2016</Date>
                  <TitleCenter>Pengerusi</TitleCenter>
                  <TitleBot>Amanah Raya Berhad</TitleBot>
                </TextWrapperCenter>
              </TimelineCenter>
              <TimelineCenter>
                <TextWrapperCenter>
                  <Date>2008 - 2009</Date>
                  <TitleCenter>Setiausaha Politik</TitleCenter>
                  <TitleBot>
                    Perdana Menteri Ke-5, <br />
                    Tun Abdullah Hj Ahmad Badawi
                  </TitleBot>
                </TextWrapperCenter>
              </TimelineCenter>
              <TimelineCenter>
                <TextWrapperCenter>
                  <Date>2003 - 2008</Date>
                  <TitleCenter>Setiausaha Politik</TitleCenter>
                  <TitleBot>Menteri Kewangan</TitleBot>
                </TextWrapperCenter>
              </TimelineCenter>
              <TimelineCenter>
                <TextWrapperCenter>
                  <Date>1999 - 2000</Date>
                  <TitleCenter>Setiausaha Politik</TitleCenter>
                  <TitleBot>
                    Menteri Pembangunan Wanita Keluarga dan Masyarakat
                  </TitleBot>
                </TextWrapperCenter>
              </TimelineCenter>
              <TimelineCenter>
                <TextWrapperCenter>
                  <Date>1999 - 2000</Date>
                  <TitleCenter>Pengarah Eksekutif</TitleCenter>
                  <TitleBot>Advantgrade Resources Berhad</TitleBot>
                </TextWrapperCenter>
              </TimelineCenter>
              <TimelineCenter>
                <TextWrapperCenter>
                  <Date>1997 - 1999</Date>
                  <TitleCenter>Pengurus Penolong</TitleCenter>
                  <TitleBot>Kuwait Ijarah House</TitleBot>
                </TextWrapperCenter>
              </TimelineCenter>
              <TimelineCenter>
                <TextWrapperCenter>
                  <Date>1995 - 1997</Date>
                  <TitleCenter>Pegawai Eksekutif</TitleCenter>
                  <TitleBot>Bank Industri Malaysia Berhad</TitleBot>
                </TextWrapperCenter>
              </TimelineCenter>
            </AnotherTimeline>
          </Career>
        </Wrapper>
      </Container>
      <Politics />
    </div>
  );
};

export default About;
