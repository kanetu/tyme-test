import { render, fireEvent } from "@testing-library/react";
import { useForm } from "react-hook-form";
import {
    Form,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    FormField,
    FormDescription,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input"; // Assuming you have an Input component

const TestForm = () => {
    const form = useForm({
        defaultValues: {
            username: "",
        },
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(() => {})}>
                <FormField
                    name="username"
                    control={form.control}
                    rules={{ required: "Username is required" }}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Enter username"
                                />
                            </FormControl>
                            <FormMessage />
                            <FormDescription>Description</FormDescription>
                        </FormItem>
                    )}
                />
                <button type="submit">Submit</button>
            </form>
        </Form>
    );
};

describe("Form Components", () => {
    it("renders form components correctly", () => {
        const { getByLabelText, getByPlaceholderText, getByRole } = render(
            <TestForm />
        );

        expect(getByLabelText("Username")).toBeInTheDocument();
        expect(getByPlaceholderText("Enter username")).toBeInTheDocument();
        expect(getByRole("button", { name: /submit/i })).toBeInTheDocument();
    });

    it("displays validation error message when input is empty", async () => {
        const { findByText, getByRole } = render(<TestForm />);

        fireEvent.submit(getByRole("button", { name: /submit/i }));

        expect(await findByText("Username is required")).toBeInTheDocument();
    });

    it("allows user to enter text", () => {
        const { getByPlaceholderText } = render(<TestForm />);

        const input = getByPlaceholderText("Enter username");

        fireEvent.change(input, { target: { value: "Test User" } });

        expect(input).toHaveValue("Test User");
    });
});
