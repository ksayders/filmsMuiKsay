import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import {SELECT_OPTIONS} from "../../constants/constants";
import {FormControl} from "@mui/material";

type GenresOptionsProps = {
    sortBy: string;
    setSortBy: (value: string) => void;
};

function GenresOptions({ sortBy, setSortBy }: GenresOptionsProps) {
    return (
        <FormControl variant="standard" fullWidth sx={{ m: 0, gap: 0 }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Сортировать по:
            </InputLabel>
            <NativeSelect
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                inputProps={{
                    id: 'uncontrolled-native',
                }}
            >
                {SELECT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    )
}

export default GenresOptions;