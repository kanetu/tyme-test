import { render } from "@testing-library/react";
import { ScrollArea } from "@/components/ui/ScrollArea";

const TestScrollArea = () => {
    return (
        <ScrollArea className="max-h-[2000px] h-[1000px] md:mx-[40px] xl:mx-[40px] 2xl:mx-[40px] md:mt-[20px] w-full p-4">
            <div>Scroll content</div>
        </ScrollArea>
    );
};

describe("<ScrollArea />", () => {
    it("renders scrollarea correctly", () => {
        const { getByText } = render(<TestScrollArea />);
        expect(getByText("Scroll content")).toBeInTheDocument();
    });
});
