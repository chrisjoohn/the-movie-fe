import API from './';

export const getPopularMovies = () => API.get(`/movie/popular?api_key=${process.env.API_KEY}`);
