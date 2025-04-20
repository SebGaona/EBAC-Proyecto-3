import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${({ theme }) => theme.background};
`;

export const Message = styled.div`
  background: ${({ theme }) => theme.primary};
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0px 0px 20px ${({ theme }) => theme.neon};
  text-align: center;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.neon};
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.secondary};
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
    box-shadow: 0px 0px 12px ${({ theme }) => theme.secondary};
  }
`;
