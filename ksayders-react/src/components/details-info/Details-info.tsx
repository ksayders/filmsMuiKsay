import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type Genre = { id: number; name: string };

type Details = {
    origin_country?: string[];
    release_date?: string;
    genres?: Genre[];
    vote_average?: number;
    budget?: number;
    popularity?: number;
    runtime?: number;
};

type Props = {
    details: Details;
};

function DetailsInfo({details}: Props) {
    return (
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
    )
}

export default DetailsInfo;