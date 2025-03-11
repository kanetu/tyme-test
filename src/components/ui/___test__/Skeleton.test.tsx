import { render } from "@testing-library/react";
import { Skeleton, SkeletonCard } from "@/components/ui/Skeleton";

const TestSkeleton = () => {
    return (
        <>
            <Skeleton />
            Test Skeleton
            <SkeletonCard />
        </>
    );
};

describe("<Skeleton />", () => {
    it("render trigger properly", async () => {
        const { findByText } = render(<TestSkeleton />);
        const text = await findByText("Test Skeleton");
        expect(text).toBeInTheDocument();
    });
});
