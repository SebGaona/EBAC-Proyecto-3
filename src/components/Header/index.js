import { removeFromCart } from "../../redux/cartSlice";
import React, { useState, useContext } from "react";
import { ThemeContext } from "../../theme/ThemeProvider";
import { useSelector, useDispatch } from "react-redux";
import {
  HeaderContainer,
  CartIcon,
  CartCount,
  CartDropdown,
  CartItem,
  RemoveButton,
  CheckoutButton,
  ThemeToggleButton,
} from "./styles";
import cart from "../../img/cart.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart);
  const total = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  const dispatch = useDispatch();
  const { toggleTheme } = useContext(ThemeContext);
  console.log("Header - cartItems:", cartItems);
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <h1>GameVault</h1>
      <ThemeToggleButton onClick={toggleTheme}>Cambiar Tema</ThemeToggleButton>

      <CartIcon onClick={() => setIsCartOpen(!isCartOpen)}>
        <img src={cart} alt="Carrito" width={30} height={30} />
        {cartItems.length > 0 && <CartCount>{cartItems.length}</CartCount>}
        <CartDropdown isOpen={isCartOpen}>
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <CartItem key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                  <p>
                    {item.name} - ${item.price.toFixed(2)}
                  </p>
                  <RemoveButton onClick={() => dispatch(removeFromCart(item))}>
                    Eliminar
                  </RemoveButton>
                </CartItem>
              ))}
              <h3>Total: ${total}</h3>
              <CheckoutButton onClick={() => navigate("/checkout")}>
                Ir al Checkout
              </CheckoutButton>
            </>
          ) : (
            <p>El carrito está vacío</p>
          )}
        </CartDropdown>
      </CartIcon>
    </HeaderContainer>
  );
};

export default Header;
