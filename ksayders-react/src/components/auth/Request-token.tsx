import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Button, FormControl, TextField} from "@mui/material";
import type {PropsRequest} from "./types";
import {validateEmail} from "../utils/utils";
import {useState} from "react";

function RequestToken({onRequest, onCancel}: PropsRequest) {
    const [email, setEmail] = useState('');

    const onRequestClick = () => {
        if (!validateEmail(email)) {
            alert('Введите верный email');
            return;
        }
        onRequest(email);
    }

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Box
                sx={{
                    width: 444,
                    height: 183,
                    borderRadius: 4,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    p: 2,
                    bgcolor: "background.paper"
                }}
            >
                <Typography variant="h6">Запросить токен</Typography>
                <FormControl variant="standard" sx={{ m: 0, gap: 0 }}>
                    <TextField
                        id="standard-basic"
                        label="Почта"
                        variant="standard"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end", gap: 1 }}>
                        <Button size="medium" onClick={onCancel}>Отмена</Button>
                        <Button size="medium" onClick={onRequestClick}>Запросить</Button>
                    </Box>
                </FormControl>
            </Box>
        </Box>
    );
}

export default RequestToken;