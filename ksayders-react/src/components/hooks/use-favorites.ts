import {useUserContext} from "./use-user";
import {useEffect, useState} from "react";
import {fetchFavoritesList} from "../card/fetch-favorites-list/Fetch-favorites-list";
import {fetchFavoritesAddDelete} from "../card/fetch-favorite-add-delete/Fetch-favorites-add-delete";
import type {Movie} from "./use-favorites-list";

export function useFavorites(movieId: number, initialFavorite = false) {
    const {token, accountId} = useUserContext();
    const [isFavorite, setIsFavorite] = useState(initialFavorite);

    useEffect(() => {
        if (initialFavorite) {
            return;
        }
        const checkFavoriteState = async () => {
            if (!token || !accountId) {
                return;
            }
            try {
                const data = await fetchFavoritesList(token, accountId);
                const found = data.results.some((movie: Movie) => movie.id === movieId);
                setIsFavorite(found);
            } catch(e) {
                throw new Error(`Не удалось получить фавориты: ${e}`);
            }
        }
        checkFavoriteState();
    }, [token, accountId, movieId, initialFavorite]);

    const onFavoriteToggle = async () => {
        if (!token || !accountId) {
            return;
        }

        const optimisticValue = !isFavorite;
        setIsFavorite(optimisticValue);

        try {
            await fetchFavoritesAddDelete(token, accountId, movieId, optimisticValue)
        } catch(e) {
            setIsFavorite(!optimisticValue)
            throw new Error(`Ошибка при изменении избранного: ${e}`)
        }
    }

    return { isFavorite, onFavoriteToggle};
}
