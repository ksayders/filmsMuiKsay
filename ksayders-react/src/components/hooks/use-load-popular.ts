import {useEffect, useState} from "react";
import {fetchPopular} from "../card/fetch-films/Fetch-popular";
import {useUserContext} from "./use-user";

interface Movie {
    id: number;
    title: string;
    vote_average: number;
    poster_path: string;
}

export const useLoadPopular = (page: number) => {
    const {token} = useUserContext();
    const [moviesPopular, setMoviesPopular] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const loadPopular = async () => {
            setLoading(true);
            try {
                const data = await fetchPopular(token, page);
                setMoviesPopular(data.results);
            } catch (e) {
                const message = e instanceof Error ? e.message : 'Неизвестная ошибка';
                setError(message);
            } finally {
                setLoading(false);
            }
        }
        loadPopular();
    }, [page, token]);
    return {moviesPopular, loading, error};
};