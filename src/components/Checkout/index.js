import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Input,
  Select,
  Button,
  CartItem,
  ProductImage,
  TotalPrice,
} from "./styles";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const [address, setAddress] = useState({
    street: "",
    number: "",
    city: "",
    postalCode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentDetails, setPaymentDetails] = useState({});
  const [paymentSaved, setPaymentSaved] = useState(false);
  const navigate = useNavigate();
  const total = cartItems.length
    ? cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)
    : "0.00";

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
    setPaymentDetails({});
  };

  const handlePaymentDetailsChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handlePaymentSave = () => {
    if (!paymentMethod) {
      alert("Selecciona un método de pago.");
      return;
    }
    setPaymentSaved(true);
    alert("Método de pago guardado exitosamente (simulado)");
  };

  const handleConfirmPurchase = () => {
    if (
      !address.street ||
      !address.number ||
      !address.city ||
      !address.postalCode ||
      !paymentMethod
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    alert("Compra confirmada (simulado)");
    navigate("/confirmation");
  };

  console.log(cartItems);
  console.log(total);

  return (
    <Container>
      <h2>Checkout</h2>

      {cartItems.map((item) => (
        <CartItem key={item.id}>
          <ProductImage src={item.image} alt={item.name} />
          <p>
            {item.name} - ${item.price.toFixed(2)}
          </p>
        </CartItem>
      ))}
      <TotalPrice>Total a Pagar: ${total}</TotalPrice>

      <Input
        type="text"
        name="street"
        placeholder="Calle"
        value={address.street}
        onChange={handleAddressChange}
      />
      <Input
        type="text"
        name="number"
        placeholder="Número"
        value={address.number}
        onChange={handleAddressChange}
      />
      <Input
        type="text"
        name="city"
        placeholder="Ciudad"
        value={address.city}
        onChange={handleAddressChange}
      />
      <Input
        type="text"
        name="postalCode"
        placeholder="Código Postal"
        value={address.postalCode}
        onChange={handleAddressChange}
      />

      <Select value={paymentMethod} onChange={handlePaymentChange}>
        <option value="">Selecciona un método de pago</option>
        <option value="creditCard">Tarjeta de crédito</option>
        <option value="paypal">PayPal</option>
      </Select>

      {paymentMethod === "creditCard" && (
        <>
          <Input
            type="text"
            name="cardNumber"
            placeholder="Número de tarjeta"
            value={paymentDetails.cardNumber || ""}
            onChange={handlePaymentDetailsChange}
          />
          <Input
            type="text"
            name="expirationDate"
            placeholder="Fecha de vencimiento (MM/AA)"
            value={paymentDetails.expirationDate || ""}
            onChange={handlePaymentDetailsChange}
          />
          <Input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={paymentDetails.cvv || ""}
            onChange={handlePaymentDetailsChange}
          />
        </>
      )}

      {paymentMethod === "paypal" && (
        <Input
          type="email"
          name="paypalEmail"
          placeholder="Correo electrónico de PayPal"
          value={paymentDetails.paypalEmail || ""}
          onChange={handlePaymentDetailsChange}
        />
      )}

      <Button onClick={handlePaymentSave}>Guardar método de pago</Button>

      {paymentSaved && (
        <Button onClick={handleConfirmPurchase}>Confirmar compra</Button>
      )}
    </Container>
  );
};

export default CheckoutPage;
