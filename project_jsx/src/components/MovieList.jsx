import Movie from "./Movie";
function MovieList(props) {
    return (
        <>
            {
                props.movies.map(m => (
                    <Movie key={m.id} title={m.title} year={m.year} />
                )
                )
            }
        </>
    )
}

export default MovieList