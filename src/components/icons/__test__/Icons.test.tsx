import { render } from "@testing-library/react";
import EthereumIcon from "../EthereumIcon";
import GlobeIcon from "../GlobeIcon";
import HamburgerIcon from "../HamburgerIcon";
import HandIcon from "../HandIcon";
import HeartIcon from "../HeartIcon";
import MessageIcon from "../MessageIcon";
import SearchIcon from "../SearchIcon";
import VerifyIcon from "../VerifyIcon";

const TestIcons = () => {
    return (
        <>
            <EthereumIcon data-testid="etherium-icon" />
            <GlobeIcon data-testid="globe-icon" />
            <HamburgerIcon data-testid="hamburger-icon" />
            <HandIcon data-testid="hand-icon" />
            <HeartIcon data-testid="heart-icon" />
            <MessageIcon data-testid="message-icon" />
            <SearchIcon data-testid="search-icon" />
            <VerifyIcon data-testid="verify-icon" />
        </>
    );
};

describe("Icons", () => {
    it("render successfully", () => {
        const { getByTestId } = render(<TestIcons />);
        expect(getByTestId("etherium-icon")).toBeInTheDocument();
        expect(getByTestId("globe-icon")).toBeInTheDocument();
        expect(getByTestId("hamburger-icon")).toBeInTheDocument();
        expect(getByTestId("hand-icon")).toBeInTheDocument();
        expect(getByTestId("heart-icon")).toBeInTheDocument();
        expect(getByTestId("message-icon")).toBeInTheDocument();
        expect(getByTestId("search-icon")).toBeInTheDocument();
        expect(getByTestId("verify-icon")).toBeInTheDocument();
    });
});
