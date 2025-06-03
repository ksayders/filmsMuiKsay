import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {IconButton} from "@mui/material";

type Props = {
    name: string;
};

function Header({name}: Props) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: '0px 24px',
                maxWidth: 1920,
                margin: 0,
                height: 64,
                backgroundColor: '#2196F3',
                color: 'white'
            }}
        >
            <Typography
                variant="body1"
                sx={{fontSize: 20}}
            >
                Фильмы {name}
            </Typography>
            <IconButton sx={{ minWidth: 'auto', padding: 0 }}>
                <AccountCircleIcon sx={{ color: 'white' }} />
            </IconButton>
        </Box>
    )
}

export default Header;