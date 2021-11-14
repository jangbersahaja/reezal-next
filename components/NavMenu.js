import styled from "styled-components";

import Link from "next/link";

import { FaArrowLeft, FaNewspaper } from "react-icons/fa";
import { AiFillHome, AiFillAppstore, AiFillMessage } from "react-icons/ai";
import { MdPermMedia, MdLocalLibrary } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { useState } from "react";
import { useRouter } from "next/router";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  z-index: 999;

  transition: all 0.4s;
  position: fixed;

  display: none;

  @media (max-width: 992px) {
    display: flex;
    bottom: 5vh;
    right: 5vw;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const BackDiv = styled.div`
  transition: all 0.4s;
  width: ${({ isOpen }) => (isOpen ? "50px" : "0")};
`;

const BtnBack = styled.div`
  cursor: pointer;

  background: #d43076;

  width: 40px;
  height: 40px;
  margin-right: 10px;

  border-radius: 50%;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 40px;
  height: 40px;

  border-radius: 50%;
`;

const BtnMenu = styled.div`
  cursor: pointer;

  background: #d43076;
  width: 40px;
  height: 40px;

  border-radius: 50%;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Column = styled.div`
  overflow: hidden;

  transition: all 0.4s;
  height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
`;

const BtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Btn = styled.div`
  cursor: pointer;

  background: ${(props) => (props.active === "active" ? "#37517e" : "#d43076")};
  width: 40px;
  height: 40px;
  margin-bottom: 10px;

  border-radius: 50%;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.span`
  margin: 0 -5px 10px 5px;
  padding: 0 10px 0 5px;
  font-size: 12px;
  background-color: #5a656e;
  color: #fff;
`;

const ArrowBackIcon = styled(FaArrowLeft)`
  color: #fff;
`;

const MenuIcon = styled(AiFillAppstore)`
  color: #fff;
`;

const HomeIcon = styled(AiFillHome)`
  color: #fff;
`;

const BlogIcon = styled(FaNewspaper)`
  color: #fff;
`;

const KepalaBatasIcon = styled(MdLocalLibrary)`
  color: #fff;
`;

const NewsIcon = styled(MdPermMedia)`
  color: #fff;
`;

const AboutIcon = styled(ImProfile)`
  color: #fff;
`;

const ContactIcon = styled(AiFillMessage)`
  color: #fff;
`;

const pages = [
  {
    url: "/contact",
    name: "Contact",
    icon: <ContactIcon />,
  },
  {
    url: "/about",
    name: "About",
    icon: <AboutIcon />,
  },
  {
    url: "/media/news",
    name: "Media",
    icon: <NewsIcon />,
  },
  {
    url: "/kepalabatas",
    name: "Kepala Batas",
    icon: <KepalaBatasIcon />,
  },
  {
    url: "/blog",
    name: "Blog",
    icon: <BlogIcon />,
  },
  {
    url: "/",
    name: "Home",
    icon: <HomeIcon />,
  },
];

const NavMenu = ({ back }) => {
  const route = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Column isOpen={isOpen}>
        {pages.map((page, i) => (
          <Link key={i} href={page.url} passHref>
            <BtnDiv>
              <Label>{page.name}</Label>
              <Btn active={page.url === route.pathname ? "active" : ""}>
                {page.icon}
              </Btn>
            </BtnDiv>
          </Link>
        ))}
      </Column>
      <Row>
        <BackDiv isOpen={isOpen}>
          <BtnBack onClick={() => route.back()}>
            <ArrowBackIcon />
          </BtnBack>
        </BackDiv>
        <MenuDiv>
          <BtnMenu onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon />
          </BtnMenu>
        </MenuDiv>
      </Row>
    </Container>
  );
};

export default NavMenu;
