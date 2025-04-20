import { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./index";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
