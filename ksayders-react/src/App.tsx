import MainPage from "./components/main-page/Main-page";
import {Route, Routes} from "react-router-dom";
import CardDetails from "./components/card-details/Card-details";
import FavoritesPage from "./components/favorites-page/Favorites-page";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/movie/:id" element={<CardDetails/>}/>
            <Route path="/favorites" element={<FavoritesPage/>}/>
        </Routes>
    );
}

export default App;