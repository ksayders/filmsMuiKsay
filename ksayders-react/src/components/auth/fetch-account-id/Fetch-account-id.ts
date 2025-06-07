export const fetchAccountId = async (token: string) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }

    try {
        const res = await fetch(`https://api.themoviedb.org/3/account`, options)

        if (!res.ok) {
            throw new Error('Ошибка при загрузке аккаунт id')
        }

        return await res.json()
    } catch (e) {
        throw new Error(`Не удалось получить аккаунт id: ${e}`);
    }
}