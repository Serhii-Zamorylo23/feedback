import { Component } from "react";
class Statistics extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <h1>Statistics</h1>
            <div>
                <p>Good: {this.props.good}</p>
                <p>Neutral: {this.props.neutral}</p>
                <p>Bad: {this.props.bad}</p>
                <p>Total: {this.props.total}</p>
                <p>Positive feedback: {this.props.positivePercentage}%</p>
            </div> 
            </>
        )
    }
}
export default Statistics