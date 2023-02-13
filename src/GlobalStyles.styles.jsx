import { createGlobalStyle } from 'styled-components';

export const GloabalStyles = createGlobalStyle`
  :root {
    --bg-body: #fff;
    --color-send-btn: #fff;
    --bg-send-btn: #152540;
  }

  .dark {
    --bg-body: #191919;
    --color-send-btn: #152540;
    --bg-send-btn: #fff;
  }

    html {
    height: 100%;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
    font-family: 'Poppins', 'Roboto', sans-serif;
  }
  
  main {
    flex-grow: 1;
    background-color: var(--bg-body);
  }

  img {
    vertical-align: middle;
    object-fit: cover;
  }

  ul,
  ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
  p {
    margin: 0;
  }

`;
