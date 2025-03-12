import { render } from "@testing-library/react";
import EmptyData from "../EmptyData";

describe("<EmptyData />", () => {
    it("renders with default string correctly", () => {
        const { getByText } = render(<EmptyData />);
        expect(getByText("Empty Data")).toBeInTheDocument();
    });

    it("renders custom text correctly", () => {
        const { getByText } = render(<EmptyData text="No results found" />);
        expect(getByText("No results found")).toBeInTheDocument();
    });
});
