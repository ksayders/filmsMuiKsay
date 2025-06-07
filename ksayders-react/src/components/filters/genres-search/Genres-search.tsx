import {Autocomplete, TextField, CircularProgress} from "@mui/material";
import {useLoadSearchFilm} from "../../hooks/use-load-search-film";
import {useState, useEffect} from "react";

function GenresSearch ({ inputValue, setInputValue }: {
    inputValue: string;
    setInputValue: (value: string) => void;
}) {
    const [query, setQuery] = useState('');
    const {films, loading} = useLoadSearchFilm(query, 1);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (inputValue.trim().length > 0) {
                setQuery(inputValue);
            }
        }, 500)
        return () => clearTimeout(timer);
    }, [inputValue]);

    return (
        <Autocomplete
            freeSolo
            options={films}
            inputValue={inputValue}
            getOptionLabel={(option) => typeof option === 'string' ? option : option.title}
            filterOptions={(options) =>
                options.filter((option) =>
                    option.title.toLowerCase().includes(inputValue.toLowerCase())
                )
            }
            isOptionEqualToValue={(option, value) =>
                typeof option === 'string' || typeof value === 'string'
                    ? option === value
                    : option.id === value.id
            }
            loading={loading}
            onInputChange={(_, newInputValue) => {
                setInputValue(newInputValue);
            }}
            renderOption={(props, option) => {
                const movie = typeof option === 'string' ? { id: option, title: option } : option;
                return (
                    <li {...props} key={movie.id}>
                        {movie.title}
                    </li>
                );
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Название фильма"
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading && <CircularProgress />}
                                {params.InputProps.endAdornment}
                            </>
                        )
                    }}
                />
            )}
        />
    )
}

export default GenresSearch;