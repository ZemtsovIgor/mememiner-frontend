import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle: any = createGlobalStyle`
  ${normalize}

  // Fonts
  @font-face {
    font-family: "SF Pro Text";
    src: url("/fonts/SF-Pro-Text-Heavy.otf") format("opentype");
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: "SF Pro Text";
    src: url("/fonts/SF-Pro-Text-Bold.otf") format("opentype");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "SF Pro Text";
    src: url("/fonts/SF-Pro-Text-Semibold.otf") format("opentype");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "SF Pro Text";
    src: url("/fonts/SF-Pro-Text-Medium.otf") format("opentype");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "SF Pro Text";
    src: url("/fonts/SF-Pro-Text-Regular.otf") format("opentype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "SF Pro Text";
    src: url("/fonts/SF-Pro-Text-Light.otf") format("opentype");
    font-weight: 300;
    font-style: normal;
  }
  
   //Variables
  //:root {
  //  --tg-color-scheme: light;
  //  --tg-theme-bg-color: #1C1F24;
  //  --tg-theme-text-color: #ffffff;
  //  --tg-theme-hint-color: #929292;
  //  --tg-theme-link-color: #207ae4;
  //  --tg-theme-button-color: #5bc8fb;
  //  --tg-theme-button-text-color: #fffeec;
  //  --tg-theme-secondary-bg-color: #f3f2f9;
  //
  //  --default-font: 'SF Pro Text', sans-serif;
  //  --accent-green: #00ffc9;
  //  --accent-red: #D22929;
  //  --accent-gold: #FFCE68;
  //  --text-primary: #FFF;
  //  --text-secondary: #9D99A9;
  //  --text-disabled: rgba(255, 255, 255, .3);
  //  --background-default: rgba(117, 122, 167, .1);
  //  --background-pressed: rgba(117, 122, 167, .16);
  //  --background-disabled: rgba(117, 122, 167, .08);
  //  --background-drower: rgba(25, 27, 38, .96);
  //  --stroke-default: rgba(117, 122, 167, .2);
  //  --stroke-pressed: rgba(146, 153, 214, .4);
  //  --button-primary-default: linear-gradient(180deg, #FCE099 0%, #EFAC46 14.5%, #E59A2A 45.5%, #DC8707 100%);
  //  --button-primary-pressed: linear-gradient(180deg, #EFAC46 0%, #E59A2A 45.5%, #DC8707 100%);
  //  --button-secondary-default: linear-gradient(180deg, #9E3FD9 0%, #762DA5 12%, #571B8E 41%, #31204E 100%);
  //  --button-secondary-pressed: linear-gradient(180deg, #8533BA 0%, #641EA3 41%, #3F2863 100%);
  //  --drower-elevate: 0px -8px 20px 0px rgba(0, 0, 0, .4);
  //  --loader-main: linear-gradient(199deg, #FBBA40 8.93%, #7028CD 92.21%);
  //  font-family: 'SF Pro Text', sans-serif;
  //  color-scheme: light dark;
  //  font-synthesis: none;
  //  text-rendering: optimizeLegibility;
  //  -webkit-font-smoothing: antialiased;
  //  -moz-osx-font-smoothing: grayscale;
  //  isolation: isolate;
  //  -webkit-tap-highlight-color: transparent;
  //  -webkit-touch-callout: none;
  //  -webkit-user-select: none;
  //  -moz-user-select: none;
  //  -ms-user-select: none;
  //  user-select: none;
  //}

  body {
    background: #000000;
    font-family: 'SF Pro Text', sans-serif;
    width: 100%;
    height: 100%;
    min-width: 320px;
    height: -moz-available;
    height: -webkit-fill-available;
    height: fill-available;
    overflow: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
