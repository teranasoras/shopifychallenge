import React from 'react'
import {connect} from 'react-redux'

const Banner = (props)=>{
    if(props.nomineelist.length>4){
        return(
            <div className = 'banner'>
                <h2>you currently have {props.nomineelist.length} nominations</h2>
            </div>
        )
    }else{
        return(
            <div classname = 'nobanner'/>
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
  export default connect(mapStateToProps, {})(Banner)