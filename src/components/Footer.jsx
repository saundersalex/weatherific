import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.div`
  padding: 30px 0;
  font-size: 9pt;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    max-width: 700px;
  }
`;

const PersonalLink = styled.a`
  color: #FD2B2B;
  font-weight: bold;

  :hover {
    opacity: .75;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      Made with ❤ by <PersonalLink href="https://github.com/saundersalex">Alex Saunders</PersonalLink> in <strong>Kelowna, BC</strong> 🍁
    </FooterContainer>
  );
};

export default Footer;
