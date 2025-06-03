import {useState, createContext, type PropsWithChildren} from "react";

export interface UserContextType {
    token: string;
    login: (token: string) => void;
    logout: () => void;
}

const myToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzBjZmQ1MDcwZGU0YTY3M2YxODYxM2U0YWJhOWFkNS' +
    'IsIm5iZiI6MTc0ODA5MTkyNy40MTYsInN1YiI6IjY4MzFjNDE3NzRiZjhhZTUzZjJiNjk4NSIsInNjb3BlcyI6WyJhcGlf' +
    'cmVhZCJdLCJ2ZXJzaW9uIjoxfQ.729roLJALKU_WFvrJ4DXpkdJmCK87ubPoR25V8gGj_A'

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({children}: PropsWithChildren) => {
    const [token, setToken] = useState<string>(myToken);

    const login = (newToken: string) => {
        setToken(newToken);
    }

    const logout = () => {
        setToken('');
    }

    return (
        <UserContext.Provider value={{ token, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}