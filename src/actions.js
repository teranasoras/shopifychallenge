import axios from 'axios';



export const SET_MOVIE_LIST_START = "SET_MOVIE_LIST";
export const SET_MOVIE_LIST_SUCCESS = "SET_MOVIE_LIST";
export const NOMINATE_MOVIE = "NOMINATE_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE"

export const movieset = (Search) => (dispatch) => {
    dispatch({type: SET_MOVIE_LIST_START});
    axios.get(`http://www.omdbapi.com/?s=${Search}&apikey=3f479f54&type=movie`)
        .then(res=>{
            dispatch({type: SET_MOVIE_LIST_SUCCESS, payload: res.data.Search})
        })
        .catch((err) => console.log(err))
}

export const addmovie = (movie) => (dispatch) => {
    dispatch({type: NOMINATE_MOVIE, payload: movie});
}

export const removemovie = (movie) => (dispatch) => {
    dispatch({type: REMOVE_MOVIE, payload:movie.imdbID});
}