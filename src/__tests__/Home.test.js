import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

describe("When the Home component is rendered then it", () => {
  it("renders the hero content", () => {
    render(<Home />);
    const header = screen.getByText("Angela Collings.");
    const button = screen.getByRole("button");
    expect(header).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
