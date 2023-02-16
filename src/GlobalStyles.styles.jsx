import { createGlobalStyle } from 'styled-components';
import Searchimg from './assets/images/search-icon.svg';
import SearchimgDark from './assets/images/search-icon-dark.svg';
import CardBg1 from './assets/images/card-bg-1.png';
import CardBg2 from './assets/images/card-bg-2.png';
import CardBg1Dark from './assets/images/card-bg-1dark.svg';
import CardBg2Dark from './assets/images/card-bg-2dark.svg';

export const GloabalStyles = createGlobalStyle`
  :root {
    --bg-body: #fff;
    --color-send-btn: #fff;
    --bg-send-btn: #152540;
    --bgi-search-btn: url(${Searchimg});
    --bgi1-author-card: url(${CardBg1});
    --bgi2-author-card: url(${CardBg2});
  }

  .dark {
    --bg-body: #191919;
    --color-send-btn: #152540;
    --bg-send-btn: #fff;
    --bgi-search-btn: url(${SearchimgDark});
    --bgi1-author-card: url(${CardBg1Dark});
    --bgi2-author-card: url(${CardBg2Dark});
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

  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
  }

`;
