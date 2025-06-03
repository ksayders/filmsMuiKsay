import Typography from "@mui/material/Typography";
import {IconButton} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";

function GenresHead() {
    return (
        <>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography variant='h6'>
                    Фильтры
                </Typography>
                <IconButton
                    aria-label="clear"
                    sx={{
                        padding: 0,
                        width: 'auto',
                        height: 'auto'
                    }}
                >
                    <ClearIcon sx={{color: 'black', fontSize: 20}}/>
                </IconButton>
            </Box>
        </>
    )
}

export default GenresHead;