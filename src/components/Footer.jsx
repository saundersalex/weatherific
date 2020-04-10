import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.div`
  padding: 30px 0;
  font-size: 9pt;
  max-width: 700px;
  margin: 0 auto;
`;

const Footer = () => {
  return <FooterContainer>
    Made with ❤ by <a href="https://github.com/saundersalex">Alex Saunders</a> in <strong>Kelowna, BC</strong> 🍁
  </FooterContainer>;
};

export default Footer;
