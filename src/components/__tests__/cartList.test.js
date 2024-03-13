/* eslint-disable testing-library/no-unnecessary-act */
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../Mocks/RestMenuMockData.json";
import { HashRouter } from "react-router-dom";
import appStore from "../../utils/appStore/appStore";
import { Provider } from "react-redux";
import Restaurant from "../Restaurant";
import Header from "../Header";
import Cart from "../Cart";
import { clearCart } from "../../utils/appStore/cartSlice";

describe("should render the R S Mani Cafe menu with functionable add btn and cart", () => {
    afterEach(cleanup);
    afterEach(async () => {
        await act(async () => appStore.dispatch(clearCart()));
    });

    it("should render the R S Mani Cafe menu with accordian (recommended)", async () => {
        global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) }));
        await act(async () => {
            return render(
                <HashRouter>
                    <Restaurant />
                </HashRouter>
            )
        });

        let recommendedAccordian = screen.getByText(/Recommended/);

        expect(recommendedAccordian).toBeInTheDocument();
    });

    it("should expand the recommended accordian on click", async () => {
        global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) }));
        await act(async () => {
            render(
                <HashRouter>
                    <Provider store={appStore}>
                        <Restaurant />
                    </Provider>
                </HashRouter>
            );
        });

        let recommendedAccordian = screen.getByText(/Recommended/);

        expect(recommendedAccordian).toBeInTheDocument();

        fireEvent.click(recommendedAccordian);

        let foodItems = screen.getAllByTestId("foodItems");

        expect(foodItems.length).toBe(20);
    });

    it("should display no. of cart-items in header on clicking the add btn", async () => {
        global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) }));
        await act(async () => {
            return render(
                <HashRouter>
                    <Provider store={appStore}>
                        <Header />
                        <Restaurant />
                    </Provider>
                </HashRouter>
            )
        })

        let cartBeforeAdding = screen.getByText("🛒0");

        expect(cartBeforeAdding).toBeInTheDocument();

        let recommendedAccordian = screen.getByText("Recommended (20)");

        expect(recommendedAccordian).toBeInTheDocument();

        fireEvent.click(recommendedAccordian);

        let addBtns = screen.getAllByRole("button", { name: "ADD +" });

        fireEvent.click(addBtns[0]);
        fireEvent.click(addBtns[1]);

        expect(screen.getByText("🛒2")).toBeInTheDocument();

        fireEvent.click(addBtns[2]);

        let cartAfterAdding = screen.getByText("🛒3");

        expect(cartAfterAdding).toBeInTheDocument();
    });

    it("should reflect the items in the cart", async () => {
        global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) }));
        await act(async () => {
            return render(
                <HashRouter>
                    <Provider store={appStore}>
                        <Header />
                        <Restaurant />
                        <Cart />
                    </Provider>
                </HashRouter>
            )
        })

        expect(screen.getByText("🛒0")).toBeInTheDocument();

        let recommendedAccordian = screen.getByText("Recommended (20)");

        fireEvent.click(recommendedAccordian);

        let addBtns = screen.getAllByRole("button", { name: "ADD +" });

        fireEvent.click(addBtns[0]);
        fireEvent.click(addBtns[1]);

        let foodItems = screen.getAllByTestId("foodItems");

        expect(foodItems.length).toBe(22); // (cart-2) & (recommended-20)
    });

    it("should render the cart with functionable clear cart btn", async () => {
        global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) }));
        await act(async () => {
            return render(
                <HashRouter>
                    <Provider store={appStore}>
                        <Header />
                        <Restaurant />
                        <Cart />
                    </Provider>
                </HashRouter>
            )
        })

        expect(screen.getByText("🛒0")).toBeInTheDocument();

        let recommendedAccordian = screen.getByText("Recommended (20)");

        fireEvent.click(recommendedAccordian);

        let addBtns = screen.getAllByRole("button", { name: "ADD +" });

        fireEvent.click(addBtns[0]);
        fireEvent.click(addBtns[1]);

        let foodItems = screen.getAllByTestId("foodItems");

        expect(foodItems.length).toBe(22); // (cart-2) & (recommended-20)

        let clearBtn = screen.getByRole("button", { name: "Clear cart" });

        fireEvent.click(clearBtn);

        expect(screen.getAllByTestId("foodItems").length).toBe(20)
    })
})