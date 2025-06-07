import Header from '../header/Header'
import Filters from "../filters/Filters";
import Box from "@mui/material/Box";
import CardItems from "../card/Card-items";
import {useLoadPopular} from "../hooks/use-load-popular";
import {useSort} from "../context/Sort-context";
import {useLoadRaiting} from "../hooks/use-load-raiting";
import {useState} from "react";
import {useNavigate} from 'react-router-dom';
import LoadingSpinner from "../loading-spinner/Loading-spinner";
import ErrorMessage from "../error-message/Error-message";
import {useUserContext} from "../hooks/use-user";

function MainPage() {
    const {token} = useUserContext();
    const [page, setPage] = useState(1);
    const {sortBy, setSortBy} = useSort();
    const navigate = useNavigate();
    const {moviesPopular, loading: loadingPopular, error: errorPopular} = useLoadPopular(page);
    const {moviesRaiting, loading: loadingRaiting, error: errorRaiting} = useLoadRaiting(page);
    const [inputValue, setInputValue] = useState('');

    const onCardClick = (movieId: number) => {
        navigate(`/movie/${movieId}`);
    };

    const filteredPopular = moviesPopular.filter((movie) =>
        movie.title.toLowerCase().includes(inputValue.toLowerCase())
    )

    const filteredRaiting = moviesRaiting.filter((movie) =>
        movie.title.toLowerCase().includes(inputValue.toLowerCase())
    )

    if (!token) {
        return (
            <Header name=''/>
        )
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Header name=''/>
            <Box sx={{display: 'flex', mt: 3}}>
                <Box sx={{width: '30%', paddingRight: 2}}>
                    <Filters
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                        page={page}
                        setPage={setPage}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                    />
                </Box>
                <Box sx={{width: '70%'}}>
                    {sortBy === "popular" ? (
                        <>
                            {loadingPopular && <LoadingSpinner/>}
                            {errorPopular && <ErrorMessage message={errorPopular}/>}
                            {!loadingPopular && !errorPopular && (
                                <Box
                                    sx={{display: 'flex', flexWrap: 'wrap', gap: 2}}
                                >
                                    {filteredPopular.map((movie) => (
                                        <CardItems
                                            key={movie.id}
                                            title={movie.title}
                                            raiting={movie.vote_average}
                                            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            movieId={movie.id}
                                            onImageClick={() => onCardClick(movie.id)}
                                        />
                                    ))}
                                </Box>
                            )}
                        </>
                    ) : (
                        <>
                            {loadingRaiting && <LoadingSpinner/>}
                            {errorRaiting && <ErrorMessage message={errorRaiting}/>}
                            {!loadingRaiting && !errorRaiting && (
                                <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 2}}>
                                    {filteredRaiting.map((movie) => (
                                        <CardItems
                                            key={movie.id}
                                            title={movie.title}
                                            raiting={movie.vote_average}
                                            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            movieId={movie.id}
                                            onImageClick={() => onCardClick(movie.id)}
                                        />
                                    ))}
                                </Box>
                            )}
                        </>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default MainPage;