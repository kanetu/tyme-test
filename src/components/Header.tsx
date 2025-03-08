import { Link } from "react-router-dom";
import GlobeIcon from "./icons/GlobeIcon";
import { Button } from "./ui/Button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/Popover";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <header className="bg-[#17161A]/[.7] absolute text-white z-100 top-0 right-0 px-[12%] h-[84px] w-full flex justify-between items-center text-[14px]">
      <div className="flex items-center justify-between 2xl:basis-4/6">
        <Link to="/Home">Home</Link>
        <Link to="/Home">About Us</Link>
        <Link to="/Home">Our Teams</Link>
        <Link to="/Home">MarketPlace</Link>
        <Link to="/Home">RoadMap</Link>
        <Link to="/Home">WhitePaper</Link>
      </div>
      <div className="flex basis-[240px] justify-between">
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
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
};

export default Header;
