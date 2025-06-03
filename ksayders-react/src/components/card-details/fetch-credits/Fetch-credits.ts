export const fetchCredits = async (token: string, movieId: string) => {
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

        const data = await res.json();
        console.log(data)
        return data
    } catch (e) {
        throw new Error(`Не удалось получить информацию о фильме: ${e}`);
    }
}