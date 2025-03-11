import { fireEvent, render } from "@testing-library/react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/Sheet";

const TestSelect = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button>Sheet trigger</button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Sheet title</SheetTitle>
                    <SheetDescription>Sheet description</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">Sheet content</div>
                <SheetFooter>
                    Sheet footer
                    <SheetClose asChild>
                        <button type="submit">Sheet close</button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

describe("<Sheet />", () => {
    it("render trigger properly", async () => {
        const { getByRole } = render(<TestSelect />);

        const trigger = getByRole("button", { name: /Sheet trigger/i });
        expect(trigger).toHaveTextContent("Sheet trigger");
    });

    it("render content properly", async () => {
        const { getByRole, findByText } = render(<TestSelect />);

        const trigger = getByRole("button", { name: /Sheet trigger/i });
        expect(trigger).toHaveTextContent("Sheet trigger");

        fireEvent.click(trigger);

        const sheetTitle = await findByText("Sheet title");
        expect(sheetTitle).toBeInTheDocument();

        const sheetDescription = await findByText("Sheet description");
        expect(sheetDescription).toBeInTheDocument();

        const sheetFooter = await findByText("Sheet footer");
        expect(sheetFooter).toBeInTheDocument();

        const sheetContent = await findByText("Sheet content");
        expect(sheetContent).toBeInTheDocument();

        const sheetCloseBtn = getByRole("button", { name: /Sheet close/i });
        expect(sheetCloseBtn).toHaveTextContent("Sheet close");

        fireEvent.click(sheetCloseBtn);
        expect(sheetTitle).not.toBeInTheDocument();
        expect(sheetContent).not.toBeInTheDocument();
        expect(sheetDescription).not.toBeInTheDocument();
        expect(sheetFooter).not.toBeInTheDocument();
        expect(sheetCloseBtn).not.toBeInTheDocument();
    });
});
