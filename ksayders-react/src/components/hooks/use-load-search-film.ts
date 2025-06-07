import {useFetchData} from './use-fetch-data';
import {fetchFilmSearch} from "../filters/fetch-film-search/Fetch-film-search";
import type {Movie} from './use-favorites-list';

export interface SearchResults {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export const useLoadSearchFilm = (query: string, page: number) => {
    const {data, loading, error} = useFetchData<SearchResults, [string, number]>(
        fetchFilmSearch,
        [query, page],
        [query, page],
    )

    return {
        films: data?.results ?? [],
        loading,
        error,
        total_pages: data?.total_pages ?? 0,
    }
}