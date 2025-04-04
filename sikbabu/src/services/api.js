const API_KEY = "b82382a28815aae113f362ebe2a1bc64";
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies =async()=> {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
};

export const searchMovies = async(query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=$(API_KEY)&query=${encodedURIComponent(query)}`)
    const data= await response.json()
    return data.results;
};
