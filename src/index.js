import React from 'react';
import ReactDOM from 'react-dom';
import {Global, css} from '@emotion/core';

import Weatherific from './Weatherific';

import 'normalize.css';

const globalStyles = css`
  body {
    color: #07096A;
    font-family: Barlow, sans-serif;
    background-color: #F0EEF7;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <Weatherific />
  </React.StrictMode>,
  document.getElementById('root')
);
