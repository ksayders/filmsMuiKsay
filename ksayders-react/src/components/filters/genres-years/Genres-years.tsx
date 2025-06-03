import Typography from "@mui/material/Typography";
import {Slider} from "@mui/material";
import {YEAR_OPTIONS} from "../../constants/constants";
import {yearText} from "../../utils/utils";
import {useState} from "react";


function GenresYears() {
    const [range, setRange] = useState<[number, number]>([1987, 2001]);
    const marks = YEAR_OPTIONS.map((year) => ({ value: year }));

    return (
        <>
            <Typography variant='body1' gutterBottom>
                Год релиза:
            </Typography>
            <Slider
                value={range}
                onChange={(_, newValue) => setRange(newValue as [number, number])}
                valueLabelDisplay="on"
                getAriaValueText={yearText}
                marks={marks}
                step={null}
                min={1959}
                max={2029}
                disableSwap
                sx={{
                    color: '#1976d2',
                    '& .MuiSlider-valueLabel': {
                        backgroundColor: '#555',
                        color: 'white',
                        borderRadius: '4px',
                        top: -8,
                    },
                    '& .MuiSlider-mark': {
                        backgroundColor: '#1976d2',
                        height: 8,
                        width: 2,
                        marginTop: -3,
                    },
                }}
            />
        </>
    )
}

export default GenresYears;