import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchActiveUsersInMySession } from "../../actions";
import history from "../../history";
import Header from '../Header';
import { Label, Icon } from "semantic-ui-react";
import UserCard from "./UserCard";
import "./GameBoard.css";

class ShapesGameBoard extends React.Component {
  constructor(props) {
    super(props);

    this.props.fetchActiveUsersInMySession();
  }
  componentDidMount() {
  }
  renderMyUser(stream) {
    if (stream.userId === this.props.currentUserId) {
      return <i id={stream.userId} className="icon user green" />;
    }
    return <i id={stream.userId} className="icon user blue" />;
  }

  renderUserGrid() {
    return this.props.activeUsersInMySession.map((stream) => {
      return (
        <a id={stream.id} className="ShapesGameBoard.flex-item">
          <Icon name="flag checkered red" inverted />

          <div id={stream.id} className="title ">
            <Label>
              {this.renderMyUser(stream)}
              {stream.id}
            </Label>
          </div>
        </a>
      );
    });
  }
  renderUserGrid2() {
    return this.props.activeUsersInMySession.map((stream) => {
      return (
        <a id={stream.id} className="ShapesGameBoard.flex-item">
          <Icon name="flag checkered red" inverted />

          <div id={stream.id} className="title ">
            <Label>
              {this.renderMyUser(stream)}
              {stream.id}
            </Label>
          </div>
        </a>
      );
    });
  }

  render() {
    return (
      <div className="boxofgame">          <Header />

        <div className="flex-container">
          <div className="flex-item">
            <UserCard cardnumber="1" userid={[...this.props.activeUsersInMySession][1]} />
          </div>
          <div className="flex-item">
            <UserCard />
          </div>
          <div className="flex-item">
            <UserCard />
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-item">
            <UserCard />
          </div>
          <div className="flex-item">
            <UserCard />
          </div>
          <div className="flex-item">
            <UserCard />
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-item">
            <UserCard className="flex-item"/>
          </div>
          <div className="flex-item">
            <UserCard />
          </div>
          <div className="flex-item">
            <UserCard />
          </div>
        </div>
      </div>
    );

    // <div>
    //   <h2>Room Members</h2>
    //   <div className="ui celled list">{this.renderList()}</div>
    //   {this.renderStartGame()}
    // </div>
  }
}

// } else {
//   return () => {
//     history.push("/");
//   };

const mapStateToProps = (state) => {
  return {
    activeUsersInMySession: Object.values(state.activeUsersInMySession),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchActiveUsersInMySession })(ShapesGameBoard);
