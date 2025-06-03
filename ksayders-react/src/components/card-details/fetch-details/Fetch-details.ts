export const fetchDetails = async (token: string, movieId: string) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }

    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=ru`, options)

        if (!res.ok) {
            throw new Error('Ошибка при загрузке деталей фильмов')
        }

        return await res.json()
    } catch (e) {
        throw new Error(`Не удалось получить детали фильма: ${e}`);
    }
}