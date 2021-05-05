import React from 'react'
import {connect} from 'react-redux'
import {addmovie} from '../actions'

const Cardsection = (props) =>{
    if(props.movielist){
        return (
            <div className = 'cardsection'>
                {props.movielist.map(movie => (
                    <div className = 'card'>
                        <img src = {movie.Poster} className = 'poster' alt = 'movie poster'></img>
                        <div classname = 'information'>
                        <p className = 'title'>{movie.Title}</p>
                        <p className = 'year'>{movie.Year}</p>
                        <button onClick ={() =>{props.addmovie(movie)}} disabled = {props.nomineelist.includes(movie)}>Nominate</button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }else{
        return(
            <div className = 'cardsection'>
            <p className = 'loading'>Loading</p>
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return(
        {
            nomineelist: state.nomineelist,
            movielist: state.movielist
        }
    )
  }
  export default connect(mapStateToProps, {addmovie})(Cardsection)