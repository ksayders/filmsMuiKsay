import Header from "../header/Header";
import BackspaceIcon from "@mui/icons-material/Backspace";
import {IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import {useFavoritesList} from "../hooks/use-favorites-list";
import Typography from "@mui/material/Typography";
import CardItems from "../card/Card-items";

function FavoritesPage() {
    const navigate = useNavigate();
    const {favorites, loading, error} = useFavoritesList();

    return (
        <>
            <Header name="- Избранное"/>
            <Box sx={{display: 'flex', justifyContent: 'end', p: 2}}>
                <IconButton
                    onClick={() => navigate('/')}
                    aria-label="delete"
                    sx={{padding: 0, width: 50, height: 50}}
                >
                    <BackspaceIcon/>
                </IconButton>
            </Box>
            {loading && <Typography variant="h6">Загрузка...</Typography>}
            {error && <Typography variant="h6">Ошибка...</Typography>}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: 2
            }}>
                {favorites.map((movie) => (
                    <CardItems
                        key={movie.id}
                        title={movie.title}
                        raiting={movie.vote_average}
                        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        movieId={movie.id}
                        onImageClick={() => navigate(`/movie/${movie.id}`)}
                    />
                ))}
            </Box>
            {!loading && !error && favorites.length === 0 && (
                <Typography variant="h6">Сейчас список избранного пуст</Typography>
            )}
        </>
    )
}

export default FavoritesPage;