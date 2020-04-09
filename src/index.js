import React from 'react';
import ReactDOM from 'react-dom';
import {Global, css} from '@emotion/core';

import Weatherific from './Weatherific';

// Gives us a nice CSS reset for a clean slate across different browsers.
import 'normalize.css';

const globalStyles = css`
  body {
    font-family: Barlow, sans-serif;
    background-color: #eee;
    padding: 20px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <Weatherific />
  </React.StrictMode>,
  document.getElementById('root')
);
