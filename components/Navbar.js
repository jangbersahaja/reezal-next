import { useState } from "react";
import styled from "styled-components";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import jata from "../src/img/logo.png";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Nav = styled.div`
  z-index: 999;
  top: 0;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: whitesmoke;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 992px) {
    padding: 0 20px;
    justify-content: center;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  cursor: pointer;

  @media (max-width: 992px) {
    padding: 5px 0;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const LogoImg = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  padding: 0;
`;

const LogoNameWrapper = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

const LogoName = styled.h1`
  font-size: 21px;
  line-height: 1;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

const LogoTitle = styled.a`
  font-size: 11px;
  letter-spacing: 0.1px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  @media (max-width: 992px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "360px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #2c4964;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

const MenuLink = styled.a`
  cursor: pointer;
  text-align: center;

  padding: 10px 20px;

  border-top: 5px solid whitesmoke;

  border-bottom: 5px solid
    ${(props) => (props.active === "active" ? "#d43076" : "whitesmoke")};

  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s ease-in;

  @media (max-width: 992px) {
    width: 100%;
    padding: 20px 20px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  margin: 0 10px;
`;

const SocMedIcon = styled.a`
  padding: 10px 15px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Contact = styled.a`
  cursor: pointer;
  text-align: center;

  padding: 10px 20px;

  color: #fff;
  background: #37517e;

  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s ease-in;

  border-top: 5px solid #37517e;
  border-bottom: 5px solid #37517e;

  @media (max-width: 992px) {
    width: 100%;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const pages = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/blog",
    name: "Blog",
  },
  {
    url: "/kepalabatas",
    name: "Kepala Batas",
  },
  {
    url: "/media/news",
    name: "Media",
  },
  {
    url: "/about",
    name: "Info",
  },
];

const Navbar = () => {
  const route = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Link href="/" passHref>
        <Logo>
          <LogoImg>
            <Image src={jata} height={28} width={36} />
          </LogoImg>
          <LogoNameWrapper>
            <LogoName>Reezal Merican</LogoName>
            <LogoTitle>Menteri Perumahan dan Kerajaan Tempatan</LogoTitle>
          </LogoNameWrapper>
        </Logo>
      </Link>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        {pages.map((p, i) => (
          <Link href={p.url} key={i}>
            <MenuLink
              active={p.url === route.pathname ? "active" : ""}
              onClick={() => setIsOpen(false)}
            >
              {p.name}
            </MenuLink>
          </Link>
        ))}
        <SocialMedia>
          <SocMedIcon
            href="https://www.facebook.com/reezal.merican041"
            target="_blank"
          >
            <FaFacebook />
          </SocMedIcon>
          <SocMedIcon
            href="https://www.instagram.com/reezal_merican/"
            target="_blank"
          >
            <AiFillInstagram />
          </SocMedIcon>
          <SocMedIcon href="https://twitter.com/reezal_merican" target="_blank">
            <FaTwitter />
          </SocMedIcon>
          <SocMedIcon
            href="https://www.youtube.com/channel/UCWYfMmgFJiGI3N9HFTsLwKg"
            target="_blank"
          >
            <FaYoutube />
          </SocMedIcon>
        </SocialMedia>
        <Link href="/contact">
          <Contact>Hubungi</Contact>
        </Link>
      </Menu>
    </Nav>
  );
};

export default Navbar;
