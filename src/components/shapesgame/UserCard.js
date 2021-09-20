import React from "react";
import ReactCardFlip from "react-card-flip";
import { connect } from "react-redux";
import { fetchActiveUsersInMySession } from "../../actions";
import "./UserCard.css";
class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.props.fetchActiveUsersInMySession();
  }
  componentDidMount() {}
  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div>
        <div className="usercardfrontcontainer">
          <div className="mynumber">{/* {this.props.userid} */}</div>

          <div className="user1">1 </div>

          <div className="user2">2 </div>

          <div className="user3">3 </div>

          <div className="user4">4 </div>

          <div className="user5">5 </div>

          <div className="user6">6 </div>

          <div className="user7">7 </div>

          <div className="user8">8 </div>

          <div className="user9">9 </div>

          {/* <div className="mygrade">0 </div> */}
          {/* <div className="myscore">0 </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeUsersInMySession: Object.values(state.activeUsersInMySession),

    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchActiveUsersInMySession })(
  UserCard
);
