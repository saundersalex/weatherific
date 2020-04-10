import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  
  @media (min-width: 768px) {
    max-width: 700px;
  }
`;

const GetStarted = () => {
  return (
    <Container>
      <h1>Welcome to Weatherific! <span role="img" aria-labelledby="Happy Sun">🌞</span></h1>
      <p>
        Hey <em><s>Siri</s></em> <strong>Weatherific</strong>, is it going to rain today? ☔
      </p>
      <p>
        <strong>Weatherific</strong> helps you find weather forecasts quickly for any city in the world. Get started by searching for your next travel destination or home town!
      </p>
    </Container>
  );
};

export default GetStarted;
