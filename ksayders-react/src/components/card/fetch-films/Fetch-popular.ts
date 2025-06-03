export const fetchPopular = async (token: string, page: number) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }

    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=ru-US&page=${page}`, options)

        if (!res.ok) {
            throw new Error('Ошибка при загрузке популярных фильмов')
        }

        return await res.json()
    } catch (e) {
        throw new Error(`Не удалось получить популярные результаты: ${e}`);
    }
}