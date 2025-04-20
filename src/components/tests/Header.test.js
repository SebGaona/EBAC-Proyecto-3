import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("Header Component", () => {
  it("should render correctly", () => {
    render(<Header />);

    expect(screen.getByText("Game Vault")).toBeInTheDocument();
  });

  it("should navigate to cart when button is clicked", () => {
    render(<Header />);

    const button = screen.getByText("Ir al checkout");

    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/checkout");
  });
});
