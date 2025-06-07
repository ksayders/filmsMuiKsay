import { useParams } from "react-router-dom";
import { fetchCredits } from "../card-details/fetch-credits/Fetch-credits";
import type { Credits } from "../card-details/types/tmdb";
import { useFetchData } from "./use-fetch-data";

export const useLoadCredits = () => {
    const { id } = useParams();
    const { data: credits, loading, error } = useFetchData<Credits, [string]>(fetchCredits, [id!], [id]);
    return { credits, loading, error };
};
