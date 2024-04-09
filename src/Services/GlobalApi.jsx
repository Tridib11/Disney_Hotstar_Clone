//https://https://api.themoviedb.org/3/trending/movie/day?language=en-US?api_key=65ea4d1f26cf522dad7bf27e500d09ed

import axios from "axios";
const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "65ea4d1f26cf522dad7bf27e500d09ed";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=65ea4d1f26cf522dad7bf27e500d09ed";

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
