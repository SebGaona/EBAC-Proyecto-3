import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CheckoutPage from "../Checkout";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("Checkout Page - Mockeado", () => {
  it("Render Checkout Title", () => {
    render(
      <BrowserRouter>
        <CheckoutPage />
      </BrowserRouter>
    );
    expect(screen.getByText("Checkout")).toBeInTheDocument();
  });

  it("Allows to write the addres", () => {
    render(
      <BrowserRouter>
        <CheckoutPage />
      </BrowserRouter>
    );
    const streetInput = screen.getByPlaceholderText("Calle");

    fireEvent.change(streetInput, { target: { value: "Avenida Principal" } });
    expect(streetInput.value).toBe("Avenida Principal");
  });

  it("Shows credit card option correctly", () => {
    render(
      <BrowserRouter>
        <CheckoutPage />
      </BrowserRouter>
    );
    const paymentSelect = screen.getByRole("combobox");

    fireEvent.change(paymentSelect, { target: { value: "creditCard" } });
    expect(
      screen.getByPlaceholderText("Número de tarjeta")
    ).toBeInTheDocument();
  });

  it("Shows paypal option correctly", () => {
    render(
      <BrowserRouter>
        <CheckoutPage />
      </BrowserRouter>
    );
    const paymentSelect = screen.getByRole("combobox");

    fireEvent.change(paymentSelect, { target: { value: "paypal" } });
    expect(
      screen.getByPlaceholderText("Correo electrónico de PayPal")
    ).toBeInTheDocument();
  });

  it("Shows total correctly", () => {
    render(
      <BrowserRouter>
        <CheckoutPage />
      </BrowserRouter>
    );
    expect(screen.getByText("Total a Pagar: $0.00")).toBeInTheDocument();
  });
});
