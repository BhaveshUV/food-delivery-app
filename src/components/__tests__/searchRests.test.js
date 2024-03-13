import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore/appStore";
import MOCK_DATA_RESLIST from "../Mocks/RestListMockData.json";
import { act } from "react-dom/test-utils";


describe("Should render Body component with functionable search button", () => {
    afterEach(cleanup)

    it("Should render Body component with an input box & search btn", async () => {
        render(
            <HashRouter>
                <Provider store={appStore}>
                    <Body />
                </Provider>
            </HashRouter>
        )

        // Querying
        let searchBox = screen.getByPlaceholderText("Search for restaurant, cuisine or a dish");
        let searchBtn = screen.getByRole("button", { name: "Search" });

        // Assertion
        expect(searchBox).toBeInTheDocument();
        expect(searchBtn).toBeInTheDocument();
    });

    it("Should search rest-list for the input -> 'sweets'", async () => {
        global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(MOCK_DATA_RESLIST) }));
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            render(
                <HashRouter>
                    <Provider store={appStore}>
                        <Body />
                    </Provider>
                </HashRouter>
            )
        });

        // Querying
        let cardsBeforeSearch = screen.getAllByTestId("cards");

        // Assertion
        expect(cardsBeforeSearch.length).toBe(9);

        // Querying
        let searchBox = screen.getByPlaceholderText("Search for restaurant, cuisine or a dish");
        let searchBtn = screen.getByRole("button", { name: "Search" });

        fireEvent.change(searchBox, { target: { value: "sweets" } });
        fireEvent.click(searchBtn);

        // Querying
        let cardsAfterSearch = screen.getAllByTestId("cards");

        // Assertion
        expect(cardsAfterSearch.length).toBe(4);
    });
})