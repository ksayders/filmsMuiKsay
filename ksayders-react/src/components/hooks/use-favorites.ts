import {useUserContext} from "./use-user";
import {useEffect, useState} from "react";
import {fetchFavoritesList} from "../card/fetch-favorites-list/Fetch-favorites-list";
import {fetchFavoritesAddDelete} from "../card/fetch-favorite-add-delete/Fetch-favorites-add-delete";
import type {Movie} from "./use-favorites-list";

export function useFavorites(movieId: number) {
    const {token, accountId} = useUserContext();
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
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
    }, [token, accountId, movieId]);

    const onFavoriteToggle = async () => {
        if (!token || !accountId) {
            return;
        }
        try {
            const newFavoriteState = !isFavorite;
            await fetchFavoritesAddDelete(token, accountId, movieId, newFavoriteState)
            setIsFavorite(newFavoriteState);
        } catch(e) {
            throw new Error(`Ошибка при изменении избранного: ${e}`)
        }
    }

    return { isFavorite, onFavoriteToggle};
}
