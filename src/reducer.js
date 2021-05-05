import {SET_MOVIE_LIST_SUCCESS, NOMINATE_MOVIE, REMOVE_MOVIE} from './actions';

export const initialstate = {
    movielist: [],
    nomineelist: [],
    isloading: false
};

export const Myreducer = (state = initialstate, action) =>{
    switch(action.type){
        case SET_MOVIE_LIST_SUCCESS:
            return{
                ...state,
                movielist: action.payload,
                isloading: false
            }
        case NOMINATE_MOVIE:
            return{
                ...state,
                nomineelist: [...state.nomineelist,action.payload]
            }
        case REMOVE_MOVIE:
            return{
                ...state,
                nomineelist: state.nomineelist.filter(movie => movie.imdbID !== action.payload)
            }
        default:
            return {...state}
    }
}