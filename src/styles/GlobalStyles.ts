import { createGlobalStyle } from 'styled-components';

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
