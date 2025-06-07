import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

type Props = {
    isFavorite: boolean,
    onToggle: () => void,
    disabled?: boolean
};

function FavoriteButton({isFavorite, onToggle}: Props) {
    return (
        <IconButton
            aria-label="favorite"
            onClick={onToggle}
            sx={{padding: 0, width: 25, height: 25}}
        >
            {isFavorite ? (
                <StarIcon sx={{color: 'gold', fontSize: 25}}/>
            ) : (
                <StarBorderIcon sx={{color: 'black', fontSize: 25}}/>
            )}
        </IconButton>
    );
}

export default FavoriteButton;