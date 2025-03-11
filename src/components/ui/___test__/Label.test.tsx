import { Label } from "@/components/ui/Label";
import { render } from "@testing-library/react";

describe("<Label />", () => {
    it("should be rendered Test Label", () => {
        const { getByText } = render(<Label>Test</Label>);
        expect(getByText("Test")).toBeInTheDocument();
    });

    it("should be rendered Test link", () => {
        const { getByRole } = render(
            <Label asChild>
                <a href="/home">Test</a>
            </Label>
        );
        const linkElement = getByRole("link", { name: "Test" });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.tagName).toBe("A");
    });
});
