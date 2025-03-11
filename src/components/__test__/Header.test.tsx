import { render } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
const TestHeader = () => {
    return (
        <>
            <BrowserRouter>
                <Header data-testid="header" />
            </BrowserRouter>
        </>
    );
};

describe("<Header />", () => {
    it("render successfully", () => {
        const { getByText } = render(<TestHeader />);
        expect(getByText("Home")).toBeInTheDocument();
        expect(getByText("About Us")).toBeInTheDocument();
        expect(getByText("Our Teams")).toBeInTheDocument();
        expect(getByText("Whitepaper")).toBeInTheDocument();
        expect(getByText("Marketplace")).toBeInTheDocument();
        expect(getByText("Roadmap")).toBeInTheDocument();
        expect(getByText("Connect Wallet")).toBeInTheDocument();
    });
});
