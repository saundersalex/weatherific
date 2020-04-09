import styled from '@emotion/styled';

const LoadingIndicator = styled.div`
  border: 4px solid #eeeeee;
  border-top: 4px solid ${props => props.color || '#07096A'};
  border-radius: 50%;
  width: ${props => `${props.size || 32}px`};
  height: ${props => `${props.size || 32}px`};
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default LoadingIndicator;
