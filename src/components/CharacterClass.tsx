type CharacterClassProps = {
    characterUrl: string;
    frameUrl: string;
    classTitle: string;
};

const CharacterClass: React.FC<CharacterClassProps> = ({
    characterUrl,
    frameUrl,
    classTitle,
}: CharacterClassProps) => {
    return (
        <div className="relative w-[202px] z-10">
            <img src={frameUrl} alt={frameUrl} className="w-full" />
            <img
                src={characterUrl}
                alt={characterUrl}
                className="absolute top-[-53px] left-[12px]"
            />

            <h3 className="mt-[15px] text-center">{classTitle}</h3>
        </div>
    );
};

export default CharacterClass;
