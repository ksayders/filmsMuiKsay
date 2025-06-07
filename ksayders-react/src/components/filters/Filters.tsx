import Box from "@mui/material/Box";
import GenresSelect from './genres-selection/Genres-select';
import GenresYears from "./genres-years/Genres-years";
import GenresOptions from "./genres-options/Genres-options";
import GenresHead from "./genres-head/Genres-head";
import {Pagination} from "@mui/material";
import GenresSearch from "./genres-search/Genres-search";

type Props = {
    sortBy: string;
    setSortBy: (value: string) => void;
    page: number;
    setPage: (value: number) => void;
    inputValue: string;
    setInputValue: (value: string) => void;
};


function Filters({sortBy, setSortBy, page, setPage, inputValue, setInputValue}: Props) {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px solid black',
            width: 300,
            height: 723,
            ml: 3,
            mr: 3,
            p: 2
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                width: '100%',
                gap: 5
            }}>
                <GenresHead/>
                <GenresSearch inputValue={inputValue} setInputValue={setInputValue}/>
                <GenresOptions sortBy={sortBy} setSortBy={setSortBy}/>
                <GenresYears/>
                <GenresSelect/>
            </Box>
            <Box>
                <Pagination
                    count={500}
                    siblingCount={0}
                    boundaryCount={1}
                    page={page}
                    onChange={(_, value) => setPage(value)}
                    color="primary"
                />
            </Box>
        </Box>
    )
}

export default Filters;