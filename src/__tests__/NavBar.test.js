import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

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
  expect(logo).toHaveAttribute("src", "../assets/logo-light-green.png");
});

it("when the screen is small it renders the menu icon", () => {
  render(<NavBar />);
  const menuIcon = screen.getByText("FaBars");
  expect(menuIcon).toBeInTheDocument();
});
