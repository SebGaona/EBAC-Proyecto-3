import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, register } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { Container, Form, Input, Button, Title, ToggleText } from "./styles";

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegistering) {
      dispatch(register({ name, email }));
    } else {
      dispatch(login({ email }));
    }

    navigate("/store");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>{isRegistering ? "Registro" : "Iniciar sesión"}</Title>
        {isRegistering && (
          <Input
            type="text"
            placeholder="Nombre de usuario"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <Input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">
          {isRegistering ? "Registrarse" : "Ingresar"}
        </Button>
        <ToggleText onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering
            ? "¿Ya tienes una cuenta? Inicia sesión"
            : "¿No tienes cuenta? Regístrate"}
        </ToggleText>
      </Form>
    </Container>
  );
};

export default Login;
