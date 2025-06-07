import {useState, createContext, type PropsWithChildren, useEffect} from "react";
import {fetchAccountId} from "../auth/fetch-account-id/Fetch-account-id";

export interface UserContextType {
    token: string;
    accountId: number | null;
    login: (token: string) => Promise<void>;
    logout: () => void;
}

const myToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzBjZmQ1MDcwZGU0YTY3M2YxODYxM2U0YWJhOWFkNSIsIm5iZiI6MTc0ODA5MTkyNy40MTYsInN1YiI6IjY4MzFjNDE3NzRiZjhhZTUzZjJiNjk4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.729roLJALKU_WFvrJ4DXpkdJmCK87ubPoR25V8gGj_A';

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({children}: PropsWithChildren) => {
    const [token, setToken] = useState<string>('');
    const [accountId, setAccountId] = useState<number | null>(null);

    useEffect(() => {
        const savedToken = localStorage.getItem('authToken');
        if (savedToken) {
            setToken(savedToken);
        }
        const savedId = localStorage.getItem('accountId');
        if (savedId) {
            setAccountId(Number(savedId));
        }
    }, [])

    const login = async (newToken: string) => {
        try {
            if (newToken !== myToken) {
                logout();
                alert('Неверный токен')
                return;
            }
            setToken(newToken);
            localStorage.setItem('authToken', newToken);

            const account = await fetchAccountId(newToken);
            setAccountId(account.id);
            localStorage.setItem('accountId', account.id.toString());
        } catch (e) {
            alert(`Ошибка при получении аккаунта: ${e}`);
            logout();
        }
    }

    const logout = () => {
        setToken('');
        setAccountId(null);
        localStorage.removeItem('authToken');
        localStorage.removeItem('accountId');
    }

    return (
        <UserContext.Provider value={{ token, accountId, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}