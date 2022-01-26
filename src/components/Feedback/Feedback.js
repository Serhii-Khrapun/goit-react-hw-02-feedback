import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickOnButtonGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  clickOnButtonNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  clickOnButtonBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const value = Object.values(this.state);
    const sum = value.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
    );
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    const value = Object.values(this.state);
    const sum = value.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
    );
    const positivePercentage = (this.state.good / sum) * 100;
    return Math.ceil(positivePercentage);
  };
  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button onClick={this.clickOnButtonGood}>Good</button>
        <button onClick={this.clickOnButtonNeutral}>Neutral</button>
        <button onClick={this.clickOnButtonBad}>Bad</button>
        <div>
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total:{this.countTotalFeedback()}</p>
          <p>Positive feedback:{this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </div>
    );
  }
}

export default Feedback;
