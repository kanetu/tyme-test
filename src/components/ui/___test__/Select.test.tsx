import { fireEvent, render } from "@testing-library/react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/Select";
import React from "react";

window.HTMLElement.prototype.scrollIntoView = function () {};

const TestSelect = () => {
    const [value, setValue] = React.useState("");

    return (
        <Select value={value} onValueChange={setValue}>
            <SelectTrigger data-testid="select-trigger">
                <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Label</SelectLabel>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                </SelectGroup>
            </SelectContent>
            <SelectSeparator />
        </Select>
    );
};

describe("<Select />", () => {
    test("opens dropdown and selects an option", async () => {
        const { getByTestId, findByText } = render(<TestSelect />);

        const trigger = getByTestId("select-trigger");
        expect(trigger).toHaveTextContent("Select an option");

        fireEvent.click(trigger);

        const option1 = await findByText("Option 1");
        expect(option1).toBeInTheDocument();

        fireEvent.click(option1);

        expect(trigger).toHaveTextContent("Option 1");
    });
});
