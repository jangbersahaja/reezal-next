import styled from "styled-components";

import Image from "next/image";

const Container = styled.div`
  background: linear-gradient(180deg, #f2f6f9 0%, #fff 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${({ theme }) => theme.width.default};
  max-width: ${({ theme }) => theme.width.max};
  padding: ${({ theme }) => theme.padding.default};
`;

const Collage = styled.div`
  display: flex;

  width: 1400px;
  max-width: 100%;

  margin-top: 30px;

  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  width: 33%;

  margin: 0 5px;
`;

const Seven = styled.div`
  position: relative;

  width: 100%;
  height: 550px;

  margin-bottom: 10px;

  overflow: hidden;
  border-radius: 10px;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);
`;

const Six = styled.div`
  position: relative;

  width: 100%;
  height: 510px;

  margin-bottom: 10px;

  overflow: hidden;
  border-radius: 10px;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);
`;

const Three = styled.div`
  position: relative;

  width: 100%;
  height: 250px;

  margin-bottom: 10px;

  overflow: hidden;
  border-radius: 10px;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Two = styled.div`
  position: relative;

  width: calc(50% - 7.5px);
  height: 210px;

  overflow: hidden;
  border-radius: 10px;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);
`;

const SectionTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 60px;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #37517e;
  text-align: center;

  border-bottom: 7px solid #d43076;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const Text = styled.div`
  flex: 1;
  display: flex;
  margin: 30px 0;
  flex-direction: column;
  justify-content: center;

  background: linear-gradient(
    270deg,
    rgba(44, 73, 100, 0),
    rgba(44, 73, 100, 0.1)
  );

  @media (max-width: 768px) {
    background: none;
  }
`;


const ItemTitle = styled.h2`
  font-size: 24px;
`;

const PostText = styled.p`
  white-space: pre-wrap;
  margin-bottom: 20px;
  font-size: 14px;
`;

const FormWrapper = styled.div`
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  background-color: #2c4964;
  border-radius: 10px;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.h2`
  font-size: 16px;
  color: #fff;
  margin: 5px;
`;

const Input = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  font-size: 14px;

  &::placeholder {
    opacity: 0.5;
  }
`;

const TextArea = styled.textarea`
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  font-family: sans-serif;

  &::placeholder {
    opacity: 0.5;
  }
`;

const SubmitButton = styled.button`
  background-color: #d43076;
  color: white;
  transition: all 0.3s ease-in;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid #d43076;
  margin-top: 30px;
  padding: 10px 20px;
  font-weight: 700;
  &:hover {
    background-color: #dd176d;
  }
`;

const Paper = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: flex-end;

  margin-bottom: 30px;
  width: 98%;
  padding: 1%;

  border-radius: 10px;
  background-color: #fff;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const TextWrapper = styled.div`
  width: 48%;
`;

const Title = styled.h2`
  margin: 5px 0;
  font-size: 22px;
  font-family: "Playfair Display", serif;
`;

const Desc = styled.p`
  font-size: 14px;
  line-height: 1.5;

  text-align: justify;
  white-space: pre-line;
