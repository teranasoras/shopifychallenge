import React from 'react'
import {connect} from 'react-redux'
import {removemovie} from '../actions'


const Nomineelist = (props) =>{
    if(props.nomineelist){
        console.log(props.nomineelist)
        return (
            <div className = 'nomineelist'>
                {props.nomineelist.map(movie => (
                    <div className = 'card'>
                        <img src = {movie.Poster} className = 'poster' alt = 'movie poster'></img>
                        <div classname = 'info'>
                        <p className = 'title'>{movie.Title}</p>
                        <p className = 'year'>{movie.Year}</p>
                        <button onClick ={() =>{props.removemovie(movie)}}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }else{
        return(
            <div className = 'nomineelist'>
            <p className = 'loading'>Loading</p>
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return(
        {
            nomineelist: state.nomineelist
        }
    )
  }
  export default connect(mapStateToProps, {removemovie})(Nomineelist)