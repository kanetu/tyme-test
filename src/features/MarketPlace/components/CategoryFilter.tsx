import { Button } from "@/components/ui/Button";
import { categoryOptions } from "@/consts/main";
import { cn } from "@/lib/utils";

type CategoryFilterProps = {
    setSelectedCategory: (value: React.SetStateAction<string>) => void;
    selectedCategory: string;
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({
    setSelectedCategory,
    selectedCategory,
}: CategoryFilterProps) => {
    return (
        <>
            {categoryOptions.map((op) => (
                <Button
                    key={op.id}
                    onClick={() => {
                        setSelectedCategory(op.value);
                    }}
                    className={cn(
                        "lg:basis-[170px] lg:mb-[10px] mr-[24px] bg-linear-to-r mt-3 lg:mt-0 [&.active]:from-[#DA458F] [&.active]:to-[#DA34DD] from-[#DA458F]/30 to-[#DA34DD]/30  lg:px-[16px] font-[Inter] text-[16px] font-semibold rounded-[4px]",
                        selectedCategory === op.value && "active"
                    )}
                >
                    {op.text}
                </Button>
            ))}
        </>
    );
};

export default CategoryFilter;
