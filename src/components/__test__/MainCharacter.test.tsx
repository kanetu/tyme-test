import { render } from "@testing-library/react";
import MainCharacter from "@/components/MainCharacter";

const TestMainCharacter = () => {
    return (
        <MainCharacter
            badgeUrl="/images/badge.png"
            characterUrl="/images/the-dj-person.png"
            classTitle="The Dj"
        />
    );
};

describe("<CharacterClass />", () => {
    it("render successfully", () => {
        const { getByText, getByAltText } = render(<TestMainCharacter />);
        expect(getByText("The Dj")).toBeInTheDocument();

        const badgeUrl = getByAltText("/images/badge.png");
        const characterUrl = getByAltText("/images/the-dj-person.png");

        expect(badgeUrl).toBeInTheDocument();
        expect(badgeUrl).toHaveAttribute("src", "/images/badge.png");

        expect(characterUrl).toBeInTheDocument();
        expect(characterUrl).toHaveAttribute(
            "src",
            "/images/the-dj-person.png"
        );
    });
});
