import {useEffect, useState} from "react";
import {fetchRaiting} from "../card/fetch-films/Fetch-raiting";
import {useUserContext} from "./use-user";

interface Movie {
    id: number;
    title: string;
    vote_average: number;
    poster_path: string;
}

export const useLoadRaiting = (page: number) => {
    const {token} = useUserContext();
    const [moviesRaiting, setMoviesRaiting] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const loadRaiting = async () => {
            setLoading(true);
            try {
                const data = await fetchRaiting(token, page);
                setMoviesRaiting(data.results);
            } catch (e) {
                const message = e instanceof Error ? e.message : 'Неизвестная ошибка';
                setError(message);
            } finally {
                setLoading(false);
            }
        }
        loadRaiting();
    }, [page, token]);
    return {moviesRaiting, loading, error};
};