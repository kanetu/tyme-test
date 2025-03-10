import CharacterClass from "./CharacterClass";
import MainCharacter from "./MainCharacter";

type SubHeaderProps = {};

const SubHeader: React.FC<SubHeaderProps> = (props: SubHeaderProps) => {
    return (
        <div className="w-full flex justify-center">
            <div className="relative w-[1920px] lg:w-[1920px]">
                <div className="bg-[url(../../public/images/head-bg.jpeg)] bg-cover bg-center bg-no-repeat h-[1000px] md:h-[900px] xl:h-[1100px] 2xl:h-[810px] w-full relative "></div>
                <img
                    src="/images/frame-orange.png"
                    alt="frame-orange"
                    className="h-[500px] md:h-[400px] xl:h-[300px] 2xl:h-[300px] w-full absolute bottom-0"
                />
                <div className="px-[10px] py-[100px] md:px-[100px] md:py-[100px] xl:px-[178px] xl:py-[148px] top-0 absolute w-full">
                    <img
                        src="/images/new-arrival.png"
                        alt="new-arrival"
                        className=""
                    />
                </div>

                <div className="absolute bottom-0 w-full">
                    <div className="flex items-center justify-evenly">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 xl:gap-[20px] 2xl:grid-cols-4 items-center justify-between 2xl:basis-[1048px]">
                            <CharacterClass
                                frameUrl="/images/frame.png"
                                characterUrl="/images/assassin-person.png"
                                classTitle="Assasin"
                            />
                            <CharacterClass
                                frameUrl="/images/frame.png"
                                characterUrl="/images/neon-guy-person.png"
                                classTitle="Neon guy"
                            />
                            <CharacterClass
                                frameUrl="/images/frame.png"
                                characterUrl="/images/mafia-england-person.png"
                                classTitle="Mafia England"
                            />
                            <CharacterClass
                                frameUrl="/images/frame.png"
                                characterUrl="/images/basketball-girl-person.png"
                                classTitle="Basketball girl"
                            />
                        </div>
                        <div className="basis-[471px]">
                            <MainCharacter
                                badgeUrl="/images/badge.png"
                                characterUrl="/images/the-dj-person.png"
                                classTitle="The Dj"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubHeader;
