import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {IconButton, Modal, Button} from "@mui/material";
import {useState} from "react";
import RequestToken from "../auth/Request-token";
import EnterTheToken from "../auth/Enter-the-token";
import {useUserContext} from "../hooks/use-user";
import {useNavigate} from "react-router-dom";

type Props = {
    name: string;
};

function Header({name}: Props) {
    const [step, setStep] = useState<null | "request" | "enter">(null);
    const {login} = useUserContext();
    const openRequest = () => setStep("request");
    const openEnter = () => setStep("enter");
    const close = () => setStep(null);
    const navigate = useNavigate();

    const onFavoritesClick = () => {
        navigate('/favorites');
    }

    return (
        <>
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
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Button
                        sx={{color: 'white', mr: 5}}
                        variant='contained'
                        onClick={onFavoritesClick}
                    >
                        Избранное
                    </Button>
                    <IconButton
                        onClick={openRequest}
                        sx={{minWidth: 'auto', padding: 0}}
                    >
                        <AccountCircleIcon sx={{color: 'white'}}/>
                    </IconButton>
                </Box>
            </Box>

            <Modal open={step === "request"} onClose={close}>
                <RequestToken onRequest={openEnter} onCancel={close}/>
            </Modal>

            <Modal open={step === "enter"} onClose={close}>
                <EnterTheToken onCancel={close} onConfirm={(token) => {
                    login(token);
                    close();
                }}/>
            </Modal>
        </>
    )
}

export default Header;