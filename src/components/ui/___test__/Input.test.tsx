import { Input } from "@/components/ui/Input";
import { fireEvent, render } from "@testing-library/react";
describe("<Input />", () => {
    it("renders an input element", () => {
        const { getByPlaceholderText } = render(
            <Input placeholder="Enter text" />
        );

        const inputElement = getByPlaceholderText("Enter text");
        expect(inputElement).toBeInTheDocument();
        expect(inputElement.tagName).toBe("INPUT");
    });

    it("allows typing in the input field", async () => {
        const { getByPlaceholderText } = render(
            <Input placeholder="Type here" />
        );

        const inputElement = getByPlaceholderText("Type here");
        fireEvent.change(inputElement, { target: { value: "Hello World" } });
        expect(inputElement).toHaveValue("Hello World");
    });

    it("applies custom className", () => {
        const { getByRole } = render(<Input className="custom-class" />);

        const inputElement = getByRole("textbox");
        expect(inputElement).toHaveClass("custom-class");
    });

    it("disables the input when disabled prop is passed", () => {
        const { getByRole } = render(<Input disabled />);

        const inputElement = getByRole("textbox");
        expect(inputElement).toBeDisabled();
    });

    it("sets the input type correctly", () => {
        const { getByPlaceholderText } = render(
            <Input type="password" placeholder="Enter your password" />
        );

        const inputElement = getByPlaceholderText("Enter your password");
        expect(inputElement).toHaveAttribute("type", "password");
    });
});
