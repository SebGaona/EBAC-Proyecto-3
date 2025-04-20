import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../../theme/ThemeProvider";
import { GlobalStyles } from "../../theme/GlobalStyles";
import { lightTheme, darkTheme } from "../../theme/index";
import Login from "../Login";
import StorePage from "../StorePage";
import Checkout from "../Checkout";
import ConfirmCheckout from "../ConfirmCheckout";

function App() {
  const { theme } = useContext(ThemeContext);

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<ConfirmCheckout />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
