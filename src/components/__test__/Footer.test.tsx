import { render } from "@testing-library/react";
import Footer from "../Footer";
import { BrowserRouter } from "react-router-dom";

const TestFooter = () => {
    return (
        <>
            <BrowserRouter>
                <Footer data-testid="footer" />
            </BrowserRouter>
        </>
    );
};

describe("<Footer />", () => {
    it("render successfully", () => {
        const { getByText } = render(<TestFooter />);
        expect(getByText("Navigation")).toBeInTheDocument();
        expect(getByText("Home")).toBeInTheDocument();
        expect(getByText("About Us")).toBeInTheDocument();
        expect(getByText("Our Teams")).toBeInTheDocument();
        expect(getByText("Whitepaper")).toBeInTheDocument();
        expect(getByText("Marketplace")).toBeInTheDocument();
        expect(getByText("Roadmap")).toBeInTheDocument();
        expect(getByText("FAQs")).toBeInTheDocument();
        expect(getByText("News")).toBeInTheDocument();
        expect(getByText("Community")).toBeInTheDocument();
        expect(getByText("Contact Us")).toBeInTheDocument();
        expect(getByText("01234568910")).toBeInTheDocument();
        expect(getByText("tymex-talent@tyme.com")).toBeInTheDocument();
        expect(
            getByText("Subcribe to receive our latest update")
        ).toBeInTheDocument();
        expect(
            getByText("©2023 Tyme - Edit. All Rights reserved.")
        ).toBeInTheDocument();
        expect(getByText("Security")).toBeInTheDocument();
        expect(getByText("Legal")).toBeInTheDocument();
        expect(getByText("Privacy")).toBeInTheDocument();
    });
});
