import {Button, Card, CardMedia, Paper} from '@mui/material';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FavoriteButton from "../favorite-button/Favorite-button";
import type {PropsCardItems} from "./types";
import {useFavorites} from "../hooks/use-favorites";

function CardItems({image, title, raiting, onImageClick, movieId}: PropsCardItems) {
    const { isFavorite, onFavoriteToggle} = useFavorites(movieId);

    return (
        <Card sx={{
            width: 296,
            height: 324,
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Paper elevation={24} sx={{width: 296, height: 324}}>
                <Button
                    sx={{
                        width: '100%',
                        display: 'block',
                        padding: 0,
                        minWidth: 'auto',
                        borderRadius: 0
                    }}>
                    <CardMedia
                        component="img"
                        image={image}
                        onClick={onImageClick}
                        alt={title}
                        sx={{
                            height: 240,
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                </Button>

                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2}}>
                    <Box sx={{display: 'flex', flexDirection: 'column'}}>
                        <Typography variant='body2' sx={{fontSize: 16}}>
                            {title}
                        </Typography>
                        <Typography variant='body2'>
                            Рейтинг: {raiting.toFixed()}
                        </Typography>
                    </Box>
                    <FavoriteButton
                        isFavorite={isFavorite}
                        onToggle={onFavoriteToggle}
                    />
                </Box>
            </Paper>
        </Card>
    )
}

export default CardItems;