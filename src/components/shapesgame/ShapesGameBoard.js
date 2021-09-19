import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";
import history from "../../history";
import { Label, Icon } from "semantic-ui-react";
import UserCard from "./UserCard";
import "./GameBoard.css";

class ShapesGameBoard extends React.Component {
  constructor(props) {
    super(props);

    this.props.fetchStreams();
  }
  componentDidMount() {
    console.log("renderes!");
  }
  renderMyUser(stream) {
    if (stream.userId === this.props.currentUserId) {
      return <i id={stream.userId} className="icon user green" />;
    }
    return <i id={stream.userId} className="icon user blue" />;
  }

  renderUserGrid() {
    return this.props.streams.map((stream) => {
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
    return this.props.streams.map((stream) => {
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
      <div>
        <div className="flex-container">
          <div className="flex-item">
            1<UserCard />
          </div>
          <div className="flex-item">
            2<UserCard />
          </div>
          <div className="flex-item">
            3<UserCard />
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-item">
            4<UserCard />
          </div>
          <div className="flex-item">
            5<UserCard />
          </div>
          <div className="flex-item">
            6<UserCard />
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-item">
            7<UserCard />
          </div>
          <div className="flex-item">
            8<UserCard />
          </div>
          <div className="flex-item">
            9<UserCard />
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
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(ShapesGameBoard);
