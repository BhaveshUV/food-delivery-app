import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore/appStore";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

describe("Should load Header Component with Cart, login button", () => {
    it("Should have cart items", () => {
        render(
            <HashRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </HashRouter>
        );

        // Querying
        let cart = screen.getByText(/🛒/);

        // Assertion
        expect(cart).toBeInTheDocument();
    });

    it("Should have login button", () => {
        render(
            <HashRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </HashRouter>
        );

        // Querying
        let loginBtn = screen.getByRole("button", {name: "Login"});

        // Assertion
        expect(loginBtn).toBeInTheDocument();
    });
});

describe("Should render cart with 0 items and login btn change to logout on click event", () => {
    it("Should have 0 items in the cart", () => {
        render(
            <HashRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </HashRouter>
        );

        // Querying
        let cart = screen.getByText("🛒0");

        // Assertion
        expect(cart).toBeInTheDocument();
    });

    it("Should change login button to logout on click event", () => {
        render(
            <HashRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </HashRouter>
        );

        // Querying
        let loginBtn = screen.getByRole("button", {name: "Login"});

        fireEvent.click(loginBtn);

        let logoutBtn = screen.getByRole("button", {name: "Logout"});

        // Assertion
        expect(logoutBtn).toBeInTheDocument();
    });
});