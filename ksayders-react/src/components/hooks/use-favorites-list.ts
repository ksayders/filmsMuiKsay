import {useFetchData} from './use-fetch-data';
import {useUserContext} from "./use-user";
import {fetchFavoritesList} from "../card/fetch-favorites-list/Fetch-favorites-list";

export interface Movie {
    id: number;
    title: string;
    vote_average: number;
    poster_path: string;
}

export function useFavoritesList() {
    const {accountId} = useUserContext();

    const {data, loading, error} = useFetchData<{results: Movie[]}, [number]>(
        fetchFavoritesList,
        [accountId as number],
        [accountId]
    );

    return {
        favorites: data?.results ?? [],
        loading,
        error
    }
}