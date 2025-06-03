import {useContext} from "react";
import {type UserContextType, UserContext} from "../context/User-context";

export const useUserContext = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser должен использоваться в контексте');
    }
    return context;
}