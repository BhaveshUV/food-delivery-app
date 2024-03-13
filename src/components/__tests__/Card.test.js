import { render, screen } from "@testing-library/react";
import { Card, withVegLabel } from "../Card";
import MOCK_DATA from "../Mocks/CardMockData.json";

describe("Should render Card and VegCard component with Mock prop", () => {
    it("Should render Card component with Mock prop", () => {
        render(<Card restaurant={MOCK_DATA} />);

        // Querying
        let resName = screen.getByText("Dabba Garam (Homestyle,Combo, Thali & More)");

        // Assertion
        expect(resName).toBeInTheDocument();
    });

    it("Should render VegCard component with Mock prop", () => {
        let VegCard = withVegLabel(Card);
        render(<VegCard restaurant={MOCK_DATA} />);

        // Querying
        let resName = screen.getByText("Dabba Garam (Homestyle,Combo, Thali & More)");

        // Assertion
        expect(resName).toBeInTheDocument();
    });
});