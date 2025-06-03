import {useEffect, useState} from "react";
import {fetchDetails} from "../card-details/fetch-details/Fetch-details";
import {useUserContext} from "./use-user";
import { useParams } from "react-router-dom";
import type {MovieDetails} from "../card-details/types/tmdb";

export const useLoadDetails = () => {
    const {token} = useUserContext();
    const [details, setDetails] = useState<MovieDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams();

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            try {
                const data = await fetchDetails(token, id!);
                console.log(data)
                setDetails(data);
            } catch (e) {
                const message = e instanceof Error ? e.message : 'Неизвестная ошибка';
                setError(message);
            } finally {
                setLoading(false);
            }
        };
        if (id) {
            load();
        }
    }, [token, id]);

    return {details, loading, error};
};