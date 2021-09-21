import React from "react";
import { connect } from "react-redux";
import { updateTimerActionCreator } from "../../actions";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    // here, getTimeRemaining is a helper function that returns an
    // object with { total, seconds, minutes, hours, days }
    // this.state = { timeLeft: getTimeRemaining(props.expiresAt) };
    this.timer = 0;
    this.countDown = this.countDown.bind(this);
  }

  // Wait until the component has mounted to start the animation frame
  componentDidMount() {
    if (this.timer == 0 && this.props.currentTimerTime > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  // Clean up by cancelling any animation frame previously scheduled
  countDown() {
    // Remove one second, set state so a re-render happens.
    this.props.updateTimerActionCreator(this.props.currentTimerTime - 1);
    console.log(this.props.currentTimerTime);
    // Check if we're at zero.
    if (this.props.currentTimerTime == 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <div className="ui header box">
        Time left: {this.props.currentTimerTime}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { currentTimerTime: state.currentTimer.currentTimerTime };
};
export default connect(mapStateToProps, { updateTimerActionCreator })(Timer);