`;

const KepalaBatas = () => {
  return (
    <Container>
      <Collage>
        <Column>
          <Seven>
            <Image
              src={require("/src/img/kepalabatas/kb1.jpg")}
              layout="fill"
              objectFit="cover"
            />
          </Seven>
          <Row>
            <Two>
              <Image
                src={require("/src/img/kepalabatas/kb8.jpg")}
                layout="fill"
                objectFit="cover"
              />
            </Two>
            <Two>
              <Image
                src={require("/src/img/kepalabatas/kb5.jpg")}
                layout="fill"
                objectFit="cover"
              />
            </Two>
          </Row>
        </Column>
        <Column>
          <Three>
            <Image
              src={require("/src/img/kepalabatas/kb2.jpg")}
              layout="fill"
              objectFit="cover"
            />
          </Three>
          <Three>
            <Image
              src={require("/src/img/kepalabatas/kb3.jpg")}
              layout="fill"
              objectFit="cover"
            />
          </Three>
          <Three>
            <Image
              src={require("/src/img/kepalabatas/kb6.jpg")}
              layout="fill"
              objectFit="cover"
            />
          </Three>
        </Column>
        <Column>
          <Six>
            <Image
              src={require("/src/img/kepalabatas/kb7.jpg")}
              layout="fill"
              objectFit="cover"
            />
          </Six>
          <Three>
            <Image
              src={require("/src/img/kepalabatas/kb4.jpg")}
              layout="fill"
              objectFit="cover"
            />
          </Three>
        </Column>
      </Collage>
      <Wrapper>
        <SectionTitle>Kepala Batas Di Hatiku</SectionTitle>
        <Paper>
          <TextWrapper>
              <Title>Kepala Batas</Title>
            <Desc>
              Kepala Batas merupakan sebuah bandar dan Kompleks Pejabat Kerajaan
              bagi daerah Seberang Perai Utara, Pulau Pinang, Malaysia. Ia
              terletak di tengah perjalanan Butterworth ke Sungai Petani,
              terletak 30 km dari George Town. Kepala batas juga membawa maksud
              bahagian depan batas sawah padi. Batas ialah pemisah antara tanah
              pesawah-pesawah padi. Wakil Rakyat di Kepala Batas ialah bekas
              Perdana Menteri Malaysia, Abdullah Ahmad Badawi, sebagai tempat
              desanya. Kepala Batas juga sangat berdekatan dengan Tasek Gelugor,
              Penaga dan Bukit Mertajam. Stesen Keretapi Tasik Gelugor sekarang
              juga merupakan satu lagi stesen alternatif untuk melancong ke
              Selatan bagi penduduk sini. Bandar ini dengan Pulau Pinang juga
              merupakan bandar seperti Kuala Lumpur dan Gombak di Pulau Pinang.
            </Desc>
          </TextWrapper>
          <TextWrapper>
            <Desc>
              'Kepala Batas' bermaksud bahagian depan sawah padi. Batas ialah
              pemisah antara tanah pesawah-pesawah padi . Biasanya batas ini
              dibuat daripada tanah sebagai benteng penahan air agar paras air
              dalam sawah tidak terlalu banyak. Jika paras air di dalam sawah
              lebih daripada sejengkal, padi agak susah ditanam . Anak padi akan
              tenggelam, terutama jika selepas hujan lebat. Batas air di dalam
              sawah perlu dikawal sepanjang masa. Sebagai kawasan persisiran
              pantai, kawasan ini pada masa dahulu mempunyai saliran yang buruk
              dan sering dilanda banjir. Dengan itu tidak sesuai untuk tanaman
              kecuali padi yang tumbuh di dalam air. Oleh itu pembinaan saliran
              adalah satu langkah untuk pemulihan atau tebusguna tanah. Banyak
              kawasan di Kedah dan Pulau Pinang melalui proses ini. Sungai Korok
              di Kedah maupun di Pulau Pinang adalah pelat buruh dari Jawa yang
              menyebut "korok" walhal di Kedah lebih tepat dipanggil Sungai
              Korek. Di tebing Sungai Korek ini biasanya ada timbunan tanah dari
              parit sebagai benteng untuk mengelak kemasukan air masin. Timbunan
              tanah sepanjang parit korek ini dipanggil batas atau bund dalam
              bahasa Inggeris. Hujung bund ini di mana parit berakhir atau
              bertembung dengan parit lain dipanggil kepala batas. Oleh itu kita
              boleh dapati beberapa tempat di Kedah dan Perlis mempunyai nama
              yang sama iaitu Kepala Batas.
            </Desc>
          </TextWrapper>
        </Paper>
      </Wrapper>
    </Container>
  );
};

export default KepalaBatas;
