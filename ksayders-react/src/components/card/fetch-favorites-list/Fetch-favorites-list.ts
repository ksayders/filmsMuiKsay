export const fetchFavoritesList = async (token: string, accountId: number) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }

    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/account/${accountId}/favorite/movies?language=ru&page=1&sort_by=created_at.asc`,
            options
        )

        if (!res.ok) {
            throw new Error('Ошибка при загрузке фаворит фильмов')
        }

        if (!accountId) {
            return { favorites: [], loading: false, error: "Нет accountId" };
        }

        return await res.json()
    } catch (e) {
        throw new Error(`Не удалось получить список фаворитов: ${e}`);
    }
}