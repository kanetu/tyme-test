import { Link } from "react-router-dom";
import HandIcon from "./icons/HandIcon";
import MessageIcon from "./icons/MessageIcon";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

type FooterProps = {};

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
    return (
        <div className="w-full flex justify-center">
            <div className="md:w-full lg:w-[1920px] ">
                <img
                    src="/images/footer-frame.png"
                    alt="footer-frame"
                    className="w-full"
                />
                <footer className="w-full  py-[60px] bg-[#17161A] px-[20px] md:px-[100px] lg:px-[136px] text-white">
                    <div className="border-b-2 border-[#3A3841] pb-[48px] flex lg:flex-row flex-col justify-between">
                        <div>
                            <h3 className="mb-[32px]">Navigation</h3>
                            <div className="flex w-[364px] justify-between">
                                <div className="basis-[100px] flex flex-col font-[Inter]">
                                    <Link to="/home" className="mb-[12px]">
                                        Home
                                    </Link>
                                    <Link to="/about" className="mb-[12px]">
                                        About Us
                                    </Link>
                                    <Link to="/our-teams" className="mb-[12px]">
                                        Our Teams
                                    </Link>
                                </div>
                                <div className="basis-[100px] flex flex-col font-[Inter]">
                                    <Link
                                        to="/whitepaper"
                                        className="mb-[12px]"
                                    >
                                        Whitepaper
                                    </Link>
                                    <Link
                                        to="/marketplace"
                                        className="mb-[12px]"
                                    >
                                        Marketplace
                                    </Link>
                                    <Link to="/roadmap" className="mb-[12px]">
                                        Roadmap
                                    </Link>
                                </div>
                                <div className="basis-[100px] flex flex-col font-[Inter]">
                                    <Link to="/fAQs" className="mb-[12px]">
                                        FAQs
                                    </Link>
                                    <Link to="/news" className="mb-[12px]">
                                        News
                                    </Link>
                                    <Link to="/community" className="mb-[12px]">
                                        Community
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 lg:mt-0 basis-[230px] shrink-0">
                            <h3 className="mb-[32px]">Contact Us</h3>
                            <ul className="font-[Inter] [&>li]:mb-[32px] [&>li]:flex">
                                <li>
                                    <HandIcon className="mr-[9px]" />
                                    <span>01234568910</span>
                                </li>
                                <li>
                                    <MessageIcon className="mr-[9px]" />
                                    <span>tymex-talent@tyme.com</span>
                                </li>
                            </ul>
                        </div>

                        <div className="basis-[614px] mt-4 lg:mt-0">
                            <h3 className="mb-[32px]">
                                Subcribe to receive our latest update
                            </h3>
                            <div className="flex lg:flex-row flex-col">
                                <Input
                                    className="mr-[20px] font-[Inter] min-w-[200px]"
                                    placeholder="Your email address"
                                />
                                <Button className="lg:basis-[170px] bg-linear-to-r mt-3 lg:mt-0 from-[#DA458F] to-[#DA34DD] lg:px-[49px] font-[Inter] text-[16px] font-[600]">
                                    Subcribe
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[40px] flex w-full justify-between">
                        <span className="  font-[Inter]">
                            ©2023 Tyme - Edit. All Rights reserved.
                        </span>
                        <div className="basis-[200px] lg:basis-[300px] font-[Inter] flex justify-between">
                            <Link to="/security">Security</Link>
                            <Link to="/legal">Legal</Link>
                            <Link to="/privacy">Privacy</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
