import { ScrollArea } from "@/components/ui/ScrollArea";
import { Skeleton, SkeletonCard } from "@/components/ui/Skeleton";
import { lazy, Suspense } from "react";

type MainContentProps = {
    isLoading: boolean;
    data:
        | {
              id: number;
              author: any;
              title: string;
              category: string;
              price: string;
              cardImageUrl: string;
          }[]
        | undefined;
};

const CharacterCard = lazy(() => import("@/components/CharacterCard"));

const MainContent: React.FC<MainContentProps> = ({
    isLoading,
    data,
}: MainContentProps) => {
    return (
        <ScrollArea className="max-h-[2000px] h-[1000px] md:mx-[40px] xl:mx-[40px] 2xl:mx-[40px] md:mt-[20px] w-full p-4">
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[40px]">
                {isLoading &&
                    Array.from({ length: 20 }, (_, index) => (
                        <SkeletonCard key={index} />
                    ))}
                {(data || []).map(({ id, author, title, category, price }) => (
                    <Suspense fallback={<Skeleton />}>
                        <CharacterCard
                            key={id}
                            price={price}
                            authorName={`${author.firstName} ${author.lastName}`}
                            category={category}
                            title={title}
                            cardImageUrl="/images/assassin-person.png"
                            authorAvatar={author.avatar}
                        />
                    </Suspense>
                ))}
            </div>
        </ScrollArea>
    );
};

export default MainContent;
