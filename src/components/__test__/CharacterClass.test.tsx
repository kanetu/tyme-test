import { render } from "@testing-library/react";
import CharacterClass from "@/components/CharacterClass";

const TestCharacterClass = () => {
    return (
        <CharacterClass
            frameUrl="/images/frame.png"
            characterUrl="/images/mafia-england-person.png"
            classTitle="Mafia England"
        />
    );
};

describe("<CharacterClass />", () => {
    it("render successfully", () => {
        const { getByText, getByAltText } = render(<TestCharacterClass />);
        expect(getByText("Mafia England")).toBeInTheDocument();

        const frameImage = getByAltText("/images/frame.png");
        const characterImage = getByAltText("/images/mafia-england-person.png");

        expect(frameImage).toBeInTheDocument();
        expect(frameImage).toHaveAttribute("src", "/images/frame.png");

        expect(characterImage).toBeInTheDocument();
        expect(characterImage).toHaveAttribute(
            "src",
            "/images/mafia-england-person.png"
        );
    });
});
