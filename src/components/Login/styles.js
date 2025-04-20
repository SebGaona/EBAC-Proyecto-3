import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${({ theme }) => theme.background};
`;

export const Form = styled.form`
  background: ${({ theme }) => theme.neon};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.secondary};
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-bottom: 15px;
`;

export const ToggleText = styled.p`
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`;
