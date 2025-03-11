import { Button } from "@/components/ui/Button";
import { render } from "@testing-library/react";

describe("<Button />", () => {
    it("should be rendered Test button", () => {
        const { getByText } = render(<Button>Test</Button>);
        expect(getByText("Test")).toBeInTheDocument();
    });

    it("should be rendered Test link", () => {
        const { getByRole } = render(
            <Button asChild>
                <a href="/home">Test</a>
            </Button>
        );
        const linkElement = getByRole("link", { name: "Test" });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.tagName).toBe("A");
    });
});
