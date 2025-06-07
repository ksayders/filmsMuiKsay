import React, { useEffect, useState } from "react";
import { useUserContext } from "./use-user";

export function useFetchData<T, A extends readonly unknown[]>(
    fetchFn: (token: string, ...args: A) => Promise<T>,
    args: A,
    deps: React.DependencyList
) {
    const { token } = useUserContext();
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const load = async () => {
            if (!token || args.some(arg => arg == null)) {
                setLoading(false);
                return;
            }

            setLoading(true);
            try {
                const result = await fetchFn(token, ...args);
                setData(result);
                setError(null);
            } catch (e) {
                setError(e instanceof Error ? e.message : "Неизвестная ошибка");
            } finally {
                setLoading(false);
            }
        };

        load();
    }, [token, ...deps]);

    return { data, loading, error };
}
