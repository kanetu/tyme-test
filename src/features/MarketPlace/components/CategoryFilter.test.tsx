import { fireEvent, render } from "@testing-library/react";
import CategoryFilter from "./CategoryFilter";
import React from "react";

jest.mock("@/consts/common", () => ({
    categoryOptions: [
        { id: 1, value: "All", text: "All" },
        { id: 2, value: "Upper Body", text: "Upper Body" },
    ],
}));

const TestCategoryFilter = () => {
    const [state, setState] = React.useState("");
    return (
        <CategoryFilter
            selectedCategory={state}
            setSelectedCategory={setState}
        />
    );
};
describe("<CategoryFilter />", () => {
    it("renders 2 buttons and click to active button", () => {
        const { getByRole } = render(<TestCategoryFilter />);

        const allBtn = getByRole("button", { name: /All/i });
        expect(allBtn).toBeInTheDocument();
        expect(
            getByRole("button", { name: /Upper Body/i })
        ).toBeInTheDocument();

        fireEvent.click(allBtn);
        expect(allBtn).toHaveClass("active");
    });
});
