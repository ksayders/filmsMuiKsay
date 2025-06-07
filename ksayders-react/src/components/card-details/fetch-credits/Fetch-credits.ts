import type {Credits} from "../types/tmdb";

export const fetchCredits = async (token: string, movieId: string): Promise<Credits> => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }

    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=ru`, options)

        if (!res.ok) {
            throw new Error('Ошибка при загрузке информации о фильме')
        }

        return await res.json()
    } catch (e) {
        throw new Error(`Не удалось получить информацию о фильме: ${e}`);
    }
}