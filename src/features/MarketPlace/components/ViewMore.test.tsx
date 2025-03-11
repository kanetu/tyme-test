import { render } from "@testing-library/react";
import ViewMore from "./ViewMore";

describe("<ViewMore />", () => {
    it("renders view more button when loadedItems less than totalItems", () => {
        const { getByText } = render(
            <ViewMore
                loadedItems={1}
                totalItems={10}
                increaseItems={() => {}}
            />
        );
        expect(getByText("View more")).toBeInTheDocument();
    });

    it("doesn't render view more button when loadedItems is not less than totalItems", () => {
        const { queryByText } = render(
            <ViewMore
                loadedItems={10}
                totalItems={10}
                increaseItems={() => {}}
            />
        );
        expect(queryByText("View more")).not.toBeInTheDocument();
    });
});
