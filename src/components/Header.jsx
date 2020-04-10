import React from 'react';
import styled from '@emotion/styled';
import SearchBar from './SearchBar';

const HeaderContainer = styled.div`
  padding: 5px 10px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.03);
`;

const HeaderLayout = styled.div`
  flex: 1;
  padding: 5px 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 700px;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 10px;
  }
`;

const Branding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Title = styled.h1`
  font-size: 18pt;
  margin: 0;
  margin-bottom: 2px;

  @media (min-width: 768px) {
    font-size: 22pt;
  }
`;

const Subtitle = styled.h5`
  margin: 0;
  color: orange;
`;

const TemperatureSwitch = styled.div`
  display: flex;
  position: absolute;
  top: 20px;
  right: 15px;

  @media (min-width: 768px) {
    position: inherit;
    height: 36px;
    margin-left: 25px;
  }
`;

const UnitButton = styled.button`
  background: ${({active}) => active ? '#050044' : '#FAFAFA'};
  color: ${({active}) => active ? 'white' : 'inherit'};
  border: 1px solid rgba(0, 0, 0, .1);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, .1);
  padding: 8px 14px;
  font-size: 10pt;
`;

const CelsiusButton = styled(UnitButton)`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;
  
const FahrenheitButton = styled(UnitButton)`
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const Header = ({location, setLocation, units, setUnits}) => {
  return <HeaderContainer>
    <HeaderLayout>
      <Branding>
        <Title>Weatherific</Title>
        <Subtitle>Find Your Forecast</Subtitle>
      </Branding>
      <SearchBar defaultLocation={location} onLocationChange={setLocation} />
      <TemperatureSwitch>
        <CelsiusButton active={units === 'metric'} onClick={() => setUnits('metric')}>&deg;C</CelsiusButton>
        <FahrenheitButton active={units === 'imperial'} onClick={() => setUnits('imperial')}>&deg;F</FahrenheitButton>
      </TemperatureSwitch>
    </HeaderLayout>
  </HeaderContainer>
};

export default Header;
