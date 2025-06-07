import { useFetchData } from "./use-fetch-data";
import { fetchPopular } from "../card/fetch-films/Fetch-popular";

interface Movie {
    id: number;
    title: string;
    vote_average: number;
    poster_path: string;
}

export const useLoadPopular = (page: number) => {
    const { data: moviesPopular, loading, error } = useFetchData<{ results: Movie[] }, [number]>(
        fetchPopular,
        [page],
        [page]
    );

    return { moviesPopular: moviesPopular?.results || [], loading, error };
};
