import Header from '../header/Header'
import Filters from "../filters/Filters";
import Box from "@mui/material/Box";
import CardItems from "../card/Card-items";
import {useLoadPopular} from "../hooks/use-load-popular";
import Typography from "@mui/material/Typography";
import {useSort} from "../context/Sort-context";
import {useLoadRaiting} from "../hooks/use-load-raiting";
import {useState} from "react";
import { useNavigate } from 'react-router-dom';

function MainPage() {
    const [page, setPage] = useState(1);
    const {moviesPopular, loading, error} = useLoadPopular(page);
    const {moviesRaiting} = useLoadRaiting(page);
    const { sortBy, setSortBy } = useSort();
    const navigate = useNavigate();

    const handleCardClick = (movieId: number) => {
        navigate(`/movie/${movieId}`);
    };


    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Header name=''/>
            <Box sx={{display: 'flex', mt: 3}}>
                <Box sx={{width: '30%', paddingRight: 2}}>
                    <Filters sortBy={sortBy} setSortBy={setSortBy} page={page} setPage={setPage}/>
                </Box>
                <Box sx={{width: '70%'}}>
                    {sortBy === "popular" ? (
                        <>
                            {loading && <Typography>Загрузка по популярным...</Typography>}
                            {error && <Typography color="error">{error}</Typography>}
                            {!loading && !error && (
                                <Box
                                    sx={{display: 'flex', flexWrap: 'wrap', gap: 2}}
                                >
                                    {moviesPopular.map((movie) => (
                                        <CardItems
                                            key={movie.id}
                                            title={movie.title}
                                            raiting={movie.vote_average}
                                            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            onImageClick={() => handleCardClick(movie.id)}
                                        />
                                    ))}
                                </Box>
                            )}
                        </>
                    ) : (
                        <>
                            {loading && <Typography>Загрузка по рейтингу...</Typography>}
                            {error && <Typography color="error">{error}</Typography>}
                            {!loading && !error && (
                                <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 2}}>
                                    {moviesRaiting.map((movie) => (
                                        <CardItems
                                            key={movie.id}
                                            title={movie.title}
                                            raiting={movie.vote_average}
                                            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            onImageClick={() => handleCardClick(movie.id)}
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