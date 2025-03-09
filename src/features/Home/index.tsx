import { useQuery } from "@tanstack/react-query";
import CharacterCard from "@/components/CharacterCard";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

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
        <div className="my-[5%] mx-[5%] flex flex-col lg:flex-row">
            <LeftPanel />
            <RightPanel />
        </div>
    );
};

export default Home;
