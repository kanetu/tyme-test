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
    priceOptions,
    themeOptions,
    tierOptions,
    timeOptions,
} from "@/consts/main";
import { useProductQuery } from "@/queries";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type LeftPanelProps = {};

export type FilterFormValues = {
    search: string;
    tier: string;
    theme: string;
    priceRange: number[];
    price: string;
    time: string;
};

const defaultValues = {
    search: "",
    tier: "Premium",
    theme: "Halloween",
    price: "lowToHigh",
    time: "Latest",
    priceRange: [10, 100],
};

const LeftPanel: React.FC<LeftPanelProps> = (props: LeftPanelProps) => {
    const [showItems, setShowItems] = useState(20);
    const [totalItems, setTotalItems] = useState(100);
    const form = useForm<FilterFormValues>({
        defaultValues,
        mode: "onChange",
    });

    const { control, handleSubmit, watch } = form;

    const onReset = () => {
        form.reset();
    };

    const increaseItems = () => {
        setShowItems((pre) => pre + 20);
    };

    const productQuery = useProductQuery(showItems, setTotalItems, watch);
    const { data, isLoading, refetch } = productQuery;

    const onSubmit = () => {
        refetch();
    };

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="text-white font-[Inter] md:w-full lg:w-[380px] mg">
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="relative">
                            <FormField
                                control={control}
                                name="search"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Quick search"
                                                className="pl-[48px] h-[44px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <SearchIcon className="absolute top-[10px] left-[16px]" />
                        </div>

                        <FormField
                            control={control}
                            name="priceRange"
                            render={({ field }) => (
                                <FormItem className="my-[40px]">
                                    <FormLabel className="text-[16px] font-semibold uppercase">
                                        Price
                                    </FormLabel>
                                    <FormControl>
                                        <Slider
                                            max={200}
                                            min={0.01}
                                            step={1}
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            className="mt-[20px]"
                                        />
                                    </FormControl>
                                    <div className="flex justify-between mt-[20px]">
                                        <div>
                                            <span className="mr-1">0.01</span>
                                            <span>ETH</span>
                                        </div>
                                        <div>
                                            <span className="mr-1">200</span>
                                            <span>ETH</span>
                                        </div>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div>
                            <FormField
                                control={control}
                                name="tier"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[16px] font-semibold uppercase text-[#89888B]">
                                            Tier
                                        </FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger
                                                    id="tier"
                                                    className="w-full border-[#3A3841] mt-[12px] mb-[24px] h-[44px] [&>span]:text-white"
                                                >
                                                    <SelectValue placeholder="Theme" />
                                                </SelectTrigger>
                                                <SelectContent className="text-white bg-[#3A3841] border-[#3A3841]">
                                                    {React.Children.toArray(
                                                        tierOptions.map(
                                                            (op) => (
                                                                <SelectItem
                                                                    key={op.id}
                                                                    value={
                                                                        op.value
                                                                    }
                                                                >
                                                                    {op.text}
                                                                </SelectItem>
                                                            )
                                                        )
                                                    )}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormField
                                control={control}
                                name="theme"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[16px] font-semibold uppercase text-[#89888B]">
                                            Theme
                                        </FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger
                                                    id="theme"
                                                    className="w-full border-[#3A3841] mt-[12px] mb-[24px] h-[44px] [&>span]:text-white"
                                                >
                                                    <SelectValue placeholder="Theme" />
                                                </SelectTrigger>
                                                <SelectContent className="text-white bg-[#3A3841] border-[#3A3841]">
                                                    {React.Children.toArray(
                                                        themeOptions.map(
                                                            (op) => (
                                                                <SelectItem
                                                                    key={op.id}
                                                                    value={
                                                                        op.value
                                                                    }
                                                                >
                                                                    {op.text}
                                                                </SelectItem>
                                                            )
                                                        )
                                                    )}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormField
                                control={control}
                                name="time"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[16px] font-semibold uppercase text-[#89888B]">
                                            Time
                                        </FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger
                                                    id="time"
                                                    className="w-full border-[#3A3841] mt-[12px] mb-[24px] h-[44px] [&>span]:text-white"
                                                >
                                                    <SelectValue placeholder="Theme" />
                                                </SelectTrigger>
                                                <SelectContent className="text-white bg-[#3A3841] border-[#3A3841]">
                                                    {React.Children.toArray(
                                                        timeOptions.map(
                                                            (op) => (
                                                                <SelectItem
                                                                    key={op.id}
                                                                    value={
                                                                        op.value
                                                                    }
                                                                >
                                                                    {op.text}
                                                                </SelectItem>
                                                            )
                                                        )
                                                    )}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <FormField
                                control={control}
                                name="price"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[16px] font-semibold uppercase text-[#89888B]">
                                            Price
                                        </FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <SelectTrigger
                                                    id="price"
                                                    className="w-full border-[#3A3841] mt-[12px] mb-[24px] h-[44px] [&>span]:text-white"
                                                >
                                                    <SelectValue placeholder="Theme" />
                                                </SelectTrigger>
                                                <SelectContent className="text-white bg-[#3A3841] border-[#3A3841]">
                                                    {React.Children.toArray(
                                                        priceOptions.map(
                                                            (op) => (
                                                                <SelectItem
                                                                    key={op.id}
                                                                    value={
                                                                        op.value
                                                                    }
                                                                >
                                                                    {op.text}
                                                                </SelectItem>
                                                            )
                                                        )
                                                    )}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <Button
                                variant="link"
                                className="text-white no-underline"
                                onClick={onReset}
                            >
                                <span className="bg-[#FBC625] rounded-full h-[18px] text-black w-[18px] leading-[18px] rotate-90 align-middle">
                                    x
                                </span>
                                Reset filter
                            </Button>
                            <Button
                                type="submit"
                                className="bg-linear-to-r from-[#DA458F] to-[#DA34DD] p-[10px_56px] font-[Inter] text-[16px] font-semibold"
                            >
                                Search
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
            <div>
                <div className="lg:mx-[40px] grid md:grid-cols-3 md:mt-[20px] lg:grid-cols-4 gap-[40px]">
                    {isLoading &&
                        Array.from({ length: 20 }, (_, index) => (
                            <SkeletonCard key={index} />
                        ))}
                    {React.Children.toArray(
                        (data || []).map(
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
                        )
                    )}
                </div>
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
    );
};

export default LeftPanel;
