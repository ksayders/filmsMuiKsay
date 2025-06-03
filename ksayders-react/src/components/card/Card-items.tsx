import {Button, Card, CardMedia, IconButton, Paper} from '@mui/material';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import {useState} from "react";

type Props = {
    title: string,
    raiting: number,
    image: string,
    onImageClick: () => void
};

function CardItems({image, title, raiting, onImageClick}: Props) {
    const [isFavorite, setIsFavorite] = useState(false);

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
                    <IconButton
                        aria-label="favorite"
                        onClick={() => setIsFavorite(!isFavorite)}
                        sx={{
                            padding: 0,
                            width: 20,
                            height: 20
                        }}
                    >
                        {isFavorite ? (
                            <StarIcon sx={{color: 'gold', fontSize: 20}}/>
                        ) : (
                            <StarBorderIcon sx={{color: 'black', fontSize: 20}}/>
                        )}
                    </IconButton>
                </Box>
            </Paper>
        </Card>
    )
}

export default CardItems;