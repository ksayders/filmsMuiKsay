import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Button, FormControl, TextField} from "@mui/material";
import type {PropsConfirm} from "./types";
import {useState} from "react";

function EnterTheToken({onCancel, onConfirm}: PropsConfirm) {
    const [token, setToken] = useState('');

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
                <Typography variant="h6">Введите токен</Typography>
                <FormControl variant="standard" sx={{m: 0, gap: 0}}>
                    <TextField
                        label="Токен"
                        variant="standard"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                    />
                    <Box sx={{mt: 2, display: "flex", justifyContent: "flex-end", gap: 1}}>
                        <Button size="medium" onClick={onCancel}>Отмена</Button>
                        <Button size="medium" onClick={() => onConfirm(token)}>Ок</Button>
                    </Box>
                </FormControl>
            </Box>
        </Box>
    );
}

export default EnterTheToken;