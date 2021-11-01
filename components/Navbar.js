import { useState } from "react";
import styled from "styled-components";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import jata from "../src/img/logo.png";

const Nav = styled.div`
  z-index: 999;
  top: 0;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 992px) {
    padding: 0 20px;
  }
`;

const Logo = styled.div`
  display: flex;
  padding: 0.5rem 0;
  align-items: center;
  width: 300px;
  cursor: pointer;
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
  &:hover {
    color: #d43076;
  }
`;

const LogoName = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 21px;
  line-height: 1;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

const LogoTitle = styled.span`
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
    display: flex;
  }
`;

const MenuLink = styled.a`
  padding: 15px 15px;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease-in;
  font-size: 14px;
  color: ${(props) => props.active};
  &:hover {
    color: #d43076;
  }
`;

const Contact = styled.a`
  font-size: 14px;
  cursor: pointer;
  color: #fff;
  background: #d43076;
  transition: all 0.3s ease-in;
  border-radius: 20px;
  margin-left: 50px;
  padding: 5px 10px;
  &:hover {
    background-color: #ce3276;
  }

  @media (max-width: 992px) {
    margin: 20px 0;
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
    name: "About",
  },
];

const Navbar = () => {

  const route = useRouter()
  
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
            <MenuLink active={ p.url === route.pathname ? "#d43076" : ""}>{p.name}</MenuLink>
          </Link>
        ))}
        <Link href="/contact">
          <Contact>Contact</Contact>
        </Link>
      </Menu>
    </Nav>
  );
};

export default Navbar;