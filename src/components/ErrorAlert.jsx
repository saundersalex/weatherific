import React from 'react';
import styled from '@emotion/styled';

const AlertContainer = styled.div`
  border-radius: 8px;
  background-color: #FD2B2B;
  border: 1px solid rgba(0, 0, 0, .1);
  color: #FFFFFF;
  font-size: 10pt;
  padding: 10px 20px;
`;

const ErrorAlert = ({error}) => {
  return (
    <AlertContainer>
      {error}
    </AlertContainer>
  );
};

export default ErrorAlert;
