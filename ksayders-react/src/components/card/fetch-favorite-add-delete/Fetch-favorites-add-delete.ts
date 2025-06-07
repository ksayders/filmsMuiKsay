export const fetchFavoritesAddDelete = async (
    token: string,
    accountId: number,
    movieId: number,
    favorite: boolean
) => {
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            media_type: 'movie',
            media_id: movieId,
            favorite: favorite
        }),
    }

    try {
        const res = await fetch(`https://api.themoviedb.org/3/account/${accountId}/favorite`, options)

        if (!res.ok) {
            throw new Error(`Не удалось ${favorite ? 'добавить в' : 'удалить из'} избранного`)
        }

        return await res.json()
    } catch (e) {
        throw new Error(`Не удалось получить список фаворитов: ${e}`);
    }
}