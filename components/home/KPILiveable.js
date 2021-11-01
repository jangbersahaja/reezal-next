import styled from "styled-components";

import Link from "next/link";
import Image from "next/image";

const BGContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

const Post = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Collage = styled.div`
  width: 60%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 500px;

  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 992px) {
    flex-direction: column;
    width: 48%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 550px;
    margin: 10px auto;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 32.5%;
  height: 100%;


  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 992px) {
    width: 100%;
    height: 32.5%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 38%;

  @media (max-width: 992px) {
    width: 48%;
  }

  @media (max-width: 768px) {
    width: 96%;
    margin: 10px auto;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  line-height: 1;
`;

const PostText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 14;
  -webkit-box-orient: vertical;

  li {
    display: none;
  }
`;

const ReadMore = styled.a`
  text-align: center;
  font-size: 14px;
  display: block;
  transition: all 0.3s ease-in;
  cursor: pointer;
  font-weight: 900;
  margin-bottom: 20px;
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

const KPILiveable = () => {
  return (
    <BGContainer>
      <Post>
        <Collage>
          <ImgWrapper>
            <Image
              src="https://lh3.googleusercontent.com/D3NTnKfkZ-GQL8H1M6fTkgAxJbZWn8bWBgHLLYgroPuMmtBReZiO3n_gM2aasRI13nbJXREaBfybWB-A6Gel0L40kAlQWhAFuJsp1ZQCcT0R0uslwBP-TXizQswf6yJ_7AMD7xyOc-k=w2400"
              layout="fill"
              objectFit="cover"
            />
          </ImgWrapper>
          <ImgWrapper>
            <Image
              src="https://lh3.googleusercontent.com/KzkyrxLGrvQtP8D7-c7Ryrz6oHzjuHG7vgbuCO76-dgkmKQmhjp8wazHXabUTcLwvHPY3z1E3SRqrCn0fRJzBP82Dl8QM2qxg4KBU5qE-6EUXRK31Zz-KerxQkSA7qnU3cVvAIh2pls=w2400"
              layout="fill"
              objectFit="cover"
            />
          </ImgWrapper>
          <ImgWrapper>
            <Image
              src="https://lh3.googleusercontent.com/zmbj342nuAuPMfU9ZPv8siGtmUBReENkOBZ6Wvz908pf8CaOOTKn0InN_jQPe8kLG_pDPCk59eLA1lhyUzV5dszaoqY3tgOzldmuOdISzBACaIg2dZTON3naFcxJkUvJLyc-R7ReZz4=w2400"
              layout="fill"
              objectFit="cover"
            />
          </ImgWrapper>
        </Collage>

        <TextWrapper>
          <Title>Agenda Liveable Malaysia</Title>
          <LineBreak />
          <PostText>
            Malaysia Yang Berdaya Huni ini meliputi aspek{" "}
            <strong>persekitaran kediaman dan pembangunan</strong> yang bukan
            sahaja berkualiti malah ada <em>last-miles connectivity</em>,
            lengkap dengan infrastruktur asas yang selesa, akses internet
            meluas, akses kepada fasiliti kesihatan dan pendidikan serta
            disokong dengan dasar-dasar operasi Kerajaan Tempatan yang berkesan
            (<em>effective</em>) dan memberi kesan (<em>impactful</em>) kepada{" "}
            <em>livelihood</em> rakyat.
            <br />
            <br />
            Dalam hal ini,{" "}
            <strong>
              satu ukuran atau measurement iaitu Livability Index yang akan
              diperkenalkan permulaannya di kawasan PPR
            </strong>
            <br />
            <br />
            Ini akan didokong dengan <strong>strategi 3S</strong> iaitu{" "}
            <strong>
              SIHAT, SELAMAT DAN SEJAHTERA untuk Keluarga Malaysia
            </strong>
            .<br />
            <br />
            Antara <strong>program atau</strong>{" "}
            <strong>
              <em>deliverables</em>
            </strong>{" "}
            yang sedang dikenal pasti oleh KPKT adalah:
            <br />
            <br />
          </PostText>
          <LineBreak />
          <Link href="">
            <ReadMore>Click to read</ReadMore>
          </Link>
        </TextWrapper>
      </Post>
    </BGContainer>
  );
};

export default KPILiveable;
