import React from 'react';
import styled from '@emotion/styled';

const CardContainer = styled.div`
  background-color: pink;
  padding: 10px;
`;

const ForecastPreviewCard = ({weatherData, setUnits}) => {
  return <CardContainer>
    <span>Card</span>
  </CardContainer>;
};

export default ForecastPreviewCard;
