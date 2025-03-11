import EthereumIcon from "./icons/EthereumIcon";
import HeartIcon from "./icons/HeartIcon";
import VerifyIcon from "./icons/VerifyIcon";

type CharacterCardProps = {
    price: string;
    title: string;
    category: string;
    authorName: string;
    authorAvatar: string;
    cardImageUrl: string;
};

const CharacterCard: React.FC<CharacterCardProps> = ({
    price,
    title,
    category,
    authorName,
    authorAvatar,
    cardImageUrl,
}: CharacterCardProps) => {
    return (
        <div className="font-[Inter] p-[16px] min-w-[267px] h-[365px] w-[267px] bg-[#3A3841]/60 rounded-[10px] text-white">
            <div className="w-[235px] h-[233px] bg-linear-to-r mt-3 lg:mt-0 from-[#DA458F] to-[#DA34DD] rounded-[4px] relative mb-[24px]">
                <div className="flex justify-between p-[8px]">
                    <span className="text-[12px] p-[4px_12px] bg-[#313B45]/50 rounded-[4px] ">
                        {category}
                    </span>
                    <HeartIcon />
                </div>
                <img
                    src={cardImageUrl}
                    alt={cardImageUrl}
                    className="h-[197px] w-[235px] object-cover absolute bottom-0 left-0"
                />
            </div>
            <div className="flex justify-between items-center mb-[16px]">
                <span className="font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
                    {title}
                </span>
                <div className="flex items-center">
                    <EthereumIcon className="mr-[4px]" />
                    {price}
                    <span className="ml-[2px]">ETH</span>
                </div>
            </div>
            <div>
                <div className="flex items-center text-[12px]">
                    <div className="h-[32px] w-[32px] relative mr-[12px]">
                        <img
                            src={authorAvatar}
                            alt="avatar"
                            className="h-[32px] w-[32px] object-cover rounded-full"
                        />
                        <VerifyIcon className="bg-black border rounded-full border-black w-[11px] h-[11px] absolute bottom-0 right-0" />
                    </div>
                    <span>{authorName}</span>
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;
