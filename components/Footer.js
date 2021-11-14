import styled from "styled-components";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Wrapper = styled.div`
  padding: 0 5%;
  background-color: #37517e;
  display: flex;

  z-index: 9;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  padding: 20px;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SocMedIcon = styled.a`
  margin: 0 5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const CopyrightText = styled.span`
  color: #fff;
  text-align: center;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Right>
        <CopyrightText>
          &copy; Copyright <strong>Reezal Merican. </strong> All Rights Reserved
        </CopyrightText>
      </Right>
    </Wrapper>
  );
};

export default Footer;
