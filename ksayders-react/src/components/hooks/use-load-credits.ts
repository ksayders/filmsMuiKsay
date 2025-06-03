import {useEffect, useState} from "react";
import {fetchCredits} from "../card-details/fetch-credits/Fetch-credits";
import {useUserContext} from "./use-user";
import { useParams } from "react-router-dom";
import type {Credits} from "../card-details/types/tmdb";

export const useLoadCredits = () => {
    const {token} = useUserContext();
    const [credits, setCredits] = useState<Credits | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { id } = useParams();

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            try {
                const data = await fetchCredits(token, id!);
                setCredits(data);
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

    return {credits, loading, error};
};