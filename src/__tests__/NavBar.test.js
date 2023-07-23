import { fireEvent, render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";
import userEvent from "@testing-library/user-event";

describe("When the NavBar is rendered then it", () => {
  it("renders menu options", () => {
    render(<NavBar />);
    const home = screen.getByText("Home");
    const about = screen.getByText("About");
    const projects = screen.getByText("Projects");
    const contact = screen.getByText("Contact");
    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(projects).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
  });

  it("renders logo", () => {
    render(<NavBar />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "logo-yellow.png");
  });

  it("changes logo on hover", () => {
    render(<NavBar />);

    const logo = screen.getByAltText("logo");

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "logo-yellow.png");

    userEvent.hover(logo);
    expect(logo).toHaveAttribute("src", "logo-light-yellow.png");

    userEvent.unhover(logo);
    expect(logo).toHaveAttribute("src", "logo-yellow.png");
  });

  it("goes to root on logo click", () => {
    render(<NavBar />);
    const logo = screen.getByAltText("logo");
    userEvent.click(logo);
    expect(window.location.pathname).toBe("/");
  });

  it("renders menu logo and displays menu when clicked", () => {
    render(<NavBar />);
    const menuBars = screen.getByTestId("menu-bars");
    expect(menuBars).toBeInTheDocument();

    fireEvent.click(menuBars);
    fireEvent.resize(window, { target: { innerWidth: 500 } });
    const menuExit = screen.getByTestId("menu-exit");
    const smallMenu = screen.getByTestId("small-menu");
    expect(menuExit).toBeInTheDocument();
    expect(smallMenu).toBeInTheDocument();
  });
});
