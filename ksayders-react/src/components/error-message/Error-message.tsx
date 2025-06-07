import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ErrorMessage({ message }: { message: string }) {
    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h6" color="error">
                {message}
            </Typography>
        </Box>
    );
}
