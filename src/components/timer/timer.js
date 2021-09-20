import React from "react";
import { connect } from "react-redux";
import { updateTimer } from "../../actions";
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
    if (this.timer === 0 && this.props.currentTimerTime > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
    let timeLeftVar = this.props.currentTimerTime;
    updateTimer(20);
  }

  // Clean up by cancelling any animation frame previously scheduled
  componentWillUnmount() {}
  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.props.currentTimerTime - 1;
 
    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }
  


  render() {
    return <div className="ui header box">Time left: {this.timeLeftVar}</div>;
  }
}
const mapStateToProps = (state) => {
    return{
   currentUserId: state.auth.userId,
   isSignedIn: state.auth.isSignedIn,
   currentTimerTime: state.currentTimerTime};
};
export default connect(mapStateToProps, { updateTimer })(Timer);
