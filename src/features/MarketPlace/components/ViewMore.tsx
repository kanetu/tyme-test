import { Button } from "@/components/ui/Button";

type ViewMoreProps = {
    loadedItems: number;
    totalItems: number;
    increaseItems: () => void;
};

const ViewMore: React.FC<ViewMoreProps> = ({
    loadedItems,
    totalItems,
    increaseItems,
}: ViewMoreProps) => {
    return (
        <>
            {loadedItems < totalItems && (
                <div className="flex mt-[55px] items-center justify-center w-full">
                    <Button
                        onClick={increaseItems}
                        className="lg:basis-[170px] bg-linear-to-r mt-3 rounded-[4px] h-[70px] px-[122px] py-[23px] lg:mt-0 from-[#DA458F] to-[#DA34DD] font-[Inter] text-[16px] font-[600]"
                    >
                        View more
                    </Button>
                </div>
            )}
        </>
    );
};

export default ViewMore;
