import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  padding: 15px 20px;
`;

export const CartIcon = styled.div`
  cursor: pointer;
  position: relative;
  font-size: 24px;
`;

export const CartCount = styled.span`
  background: red;
  color: white;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 14px;
  position: absolute;
  top: -10px;
  right: -10px;
`;

export const CartDropdown = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  background: ${({ theme }) => theme.background};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 500px;
  max-height: 500px;
  overflow-y: auto;
  z-index: 100;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-20px)"};
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const RemoveButton = styled.button`
  background: ${({ theme }) => theme.secondary};
  color: white;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const CheckoutButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const ThemeToggleButton = styled.button`
  background: ${({ theme }) => theme.neon};
  color: ${({ theme }) => theme.text};
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
