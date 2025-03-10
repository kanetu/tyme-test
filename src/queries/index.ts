import { FilterFormValues } from "@/features/Home/components/LeftPanel";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@uidotdev/usehooks";
import { UseFormWatch } from "react-hook-form";

export const useProductQuery = (
    showItems: number,
    setTotalItems: React.Dispatch<React.SetStateAction<number>>,
    watch: UseFormWatch<FilterFormValues>
) => {
    const debouncedSearchTerm = useDebounce(watch("search"), 200);
    const queryKey = [
        "products",
        {
            search: debouncedSearchTerm,
            tier: watch("tier"),
            theme: watch("theme"),
            price: watch("price"),
            priceRange: watch("priceRange"),
            time: watch("time"),
        },
        showItems,
    ];

    const buildFilterParams = (
        { tier, theme, time, price, priceRange, search }: FilterFormValues,
        showItems: number
    ) => {
        let sortString = ",";
        sortString += time === "Latest" ? "-createdAt," : "createdAt,";
        sortString += price === "lowToHigh" ? "price" : "-price";
        return new URLSearchParams({
            ...(tier === "All" ? {} : { tier: tier }),
            ...(search ? { title_like: search } : {}),
            _sort: sortString,
            theme: theme,
            price_gte: priceRange[0].toString(),
            price_lte: priceRange[1].toString(),
            _start: "0",
            _end: showItems.toString(),
        });
    };
    return useQuery<
        {
            id: number;
            author: any;
            title: string;
            category: string;
            price: string;
            cardImageUrl: string;
        }[]
    >({
        queryKey: queryKey,
        queryFn: async ({ queryKey }) => {
            const [_, filterCriterias, showItems] = queryKey;
            const queryParams = buildFilterParams(
                filterCriterias as FilterFormValues,
                showItems as number
            ).toString();

            // Add timeout to increase UX
            const res = await new Promise((resolve) =>
                setTimeout(resolve, 1000)
            ).then(async () => {
                let url = `http://localhost:5005/products?${queryParams}`;
                const response = await fetch(url, {
                    method: "GET",
                });
                return await response;
            });
            const totalCount = res.headers.get("X-Total-Count");
            if (totalCount) {
                setTotalItems(Number(totalCount));
            }
            return res.json();
        },
        staleTime: 60000,
    });
};
