export type GenreItem = {
    id: number;
    name: string;
}

export const fetchGenres = async (token: string): Promise<GenreItem[]> => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    };

    try {
        const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=ru', options)

        if (!res.ok) {
            throw new Error(`Ошибка при загрузке жанров: ${res.status} ${res.statusText}`)
        }

        const data = await res.json();

        if (!data.genres || !Array.isArray(data.genres)) {
            throw new Error('Неверный формат данных при загрузке жанров');
        }

        return data.genres
    } catch (e) {
        throw new Error(`Ошибка при загрузке жанров: ${e instanceof Error ? e.message : String(e)}`)
    }
}
