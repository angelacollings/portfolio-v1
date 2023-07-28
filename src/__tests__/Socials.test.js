// write tests for socials component
import React from "react";
import { render, screen } from "@testing-library/react";
import SocialsBar from "../components/SocialsBar";

describe("When the socials component is rendered it", () => {
  it("displays a list of links", () => {
    render(<SocialsBar />);
    const github = screen.getByTestId("github");
    const linkedin = screen.getByTestId("linkedin");
    const email = screen.getByTestId("email");
    expect(github).toBeInTheDocument();
    expect(linkedin).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
