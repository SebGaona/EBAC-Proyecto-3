import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Message, Button } from "./styles";

const ConfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Message>
        <h2>¡Compra realizada con éxito! 🎉</h2>
        <p>
          Gracias por tu compra. Recibirás un correo con los detalles de tu
          pedido.
        </p>
        <Button onClick={() => navigate("/store")}>Volver a la tienda</Button>
      </Message>
    </Container>
  );
};

export default ConfirmationPage;
