import React from "react";
import { Movie } from "../../generated/graphql";

interface Props {
  movies: Movie[];
}

const MovieList: React.FC<Props> = ({ movies }) => {
  if (!movies) {
    return <h1>loading</h1>;
  }

  return (
    <div>
      {movies && movies.map((movie: Movie, index: number) => <h1 key={index}>{movie.title}</h1>)}
    </div>
  );
};

export default MovieList;
