import CharacterCard from "@/components/CharacterCard";
import SearchIcon from "@/components/icons/SearchIcon";
import { Button } from "@/components/ui/Button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { ScrollArea } from "@/components/ui/ScrollArea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/Select";
import { SkeletonCard } from "@/components/ui/Skeleton";
import { Slider } from "@/components/ui/Slider";
import {
    categoryOptions,
    priceOptions,
    themeOptions,
    tierOptions,
    timeOptions,
} from "@/consts/main";
import { cn } from "@/lib/utils";
import { useProductQuery } from "@/queries";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FilterForm from "./components/FilterForm";

export type FilterFormValues = {
    search: string;
    tier: string;
    theme: string;
    priceRange: number[];
    price: string;
    time: string;
};

const MarketPlace = () => {
    const [showItems, setShowItems] = useState(20);
    const [totalItems, setTotalItems] = useState(100);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const defaultValues = {
        search: "",
        tier: "Premium",
        theme: "Halloween",
        price: "lowToHigh",
        time: "Latest",
        priceRange: [10, 100],
    };

    const form = useForm<FilterFormValues>({
        defaultValues,
        mode: "onChange",
    });

    const { watch } = form;

    const increaseItems = () => {
        setShowItems((pre) => pre + 20);
    };

    const productQuery = useProductQuery(
        showItems,
        setTotalItems,
        watch,
        selectedCategory
    );
    const { data, isLoading, refetch } = productQuery;

    const onSubmit = () => {
        refetch();
    };

    return (
        <div className="my-[5%] mx-[5%] flex justify-center">
            <div className="flex flex-col md:flex-col lg:flex-row">
                <div className="text-white font-[Inter] md:w-full lg:w-[380px] mg">
                    <FilterForm form={form} onSubmit={onSubmit} />
                </div>
                <div>
                    <div className="px-[56px]">
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
                    </div>
                    <ScrollArea className="max-h-[2000px] h-[1000px] md:mx-[40px] xl:mx-[40px] 2xl:mx-[40px] md:mt-[20px] w-full p-4">
                        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[40px]">
                            {isLoading &&
                                Array.from({ length: 20 }, (_, index) => (
                                    <SkeletonCard key={index} />
                                ))}
                            {(data || []).map(
                                ({ id, author, title, category, price }) => (
                                    <CharacterCard
                                        key={id}
                                        price={price}
                                        authorName={`${author.firstName} ${author.lastName}`}
                                        category={category}
                                        title={title}
                                        cardImageUrl="/images/assassin-person.png"
                                        authorAvatar={author.avatar}
                                    />
                                )
                            )}
                        </div>
                    </ScrollArea>

                    {(data || [])?.length < totalItems && (
                        <div className="flex mt-[55px] items-center justify-center w-full">
                            <Button
                                onClick={increaseItems}
                                className="lg:basis-[170px] bg-linear-to-r mt-3 rounded-[4px] h-[70px] px-[122px] py-[23px] lg:mt-0 from-[#DA458F] to-[#DA34DD] font-[Inter] text-[16px] font-[600]"
                            >
                                View more
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MarketPlace;
