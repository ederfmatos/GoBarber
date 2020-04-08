import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 14px Roboto, sans-serif;
    background: #f0f0f0;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  input,
  button,
  textarea,
  a {
    font: 400 18px Roboto, sans-serif;
  }

`;
