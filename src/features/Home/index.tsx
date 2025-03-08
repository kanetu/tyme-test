import { useQuery } from "@tanstack/react-query";
import UserInfoForm from "./components/UserInfoForm";
import CharacterCard from "@/components/CharacterCard";

const Home = () => {
    const useUsersQuery = useQuery({
        queryKey: ["profile"],
        queryFn: async () => {
            const res = await fetch("/getUser", {
                method: "GET",
            });
            return res.json();
        },
        staleTime: 5000,
    });

    const { data, status, isFetching, isLoading } = useUsersQuery;

    console.log(
        `isFetching: ${isFetching} | isLoading: ${isLoading} | status: ${status}`
    );
    console.log(`----${JSON.stringify(data)}`);

    return (
        <div>
            <CharacterCard
                price="2.75"
                authorName="Ghozali_Ghozalu"
                type="Epic"
                cardTitle="The DJ"
                cardImageUrl={"/images/assassin-person.png"}
                authorAvatar="/images/the-dj-person.png"
            />
        </div>
    );
};

export default Home;
