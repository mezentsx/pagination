import { trendingMovies, getGenres } from './js/apiService';
import { renderPaginationTrendingMovie } from './js/pagination';

trendingMovies().then(data => {
    renderPaginationTrendingMovie(data.total);
    console.log(data);
});

getGenres().then(genres => console.log(genres));