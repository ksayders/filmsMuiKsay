import Header from "../header/Header";
import Box from "@mui/material/Box";
import {CardMedia, IconButton} from "@mui/material";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import {useState} from "react";
import BackspaceIcon from '@mui/icons-material/Backspace';
import {useLoadDetails} from "../hooks/use-load-details";
import {useLoadCredits} from "../hooks/use-load-credits";
import {useNavigate} from "react-router-dom";

function CardDetails() {
    const [isFavorite, setIsFavorite] = useState(false);
    const {details, loading, error} = useLoadDetails();
    const {credits} = useLoadCredits();
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Header name={` - ${details?.title || 'Загрузка...'}`} />

            <Box sx={{ display: 'flex', m: 3 }}>
                {loading ? (
                    <Typography variant="h5">Загрузка...</Typography>
                ) : error ? (
                    <Typography color="error">{error}</Typography>
                ) : details ? (
                    <>
                        <CardMedia
                            component="img"
                            image={`https://image.tmdb.org/t/p/w500${details.backdrop_path}`}
                            alt="Картинка"
                            sx={{
                                width: 300,
                                height: 402,
                                objectFit: 'cover',
                                display: 'block',
                                marginRight: 3
                            }}
                        />
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            flex: 1,
                            gap: 5
                        }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%'
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Typography variant="h3">
                                        {details.title} ({details.release_date?.split('-')[0]})
                                    </Typography>
                                    <IconButton
                                        aria-label="favorite"
                                        onClick={() => setIsFavorite(!isFavorite)}
                                        sx={{ padding: 0, width: 50, height: 50 }}
                                    >
                                        {isFavorite ? (
                                            <StarIcon sx={{ color: 'gold', fontSize: 50 }} />
                                        ) : (
                                            <StarBorderIcon sx={{ color: 'black', fontSize: 50 }} />
                                        )}
                                    </IconButton>
                                </Box>
                                <IconButton
                                    onClick={() => navigate('/')}
                                    aria-label="delete"
                                    sx={{ padding: 0, width: 50, height: 50 }}>
                                    <BackspaceIcon />
                                </IconButton>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                                <Typography variant='h3'>Авторы:</Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 0.1 }}>
                                    {credits?.crew
                                        ?.filter(person => person.job === 'Director' || person.job === 'Writer')
                                        .map((person, index) => (
                                            <Typography key={index} variant="h6">
                                                {person.job}: {person.name}
                                            </Typography>
                                        ))}
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 1 }}>
                                <Typography variant="h3">Детали</Typography>
                                <Box sx={{ gap: 5 }}>
                                    <Typography variant='body1'>Страна: {details.origin_country?.[0] || 'N/A'}</Typography>
                                    <Typography variant='body1'>Год: {details.release_date?.split('-')[0]}</Typography>
                                    <Typography variant='body1'>Жанр: {details.genres?.map(g => g.name).join(', ')}</Typography>
                                    <Typography variant='body1'>Рейтинг: {details.vote_average}</Typography>
                                    <Typography variant='body1'>Бюджет: ${details.budget?.toLocaleString()}</Typography>
                                    <Typography variant='body1'>Зрители: {details.popularity?.toFixed(0)} тыс.</Typography>
                                    <Typography variant='body1'>Время: {details.runtime} мин.</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </>
                ) : null}
            </Box>
        </Box>
    );
}

export default CardDetails;
