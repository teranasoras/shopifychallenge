import React, { useState} from 'react'
import {connect} from 'react-redux'
import {movieset} from '../actions'

const initialvalue = ''

const Searchbar = (props)=>{
    var [barvalue, setBarValue] = useState (initialvalue)

    const handleChanges = (e) => {
        setBarValue( e.target.value);
      };

    const submit = event => {
        event.preventDefault()
        props.movieset(barvalue)
    }

    return(
        <div id = 'searcharea'>
            <form id = 'search' onSubmit = {submit}>
                <input
                    type ='text'
                    name = 'searchbar'
                    value = {barvalue}
                    onChange = {handleChanges}
                />
                <button>Search</button>
            </form>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return(
        {

        }
    )
}
export default connect(mapStateToProps, {movieset})(Searchbar)