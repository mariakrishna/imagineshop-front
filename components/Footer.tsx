import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import styled from "styled-components";

import Logo from "../public/images/logo.png";
import { Container } from "../styles/utils";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <div>
          <Image src={Logo} width={130} height={60} alt="logo" />
        </div>
        <Contact>
          Imagine Shop - +55 (48) 3771-1703 / 3771-1823 -
          imagine@imagineschool.com.br - Rua Miguel Deux, 129 - Coqueiros -
          Florianópolis/SC
        </Contact>
        <SocMedList>
          <li>
            <SocNetIcon icon={faFacebookSquare} />
          </li>
          <li>
            <SocNetIcon icon={faInstagram} />
          </li>
          <li>
            <SocNetIcon icon={faYoutube} />
          </li>
        </SocMedList>
      </FooterContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #f4f4f4;
`;
const FooterContainer = styled.div`
  ${Container}
  display: grid;
  grid-template-columns: 130px auto 130px;
  padding-top: 2.5rem;
  height: 12.5rem;
`;

const Contact = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
  text-align: center;
  margin-top: 8.125rem;
`;

const SocMedList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1.5rem;
`;

const SocNetIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.875rem;
`;

export default Footer;
