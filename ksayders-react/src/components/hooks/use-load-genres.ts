import {useEffect, useState} from "react";
import {fetchGenres} from "../filters/genres-selection/fetch-genres/fetch-genres";
import type {GenreItem} from "../filters/genres-selection/fetch-genres/fetch-genres";
import {useUserContext} from "./use-user";

export const useLoadGenres = () => {
    const {token} = useUserContext();
    const [genres, setGenres] = useState<GenreItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            try {
                const data = await fetchGenres(token);
                setGenres(data);
            } catch (e) {
                const message = e instanceof Error ? e.message : 'Неизвестная ошибка';
                setError(message);
            } finally {
                setLoading(false);
            }
        };
        load();
    }, [token]);

    return {genres, loading, error};
};