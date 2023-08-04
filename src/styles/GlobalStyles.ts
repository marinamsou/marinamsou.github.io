import { createGlobalStyle } from 'styled-components';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import reset from './reset';

export default createGlobalStyle`
  ${reset};

  html {
    box-sizing: border-box;
  }
   
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
