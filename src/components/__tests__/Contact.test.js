import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

test("Should load contact component", () => {
    render(<Contact />);

    // Querying
    let heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
});

test("Should load all inputs in Contact Component", () => {
    render(<Contact />);

    // Querying
    let inputs = screen.getAllByRole("textbox");

    // Assertion
    expect(inputs.length).toBe(2);
});

test("Should load form in Contact Component", () => {
    render(<Contact />);

    // Querying
    let theForm = screen.getByRole("form");

    // Assertion
    expect(theForm).toBeInTheDocument();
});