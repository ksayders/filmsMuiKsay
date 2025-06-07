import { useFetchData } from "./use-fetch-data";
import { fetchGenres } from "../filters/genres-selection/fetch-genres/fetch-genres";
import type { GenreItem } from "../filters/genres-selection/fetch-genres/fetch-genres";

export const useLoadGenres = () => {
    const { data: genres, loading, error } = useFetchData<GenreItem[], []>(fetchGenres, [], []);
    return { genres, loading, error };
};
