import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  
  @media (min-width: 768px) {
    max-width: 700px;
  }
`;

const CityLink = styled.a`
  color: #FD2B2B;
  font-weight: bold;

  :hover {
    opacity: .75;
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

      <h2>Featured Cities</h2>
      <p>Why not take a peek at some of our favourite cities?</p>
      <ul>
        <li><CityLink href="?location=Vancouver">Vancouver</CityLink></li>
        <li><CityLink href="?location=Kelowna">Kelowna</CityLink></li>
        <li><CityLink href="?location=Toronto">Toronto</CityLink></li>
      </ul>
    </Container>
  );
};

export default GetStarted;
