import type {GenreItem} from './fetch-genres/fetch-genres';
import {useState} from 'react';
import {useLoadGenres} from "../../hooks/use-load-genres";
import {
    Autocomplete,
    TextField,
    CircularProgress,
    Checkbox,
} from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small"/>;
const checkedIcon = <CheckBoxIcon fontSize="small"/>;

function GenresSelect() {
    const {genres, loading, error} = useLoadGenres();
    const [selectedGenres, setSelectedGenres] = useState<GenreItem[]>([]);

    return (
        <Autocomplete
            multiple
            limitTags={2}
            disableCloseOnSelect
            options={genres}
            loading={loading}
            getOptionLabel={(option) => option.name}
            value={selectedGenres}
            onChange={(_, newValue) => setSelectedGenres(newValue)}
            isOptionEqualToValue={(a, b) => a.id === b.id}
            renderOption={(props, option, {selected}) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{marginRight: 8}}
                        checked={selected}
                    />
                    {option.name}
                </li>
            )}
            renderInput={(params) => {
                const {InputProps, ...rest} = params;
                return (
                    <TextField
                        {...rest}
                        label="Жанры"
                        error={Boolean(error)}
                        helperText={error || ''}
                        InputProps={{
                            ...InputProps,
                            endAdornment: (
                                <>
                                    {loading && <CircularProgress color="inherit" size={20}/>}
                                    {InputProps.endAdornment}
                                </>
                            )
                        }}
                    />
                );
            }}
        />
    )
}

export default GenresSelect;