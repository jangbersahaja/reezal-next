import styled from "styled-components";
import ReactPlayer from "react-player/youtube";

import Image from "next/image";
import { useState } from "react";

const Container = styled.div`
  background: linear-gradient(180deg, #f2f6f9 0%, #fff 100%);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: ${({ theme }) => theme.width.default};
  max-width: ${({ theme }) => theme.width.max};
  padding: ${({ theme }) => theme.padding.default};

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;

const TitleWrapper = styled.div`
  width: 40%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 20px 0;
  }
`;

const SectionTitleTop = styled.h3`
  font-family: sans-serif;
  line-height: 0;
  letter-spacing: 8px;
  text-align: center;
  color: #d43076;
  text-transform: uppercase;
`;

const SectionTitle = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 60px;
  font-weight: bold;
  line-height: 1;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #37517e;
  text-align: center;
  border-bottom: 7px solid #d43076;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

const Playlist = styled.div`
  display: flex;
  flex-direction: column;
`;

const Video = styled.div`
  display: flex;
  padding: 10px;
  margin: 3px 0;
  border-radius: 10px 0 0 10px;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);

  cursor: pointer;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
`;

const Thumbnail = styled.div`
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  width: 40%;
  height: 100px;

  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);
`;

const Details = styled.div`
  padding: 0 2%;
  width: 60%;
`;

const VideoTitle = styled.h2`
  font-size: 16px;
`;

const Span = styled.span`
  font-size: 12px;
`;

const Gallery = styled.div`
  width: 60%;
  background-color: #fff;
  border-radius: 10px;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);

  display: flex;
  justify-content: center;
  align-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const VideoWrapper = styled.div`
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
  position: relative;
  padding-top: 56.25%;

  z-index: 3;
`;

const VideoPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

const videos = [
  {
    id: 1,
    title: "Penyerahan Rumah Ikram Keluarga Malaysia di PPR Lembah Subang 2",
    date: new Date("2021-10-08"),
    url: "https://youtu.be/o0G8Hbja8AQ",
    thumbnail: "https://img.youtube.com/vi/o0G8Hbja8AQ/sddefault.jpg",
  },
  {
    id: 2,
    title: "Walkabout Pangsapuri Jubli Perak, Seksyen 4, Bandar Baru Bangi",
    date: new Date("2021-09-16"),
    url: "https://youtu.be/IoBwCifLNew",
    thumbnail: "https://img.youtube.com/vi/IoBwCifLNew/sddefault.jpg",
  },
  {
    id: 3,
    title:
      "Duo Berbasikal kita bersedia untuk beraksi di Temasya Sukan Olimpik!",
    date: new Date("2021-06-26"),
    url: "https://youtu.be/fIoAdufQbZI",
    thumbnail: "https://img.youtube.com/vi/fIoAdufQbZI/sddefault.jpg",
  },
];

const FeaturedVideo = () => {
  const [play, setPlay] = useState(1);

  return (
    <Container>
      <Wrapper>
        <TitleWrapper>
          <SectionTitleTop>Pilihan</SectionTitleTop>
          <SectionTitle>Video</SectionTitle>
          <Playlist>
            {videos.map((v) => (
              <Video
                onClick={() => setPlay(v.id)}
                key={v.id}
                bg={v.id === play ? "#d43076" : "#eee"}
                color={v.id === play ? "#fff" : "unset"}
              >
                <Thumbnail>
                  <Image src={v.thumbnail} layout="fill" objectFit="cover" />
                </Thumbnail>
                <Details>
                  <VideoTitle>{v.title}</VideoTitle>
                  <Span>{v.date.toDateString()}</Span>
                </Details>
              </Video>
            ))}
          </Playlist>
        </TitleWrapper>
        <Gallery>
          <VideoWrapper>
            {videos
              .filter((e) => e.id === play)
              .map((v, i) => (
                <VideoPlayer
                  url={v.url}
                  key={i}
                  width="100%"
                  height="100%"
                  controls
                />
              ))}
          </VideoWrapper>
        </Gallery>
      </Wrapper>
    </Container>
  );
};

export default FeaturedVideo;
