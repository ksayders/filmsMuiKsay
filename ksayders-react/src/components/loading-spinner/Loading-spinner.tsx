import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function LoadingSpinner({ text = "Загрузка..." }: { text?: string }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
            <CircularProgress />
            <Typography variant="h6" sx={{ mt: 2 }}>{text}</Typography>
        </Box>
    );
}

export default LoadingSpinner;