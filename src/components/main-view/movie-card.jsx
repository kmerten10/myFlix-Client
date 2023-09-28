import PropTypes from "prop-types";

export const MovieCard = ({ movies, onClick }) => {
    return (
        <div

            onClick={() => {
                onClick(movies);
            }}
        >
            {movies.Title}
        </div>
    );
};

//defines the props constraints for the MovieCard
MovieCard.PropTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Director: PropTypes.string.isRequired,
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};
