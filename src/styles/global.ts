import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle<any>`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,600,700&display=swap');  
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #DBE7E4;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;

