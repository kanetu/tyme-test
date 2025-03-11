import { render, fireEvent } from "@testing-library/react";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";

const TestPopover = () => {
    return (
        <Popover>
            <PopoverTrigger>Open</PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
    );
};

describe("<Popover />", () => {
    it("renders popover trigger correctly", () => {
        const { getByText } = render(<TestPopover />);
        expect(getByText("Open")).toBeInTheDocument();
    });

    it("renders popover content correctly", async () => {
        const { getByRole, findByText } = render(<TestPopover />);

        fireEvent.click(getByRole("button", { name: /open/i }));

        expect(
            await findByText("Place content for the popover here.")
        ).toBeInTheDocument();
    });
});
