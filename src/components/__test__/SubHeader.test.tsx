import { render } from "@testing-library/react";
import SubHeader from "@/components/SubHeader";
import CharacterClass from "@/components/CharacterClass";
import MainCharacter from "@/components/MainCharacter";

jest.mock("@/components/CharacterClass", () =>
    jest.fn(() => <div data-testid="character-class" />)
);

jest.mock("@/components/MainCharacter", () =>
    jest.fn(() => <div data-testid="main-character" />)
);

const TestSubHeader = () => {
    return <SubHeader />;
};

describe("<SubHeader />", () => {
    it("render successfully", () => {
        const { getByAltText } = render(<TestSubHeader />);

        const newArrival = getByAltText("new-arrival");

        expect(newArrival).toBeInTheDocument();
        expect(newArrival).toHaveAttribute("src", "/images/new-arrival.png");

        expect(CharacterClass).toHaveBeenCalledTimes(4);
        expect(MainCharacter).toHaveBeenCalledTimes(1);
    });
});
