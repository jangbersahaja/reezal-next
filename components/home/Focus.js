import styled from "styled-components";

import Image from "next/image";
import Link from "next/link";

import { BsShopWindow, BsWifi, BsHouse, BsTools } from "react-icons/bs";

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Inisiative = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 23%;
  margin: 10px 0;

  overflow: hidden;
  border-radius: 50px 10px 50px 10px;
  border: 0.8px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);

  transition: all 0.4s;
  cursor: pointer;

  &:hover {
    border-radius: 10px 50px 10px 50px;
    opacity: 0.8;
  }

  @media (max-width: 992px) {
    width: 48%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
`;

const NumBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25%;
  height: 70px;

  color: #fff;
  background-color: #d43076;
`;

const TitleBorder = styled.div`
  display: flex;
  align-items: center;

  width: 75%;
  height: 70px;

  background-color: whitesmoke;
  padding: 0 10px;
`;

const Title = styled.h2`
  font-size: 18px;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 230px;

  position: relative;
`;

const House = styled(BsHouse)`
  height: 35px;
  width: 35px;
  color: #fff;
`;

const Wifi = styled(BsWifi)`
  height: 35px;
  width: 35px;
  color: #fff;
`;

const PasarMalam = styled(BsShopWindow)`
  height: 35px;
  width: 35px;
  color: #fff;
`;

const Tools = styled(BsTools)`
  height: 30px;
  width: 30px;
  color: #fff;
`;

const focuses = [
  {
    id: 1,
    name: "Rumah Ikram Keluarga Malaysia",
    img: require("/src/img/home/hundreddays/rumah-ikram3.jpg"),
    url: "/focus/rumahikram",
    icon: <House />,
  },
  {
    id: 2,
    name: "JENDELA @ PPR",
    img: require("/src/img/home/hundreddays/pdpr.jpg"),
    url: "",
    icon: <Wifi />,
  },
  {
    id: 3,
    name: "Transformasi Pasar Malam",
    img: require("/src/img/home/hundreddays/pasarmalam.jpg"),
    url: "",
    icon: <PasarMalam />,
  },
  {
    id: 4,
    name: "MyBeautiful Keluarga Malaysia",
    img: require("/src/img/home/hundreddays/keluargamalaysia.jpg"),
    url: "",
    icon: <Tools />,
  },
];

const Focus = () => {
  return (
    <Column>
      {focuses.map((focus) => (
        <Link key={focus.id} href={focus.url} passHref>
          <Inisiative>
            <ImgWrapper>
              <Image src={focus.img} layout="fill" objectFit="cover" />
            </ImgWrapper>
            <TitleWrapper>
              <NumBorder>{focus.icon}</NumBorder>
              <TitleBorder>
                <Title>{focus.name}</Title>
              </TitleBorder>
            </TitleWrapper>
          </Inisiative>
        </Link>
      ))}
    </Column>
  );
};

export default Focus;
