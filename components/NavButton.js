import styled from "styled-components";

import Link from "next/link";

import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";

const BtnDiv = styled.div`
  display: flex;
  justify-content: space-between;

  width: 90px;
  z-index: 999;

  transition: all 0.4s;
  position: fixed;
  top: 10vh;
  left: 2vw;

  @media (max-width: 768px) {
    top: 82vh;
    left: 75vw;
  }
`;

const Btn = styled.div`
  cursor: pointer;

  background: #d43076;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowBackIcon = styled(FaArrowLeft)`
  color: #fff;
`;

const HomeIcon = styled(AiOutlineHome)`
  color: #fff;
`;

const NavButton = ({ back }) => {
  return (
    <BtnDiv>
      <Link href={back}>
        <Btn>
          <ArrowBackIcon />
        </Btn>
      </Link>
      <Link href="/">
        <Btn>
          <HomeIcon />
        </Btn>
      </Link>
    </BtnDiv>
  );
};

export default NavButton;
