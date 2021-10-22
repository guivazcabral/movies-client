import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Movie = {
  __typename?: 'Movie';
  title: Scalars['String'];
  year: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createMovie?: Maybe<Movie>;
};


export type MutationCreateMovieArgs = {
  title: Scalars['String'];
  year: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getMovie?: Maybe<Movie>;
  getMovies: Array<Movie>;
  searchMovie?: Maybe<Array<Maybe<Movie>>>;
};


export type QueryGetMovieArgs = {
  title: Scalars['String'];
};


export type QuerySearchMovieArgs = {
  title: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  createdMovie: Movie;
};

export type MoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type MoviesQuery = { __typename?: 'Query', getMovies: Array<{ __typename?: 'Movie', title: string, year: number }> };

export type CreateMovieMutationVariables = Exact<{
  title: Scalars['String'];
  year: Scalars['Int'];
}>;


export type CreateMovieMutation = { __typename?: 'Mutation', createMovie?: { __typename?: 'Movie', title: string, year: number } | null | undefined };

export type CreatedMovieSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type CreatedMovieSubscription = { __typename?: 'Subscription', createdMovie: { __typename?: 'Movie', title: string, year: number } };


export const MoviesDocument = gql`
    query movies {
  getMovies {
    title
    year
  }
}
    `;

/**
 * __useMoviesQuery__
 *
 * To run a query within a React component, call `useMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMoviesQuery(baseOptions?: Apollo.QueryHookOptions<MoviesQuery, MoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MoviesQuery, MoviesQueryVariables>(MoviesDocument, options);
      }
export function useMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MoviesQuery, MoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MoviesQuery, MoviesQueryVariables>(MoviesDocument, options);
        }
export type MoviesQueryHookResult = ReturnType<typeof useMoviesQuery>;
export type MoviesLazyQueryHookResult = ReturnType<typeof useMoviesLazyQuery>;
export type MoviesQueryResult = Apollo.QueryResult<MoviesQuery, MoviesQueryVariables>;
export const CreateMovieDocument = gql`
    mutation createMovie($title: String!, $year: Int!) {
  createMovie(title: $title, year: $year) {
    title
    year
  }
}
    `;
export type CreateMovieMutationFn = Apollo.MutationFunction<CreateMovieMutation, CreateMovieMutationVariables>;

/**
 * __useCreateMovieMutation__
 *
 * To run a mutation, you first call `useCreateMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMovieMutation, { data, loading, error }] = useCreateMovieMutation({
 *   variables: {
 *      title: // value for 'title'
 *      year: // value for 'year'
 *   },
 * });
 */
export function useCreateMovieMutation(baseOptions?: Apollo.MutationHookOptions<CreateMovieMutation, CreateMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMovieMutation, CreateMovieMutationVariables>(CreateMovieDocument, options);
      }
export type CreateMovieMutationHookResult = ReturnType<typeof useCreateMovieMutation>;
export type CreateMovieMutationResult = Apollo.MutationResult<CreateMovieMutation>;
export type CreateMovieMutationOptions = Apollo.BaseMutationOptions<CreateMovieMutation, CreateMovieMutationVariables>;
export const CreatedMovieDocument = gql`
    subscription createdMovie {
  createdMovie {
    title
    year
  }
}
    `;

/**
 * __useCreatedMovieSubscription__
 *
 * To run a query within a React component, call `useCreatedMovieSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCreatedMovieSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCreatedMovieSubscription({
 *   variables: {
 *   },
 * });
 */
export function useCreatedMovieSubscription(baseOptions?: Apollo.SubscriptionHookOptions<CreatedMovieSubscription, CreatedMovieSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<CreatedMovieSubscription, CreatedMovieSubscriptionVariables>(CreatedMovieDocument, options);
      }
export type CreatedMovieSubscriptionHookResult = ReturnType<typeof useCreatedMovieSubscription>;
export type CreatedMovieSubscriptionResult = Apollo.SubscriptionResult<CreatedMovieSubscription>;