import React from "react";
import { Component } from "react";
import styled from "styled-components";

class Feedback extends Component{
    constructor(props){
        super(props)
    }
 
    render(){
        return(
            <>
             <button onClick={this.props.name}>{this.props.options }</button>
            </>
        )
    }
}
export default Feedback