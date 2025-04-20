import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html, body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    font-family: "Poppins", sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease-in-out;
  }

  h1 {
    font-size: clamp(24px, 4vw, 48px);
  }

  h2 {
    font-size: clamp(20px, 3vw, 40px);
  }

  p {
    font-size: clamp(14px, 2vw, 18px);
  }
`;
