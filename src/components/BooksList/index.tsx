import * as React from "react";
import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import {
  Movie,
  useCreatedMovieSubscription,
  useMoviesQuery,
} from "../../generated/graphql";

export const MovieListContainer = () => {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const { data, error, loading } = useMoviesQuery();

  useCreatedMovieSubscription({
    onSubscriptionData: (data) => {
      const createdMovie = data.subscriptionData.data?.createdMovie;
      if (createdMovie) {
        setMoviesList([...moviesList, createdMovie]);
      }
    },
  });

  useEffect(() => {
    if (data && data.getMovies) {
      setMoviesList(data.getMovies);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <MovieList movies={moviesList} />;
};
