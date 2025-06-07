import { useFetchData } from "./use-fetch-data";
import { fetchRaiting } from "../card/fetch-films/Fetch-raiting";

interface Movie {
    id: number;
    title: string;
    vote_average: number;
    poster_path: string;
}

export const useLoadRaiting = (page: number) => {
    const { data: moviesRaiting, loading, error } = useFetchData<{ results: Movie[] }, [number]>(
        fetchRaiting,
        [page],
        [page]
    );

    return { moviesRaiting: moviesRaiting?.results || [], loading, error };
};
