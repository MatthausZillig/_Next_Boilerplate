import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v15-latin-200.woff2') format('woff2'),
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v15-latin-regular.woff2') format('woff2'),
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v15-latin-600.woff2') format('woff2'),
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v15-latin-800.woff2') format('woff2'),
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
${({ theme }) => css`
  html {
    font-size: 62.5%;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  body {
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
  }
`}

`

export default GlobalStyles
