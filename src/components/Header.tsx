import { Link } from "react-router-dom";
import GlobeIcon from "./icons/GlobeIcon";
import { Button } from "./ui/Button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/Popover";
import { Sheet, SheetContent, SheetTrigger } from "./ui/Sheet";
import HamburgerIcon from "./icons/HamburgerIcon";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return (
        <div className="bg-[#17161A]/[.7] h-[84px] w-full flex justify-center items-center">
            <header className="w-full md:w-[900px] xl:w-[1100px] 2xl:w-[1920px] 2xl:px-[250px] text-white z-10  h-[84px] flex justify-between items-center text-[14px]">
                <div className="hidden items-center justify-between sm:hidden md:hidden lg:flex md:basis-3/6 xl:basis-4/6 2xl:basis-4/6">
                    <Link to="/Home">Home</Link>
                    <Link to="/Home">About Us</Link>
                    <Link to="/Home">Our Teams</Link>
                    <Link to="/Home">MarketPlace</Link>
                    <Link to="/Home">RoadMap</Link>
                    <Link to="/Home">WhitePaper</Link>
                </div>
                <Sheet>
                    <SheetTrigger>
                        <HamburgerIcon className="text-white ml-[20px] w-[50px] h-[50px] lg:hidden xl:hidden 2xl:hidden" />
                    </SheetTrigger>
                    <SheetContent>
                        <div className="flex h-[300px] flex-col items-center justify-between md:basis-3/6 xl:basis-4/6 2xl:basis-4/6">
                            <Link to="/Home">Home</Link>
                            <Link to="/Home">About Us</Link>
                            <Link to="/Home">Our Teams</Link>
                            <Link to="/Home">MarketPlace</Link>
                            <Link to="/Home">RoadMap</Link>
                            <Link to="/Home">WhitePaper</Link>
                        </div>
                    </SheetContent>
                </Sheet>

                <div className="flex basis-[240px] mr-[20px] justify-between">
                    <Button className="bg-linear-to-r from-[#DA458F] to-[#DA34DD] shadow-[0_0_15px_#DA34DD] font-[Inter] text-[16px] font-[600]">
                        Connect Wallet
                    </Button>
                    <div className="flex items-center">
                        <Popover>
                            <PopoverTrigger>
                                <div>
                                    <GlobeIcon className="text-white w-[24px] h-[24px]" />
                                </div>
                            </PopoverTrigger>
                            <PopoverContent>
                                Place content for the popover here.
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
