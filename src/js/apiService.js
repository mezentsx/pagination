import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const API_URL = '070151ea430b4e74dbca9bca592b262c';

export const trendingMovies = () => {
    return axios
        .get(`/3/trending/movie/day?api_key=${API_URL}`)
        .then(res => ({
            total: res.data.total_results,
            result: res.data.results
        }));
};

export const getGenres = () => {
    return axios
        .get(`/3/genre/movie/list?api_key=${API_URL}&language=en-US`)
        .then(res => {
            return res.data.genres
        });
};

