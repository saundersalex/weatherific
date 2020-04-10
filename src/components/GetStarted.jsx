import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 20px;
`;

const GetStarted = () => {
  return <Container>
    <h1>Welcome to Weatherific! <span role="img" aria-labelledby="Happy Sun">🌞</span></h1>
    <p>
      Hey <s>Siri,</s> <em>Weatherific</em>, is it going to rain today?
    </p>
    <p>
      <strong>Weatherific</strong> helps you find weather forecasts quickly for any city in the world. Why not get started by searching for your own city?
    </p>
  </Container>;
};

export default GetStarted;
