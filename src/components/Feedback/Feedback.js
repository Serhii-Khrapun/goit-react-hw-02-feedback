import React from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const label = event.target.textContent;
    this.setState(prevState => {
      return {
        [label]: prevState[label] + 1,
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
    const feedbacks = Object.values(this.state).every(value => value === 0);
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {feedbacks ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
