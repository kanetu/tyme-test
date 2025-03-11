import { render } from "@testing-library/react";
import CharacterCard from "@/components/CharacterCard";

const TestCharacterCard = () => {
    return (
        <CharacterCard
            price="12"
            authorName="Tester 1"
            category="Epic"
            title="The DJ"
            cardImageUrl="/images/assassin-person.png"
            authorAvatar="/images/avatar.png"
        />
    );
};

describe("<CharacterCard />", () => {
    it("render successfully", () => {
        const { getByText, getByAltText } = render(<TestCharacterCard />);
        expect(getByText("Tester 1")).toBeInTheDocument();
        expect(getByText("12")).toBeInTheDocument();
        expect(getByText("The DJ")).toBeInTheDocument();
        expect(getByText("Epic")).toBeInTheDocument();

        const cardImageUrl = getByAltText("/images/assassin-person.png");
        const authorAvatar = getByAltText("avatar");

        expect(cardImageUrl).toBeInTheDocument();
        expect(cardImageUrl).toHaveAttribute(
            "src",
            "/images/assassin-person.png"
        );

        expect(authorAvatar).toBeInTheDocument();
        expect(authorAvatar).toHaveAttribute("src", "/images/avatar.png");
    });
});
