import { createContext, useState, useContext, type PropsWithChildren } from 'react';

type SortContextType = {
    sortBy: string;
    setSortBy: (value: string) => void;
};

const SortContext = createContext<SortContextType | undefined>(undefined);

export const SortProvider = ({ children }: PropsWithChildren) => {
    const [sortBy, setSortBy] = useState('popular');

    return (
        <SortContext.Provider value={{ sortBy, setSortBy }}>
            {children}
        </SortContext.Provider>
    );
};

export const useSort = (): SortContextType => {
    const context = useContext(SortContext);
    if (!context) {
        throw new Error('useSort must be used within a SortProvider');
    }
    return context;
};