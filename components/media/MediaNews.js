import { useState } from "react";
import styled from "styled-components";

import Image from "next/image";

import News from "../../src/media/news/news";
import MediaHouse from "../../src/media/news/mediahouse";

import { AiOutlineSearch, AiOutlineCalendar } from "react-icons/ai";

const Section = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const Items = styled.div`
  width: 80%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

//NEWS SECTION

const PostNews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 32%;
  margin: 1% 0;

  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 992px) {
    width: 48%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 1% 0;
  }
`;

const CardContent = styled.div``;

const CardEnd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  margin: 0 15px 10px 15px;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  position: relative;

  margin-bottom: 10px;

  height: 200px;

  @media (max-width: 992px) {
    height: 240px;
  }
`;

const TextWrapper = styled.div`
  margin: 5px 2% 0 2%;
  @media (max-width: 992px) {
    padding: 0 5px;
  }
`;

const PostTitle = styled.h3`
  margin-bottom: 5px;
  font-size: 18px;
`;

const PostDesc = styled.p`
  font-size: 14px;
  line-height: 1.5;
  text-align: justify;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
`;

const PostDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const PostDate = styled.span`
  font-size: 12px;
  margin: auto 0;
`;

const PostSourceImg = styled.img`
  position: absolute;
  bottom: 10px;
  right: 0px;

  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  background-color: ${(props) => props.bg};
`;

const ReadMore = styled.a`
  text-align: center;
  font-size: 14px;
  display: block;
  transition: all 0.3s ease-in;
  cursor: pointer;
  font-weight: 900;
  &:hover {
    color: #d43076;
  }
`;

const ShowMoreNews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 32%;
  margin: 1% 0;
  border-radius: 10px;
  overflow: hidden;
  border: 0.8px solid rgba(0, 0, 0, 0);

  @media (max-width: 992px) {
    width: 48%;
  }

  @media (max-width: 768px) {
    width: 95%;
    margin: 10px 0;
  }
`;

const ShowMoreButton = styled.button`
  height: 120px;
  width: 120px;
  margin: auto;
  padding: 10px;

  font-size: 14px;
  font-weight: 900;

  display: ${(props) => props.display};

  border: none;
  color: #fff;
  background: #d43076;
  border-radius: 60px;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);

  transition: all 0.4s;

  &:hover {
    width: 200px;
    height: 300px;
    border-radius: 10px;
  }
`;

// End of News

// Filter Card

const FilterCard = styled.div`
  width: 19%;
  height: 300px;
  margin: 1% 0;

  padding: 1%;

  top: 0;
  position: sticky;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CardTitle = styled.h2``;

const Search = styled.div`
  display: flex;
  align-content: center;
  margin: 10px 0;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #d9d9d9;
  width: 40px;
  height: 40px;
  transition: all 0.4s;
  border-radius: 10px 0 0 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
`;

const Filter = styled.div`
  display: flex;
  align-content: center;
  margin-bottom: 5px;
`;

const Label = styled.label`
  font-size: 14px;
  margin: auto 5px;
`;

const Select = styled.input`
  font-size: 14px;
  margin: auto 0;
`;

const FilterDesc = styled.span``;

const Input = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 0 10px 10px 0;
  box-sizing: border-box;
  padding-left: 10px;
  height: 40px;
  width: 100%;
  font-size: 14px;

  &::placeholder {
    opacity: 0.5;
  }
`;

const Reset = styled.button`
  font-size: 14px;
  font-weight: 700;
  color: #fff;

  align-self: center;

  width: 120px;
  margin: 10px 0;
  padding: 10px 0;
  border: none;

  background: #d43076;
  border-radius: 50px;
  transition: all 0.4s;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
`;

const LineBreak = styled.hr`
  margin: 10px 0;
  border: 0;
  height: 0;
  border-top: 0.8px solid rgba(0, 0, 0, 0.1);
`;

const MediaNews = ({news}) => {
  console.log(news)

  const [visible, setVisible] = useState(8);

  const sortedNews = news.slice(0, visible)
    .map((n) => {
      return (
        <PostNews key={n.id}>
          <CardContent>
            <ImgWrapper>
              <Image
                src={n.thumbnailUrl}
                alt={n.title}
                layout="fill"
                objectFit="cover"
              />
                  <PostSourceImg
                  alt={n.mediaHouse.name}
                    src={n.mediaHouse.logoUrl}
                    width={n.mediaHouse.width}
                    padding={n.mediaHouse.padding}
                    bg={n.mediaHouse.bgColor.css}
                  />
            </ImgWrapper>
            <TextWrapper>
              <PostDetails>
                <PostDate>{n.date}</PostDate>
              </PostDetails>
              <PostTitle>{n.title}</PostTitle>
              <LineBreak />
              <PostDesc>{n.lead}</PostDesc>
            </TextWrapper>
          </CardContent>
          <CardEnd>
            <LineBreak />
            <ReadMore href={n.url} target="_blank" rel="noopener noreferrer">
              Click to read
            </ReadMore>
          </CardEnd>
        </PostNews>
      );
    });

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <Section>
      <Items>
        {sortedNews}
        <ShowMoreNews>
          <ShowMoreButton
            onClick={showMoreItems}
            display={visible >= news.length ? "none" : ""}
          >
            Show More
          </ShowMoreButton>
        </ShowMoreNews>
      </Items>
      <FilterCard>
        <CardTitle>Filter</CardTitle>
        <LineBreak />
        <Search>
          <Icon>
            <AiOutlineSearch />
          </Icon>
          <Input placeholder="Search News" />
        </Search>
        <Search>
          <Icon>
            <AiOutlineCalendar />
          </Icon>
          <Input placeholder="Date Range" />
        </Search>

        <LineBreak />
        {MediaHouse.map((m) => (
          <Filter key={m.id}>
            <Select
              type="checkbox"
              id={m.id}
              name="media-name"
              value={m.name}
            />
              <Label>{m.name}</Label>
          </Filter>
        ))}
        <LineBreak />
        <Filter>
          <Select
            type="checkbox"
            id="BM"
            name="language"
            value="Bahasa Melaysia"
          />
          <Label>Bahasa Malaysia</Label>
        </Filter>
        <Filter>
          <Select type="checkbox" id="EN" name="language" value="English" />
          <Label>English</Label>
        </Filter>
        <LineBreak />
        <Reset>Reset Filter</Reset>
      </FilterCard>
    </Section>
  );
};

export default MediaNews;