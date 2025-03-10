type MainCharacterProps = {
    characterUrl: string;
    badgeUrl: string;
    classTitle: string;
};

const MainCharacter: React.FC<MainCharacterProps> = ({
    characterUrl,
    badgeUrl,
    classTitle,
}: MainCharacterProps) => {
    return (
        <div className="relative top-[-50px] sm:top-[126px] md:top-[-139px] xl:top-[-129px] 2xl:top-[-223px] w-full z-10">
            <img
                src={characterUrl}
                alt={characterUrl}
                className="absolute w-[371px] h-[555px] lg:w-[471px] lg:h-[655px] top-[-350px]"
            />
            <div className="relative bottom-[-136px] lg:bottom-[-214px] z-20 flex items-center">
                <img
                    src={badgeUrl}
                    alt={badgeUrl}
                    className="absolute w-[437px] h-[169px]"
                />
                <h3 className="mt-[15px] absolute text-[72px] pl-[64px] text-white text-center">
                    {classTitle}
                </h3>
            </div>
        </div>
    );
};

export default MainCharacter;
