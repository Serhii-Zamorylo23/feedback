import "./App.css";
import Feedback from "./Components/FeedbackOptions/FeedbackOptions";
import Statistics from "./Components/Statistics/Statistics";
import { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  countTotalFeedback = () => {
    this.setState((PrevTotalState) => ({
      Total: PrevTotalState.good + PrevTotalState.neutral + PrevTotalState.bad,
    }));
  };
  countPositiveFeedbackPercentage = () => {
    this.setState((prevState) => ({
      PositiveFeedback: Math.round((prevState.good / prevState.Total) * 100),
    }));
  };
  goodFeedback = () => {
    this.setState((prevGoodState) => ({ good: prevGoodState.good + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  neutralFeedback = () => {
    this.setState((prevNeutralState) => ({
      neutral: prevNeutralState.neutral + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  badFeedback = () => {
    this.setState((prevBadState) => ({ bad: prevBadState.bad + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  render() {
    const Array=[{func:this.goodFeedback,name:"good"},{func:this.neutralFeedback,name:"neutral"},{func:this.badFeedback,name:"bad"}]
    return (
      <>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.Total}
          positivePercentage={this.state.PositiveFeedback}
        />
        <h1>
          Please leave feedback
        </h1>
        {
          Array.map((item)=>{
            return(
              <Feedback name={item.func} options={item.name}/>
            )
          })
        }
      </>
    );
  }
}

export default App;
