import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.background};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.primary};
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.secondary};
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    opacity: 0.8;
  }
`;

export const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;
