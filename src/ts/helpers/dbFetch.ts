import {
    Movie,
    Movies,
    ResultInterface,
    Query,
    TypeRequest,
} from '../interfaces';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '175a4a0c6dfad2a4659ae7193d865f26';

let movies: Movies | Movie;
let page: number = 1;

const movieFetch = (result: Movies | any): Movies | Movie => {
    if (result.results) {
        movies = {
            page: result.page,
            results: result.results.map((item: Movie) => ({
                original_title: item.original_title,
                overview: item.overview,
                poster_path: item.poster_path,
                release_date: item.release_date,
                backdrop_path: item.backdrop_path,
                id: item.id,
            })),
        };
    } else {
        movies = {
            original_title: result.original_title,
            overview: result.overview,
            poster_path: result.poster_path,
            release_date: result.release_date,
            backdrop_path: result.backdrop_path,
            id: result.id,
        };
    }
    return movies;
};

const setError = (errorMessage: string): never => {
    throw Error(errorMessage);
};

const getMovies = async (
    url: string,
    query: Query,
    typeRequest: TypeRequest
): Promise<Movie | Movies> => {
    let res;
    let data;
    try {
        switch (typeRequest) {
            case TypeRequest.getMovies:
                page = 1;
                res = await fetch(
                    `${BASE_URL}${url}?api_key=${API_KEY}&query=${query}&page=${page}`
                );
                data = await res.json();
                movies = movieFetch(data);
                break;
            case TypeRequest.pagination:
                page += 1;
                res = await fetch(
                    `${BASE_URL}${url}?api_key=${API_KEY}&query=${query}&page=${page}`
                );
                data = await res.json();
                movies = movieFetch(data);
                if ((movies as Movies)?.results.length === 0) {
                    setError('404 Not Found');
                }
                break;
        }
    } catch (error: any) {
        console.log(error);
        setError(error.message);
    }
    return movies;
};

export { getMovies, setError };
