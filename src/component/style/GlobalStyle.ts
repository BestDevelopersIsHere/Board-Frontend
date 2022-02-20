import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  a{
    text-decoration-line: none;
  }
  `;

export default GlobalStyle;
