import styled from "styled-components";

import Image from "next/image";
import NavButton from "../../components/NavButton";

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const Hero = styled.div`
  position: relative;
  height: 50vh;
`;

const LinearBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(0deg, #ffffff, rgba(255, 255, 255, 0));
  background-size: cover;
  width: 100%;

  height: 50vh;
  position: absolute;
  top: 0;
  left: 0;

  z-index: 2;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${({ theme }) => theme.width.default};
  max-width: ${({ theme }) => theme.width.max};

  margin: -50vh auto 0 auto;
  padding: 30px 0;

  z-index: 3;

  @media (max-width: 992px) {
    width: 100%;
    margin: -50vh auto 0 auto;
  }
`;

const LogoWrapper = styled.div`
  margin-top: 30vh;

  height: 240px;
  width: 200px;
  position: relative;

  margin-bottom: 30px;
`;

const Content = styled.div``;

const Definition = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 15px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const Apply = styled.div`
  padding: 50px 2%;
  background-color: #d43076;
  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 10px 10px 120px 10px;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ImgWrapper = styled.div`
  position: relative;

  width: 40%;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  border-radius: 120px 10px 10px 10px;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 992px) {
    width: 100%;
    height: 240px;
    margin: 10px auto;
  }
`;

const TextWrapper = styled.div`
  width: 59%;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  text-align: center;
`;

const Desc = styled.div`
  padding: 15px 2%;

  p {
    font-size: 14px;
    line-height: 1.5;
    text-align: justify;
  }

  li {
    margin-top: 5px;
  }
`;

const CardWrapper = styled.div`
  width: 300px;
  @media (max-width: 992px) {
    width: 80%;
  }
`;

const Card = styled.div`
  height: 40px;
  padding: 10px;
  background-color: #fff;
  border-radius: 50px;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.24);
  }
`;

const CardLink = styled.a`
  display: flex;
  align-items: center;
`;

const CardImg = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;

  background-color: #fff;
  border: 0.8px solid rgba(0, 0, 0, 0.1);

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

const CardText = styled.div`
  width: 70%;

  margin-left: 15px;
`;

const CardTitle = styled.h2`
  font-size: 16px;
`;

const LineBreak = styled.hr`
  margin: 10px 0;
  border: 0;
  height: 0;
  border-top: 0.8px solid rgba(0, 0, 0, 0.1);
`;

const RumahIkram = () => {
  return (
    <Container>
      <Hero>
        <Image
          src={require("/src/img/rumah-ikram.jpg")}
          layout="fill"
          objectFit="cover"
        />
        <LinearBg></LinearBg>
      </Hero>
      <Wrapper>
        <LogoWrapper>
          <Image
            src={require("/src/img/logo-ikram.png")}
            layout="fill"
            objectFit="contain"
          />
        </LogoWrapper>
        <Content>
          <Definition>
            <ImgWrapper>
              <Image
                src={require("/src/img/rumah-ikram3.jpg")}
                layout="fill"
                objectFit="cover"
              />
            </ImgWrapper>
            <TextWrapper>
              <Desc>
                <p>
                  <strong>
                    Inisiatif Rumah Kediaman Keluarga Malaysia atau Rumah IKRAM
                    Keluarga Malaysia
                  </strong>{" "}
                  ini bersifat nilai tambah terhadap unit PPR sedia ada buat
                  Keluarga Malaysia yang terkesan akibat pandemik COVID-19
                  sehingga kehilangan tempat berteduh disebabkan merosotnya
                  pendapatan, kehilangan pekerjaan dan lain-lain kesusahan.
                  <br />
                  <br />
                  Permulaan ini, Rumah Ikram Keluarga Malaysia merupakan
                  unit-unit PPR di bawah kawal selia dan pengurusan KPKT.
                  Pihak-pihak Berkuasa Negeri juga telah dirunding supaya dapat
                  turut serta dalam inisiatif ini di PPR bawah kawal selia
                  masing-masing.
                  <br />
                  <br />
                  Sebanyak 2,000 unit sewaan Rumah Ikram Keluarga Malaysia
                  ditawarkan selama 2 tahun pada kadar yang paling minima iaitu
                  RM124 dengan insentif pengecualian sewaan selama 6 bulan oleh
                  Kerajaan bagi membantu mengurangkan beban kewangan yang
                  ditanggung oleh penerima manfaat.
                  <br />
                  <br />
                  Inisiatif ini dirangka secara bersasar dengan tumpuan kepada
                  golongan B40 yang terjejas pendapatan akibat COVID-19 dan
                  layak mendapat manfaat dari program ini.
                  <br />
                  <br />
                  Insya Allah, kita bukan sahaja akan memastikan mereka yang
                  terjejas ini mempunyai rumah untuk berteduh tetapi menikmati
                  sedikit keselesaan bersama keluarga.
                </p>
              </Desc>
            </TextWrapper>
          </Definition>
          <Apply>
            <TextWrapper>
              <Title>Syarat Permohonan:</Title>
              <Desc>
                <Desc>
                  <ol>
                    <li>Pemohon dan pasangan warganegara Malaysia;</li>
                    <li>Pemohon berumur 18 tahun dan ke atas;</li>
                    <li>
                      Tidak memiliki rumah, tempoh sewaan ditamatkan oleh tuan
                      rumah atau seumpamanya; dan
                    </li>
                    <li>
                      Pendapatan isi rumah tidak melebihi RM3,000.00 sebulan.
                    </li>
                  </ol>
                </Desc>
              </Desc>
            </TextWrapper>
            <CardWrapper>
              <Card>
                <CardLink
                  href="https://teduh.kpkt.gov.my/scheme/rumah-ikram-keluarga-malaysia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardImg>
                    <Image
                      src={require("/src/img/logo-ikram.png")}
                      width="25px"
                      height="30px"
                    />
                  </CardImg>
                  <CardText>
                    <CardTitle>Mohon Rumah IKRAM</CardTitle>
                  </CardText>
                </CardLink>
              </Card>
            </CardWrapper>
          </Apply>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default RumahIkram;
