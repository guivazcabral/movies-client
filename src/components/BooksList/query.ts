import { gql } from "@apollo/client";

export const MOVIES_LIST = gql`
  query movies {
    getMovies {
      title
      year
    }
  }
`;

export const CREATE_MOVIE = gql`
  mutation createMovie($title: String!, $year: Int!) {
    createMovie(title: $title, year: $year) {
      title
      year
    }
  }
`;

export const SUBSCRIPTION_CREATED_MOVIE = gql`
  subscription createdMovie {
    createdMovie {
      title
      year
    }
  }
`;
