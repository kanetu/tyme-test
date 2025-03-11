import { render, waitFor } from "@testing-library/react";
import MainContent from "./MainContent";
import { Product } from "@/types/product";

jest.mock("@/components/ui/Skeleton", () => ({
    Skeleton: jest.fn(() => <div data-testid="skeleton" />),
    SkeletonCard: jest.fn(() => <div data-testid="skeleton-card" />),
}));

jest.mock("@/components/CharacterCard", () =>
    jest.fn(() => <div data-testid="main-character" />)
);

describe("<MainContent />", () => {
    it("renders 20 skeleton when loading", () => {
        const { getAllByTestId } = render(<MainContent isLoading />);

        expect(getAllByTestId("skeleton-card")).toHaveLength(20);
    });

    it("renders 2 CharacterCard when have 2 data", async () => {
        const mockData: Product[] = [
            {
                id: 1,
                title: "Sample Product",
                category: "Category",
                price: "100",
                author: {
                    firstName: "John",
                    lastName: "Doe",
                    avatar: "/avatar.png",
                },
                cardImageUrl: "/img.png",
            },
            {
                id: 2,
                title: "Sample Product",
                category: "Category",
                price: "100",
                author: {
                    firstName: "John",
                    lastName: "Doe",
                    avatar: "/avatar.png",
                },
                cardImageUrl: "/img.png",
            },
        ];
        const { getAllByTestId } = render(
            <MainContent isLoading={false} data={mockData} />
        );

        await waitFor(async () =>
            expect(await getAllByTestId("main-character")).toHaveLength(2)
        );
    });
});
