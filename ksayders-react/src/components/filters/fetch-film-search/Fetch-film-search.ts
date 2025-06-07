import type {SearchResults} from "../../hooks/use-load-search-film"

export const fetchFilmSearch = async (
    token: string,
    query: string,
    page: number
):Promise<SearchResults> => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    const encodedQuery = encodeURIComponent(query);

    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${encodedQuery}&include_adult=false&language=ru&page=${page}`,
            options
        )

        if (!res.ok) {
            throw new Error(`Не удалось получить фильмы по запросу ${query}`)
        }

        return await res.json()
    } catch (e) {
        throw new Error(`Не удалось найти фильм из поиска: ${e}`);
    }
}