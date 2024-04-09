import axios from "axios";
const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='65ea4d1f26cf522dad7bf27e500d09ed'
//https://api.themoviedb.org/3/trending/all/day?api_key=65ea4d1f26cf522dad7bf27e500d09ed

const getTrendingVideos=axios.get(movieBaseUrl+"/trending/all/day?"+api_key)

export default {
  getTrendingVideos
}