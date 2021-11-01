import styled from "styled-components";

import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa"

const Wrapper = styled.div`
  padding: 0 5%;
  background-color: #2c4964;
  display: flex;

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
`;

const Footer = () => {
  return (
    <Wrapper>
      <Left>
        <SocialMedia>
          <SocMedIcon  href = "https://www.facebook.com/reezal.merican041" target="_blank">
            <FaFacebook />
          </SocMedIcon>
          <SocMedIcon href = "https://www.instagram.com/reezal_merican/" target="_blank">
            <FaInstagram />
          </SocMedIcon>
          <SocMedIcon href = "https://twitter.com/reezal_merican" target="_blank">
            <FaTwitter />
          </SocMedIcon>
          <SocMedIcon href = "https://www.youtube.com/channel/UCWYfMmgFJiGI3N9HFTsLwKg" target="_blank">
            <FaYoutube />
          </SocMedIcon>
        </SocialMedia>
      </Left>
      <Right>
          <CopyrightText>
          &copy; Copyright <strong >Reezal Merican. </strong> All Rights Reserved
          </CopyrightText>
      </Right>
    </Wrapper>
  );
};

export default Footer;
