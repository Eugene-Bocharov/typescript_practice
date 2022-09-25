// interfaces 

interface Movie {
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    backdrop_path: string;
    id: number;
}

interface Movies {
    page: number;
    results: Movie[];
}

// enums 

enum Buttons {
    topRatedBtn,
    popularBtn,
    upComingBtn,
    submitBtn,
};

interface ResultInterface {
    page: number;
    results: Movie[];
  }

enum Urls {
    topRated = '/movie/top_rated',
    popular = '/movie/popular',
    upComing = '/movie/upcoming',
    byName = '/search/movie',
}

enum TypeRequest {
    pagination,
    getMovies
}

// alias 

type Element = HTMLElement | null;

type Query = string | null;

export {
    Movie,  
    Movies,
    ResultInterface,
    Buttons,
    Element,
    Query,
    Urls,
    TypeRequest,
  };