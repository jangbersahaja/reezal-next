//react
import { useState } from "react";

//dependencies
import Image from "next/image";
import ReactPlayer from "react-player/youtube";

//components

//icons

//styles
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    width: 100%;
    justify-content: center;
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;

  width: 33%;
  margin: 1% 0;

  @media (max-width: 992px) {
    justify-content: center;
    width: 100%;
  }
`;

const Playlist = styled.div`
  display: flex;
  flex-direction: column;
`;

const Video = styled.div`
  display: flex;
  padding: 1%;
  margin: 3px 0;
  border-radius: 10px;

  cursor: pointer;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};

  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);
`;

const Thumbnail = styled.div`
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  width: 40%;
  height: 100px;
`;

const Details = styled.div`
  padding: 10px 2%;
  width: 60%;
`;

const VideoTitle = styled.h2`
  font-size: 16px;
`;

const Span = styled.span`
  font-size: 12px;
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

const Paper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 1% 0;
  width: 66%;

  background-color: #efefef;
  border-radius: 10px;
  overflow: hidden;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 992px) {
    width: 100%;
  }
`;

const LineBreak = styled.hr`
  margin: 10px 0;
  border: 0;
  height: 0;
  border-top: 0.8px solid rgba(0, 0, 0, 0.1);
`;

const parliamentVideos = [
  {
    id: 1,
    title: "Penggulungan RMKe-12 bagi KPKT",
    date: new Date("2021-10-07"),
    url: "https://youtu.be/B-SWtMmcx2g",
    thumbnail: "https://img.youtube.com/vi/B-SWtMmcx2g/sddefault.jpg",
  },
  {
    id: 2,
    title: "Waktu Pertanyaan Menteri",
    date: new Date("2021-10-07"),
    url: "https://youtu.be/Tx4gN2Bn-HM",
    thumbnail: "https://img.youtube.com/vi/Tx4gN2Bn-HM/sddefault.jpg",
  },
  {
    id: 3,
    title: "Sesi Jawab Lisan",
    date: new Date("2021-09-22"),
    url: "https://youtu.be/F1w8LUTX2SY",
    thumbnail: "https://img.youtube.com/vi/F1w8LUTX2SY/sddefault.jpg",
  },
  {
    id: 4,
    title: "Sesi Jawab Lisan 2",
    date: new Date("2021-09-22"),
    url: "https://youtu.be/IQvoHrDHSaI",
    thumbnail: "https://img.youtube.com/vi/IQvoHrDHSaI/sddefault.jpg",
  },
  {
    id: 5,
    title: "Sesi Pertanyaan Lisan",
    date: new Date("2021-11-01"),
    url: "https://youtu.be/3gCZnHNGKk8",
    thumbnail: "https://img.youtube.com/vi/3gCZnHNGKk8/sddefault.jpg",
  },
];

const MediaStatement = () => {
  const sortedVideos = parliamentVideos.sort((a, b) => b.date - a.date);
  const [play, setPlay] = useState(sortedVideos[0].id);

  return (
    <Section>
      <Items>
        <Playlist>
          {sortedVideos.map((v) => (
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
      </Items>
      <Paper>
        <VideoWrapper>
          {parliamentVideos
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
      </Paper>
    </Section>
  );
};

export default MediaStatement;
