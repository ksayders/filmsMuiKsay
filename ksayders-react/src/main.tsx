import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App'
import {UserProvider} from "./components/context/User-context";
import {SortProvider} from "./components/context/Sort-context";
import {BrowserRouter} from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <UserProvider>
                <SortProvider>
                    <App/>
                </SortProvider>
            </UserProvider>
        </BrowserRouter>
    </StrictMode>
)
