import { useParams } from "react-router-dom";
import { fetchDetails } from "../card-details/fetch-details/Fetch-details";
import type { MovieDetails } from "../card-details/types/tmdb";
import { useFetchData } from "./use-fetch-data";

export const useLoadDetails = () => {
    const { id } = useParams();
    const { data: details, loading, error } = useFetchData<MovieDetails, [string]>(
        fetchDetails,
        [id!],
        [id]
    );
    return { details, loading, error };
};
