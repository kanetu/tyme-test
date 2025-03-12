import CharacterClass from "./CharacterClass";
import MainCharacter from "./MainCharacter";

type SubHeaderProps = {};

const SubHeader: React.FC<SubHeaderProps> = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="relative w-[1920px] lg:w-[1920px]">
                <div className="bg-[url(../../public/images/head-bg.jpeg)] bg-cover bg-center bg-no-repeat h-[1000px] md:h-[900px] xl:h-[1100px] 2xl:h-[810px] w-full relative "></div>
                <svg
                    width="1920"
                    height="300"
                    viewBox="0 0 1920 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[500px] md:h-[400px] xl:h-[300px] 2xl:h-[300px] w-full absolute bottom-0"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M13 13L0 0V300H1920V13H1906L1902 9L1898 13H1784.5L1774 24H1746L1722 0L1709 13H1452L1442 24H1435L1432 20H1406L1386 0H1331L1319 13H1292L1289 10L1284 16L1281 13H1010L997 0H946L922 24H916L906 13H621L616 18L605 8L600 13H470L460 24H454L430 0L417 13H214L210 18L206 13H181L168 0H118L98 20H73L66 13H13Z"
                        fill="#FBC625"
                    />
                </svg>

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
