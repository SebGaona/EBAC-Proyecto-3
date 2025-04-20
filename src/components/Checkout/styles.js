// src/components/Checkout/styles.js
import styled from "styled-components";

export const Container = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 20px;
  background: ${({ theme }) => theme.background};
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 255, 204, 0.3);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid ${({ theme }) => theme.neon};
  border-radius: 8px;
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  margin-bottom: 15px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 2px solid ${({ theme }) => theme.neon};
  border-radius: 8px;
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.neon};
  color: ${({ theme }) => theme.text};
  padding: 12px;
  border: none;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  font-size: 18px;
  transition: 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
    box-shadow: 0px 0px 10px ${({ theme }) => theme.neon};
  }
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.primary};
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
`;

export const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
`;

export const TotalPrice = styled.h3`
  font-size: 20px;
  color: ${({ theme }) => theme.neon};
  margin-top: 15px;
`;
