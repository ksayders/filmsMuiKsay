import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import type {Credits} from "../card-details/types/tmdb";

function CreditsInfo({crew}: Credits) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
            <Typography variant='h3'>Авторы:</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 0.1 }}>
                {crew
                    .filter(person => person.job === 'Director' || person.job === 'Writer')
                    .map(person => (
                        <Typography key={person.id} variant="h6">
                            {person.job}: {person.name}
                        </Typography>
                    ))}
            </Box>
        </Box>
    )
}

export default CreditsInfo;