import MainPage from "./components/main-page/Main-page";
import {Route, Routes} from "react-router-dom";
import CardDetails from "./components/card-details/Card-details";

function App() {

    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/movie/:id" element={<CardDetails/>}/>
        </Routes>
    );
}

export default App;