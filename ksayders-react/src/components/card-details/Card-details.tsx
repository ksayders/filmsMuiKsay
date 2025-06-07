import Header from "../header/Header";
import Box from "@mui/material/Box";
import {CardMedia, IconButton} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useState} from "react";
import BackspaceIcon from '@mui/icons-material/Backspace';
import {useLoadDetails} from "../hooks/use-load-details";
import {useLoadCredits} from "../hooks/use-load-credits";
import {useNavigate} from "react-router-dom";
import LoadingSpinner from "../loading-spinner/Loading-spinner";
import ErrorMessage from "../error-message/Error-message";
import DetailsInfo from "../details-info/Details-info";
import FavoriteButton from "../favorite-button/Favorite-button";
import CreditsInfo from "../credits-info/Credits-info"

function CardDetails() {
    const [isFavorite, setIsFavorite] = useState(false);
    const { details, loading: detailsLoading, error: detailsError } = useLoadDetails();
    const { credits, loading: creditsLoading, error: creditsError } = useLoadCredits();
    const navigate = useNavigate();

    const loading = detailsLoading || creditsLoading;
    const error = detailsError || creditsError;

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Header name={` - ${details?.title || 'Загрузка...'}`} />

            <Box sx={{ display: 'flex', m: 3 }}>
                {loading ? (
                    <LoadingSpinner />
                ) : error ? (
                    <ErrorMessage message={error} />
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
                                    <FavoriteButton
                                        isFavorite={isFavorite}
                                        onToggle={() => setIsFavorite(!isFavorite)}
                                    />
                                </Box>
                                <IconButton
                                    onClick={() => navigate('/')}
                                    aria-label="delete"
                                    sx={{ padding: 0, width: 50, height: 50 }}
                                >
                                    <BackspaceIcon />
                                </IconButton>
                            </Box>

                            {credits?.crew && <CreditsInfo crew={credits.crew} />}

                            <DetailsInfo details={details} />
                        </Box>
                    </>
                ) : null}
            </Box>
        </Box>
    );
}


export default CardDetails;
